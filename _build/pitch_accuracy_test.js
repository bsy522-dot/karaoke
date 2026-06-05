/* 음정 검출 엔진 실측 테스트 — 합성 신호로 detectPitch() 정확도를 cents 단위 측정.
 * 가짜 AnalyserNode를 물려서 실제 detectPitch 전체 경로(voicing gate→NSDF→peak→
 * parabolic→octave correct→median)를 그대로 탄다. node로 실행. */
const fs = require('fs');

// audio_engine.js 로드 — IIFE의 global을 globalThis로 강제
let code = fs.readFileSync(__dirname + '/audio_engine.js', 'utf8');
code = code.replace("typeof window !== 'undefined' ? window : this", 'globalThis');
eval(code);
const KA = globalThis.KaraokeAudio;

const SR = 44100, BUF = 2048;
const binHz = SR / 2 / (BUF / 2); // freq per FFT bin

// 신호 버퍼/스펙트럼을 담아 fake analyser가 내보냄
let curSignal = new Float32Array(BUF);
let curSpectrumDb = new Float32Array(BUF / 2);

const fakeCtx = { sampleRate: SR };
const fakeAna = {
  frequencyBinCount: BUF / 2,
  getFloatTimeDomainData(arr) { arr.set(curSignal); },
  getFloatFrequencyData(arr) { arr.set(curSpectrumDb); }
};

// 신호 생성: partials = [{mult, amp}], 진폭 정규화, noise=백색잡음 비율
function makeSignal(f0, partials, noise) {
  const x = new Float32Array(BUF);
  for (let i = 0; i < BUF; i++) {
    let s = 0;
    for (const p of partials) s += p.amp * Math.sin(2 * Math.PI * f0 * p.mult * i / SR);
    x[i] = s;
  }
  // peak 정규화 → 진폭 0.6
  let peak = 0; for (let i = 0; i < BUF; i++) peak = Math.max(peak, Math.abs(x[i]));
  if (peak > 0) for (let i = 0; i < BUF; i++) x[i] = x[i] / peak * 0.6;
  // 백색잡음 추가 (에어컨/마이크 노이즈 흉내)
  if (noise) for (let i = 0; i < BUF; i++) x[i] += (Math.random() * 2 - 1) * noise;
  // tonal 스펙트럼 흉내 (flatness gate 통과용): 배음 bin만 0dB, 나머지 -120dB
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
  { label: '순음(사인)', partials: [{ mult: 1, amp: 1 }] },
  { label: '배음포함(목소리 유사)', partials: [{ mult: 1, amp: 1 }, { mult: 2, amp: 0.5 }, { mult: 3, amp: 0.33 }, { mult: 4, amp: 0.25 }] },
  { label: '옥타브함정(기음<2배음)', partials: [{ mult: 1, amp: 0.2 }, { mult: 2, amp: 1.0 }, { mult: 3, amp: 0.5 }] },
  { label: '노이즈환경(배음+잡음15%)', partials: [{ mult: 1, amp: 1 }, { mult: 2, amp: 0.5 }, { mult: 3, amp: 0.33 }], noise: 0.15 }
];

function cents(det, exp) { return 1200 * Math.log2(det / exp); }

let pass = 0, fail = 0, total = 0;
for (const c of CASES) {
  console.log('\n===== ' + c.label + ' =====');
  console.log('  note  expected   detected   error(cents)  result');
  for (const nt of NOTES) {
    const sig = makeSignal(nt.f, c.partials, c.noise);
    curSignal = sig.x; curSpectrumDb = sig.db;
    KA.init(fakeCtx, fakeAna, BUF);
    KA.resetSession();
    // 같은 신호 6프레임 → median/octave 상태 채움, 마지막 값 채택
    let det = null;
    for (let k = 0; k < 6; k++) { const r = KA.detectPitch(); if (r) det = r.freq; }
    total++;
    if (det == null) {
      console.log('  ' + nt.name.padEnd(5) + ' ' + nt.f.toFixed(2).padStart(8) + '   ' + 'null'.padStart(8) + '   ' + '—'.padStart(10) + '   ❌ 검출실패');
      fail++; continue;
    }
    const err = cents(det, nt.f);
    const ok = Math.abs(err) < 50; // 반음의 절반 이내
    console.log('  ' + nt.name.padEnd(5) + ' ' + nt.f.toFixed(2).padStart(8) + '   ' + det.toFixed(2).padStart(8) + '   ' + err.toFixed(1).padStart(10) + '   ' + (ok ? '✅' : '❌ ' + (Math.abs(err) > 1100 ? '옥타브점프' : '오차큼')));
    if (ok) pass++; else fail++;
  }
}

console.log('\n===== 종합 =====');
console.log('  PASS ' + pass + ' / ' + total + '  (±50 cents 이내)');
console.log('  FAIL ' + fail + ' / ' + total);
console.log('  정확도: ' + (pass / total * 100).toFixed(1) + '%');
