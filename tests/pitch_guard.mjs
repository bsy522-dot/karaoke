#!/usr/bin/env node
/*
 * tests/pitch_guard.mjs — 노래방 음정 검출 "회귀 방지 게이트"
 *
 * 노래방 HTML에서 음정 엔진(window.KaraokeAudio)을 추출해, 알려진 주파수의
 * 합성 신호 28케이스로 detectPitch() 전체 경로를 실제 실행하고 정확도를 측정한다.
 * 통과율이 임계값 미만이면 exit 1 → pre-push hook / GitHub Actions가 배포를 차단한다.
 *
 * 사용:  node tests/pitch_guard.mjs noraebang-v6.html [noraebang-v4.html ...]
 * 배경:  pickPeak()이 NSDF 전역최대(2배주기 하모닉)를 잡으면 음정이 한 옥타브
 *        아래로 검출된다(옥타브 점프 버그). 이 게이트가 그것을 잡는다. _build/OCTAVE_FIX.md
 */
import fs from 'node:fs';
import path from 'node:path';

const THRESHOLD = 95;            // 통과 기준 (%)
const ERR_TOL_CENTS = 50;        // 음당 허용 오차 (반음의 절반)
const SR = 44100, BUF = 2048;
const binHz = SR / 2 / (BUF / 2);

const files = process.argv.slice(2);
if (!files.length) {
  console.error('Usage: node tests/pitch_guard.mjs <noraebang-*.html> [...]');
  process.exit(2);
}

// ───────── 합성 신호 (순음/배음/옥타브함정/노이즈) ─────────
function makeSignal(f0, partials, noise) {
  const x = new Float32Array(BUF);
  for (let i = 0; i < BUF; i++) {
    let s = 0;
    for (const p of partials) s += p.amp * Math.sin(2 * Math.PI * f0 * p.mult * i / SR);
    x[i] = s;
  }
  let peak = 0; for (let i = 0; i < BUF; i++) peak = Math.max(peak, Math.abs(x[i]));
  if (peak > 0) for (let i = 0; i < BUF; i++) x[i] = x[i] / peak * 0.6;
  if (noise) for (let i = 0; i < BUF; i++) x[i] += (Math.random() * 2 - 1) * noise;
  // tonal 스펙트럼 흉내 (flatness gate 통과용)
  const db = new Float32Array(BUF / 2).fill(-120);
  for (const p of partials) {
    const bin = Math.round(f0 * p.mult / binHz);
    if (bin >= 1 && bin < db.length) db[bin] = 20 * Math.log10(Math.max(1e-6, p.amp));
  }
  return { x, db };
}

const NOTES = [
  { name: 'A2', f: 110.00 }, { name: 'A3', f: 220.00 }, { name: 'C4', f: 261.63 },
  { name: 'E4', f: 329.63 }, { name: 'A4', f: 440.00 }, { name: 'C5', f: 523.25 },
  { name: 'A5', f: 880.00 }
];
const CASES = [
  { label: '순음', partials: [{ mult: 1, amp: 1 }] },
  { label: '배음', partials: [{ mult: 1, amp: 1 }, { mult: 2, amp: 0.5 }, { mult: 3, amp: 0.33 }, { mult: 4, amp: 0.25 }] },
  { label: '옥타브함정', partials: [{ mult: 1, amp: 0.2 }, { mult: 2, amp: 1.0 }, { mult: 3, amp: 0.5 }] },
  { label: '노이즈15%', partials: [{ mult: 1, amp: 1 }, { mult: 2, amp: 0.5 }, { mult: 3, amp: 0.33 }], noise: 0.15 }
];
const cents = (det, exp) => 1200 * Math.log2(det / exp);

// ───────── HTML에서 KaraokeAudio 엔진 추출 ─────────
function extractEngine(html) {
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  for (const s of scripts) {
    if (/KaraokeAudio\s*=/.test(s) &&
        /function\s+nsdf|function\s+pickPeak|function\s+detectPitch/.test(s)) {
      return s;
    }
  }
  return null;
}

