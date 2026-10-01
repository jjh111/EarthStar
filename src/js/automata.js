// The ground beneath the page: a field of elementary cellular automata, inked
// in the theme's gold at low strength. It never empties and never stops: each
// sweep rises up the viewport replacing the generation beneath it, with a
// slightly brighter wavefront that settles as it passes, then the next sweep
// begins from a new seed under the next rule. Atmosphere, not a feature.
// Static under reduced motion, paused in hidden tabs.

import { step } from './rule.js';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CELL = 4;            // px per cell (3px cell + 1px breath)
const STEP_FRAMES = 3;     // one generation every N frames
const HOLD_FRAMES = 90;    // a breath at the top before the next sweep
const TOP_FADE = 0.6;      // cells thin out toward the top of the viewport
const CREST = 10;          // rows of brighter wavefront trailing the sweep
const CREST_GAIN = 1.9;    // how much brighter the crest is
// Rules that read as texture at this scale: chaotic, fractal, woven
const RULES = [30, 90, 150, 110, 18, 105, 45, 126];

function seedRow(cols) {
  const row = new Uint8Array(cols);
  const n = 1 + Math.floor(Math.random() * 4);
  for (let k = 0; k < n; k++) row[Math.floor(Math.random() * cols)] = 1;
  return row;
}

export function initAutomata() {
  const canvas = document.getElementById('bgAutomaton');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = 0, h = 0, cols = 0, rows = 0;
  let rule = 30, ruleIndex = 0;
  let row = null, rowIndex = 0, hold = 0, frame = 0;
  let crest = [];                // the last CREST rows, kept to settle them
  let rafId = null, running = false;
  let rgb = '180,138,14', baseAlpha = 0.2;

  function readTheme() {
    const s = getComputedStyle(document.documentElement);
    const v = s.getPropertyValue('--automata-rgb').trim();
    const a = parseFloat(s.getPropertyValue('--automata-alpha'));
    if (v) rgb = v.replace(/\s+/g, '');
    if (!Number.isNaN(a) && a > 0) baseAlpha = a;
  }

  function paintRow(data, i, gain = 1) {
    const a = Math.min(1, baseAlpha * gain * (1 - TOP_FADE * (i / rows)));
    const y = h - (i + 1) * CELL;
    ctx.clearRect(0, y, w, CELL);
    ctx.fillStyle = `rgba(${rgb},${a.toFixed(3)})`;
    for (let c = 0; c < cols; c++) if (data[c]) ctx.fillRect(c * CELL, y, CELL - 1, CELL - 1);
  }

  function nextSweep() {
    ruleIndex = (ruleIndex + 1 + Math.floor(Math.random() * 2)) % RULES.length;
    rule = RULES[ruleIndex];
    row = seedRow(cols);
    rowIndex = 0;
    crest = [];
  }

  function size() {
    if (window.innerWidth === w && Math.abs(window.innerHeight - h) < 120 && row) return false;
    w = window.innerWidth;
    h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL);
    rows = Math.ceil(h / CELL) + 1;
    return true;
  }

  // The whole field at once — on arrival, after a resize or theme change,
  // and as the only state under reduced motion
  function renderFull() {
    ctx.clearRect(0, 0, w, h);
    let r = seedRow(cols);
    for (let i = 0; i < rows; i++) { paintRow(r, i); r = step(r, rule); }
  }

  function frameTick() {
    rafId = null;
    if (!running) return;
    if (hold > 0) {
      if (--hold === 0) nextSweep();
    } else if (frame % STEP_FRAMES === 0) {
      paintRow(row, rowIndex, CREST_GAIN);
      crest.push([row, rowIndex]);
      if (crest.length > CREST) { const [r, i] = crest.shift(); paintRow(r, i); }
      row = step(row, rule);
      rowIndex++;
      if (rowIndex >= rows) {
        for (const [r, i] of crest) paintRow(r, i);  // let the crest settle
        crest = [];
        hold = HOLD_FRAMES;
      }
    }
    frame++;
    rafId = requestAnimationFrame(frameTick);
  }

  function start() {
    if (running || REDUCED_MOTION) return;
    running = true;
    rafId = requestAnimationFrame(frameTick);
  }

  function stop() {
    running = false;
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function reset() {
    renderFull();
    nextSweep();
    hold = REDUCED_MOTION ? 0 : 30;
  }

  readTheme();
  size();
  reset();
  start();

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    // A phone's URL bar resizes the viewport on every scroll; only a real
    // change of shape redraws the field
    resizeTimer = setTimeout(() => { if (size()) reset(); }, 200);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  document.addEventListener('earthstar:theme', () => { readTheme(); reset(); });
}
