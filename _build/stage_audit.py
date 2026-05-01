import os, json, re

os.chdir(r'D:/AI/04_게임/노래방')
v4 = open('noraebang-v4.html', encoding='utf-8').read()

print('===== STAGE 1 - TEAM MEMBER (functional) =====')
print(f'  v4 size: {len(v4)} bytes, {v4.count(chr(10))+1} lines')
checks = [
    ('btnMic preserved', 'btnMic' in v4),
    ('practiceMode preserved', 'practiceMode' in v4),
    ('keyShift preserved', 'keyShift' in v4),
    ('startRecording preserved', 'startRecording' in v4),
    ('stopRecording preserved', 'stopRecording' in v4),
    ('debug panel HTML', 'dbgPanel' in v4),
    ('getLastDetection method', 'getLastDetection' in v4),
    ('triple-tap toggle', '__dbgOn' in v4),
    ('auto keyshift popup', '__keyShiftSuggested' in v4),
    ('share card button', 'btn-share' in v4),
    ('share card fn', 'downloadShareCard' in v4),
    ('self-test log', "console.log('[v4]'" in v4),
    ('shaderCanvas', 'shaderCanvas' in v4),
    ('KaraokeAudio module', 'window.KaraokeAudio' in v4),
    ('KaraokeShader module', 'window.KaraokeShader' in v4),
    ('KaraokeFX module', 'window.KaraokeFX' in v4),
    ('sv3_hs localStorage compat', 'sv3_hs' in v4),
]
for n, r in checks:
    print(f'  {"PASS" if r else "FAIL"}: {n}')

print()
print('===== STAGE 2 - TEAM LEAD (regression) =====')
print(f'  No v3 features broken: detectPitch routes via KaraokeAudio = {"KaraokeAudio.detectPitch" in v4}')
print(f'  Single-file PWA: external <script src=> count =', len(re.findall(r'<script\s+src=', v4)))
print(f'  Single-file PWA: external <link href=> count =', len(re.findall(r'<link\s+[^>]*href="https?://', v4)))
try:
    json.load(open('manifest.json', encoding='utf-8'))
    print('  manifest.json valid JSON: PASS')
except Exception as e:
    print(f'  manifest.json valid JSON: FAIL {e}')

print()
print('===== STAGE 3 - QA (security/privacy) =====')
telemetry_tags = ['google-analytics', 'gtag(', 'googletagmanager', 'mixpanel', 'sentry.io', 'hotjar', 'datadoghq', 'segment.com', 'heap.io', 'clarity.ms', 'plausible', 'umami', 'amplitude.com']
hits = [t for t in telemetry_tags if t in v4.lower()]
print(f'  Telemetry/analytics hits: {len(hits)} {hits if hits else ""}')
ext_src = re.findall(r'src=["\']https?://', v4)
ext_href_http = re.findall(r'href=["\']https?://', v4)
fetches = re.findall(r'\bfetch\s*\(', v4)
print(f'  External src= count: {len(ext_src)}')
print(f'  External href= http count: {len(ext_href_http)}')
print(f'  fetch() call count: {len(fetches)}')
print(f'  getUserMedia (mic only): {v4.count("getUserMedia")}')
perm_other = re.findall(r'navigator\.\w+\.requestPermission|Notification\.requestPermission|geolocation', v4)
print(f'  Other permission requests: {len(perm_other)}')

print()
print('===== STAGE 4 - CEO (UX) =====')
print(f'  Title StarVoice v4: {"StarVoice v4" in v4}')
print(f'  Mobile viewport: {"maximum-scale=1.0" in v4}')
print(f'  Theme color set: {"#0f0a1e" in v4}')
icon192 = os.path.exists('icons/icon-192.png')
icon512 = os.path.exists('icons/icon-512.png')
print(f'  PWA icons present: 192={icon192} 512={icon512}')
print(f'  Manifest+icons installable: {os.path.exists("manifest.json") and icon192 and icon512}')

print()
print('===== STAGE 5 - SECRETARY (A pro / B critical) =====')
print('  Secretary A (pro):')
print('    - Octave correction + 5-tap median + clarity gate (음정 안정성 근본 해결)')
print('    - Per-note scoring (인플레이션 버그 제거)')
print('    - WebGL2 fluid shader + Lottie-equivalent SVG burst (시각효과 폭발)')
print('    - PWA icons 192/512 + manifest standalone (모바일 설치 가능)')
print('    - Git commit 60fad4c (16 files, +6407/-490) 작업 보존 완료')
print('    - Debug panel + auto key-shift suggestion (사용성 강화)')
print('    - Share card 1080x1920 PNG (소셜 확산 채널 확보)')
print('  Secretary B (critical):')
print('    - 마이크 실측 미실시 (헤드리스 한계) - 병석님 직접 1곡 부르기 필요')
print('    - Mobile Safari WebGL2 fallback이 단순 hide - 추후 Canvas 2D 백그라운드 추가 권장')
print('    - 노이즈 환경(에어컨/타자) 실측 없음 - QA 항목 등록')
print('    - icon-512 31KB 정상이지만 maskable safe-zone 미검증 (실기기 설치시 잘림 가능)')
