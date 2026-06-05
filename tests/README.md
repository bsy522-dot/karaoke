# 노래방 음정 회귀 방지 게이트

노래방의 핵심 기능인 **음정 검출**이 망가진 채로 배포되는 것을 막는 다층 시스템.

## 왜 필요한가

`pickPeak()`이 NSDF(자기상관) 전역최대를 잡으면, 사람 목소리의 강한 배음 때문에 **2배 주기(2·T0) 하모닉**을 선택해 음정이 **한 옥타브 아래로** 검출된다. 이 "옥타브 점프" 버그가 v3~v9 전 버전에 있었고(정확도 14.3%), 매주 도는 [AUTO] 자동화가 검증 없이 계속 재생산했다. 이 게이트가 그것을 차단한다.

## 구성 (3중 방어)

| 층 | 파일 | 역할 |
|----|------|------|
| 엔진 | `tests/pitch_guard.mjs` | HTML에서 음정엔진 추출 → 28케이스 합성신호로 정확도 측정. <95%면 exit 1 |
| 1차 | `.githooks/pre-push` | 로컬 push 전 게이트. 실패 시 push 거부 (사람/[AUTO] 무관) |
| 2차 | `.github/workflows/pitch-guard.yml` | push/PR마다 CI 검증. 실패 시 빨간불 |
| 빌드 | `.github/workflows/assemble-v6.yml` | 조립 직후 게이트. 통과해야 commit/push |

## 사용법

```bash
# 단일/다중 버전 검사
node tests/pitch_guard.mjs noraebang-v6.html
node tests/pitch_guard.mjs noraebang-v*.html

# exit 0 = 통과(배포 가능), exit 1 = 차단(옥타브 버그)
```

## hook 활성화 (1회)

```bash
git config core.hooksPath .githooks    # 버전관리되는 hook 사용
```

clone/자동화 환경에서도 이 설정 한 줄이면 push마다 자동 검사된다.

## 검사 내용

- 신호: 순음 / 배음(목소리 유사) / 옥타브함정(기음<2배음) / 노이즈15% × 7음(A2~A5) = **28케이스**
- 판정: 음당 오차 < 50 cents면 통과, 전체 통과율 ≥ 95% 요구
- 측정: 가짜 AnalyserNode를 주입해 `detectPitch()` 전체 경로(voicing gate→NSDF→pickPeak→octave correct→median)를 실제 실행

## 버그가 잡히면

`_build/OCTAVE_FIX.md`에 수정 전/후 코드가 있다. 핵심은 `pickPeak()`을 "전역 최대" → "globalMax×0.9 임계값을 넘는 **첫** 피크"로 바꾸는 것.
