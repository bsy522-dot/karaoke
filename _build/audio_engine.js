/* KaraokeAudio v4 — robust pitch engine
 * Replaces the naive autocorrelation in noraebang-v3.html (lines 448-465).
 * Implements McLeod Pitch Method (NSDF) inline + octave correction + median filter
 * + per-note scoring + user-range estimation. Pure vanilla browser. No imports.
 */
(function (global) {
  'use strict';

  // ---------- Internal state ----------
  var ctx = null;          // AudioContext
  var ana = null;          // AnalyserNode
  var BUF = 2048;
  var buf = null;          // Float32Array time-domain
  var freqBuf = null;      // Float32Array freq-domain (dB)

  // History for octave correction (200 ms rolling)
  var freqHist = [];       // {t, f}
  // 5-tap median window
  var medianWin = [];

  // Per-note accumulators
  var note = null;         // {target, id, voiced, total, centsSum, framesAbs}

  // Range estimation (first 5 sec)
  var rangeStartT = 0;
  var rangeFreqs = [];
  var rangeDoneAt = 0;     // performance.now() when 5 s done

  // Last spectral metrics
  var lastRMS = 0;
  var lastCentroid = 0;
  var lastFlatness = 0;

  // ---------- Init ----------
  function init(audioCtx, analyserNode, bufSize) {
    ctx = audioCtx;
    ana = analyserNode;
    BUF = bufSize || 2048;
    buf = new Float32Array(BUF);
    freqBuf = new Float32Array(ana ? ana.frequencyBinCount : BUF / 2);
    resetSession();
    rangeStartT = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    rangeDoneAt = 0;
    rangeFreqs = [];
  }

  function resetSession() {
    freqHist = [];
    medianWin = [];
    note = null;
  }

  // ---------- McLeod Pitch Method (NSDF) ----------
  // NSDF[t] = 2 * sum_{j}(x[j]*x[j+t]) / sum_{j}(x[j]^2 + x[j+t]^2)
  // Range [-1,1]. Peaks => period candidates. Avoids amplitude bias.
  function nsdf(x) {
    var n = x.length;
    var half = n >> 1; // only first half of lags is reliable
    var out = new Float32Array(half);
    // Brute-force time-domain (BUF=2048 -> ~2M ops, fine for per-frame).
    for (var t = 0; t < half; t++) {
      var ac = 0, m = 0;
      for (var j = 0; j < n - t; j++) {
        var a = x[j], b = x[j + t];
        ac += a * b;
        m += a * a + b * b;
      }
      out[t] = m > 0 ? (2 * ac) / m : 0;
    }
    return out;
  }

  // Pick highest peak after first positive zero crossing, threshold-relative.
  function pickPeak(ns) {
    var n = ns.length;
    // skip downhill-from-1 region
    var i = 1;
    while (i < n - 1 && ns[i] > 0) i++; // descend below zero
    while (i < n - 1 && ns[i] <= 0) i++; // climb back above
    if (i >= n - 1) return -1;
    // collect local maxima
    var peakIdx = -1, peakVal = -1;
    for (; i < n - 1; i++) {
      if (ns[i] > ns[i - 1] && ns[i] >= ns[i + 1] && ns[i] > peakVal) {
        peakVal = ns[i];
        peakIdx = i;
      }
    }
    return peakIdx;
  }

  // Parabolic interpolation around index k of array a — sub-sample peak.
  // x* = k + 0.5*(a[k-1]-a[k+1]) / (a[k-1]-2a[k]+a[k+1])
  function parabolic(a, k) {
    if (k <= 0 || k >= a.length - 1) return { x: k, y: a[k] };
    var l = a[k - 1], c = a[k], r = a[k + 1];
    var denom = (l - 2 * c + r);
    var dx = denom !== 0 ? 0.5 * (l - r) / denom : 0;
    if (!isFinite(dx) || dx > 1 || dx < -1) dx = 0;
    var y = c - 0.25 * (l - r) * dx;
    return { x: k + dx, y: y };
  }

  // ---------- Spectral helpers ----------
  function computeRMS(x) {
    var s = 0;
    for (var i = 0; i < x.length; i++) s += x[i] * x[i];
    return Math.sqrt(s / x.length);
  }

  // Spectral flatness = geo-mean / arith-mean of magnitude bins. ~1 = noise, ~0 = tonal.
  function computeFlatnessAndCentroid() {
    if (!ana || !freqBuf) return { flat: 0, cent: 0 };
    ana.getFloatFrequencyData(freqBuf); // dB
    var n = freqBuf.length;
    var mags = new Float32Array(n);
    var sumMag = 0, logSum = 0, valid = 0;
    var sr = ctx ? ctx.sampleRate : 44100;
    var binHz = sr / 2 / n;
    var weighted = 0;
    for (var i = 1; i < n; i++) { // skip DC
      var db = freqBuf[i];
      if (db < -120) db = -120;
      var lin = Math.pow(10, db / 20);
      mags[i] = lin;
      sumMag += lin;
      weighted += lin * (i * binHz);
      if (lin > 1e-10) { logSum += Math.log(lin); valid++; }
    }
    var flat = 0;
    if (valid > 0 && sumMag > 0) {
      var geo = Math.exp(logSum / valid);
      var arith = sumMag / (n - 1);
      flat = arith > 0 ? geo / arith : 0;
    }
    var cent = sumMag > 0 ? weighted / sumMag : 0;
    return { flat: flat, cent: cent };
  }

  // ---------- Octave correction ----------
  function trimHist(now) {
    var cutoff = now - 200; // 200 ms window
    while (freqHist.length && freqHist[0].t < cutoff) freqHist.shift();
  }

  function octaveCorrect(f, now) {
    trimHist(now);
    if (!freqHist.length) return f;
    // geometric mean of recent freqs
    var s = 0;
    for (var i = 0; i < freqHist.length; i++) s += Math.log(freqHist[i].f);
    var mean = Math.exp(s / freqHist.length);
    var d0 = Math.abs(1200 * Math.log2(f / mean));
    if (d0 <= 600) return f;
    // try octave alternatives
    var fUp = f * 2, fDn = f / 2;
    var dUp = Math.abs(1200 * Math.log2(fUp / mean));
    var dDn = Math.abs(1200 * Math.log2(fDn / mean));
    var best = f, bd = d0;
    if (dUp < bd) { best = fUp; bd = dUp; }
    if (dDn < bd) { best = fDn; bd = dDn; }
    return best;
  }

  // ---------- 5-tap median ----------
  function medianFilter(f) {
    medianWin.push(f);
    if (medianWin.length > 5) medianWin.shift();
    var sorted = medianWin.slice().sort(function (a, b) { return a - b; });
    return sorted[Math.floor(sorted.length / 2)];
  }

  // ---------- Public: detectPitch ----------
  function detectPitch() {
    if (!ctx || !ana || !buf) return null;
    ana.getFloatTimeDomainData(buf);

    // Spectral diagnostics (always update; cheap-ish)
    var sm = computeFlatnessAndCentroid();
    lastFlatness = sm.flat;
    lastCentroid = sm.cent;

    var rms = computeRMS(buf);
    lastRMS = rms;

    // Voicing gate
    var voiced = (rms > 0.018) && (sm.flat < 0.5);
    if (!voiced) return null;

    // NSDF
    var ns = nsdf(buf);
    var k = pickPeak(ns);
    if (k < 2) return null;
    var clarity = ns[k];
    if (clarity < 0.85) return null;

    // sub-sample peak
    var refined = parabolic(ns, k);
    var lag = refined.x;
    if (lag <= 0) return null;
    var freq = ctx.sampleRate / lag;
    if (freq < 80 || freq > 1000) return null;

    var now = (typeof performance !== 'undefined' ? performance.now() : Date.now());

    // Octave correction
    var fc = octaveCorrect(freq, now);
    // Median filter
    var fm = medianFilter(fc);

    freqHist.push({ t: now, f: fm });

    // Range estimation (first 5 s)
    if (rangeDoneAt === 0) {
      if (now - rangeStartT <= 5000) {
        rangeFreqs.push(fm);
      } else {
        rangeDoneAt = now;
      }
    }

    // Per-note accumulation
    if (note && note.target) {
      var cents = 1200 * Math.log2(fm / note.target);
      note.voiced++;
      note.centsSum += cents;
      note.framesAbs += Math.abs(cents);
    }
    if (note) note.total++;

    return { freq: fm, clarity: clarity, voiced: true };
  }

  // ---------- Per-note scoring ----------
  function startNote(targetFreq, noteId) {
    note = {
      target: targetFreq,
      id: noteId,
      voiced: 0,
      total: 0,
      centsSum: 0,
      framesAbs: 0
    };
  }

  function endNote() {
    if (!note) return { avgCents: 0, hitFrames: 0, totalFrames: 0, grade: 'MISS' };
    var avgCents = note.voiced > 0 ? (note.centsSum / note.voiced) : 9999;
    var abs = Math.abs(avgCents);
    var grade;
    if (note.voiced === 0) grade = 'MISS';
    else if (abs < 25) grade = 'PERFECT';
    else if (abs < 50) grade = 'GREAT';
    else if (abs < 100) grade = 'GOOD';
    else grade = 'MISS';
    var result = {
      avgCents: avgCents,
      hitFrames: note.voiced,
      totalFrames: note.total,
      grade: grade
    };
    note = null;
    return result;
  }

  // ---------- User range estimation ----------
  function estimateUserRange() {
    if (rangeFreqs.length < 5) {
      return { meanFreq: 0, suggestedKeyShift: 0 };
    }
    var s = 0;
    for (var i = 0; i < rangeFreqs.length; i++) s += Math.log(rangeFreqs[i]);
    var meanFreq = Math.exp(s / rangeFreqs.length);
    // Compare to A3 (220 Hz) as comfortable mid-vocal anchor.
    var anchor = 220;
    var semis = 12 * Math.log2(meanFreq / anchor);
    var candidates = [-5, -3, -2, 0, 2, 3, 5];
    var best = 0, bd = 1e9;
    for (var j = 0; j < candidates.length; j++) {
      // shift positive => raise melody, so suggested = -round(deltaSemis) approx
      var d = Math.abs(candidates[j] - (-semis));
      if (d < bd) { bd = d; best = candidates[j]; }
    }
    return { meanFreq: meanFreq, suggestedKeyShift: best };
  }

  // ---------- Misc getters ----------
  function getRMS() { return lastRMS; }
  function getSpectralCentroid() { return lastCentroid; }

  // ---------- Export ----------
  global.KaraokeAudio = {
    init: init,
    detectPitch: detectPitch,
    resetSession: resetSession,
    startNote: startNote,
    endNote: endNote,
    estimateUserRange: estimateUserRange,
    getRMS: getRMS,
    getSpectralCentroid: getSpectralCentroid
  };

})(typeof window !== 'undefined' ? window : this);
