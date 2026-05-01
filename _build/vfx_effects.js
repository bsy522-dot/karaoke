/**
 * KaraokeFX - VFX module for karaoke app v4
 * Pure vanilla JS + Canvas 2D, no external dependencies.
 * Provides judgment bursts, combo rings, lyrics tick, confetti, stage light.
 */
(function (global) {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';

  const PALETTE = {
    PERFECT: '#FFD93D',
    GREAT: '#6BCB77',
    GOOD: '#4D96FF',
    MISS: '#FF6B6B'
  };

  const CONFETTI_COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#B084FF', '#FF9F45'];

  let state = {
    root: null,
    layer: null,
    canvas: null,
    ctx: null,
    confettiActive: false,
    confettiRAF: 0,
    confettiParticles: [],
    confettiEnd: 0,
    resizeHandler: null
  };

  function createEl(tag, cls, parent) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (parent) parent.appendChild(el);
    return el;
  }

  function createSVG(viewBox) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', viewBox);
    svg.setAttribute('xmlns', SVG_NS);
    return svg;
  }

  function buildStarSVG(color) {
    const svg = createSVG('0 0 100 100');
    svg.setAttribute('class', 'fx-star-svg');
    const pts = [];
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 - Math.PI / 2;
      const r = i % 2 === 0 ? 48 : 20;
      pts.push((50 + Math.cos(angle) * r).toFixed(1) + ',' + (50 + Math.sin(angle) * r).toFixed(1));
    }
    const poly = document.createElementNS(SVG_NS, 'polygon');
    poly.setAttribute('points', pts.join(' '));
    poly.setAttribute('fill', color);
    poly.setAttribute('stroke', '#fff');
    poly.setAttribute('stroke-width', '2');
    svg.appendChild(poly);
    return svg;
  }

  function buildCheckSVG(color) {
    const svg = createSVG('0 0 100 100');
    svg.setAttribute('class', 'fx-check-svg');
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', 'M 20 50 L 42 72 L 80 28');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '10');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);
    return svg;
  }

  function buildCircleSVG(color) {
    const svg = createSVG('0 0 100 100');
    svg.setAttribute('class', 'fx-circle-svg');
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', '50');
    c.setAttribute('cy', '50');
    c.setAttribute('r', '34');
    c.setAttribute('stroke', color);
    c.setAttribute('stroke-width', '8');
    c.setAttribute('fill', 'none');
    svg.appendChild(c);
    return svg;
  }

  function buildXSVG(color) {
    const svg = createSVG('0 0 100 100');
    svg.setAttribute('class', 'fx-x-svg');
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', 'M 28 28 L 72 72 M 72 28 L 28 72');
    p.setAttribute('stroke', color);
    p.setAttribute('stroke-width', '8');
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('fill', 'none');
    svg.appendChild(p);
    return svg;
  }

  function spawnParticleRing(x, y, color, count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const p = createEl('span', 'fx-particle');
      const angle = (Math.PI * 2 * i) / count;
      const dist = 60 + Math.random() * 30;
      p.style.setProperty('--tx', (Math.cos(angle) * dist).toFixed(1) + 'px');
      p.style.setProperty('--ty', (Math.sin(angle) * dist).toFixed(1) + 'px');
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.background = color;
      frag.appendChild(p);
    }
    state.layer.appendChild(frag);
    setTimeout(() => {
      state.layer.querySelectorAll('.fx-particle').forEach(n => {
        if (!n._kept) n.remove();
      });
    }, 900);
  }

  function flashScreen() {
    const f = createEl('div', 'fx-screen-flash', state.layer);
    setTimeout(() => f.remove(), 200);
  }

  function judge(grade, x, y) {
    if (!state.layer) return;
    const G = (grade || 'GOOD').toUpperCase();
    const color = PALETTE[G] || PALETTE.GOOD;
    const wrap = createEl('div', 'fx-judge fx-judge-' + G.toLowerCase(), state.layer);
    wrap.style.left = (x || window.innerWidth / 2) + 'px';
    wrap.style.top = (y || window.innerHeight / 2) + 'px';

    let icon = null;
    if (G === 'PERFECT') {
      icon = buildStarSVG(color);
      flashScreen();
      spawnParticleRing(x, y, color, 12);
    } else if (G === 'GREAT') {
      icon = buildCheckSVG(color);
      spawnParticleRing(x, y, color, 6);
    } else if (G === 'GOOD') {
      icon = buildCircleSVG(color);
      spawnParticleRing(x, y, color, 4);
    } else {
      icon = buildXSVG(color);
    }
    wrap.appendChild(icon);

    const txt = createEl('div', 'fx-judge-text', wrap);
    txt.textContent = G;
    txt.style.color = color;

    setTimeout(() => wrap.remove(), 850);
  }

  function comboRing(level) {
    if (!state.layer) return;
    const lvl = Math.max(1, Math.min(20, level | 0));
    const ring = createEl('div', 'fx-combo-ring', state.layer);
    const intensity = lvl >= 20 ? 'hi' : lvl >= 10 ? 'mid' : 'lo';
    ring.classList.add('fx-combo-' + intensity);
    ring.style.setProperty('--combo-scale', (1 + lvl * 0.06).toFixed(2));
    setTimeout(() => ring.remove(), 800);
  }

  function lyricsTick(syllableEl) {
    if (!syllableEl) return;
    syllableEl.classList.remove('fx-syllable-bounce');
    void syllableEl.offsetWidth;
    syllableEl.classList.add('fx-syllable-bounce');
    setTimeout(() => syllableEl.classList.remove('fx-syllable-bounce'), 500);
  }

  function ensureCanvas() {
    if (state.canvas) return;
    const c = document.createElement('canvas');
    c.className = 'fx-confetti-canvas';
    state.layer.appendChild(c);
    state.canvas = c;
    state.ctx = c.getContext('2d');
    resizeCanvas();
    state.resizeHandler = resizeCanvas;
    window.addEventListener('resize', state.resizeHandler);
  }

  function resizeCanvas() {
    if (!state.canvas) return;
    state.canvas.width = window.innerWidth;
    state.canvas.height = window.innerHeight;
  }

  function spawnConfettiParticles(count) {
    const w = state.canvas.width;
    state.confettiParticles = [];
    for (let i = 0; i < count; i++) {
      state.confettiParticles.push({
        x: Math.random() * w,
        y: -20 - Math.random() * 200,
        w: 6 + Math.random() * 6,
        h: 10 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.2,
        vy: 2 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.6,
        phase: Math.random() * Math.PI * 2,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]
      });
    }
  }

  function drawConfetti() {
    const ctx = state.ctx;
    const h = state.canvas.height;
    ctx.clearRect(0, 0, state.canvas.width, h);
    const t = performance.now() / 600;
    for (let p of state.confettiParticles) {
      p.phase += 0.05;
      p.x += p.vx + Math.sin(p.phase) * 0.6;
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y > h + 20) {
        p.y = -20;
        p.x = Math.random() * state.canvas.width;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
  }

  function confettiLoop() {
    if (!state.confettiActive) return;
    drawConfetti();
    if (performance.now() >= state.confettiEnd) {
      stopConfetti();
      return;
    }
    state.confettiRAF = requestAnimationFrame(confettiLoop);
  }

  function stopConfetti() {
    state.confettiActive = false;
    cancelAnimationFrame(state.confettiRAF);
    if (state.ctx) state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
  }

  function confetti(durationMs) {
    if (!state.layer) return;
    durationMs = durationMs || 3000;
    ensureCanvas();
    spawnConfettiParticles(80);
    state.confettiActive = true;
    state.confettiEnd = performance.now() + durationMs;
    state.confettiRAF = requestAnimationFrame(confettiLoop);
  }

  function stageLight(color, intensity) {
    if (!state.root) return;
    const lvl = Math.max(0, Math.min(1, intensity == null ? 0.6 : intensity));
    const blur = (30 + lvl * 60) | 0;
    const spread = (5 + lvl * 15) | 0;
    state.root.style.boxShadow = `inset 0 0 ${blur}px ${spread}px ${color || '#FFD93D'}`;
    state.root.style.transition = 'box-shadow 0.3s ease-out';
  }

  function init(rootEl) {
    cleanup();
    state.root = rootEl || document.body;
    state.layer = createEl('div', 'fx-layer', state.root);
  }

  function cleanup() {
    stopConfetti();
    if (state.resizeHandler) {
      window.removeEventListener('resize', state.resizeHandler);
      state.resizeHandler = null;
    }
    if (state.layer && state.layer.parentNode) {
      state.layer.parentNode.removeChild(state.layer);
    }
    if (state.root) state.root.style.boxShadow = '';
    state = {
      root: null, layer: null, canvas: null, ctx: null,
      confettiActive: false, confettiRAF: 0,
      confettiParticles: [], confettiEnd: 0, resizeHandler: null
    };
  }

  global.KaraokeFX = {
    init: init,
    judge: judge,
    comboRing: comboRing,
    lyricsTick: lyricsTick,
    confetti: confetti,
    stageLight: stageLight,
    cleanup: cleanup
  };
})(typeof window !== 'undefined' ? window : this);
