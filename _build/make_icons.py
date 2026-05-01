from PIL import Image, ImageDraw, ImageFilter
import os
os.makedirs(r'D:/AI/04_게임/노래방/icons', exist_ok=True)
for sz in (192, 512):
    img = Image.new('RGBA', (sz, sz), (0,0,0,0))
    d = ImageDraw.Draw(img)
    # Rounded background
    r = int(sz * 0.18)
    d.rounded_rectangle([0,0,sz,sz], radius=r, fill=(15,10,30,255))
    # Radial gradient sim - concentric circles
    cx, cy = sz//2, sz//2
    for i in range(sz//2, 0, -2):
        t = i / (sz/2)
        # blend purple->dark
        cr = int(26 + (10-26)*(1-t))
        cg = int(16 + (8-16)*(1-t))
        cb = int(64 + (24-64)*(1-t))
        d.ellipse([cx-i, cy-i, cx+i, cy+i], fill=(cr,cg,cb,255))
    # Note glyph (use simple shape: filled circle + stem)
    # eighth note shape
    note_color = (255, 106, 176, 255)
    glow_color = (255, 106, 176, 80)
    # head
    hr = int(sz * 0.18)
    hx, hy = int(sz*0.40), int(sz*0.62)
    # glow layer
    glow = Image.new('RGBA', img.size, (0,0,0,0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([hx-hr-8, hy-hr-8, hx+hr+8, hy+hr+8], fill=glow_color)
    glow = glow.filter(ImageFilter.GaussianBlur(int(sz*0.05)))
    img = Image.alpha_composite(img, glow)
    d = ImageDraw.Draw(img)
    d.ellipse([hx-hr, hy-hr, hx+hr, hy+hr], fill=note_color)
    # stem
    stem_w = int(sz * 0.04)
    stem_h = int(sz * 0.40)
    sx = hx + hr - stem_w
    sy_top = hy - stem_h
    d.rectangle([sx, sy_top, sx+stem_w, hy], fill=note_color)
    # flag
    flag_pts = [(sx+stem_w, sy_top), (sx+stem_w+int(sz*0.18), sy_top+int(sz*0.10)), (sx+stem_w+int(sz*0.14), sy_top+int(sz*0.20)), (sx+stem_w, sy_top+int(sz*0.18))]
    d.polygon(flag_pts, fill=note_color)
    # sparkle dots
    for px, py, pr in [(int(sz*0.78), int(sz*0.25), int(sz*0.025)), (int(sz*0.20), int(sz*0.30), int(sz*0.018)), (int(sz*0.85), int(sz*0.70), int(sz*0.020))]:
        d.ellipse([px-pr, py-pr, px+pr, py+pr], fill=(255,215,0,255))
    img.save(f'D:/AI/04_게임/노래방/icons/icon-{sz}.png', 'PNG')
    print(f'wrote icon-{sz}.png ({os.path.getsize(f"D:/AI/04_게임/노래방/icons/icon-{sz}.png")} bytes)')
