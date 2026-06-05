# 🎤 노래방 음정 "옥타브 점프" 버그 — 핵심 수정 (v4~v9 공통)

> 검증: 수정 전 정확도 **14.3%** → 수정 후 **100%** (합성신호 28케이스, 오차 0~7 cents)
> 재현/검증: `node _build/pitch_accuracy_test.js`

## 증상
부른 음정이 **한 옥타브 아래로** 검출됨 → 점수가 무작위로 보임. 병석님 "음정 하나도 안 맞아"의 진짜 원인. v3/v4뿐 아니라 정본 v6, 그리고 매주 [AUTO]가 찍어내는 모든 버전이 동일 버그 보유.

## 원인
`pickPeak()`이 NSDF(자기상관)의 **전역 최댓값**을 잡는다. 사람 목소리는 배음이 강해 2·T0(2배 주기) 위치의 하모닉 피크가 종종 진짜 주기 T0보다 높게 나온다 → 검출 주파수 = 실제의 절반(= 한 옥타브 아래). 모든 검출이 일관되게 절반이라 옥타브 보정 로직(직전 평균 비교)도 무력화됨.

## 수정 1 — pickPeak (필수, 이게 핵심)
MPM 표준대로 "전역 최대"가 아니라 **globalMax × 0.9 임계값을 넘는 '첫' 피크**를 선택.

**Before (버그):**
```js
function pickPeak(ns) {
  var n = ns.length;
  var i = 1;
  while (i < n - 1 && ns[i] > 0) i++;
  while (i < n - 1 && ns[i] <= 0) i++;
  if (i >= n - 1) return -1;
  var peakIdx = -1, peakVal = -1;
  for (; i < n - 1; i++) {                 // ← 전역 최대를 잡음 = 2·T0 하모닉
    if (ns[i] > ns[i-1] && ns[i] >= ns[i+1] && ns[i] > peakVal) {
      peakVal = ns[i]; peakIdx = i;
    }
  }
  return peakIdx;
}
```

**After (수정):**
```js
function pickPeak(ns) {
  var n = ns.length;
  var maxima = [];
  var i = 1;
  while (i < n - 1 && ns[i] > 0) i++;              // lag~0 로브 스킵
  while (i < n - 1) {
    if (ns[i] > 0) {                                // positive 구간마다 key-maximum 1개
      var mIdx = i, mVal = ns[i];
      while (i < n - 1 && ns[i] > 0) { if (ns[i] > mVal) { mVal = ns[i]; mIdx = i; } i++; }
      maxima.push(mIdx);
    } else i++;
  }
  if (!maxima.length) return -1;
  var gMax = 0;
  for (var k = 0; k < maxima.length; k++) if (ns[maxima[k]] > gMax) gMax = ns[maxima[k]];
  var thresh = gMax * 0.9;
  for (var k2 = 0; k2 < maxima.length; k2++) if (ns[maxima[k2]] >= thresh) return maxima[k2]; // ← 첫 피크
  return maxima[0];
}
```

## 수정 2 — 마이크 설정 (권장)
음성통화용 처리가 노래 신호를 왜곡 → 검출 오염. 전부 끈다.

**Before:** `getUserMedia({audio:{echoCancellation:true, noiseSuppression:true}})`
**After:** `getUserMedia({audio:{echoCancellation:false, noiseSuppression:false, autoGainControl:false}})`

## 적용 대상
- `noraebang-v4.html` ~ `noraebang-v6.html` (정본) 및 LevelPlay `games/noraebang-v4/index.html`
- **근본 해결**: 매주 도는 [AUTO] karaoke/levelplay 자동화 지시문에 "pickPeak 옥타브 수정 유지"를 명시 → v10부터 버그 재발 방지

## 검증 방법
```
node _build/pitch_accuracy_test.js
# 기대: PASS 28/28, 정확도 100.0%
```

## 보존 위치
- karaoke 로컬 커밋 `f56b777` (noraebang-v4.html + audio_engine.js + pitch_accuracy_test.js)
- ⚠️ 미push 상태 — karaoke/levelplay 둘 다 [AUTO] 자동화가 실시간 push 경합 중이라 끼어들 수 없음