// IIFE의 global을 globalThis로 강제해 node에서 로드
function loadEngine(code) {
  let c = code
    .replace(/typeof window !== ['"]undefined['"] \? window : this/g, 'globalThis')
    .replace(/window\.KaraokeAudio/g, 'globalThis.KaraokeAudio');
  delete globalThis.KaraokeAudio;
  (0, eval)(c);
  return globalThis.KaraokeAudio;
}

// ───────── 엔진 정확도 측정 ─────────
function testEngine(KA) {
  let curSignal = new Float32Array(BUF);
  let curSpectrumDb = new Float32Array(BUF / 2);
  const fakeCtx = { sampleRate: SR };
  const fakeAna = {
    frequencyBinCount: BUF / 2,
    getFloatTimeDomainData(a) { a.set(curSignal); },
    getFloatFrequencyData(a) { a.set(curSpectrumDb); }
  };
  let pass = 0, total = 0; const fails = [];
  for (const c of CASES) {
    for (const nt of NOTES) {
      const sig = makeSignal(nt.f, c.partials, c.noise);
      curSignal = sig.x; curSpectrumDb = sig.db;
      KA.init(fakeCtx, fakeAna, BUF); KA.resetSession();
      let det = null;
      for (let k = 0; k < 6; k++) { const r = KA.detectPitch(); if (r) det = r.freq; }
      total++;
      if (det == null) { fails.push(`${c.label}/${nt.name}: 검출실패`); continue; }
      const err = cents(det, nt.f);
      if (Math.abs(err) < ERR_TOL_CENTS) pass++;
      else fails.push(`${c.label}/${nt.name}: ${err.toFixed(0)}cents (${det.toFixed(1)}Hz, 기대 ${nt.f}) ${Math.abs(err) > 1100 ? '← 옥타브점프' : ''}`);
    }
  }
  return { pass, total, fails };
}

// ───────── 실행 ─────────
let anyFail = false, anyTested = false;
for (const file of files) {
  const name = path.basename(file);
  let html;
  try { html = fs.readFileSync(file, 'utf8'); }
  catch (e) { console.log(`❌ ${name}: 읽기 실패 — ${e.message}`); anyFail = true; continue; }

  const code = extractEngine(html);
  if (!code) {
    console.log(`⚠️  ${name}: KaraokeAudio(MPM) 엔진 없음 — 구버전 autocorrelation 추정, SKIP`);
    continue;
  }
  let KA;
  try { KA = loadEngine(code); }
  catch (e) { console.log(`❌ ${name}: 엔진 로드 실패 — ${e.message}`); anyFail = true; continue; }
  if (!KA || typeof KA.detectPitch !== 'function') {
    console.log(`❌ ${name}: detectPitch 미존재`); anyFail = true; continue;
  }
  anyTested = true;
  const { pass, total, fails } = testEngine(KA);
  const pct = pass / total * 100;
  const ok = pct >= THRESHOLD;
  console.log(`${ok ? '✅' : '❌'} ${name}: ${pass}/${total} (${pct.toFixed(1)}%)${ok ? '' : ' — 기준 ' + THRESHOLD + '% 미달'}`);
  if (!ok) {
    anyFail = true;
    fails.slice(0, 8).forEach(f => console.log('     ↳ ' + f));
    if (fails.length > 8) console.log(`     ↳ ...외 ${fails.length - 8}건`);
  }
}

if (anyFail) {
  console.log('\n🚫 음정 회귀 게이트 실패 — 옥타브 점프 버그 가능성. 수정법: _build/OCTAVE_FIX.md');
  process.exit(1);
}
if (!anyTested) {
  console.log('\n⚠️  테스트된 MPM 엔진이 없음 (모두 SKIP) — 게이트 통과로 간주하지 않음');
  process.exit(0);
}
console.log('\n✅ 음정 회귀 게이트 통과 — 배포 가능');
process.exit(0);
