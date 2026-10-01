// The ground beneath the page: an elementary automaton slowly accreting up the
// viewport, cells inked in the theme's gold — the one automaton that is always
// running. It grows whatever the visitor last planted in the seedbed (rule and
// seed), else Rule 30 from one random cell. Static under reduced motion,
// paused in hidden tabs, re-seeded when the theme or the planting changes.

import { step as ruleStep, sown } from './rule.js';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CELL = 4;           // px per cell (3px cell + 1px breath)
const STEP_FRAMES = 2;    // one generation every N frames
const HOLD_FRAMES = 420;  // rest, fully grown, before reseeding
const TOP_FADE = 0.55;    // cells thin out toward the top of the viewport

const step = (row) => ruleStep(row, sown.rule);

function seedRow(cols) {
  const row = new Uint8Array(cols);
  if (sown.seed && sown.seed.length) {
    for (const f of sown.seed) row[Math.min(cols - 1, Math.floor(f * cols))] = 1;
  } else {
    row[Math.floor(Math.random() * cols)] = 1;
  }
  return row;
}

export function initAutomata() {
  const canvas = document.getElementById('bgAutomaton');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = 0, h = 0, cols = 0, rows = 0;
  let row = null, rowIndex = 0, hold = 0, frame = 0;
  let rafId = null, running = false;
  let cellR = 180, cellG = 138, cellB = 14, baseAlpha = 0.14;

  function readTheme() {
    const s = getComputedStyle(document.documentElement);
    const rgb = s.getPropertyValue('--automata-rgb').trim();
    const a = parseFloat(s.getPropertyValue('--automata-alpha'));
    if (rgb) {
      const p = rgb.split(',').map((v) => parseInt(v, 10));
      if (p.length >= 3 && p.every((n) => !Number.isNaN(n))) {
        cellR = p[0]; cellG = p[1]; cellB = p[2];
      }
    }
    if (!Number.isNaN(a) && a > 0) baseAlpha = a;
  }

  function alphaFor(i) {
    return baseAlpha * (1 - TOP_FADE * (i / rows));
  }

  function paintRow(data, i) {
    const a = alphaFor(i);
    ctx.fillStyle = `rgba(${cellR},${cellG},${cellB},${a.toFixed(3)})`;
    const y = h - (i + 1) * CELL;
    // Each new generation replaces the old one in its band: the ground is
    // never empty, and a new seed arrives as a wave sweeping up the page
    ctx.clearRect(0, y, w, CELL);
    for (let c = 0; c < cols; c++) {
      if (data[c]) ctx.fillRect(c * CELL, y, CELL - 1, CELL - 1);
    }
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
    reseed();
    return true;
  }

  function reseed() {
    row = seedRow(cols);
    rowIndex = 0;
    hold = 0;
    frame = 0;
  }

  // Full cascade in one pass — for reduced motion and after resizes
  function renderFull() {
    ctx.clearRect(0, 0, w, h);
    let r = row;
    for (let i = 0; i < rows; i++) {
      paintRow(r, i);
      r = step(r);
    }
  }

  function frameTick() {
    rafId = null;
    if (!running) return;
    if (hold > 0) {
      hold--;
      if (hold === 0) reseed(); // a new seed, the field grows again
    } else if (frame % STEP_FRAMES === 0) {
      paintRow(row, rowIndex);
      row = step(row);
      rowIndex++;
      if (rowIndex >= rows) hold = HOLD_FRAMES;
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
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // Arrive to a ground already grown; it rests, then regrows from its seed
  readTheme();
  size();
  renderFull();
  if (!REDUCED_MOTION) { hold = HOLD_FRAMES; start(); }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // A phone's URL bar resizes the viewport on every scroll; only a real
      // change of shape re-seeds the ground
      if (size()) { renderFull(); if (!REDUCED_MOTION) hold = HOLD_FRAMES; }
    }, 200);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  document.addEventListener('earthstar:theme', () => {
    readTheme();
    reseed();
    renderFull();
    if (!REDUCED_MOTION) hold = HOLD_FRAMES;
  });

  // The seedbed was planted: the ground starts over from the visitor's seed
  document.addEventListener('earthstar:sown', () => {
    reseed();
    if (REDUCED_MOTION) renderFull();
  });
}
