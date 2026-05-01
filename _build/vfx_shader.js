/* KaraokeShader v4 — WebGL2 fluid k-pop background
 * Domain-warped fbm, audio-reactive, neon purple/pink/gold palette.
 * API: window.KaraokeShader.{init,resize,setAudio,setCombo,setMode,render,destroy}
 */
(function () {
  'use strict';

  const VERT_SRC = `#version 300 es
  precision highp float;
  // Full-screen triangle pair generated from gl_VertexID — no VBO needed.
  out vec2 vUV;
  void main() {
    vec2 p = vec2((gl_VertexID & 1) * 2 - 1, (gl_VertexID & 2) - 1);
    vUV = p * 0.5 + 0.5;
    gl_Position = vec4(p, 0.0, 1.0);
  }`;

  const FRAG_SRC = `#version 300 es
  precision highp float;

  in vec2 vUV;
  out vec4 fragColor;

  uniform vec2  uResolution;
  uniform float uTime;
  uniform float uRMS;        // 0..1 audio loudness
  uniform float uCentroid;   // 0..1 spectral centroid (brightness)
  uniform float uBeat;       // 0..1 beat envelope
  uniform float uCombo;      // 0..1 normalized combo intensity
  uniform int   uMode;       // 0 idle, 1 singing, 2 perfect, 3 result
  uniform float uPerfectStart; // time at which perfect flash began (negative = none)

  // Theme colors (sRGB-ish):
  const vec3 PURPLE = vec3(0.659, 0.333, 0.969); // #a855f7
  const vec3 PINK   = vec3(1.000, 0.416, 0.690); // #ff6ab0
  const vec3 GOLD   = vec3(1.000, 0.843, 0.000); // #ffd700

  // ---- Hash / noise primitives ----
  // 2D hash → float (cheap, no texture lookup)
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // Smooth value noise
  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f); // smoothstep
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  // 3-octave fbm — cheap, mobile-friendly
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 R = mat2(0.8, -0.6, 0.6, 0.8); // rotate to break grid alignment
    for (int i = 0; i < 3; i++) {
      v += a * vnoise(p);
      p = R * p * 2.03 + 11.7;
      a *= 0.5;
    }
    return v;
  }

  // Domain-warped fbm: feeds noise into noise → fluid curtains.
  float warpedFbm(vec2 p, float t, float warpAmt) {
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.20)),
                  fbm(p + vec2(5.2, 1.3) + t * 0.17));
    vec2 r = vec2(fbm(p + warpAmt * q + vec2(1.7, 9.2) + t * 0.15),
                  fbm(p + warpAmt * q + vec2(8.3, 2.8) + t * 0.13));
    return fbm(p + warpAmt * r);
  }

  // Tri-color blend across a 0..1 axis (purple→pink→gold).
  vec3 palette(float x) {
    x = clamp(x, 0.0, 1.0);
    vec3 c = mix(PURPLE, PINK, smoothstep(0.0, 0.55, x));
    c = mix(c, GOLD, smoothstep(0.55, 1.0, x));
    return c;
  }

  // Bayer-style hash dither, breaks 8-bit banding.
  float dither(vec2 frag) {
    return (hash21(frag) - 0.5) / 255.0;
  }

  void main() {
    vec2 uv = vUV;
    vec2 p = (uv * 2.0 - 1.0);
    p.x *= uResolution.x / uResolution.y; // aspect-correct

    float t = uTime;

    // Speed and warp scale grow with combo + audio.
    float speed = 0.35 + 0.85 * uCombo + 0.55 * uRMS;
    float warpAmt = 1.4 + 1.6 * uCombo + 0.6 * uRMS;

    // Slow drift so the field never sits still even when silent.
    vec2 base = p * (1.05 + 0.25 * sin(t * 0.07));
    base += 0.15 * vec2(sin(t * 0.11), cos(t * 0.09));

    float n = warpedFbm(base * 1.4, t * speed, warpAmt);

    // Color axis modulated by another low-freq fbm — keeps zones moving.
    float zone = fbm(base * 0.6 + vec2(0.0, t * 0.05));
    float axis = clamp(n * 0.7 + zone * 0.45 + uCentroid * 0.25, 0.0, 1.0);

    vec3 col = palette(axis);

    // Soft vertical curtain falloff — concert spotlight feel.
    float curtain = smoothstep(0.0, 0.85, 0.85 - abs(uv.y - 0.5) * 0.9);
    col *= 0.55 + 0.55 * curtain;

    // RMS pulses brightness; centroid biases warmer.
    float pulse = 1.0 + 0.55 * uRMS + 0.18 * sin(t * 6.2 + uRMS * 8.0);
    col *= pulse;
    col = mix(col, col * vec3(1.05, 0.98, 0.85), uCentroid * 0.4);

    // Combo saturates (push away from gray).
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(lum), col, 0.85 + 0.6 * uCombo);

    // Beat: brief radial flash from center, white-warm.
    float r = length(p);
    float beatRing = exp(-pow(r * (3.0 - 1.5 * uBeat), 2.0)) * uBeat;
    col += beatRing * vec3(1.2, 1.0, 0.85) * 0.85;

    // Singing mode: soft golden rim glow on edges.
    if (uMode == 1) {
      float rim = smoothstep(0.7, 1.4, r);
      col += rim * GOLD * 0.18 * (0.5 + 0.5 * uRMS);
    }

    // Perfect mode: full-screen golden flash decaying over ~0.3s.
    if (uMode == 2 && uPerfectStart >= 0.0) {
      float dt = max(0.0, uTime - uPerfectStart);
      float k = exp(-dt / 0.10) * smoothstep(0.30, 0.0, dt);
      col = mix(col, GOLD * 1.6, clamp(k, 0.0, 1.0));
    }

    // Result mode: gentle bloom-ish lift, less motion noise visible.
    if (uMode == 3) {
      col = col * 0.85 + GOLD * 0.07;
    }

    // Vignette to focus on lyrics center.
    float vig = smoothstep(1.55, 0.35, r);
    col *= mix(0.65, 1.0, vig);

    // Tone curve + dither.
    col = col / (col + 0.85);            // Reinhard-ish
    col = pow(col, vec3(0.92));          // mild gamma lift
    col += dither(gl_FragCoord.xy);

    fragColor = vec4(col, 1.0);
  }`;

  const state = {
    canvas: null,
    gl: null,
    program: null,
    vao: null,
    uniforms: {},
    dpr: 1,
    width: 0,
    height: 0,
    rms: 0,
    centroid: 0.5,
    beat: 0,
    combo: 0,
    mode: 0,
    perfectStart: -1,
    lastBeatPulse: 0,
    startTime: 0,
    ready: false,
  };

  function compile(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(sh);
      gl.deleteShader(sh);
      console.warn('[KaraokeShader] shader compile failed:', log);
      return null;
    }
    return sh;
  }

  function link(gl, vs, fs) {
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, fs);
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.warn('[KaraokeShader] link failed:', gl.getProgramInfoLog(p));
      gl.deleteProgram(p);
      return null;
    }
    return p;
  }

  function init(canvasElement) {
    if (!canvasElement) return false;
    const gl = canvasElement.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });
    if (!gl) return false;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT_SRC);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vs || !fs) return false;
    const program = link(gl, vs, fs);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!program) return false;

    // Empty VAO — vertex positions are computed from gl_VertexID.
    const vao = gl.createVertexArray();

    state.canvas = canvasElement;
    state.gl = gl;
    state.program = program;
    state.vao = vao;
    state.uniforms = {
      uResolution: gl.getUniformLocation(program, 'uResolution'),
      uTime: gl.getUniformLocation(program, 'uTime'),
      uRMS: gl.getUniformLocation(program, 'uRMS'),
      uCentroid: gl.getUniformLocation(program, 'uCentroid'),
      uBeat: gl.getUniformLocation(program, 'uBeat'),
      uCombo: gl.getUniformLocation(program, 'uCombo'),
      uMode: gl.getUniformLocation(program, 'uMode'),
      uPerfectStart: gl.getUniformLocation(program, 'uPerfectStart'),
    };
    state.startTime = performance.now() / 1000;
    state.ready = true;

    resize();
    return true;
  }

  function resize() {
    if (!state.canvas || !state.gl) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = state.canvas.clientWidth || window.innerWidth;
    const cssH = state.canvas.clientHeight || window.innerHeight;
    const w = Math.max(1, Math.floor(cssW * dpr));
    const h = Math.max(1, Math.floor(cssH * dpr));
    if (state.width !== w || state.height !== h) {
      state.canvas.width = w;
      state.canvas.height = h;
      state.width = w;
      state.height = h;
    }
    state.dpr = dpr;
    state.gl.viewport(0, 0, w, h);
  }

  function setAudio(rms, centroid, beat) {
    if (typeof rms === 'number') state.rms = Math.min(1, Math.max(0, rms));
    if (typeof centroid === 'number') state.centroid = Math.min(1, Math.max(0, centroid));
    if (typeof beat === 'number') {
      const b = Math.min(1, Math.max(0, beat));
      // Keep peak briefly so a single-frame beat still flashes visibly.
      state.beat = Math.max(state.beat * 0.86, b);
    }
  }

  function setCombo(comboLevel) {
    const c = typeof comboLevel === 'number' ? comboLevel : 0;
    // Map 0..30+ → 0..1 with soft knee so long combos saturate gracefully.
    state.combo = Math.min(1, c / 30);
  }

  function setMode(mode) {
    const map = { idle: 0, singing: 1, perfect: 2, result: 3 };
    const m = typeof mode === 'string' ? (map[mode] ?? 0) : (mode | 0);
    if (m === 2 && state.mode !== 2) {
      state.perfectStart = (performance.now() / 1000) - state.startTime;
    }
    state.mode = m;
  }

  function render(time) {
    if (!state.ready) return;
    const gl = state.gl;
    // Decay beat envelope each frame so flashes don't stick.
    state.beat *= 0.90;
    if (state.beat < 0.002) state.beat = 0;

    const t = (typeof time === 'number')
      ? (time / 1000) - state.startTime
      : (performance.now() / 1000) - state.startTime;

    gl.useProgram(state.program);
    gl.bindVertexArray(state.vao);

    gl.uniform2f(state.uniforms.uResolution, state.width, state.height);
    gl.uniform1f(state.uniforms.uTime, t);
    gl.uniform1f(state.uniforms.uRMS, state.rms);
    gl.uniform1f(state.uniforms.uCentroid, state.centroid);
    gl.uniform1f(state.uniforms.uBeat, state.beat);
    gl.uniform1f(state.uniforms.uCombo, state.combo);
    gl.uniform1i(state.uniforms.uMode, state.mode);
    gl.uniform1f(state.uniforms.uPerfectStart, state.perfectStart);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function destroy() {
    const gl = state.gl;
    if (gl) {
      if (state.program) gl.deleteProgram(state.program);
      if (state.vao) gl.deleteVertexArray(state.vao);
      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    }
    state.canvas = null;
    state.gl = null;
    state.program = null;
    state.vao = null;
    state.uniforms = {};
    state.ready = false;
    state.beat = 0;
    state.rms = 0;
    state.combo = 0;
    state.mode = 0;
    state.perfectStart = -1;
  }

  if (typeof window !== 'undefined') {
    window.KaraokeShader = { init, resize, setAudio, setCombo, setMode, render, destroy };
  }
})();
