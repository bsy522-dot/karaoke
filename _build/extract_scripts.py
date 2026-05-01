"""Extract inline <script> blocks from noraebang-v4.html and write each
to a temp .js file. Then we can node -c syntax-check each one.

Skips <script src="..."> external refs (none expected, but safe).
"""
import re, os, sys

SRC = r"D:/AI/04_게임/노래방/noraebang-v4.html"
OUTDIR = r"D:/AI/04_게임/노래방/_build/scripts_tmp"
os.makedirs(OUTDIR, exist_ok=True)

h = open(SRC, encoding="utf-8").read()

# Match <script ...>...</script>; non-greedy. Only inline (no src=).
pat = re.compile(r"<script(?P<attrs>[^>]*)>(?P<body>.*?)</script>", re.DOTALL)

count = 0
for m in pat.finditer(h):
    attrs = m.group("attrs") or ""
    if "src=" in attrs:
        continue
    body = m.group("body")
    count += 1
    fp = os.path.join(OUTDIR, f"script_{count:02d}.js")
    with open(fp, "w", encoding="utf-8") as f:
        f.write(body)
    # First line preview
    first = body.lstrip().splitlines()[:1]
    print(f"[{count}] {fp}  bytes={len(body)}  first={first}")

print(f"total inline scripts: {count}")
