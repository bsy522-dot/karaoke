#!/usr/bin/env python3
"""모든 noraebang-v*.html의 옥타브 점프 버그를 일괄 수정.
pickPeak(전역최대) → globalMax*0.9 첫 피크 + 마이크 설정 off.
버그 텍스트가 정확히 일치하는 파일만 패치(불일치=구버전/이미수정, unchanged 보고)."""
import glob, sys

BUG = """  function pickPeak(ns) {
    var n = ns.length;
    var i = 1;
    while (i < n - 1 && ns[i] > 0) i++;
    while (i < n - 1 && ns[i] <= 0) i++;
    if (i >= n - 1) return -1;
    var peakIdx = -1, peakVal = -1;
    for (; i < n - 1; i++) {
      if (ns[i] > ns[i - 1] && ns[i] >= ns[i + 1] && ns[i] > peakVal) {
        peakVal = ns[i];
        peakIdx = i;
      }
    }
    return peakIdx;
  }"""

FIX = """  function pickPeak(ns) {
    // MPM: globalMax*0.9 임계를 넘는 '첫' key-maximum 선택 (전역최대 아님).
    // 전역최대를 잡으면 2*T0 하모닉이 이겨 음정이 한 옥타브 아래로 검출됨(옥타브 점프 버그).
    var n = ns.length;
    var maxima = [];
    var i = 1;
    while (i < n - 1 && ns[i] > 0) i++;
    while (i < n - 1) {
      if (ns[i] > 0) {
        var mIdx = i, mVal = ns[i];
        while (i < n - 1 && ns[i] > 0) { if (ns[i] > mVal) { mVal = ns[i]; mIdx = i; } i++; }
        maxima.push(mIdx);
      } else i++;
    }
    if (!maxima.length) return -1;
    var gMax = 0;
    for (var k = 0; k < maxima.length; k++) if (ns[maxima[k]] > gMax) gMax = ns[maxima[k]];
    var thresh = gMax * 0.9;
    for (var k2 = 0; k2 < maxima.length; k2++) if (ns[maxima[k2]] >= thresh) return maxima[k2];
    return maxima[0];
  }"""

# 주석 포함 변형(내 audio_engine.js 원형 버그버전)도 동일 버그 → 같은 FIX로
BUG2 = """  function pickPeak(ns) {
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
  }"""

MIC_BUG = "echoCancellation:true,noiseSuppression:true}"
MIC_FIX = "echoCancellation:false,noiseSuppression:false,autoGainControl:false}"

patched, unchanged = [], []
for f in sorted(glob.glob("noraebang-v*.html")):
    s = open(f, encoding="utf-8").read()
    orig = s
    s = s.replace(BUG, FIX)
    s = s.replace(BUG2, FIX)
    s = s.replace(MIC_BUG, MIC_FIX)
    if s != orig:
        open(f, "w", encoding="utf-8", newline="").write(s)
        patched.append(f)
    else:
        unchanged.append(f)

print("PATCHED:", patched)
print("UNCHANGED:", unchanged)
