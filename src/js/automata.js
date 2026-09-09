// The ground beneath the page: a Rule 30 cascade slowly accreting up the
// viewport, cells inked in the theme's gold-or-bronze at reading-safe
// opacity. Static under reduced motion, paused in hidden tabs, re-seeded
// on theme change. The strip-figure is gone — the whole page is the figure.

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CELL = 4;           // px per cell (3px cell + 1px breath)
const RULE = 30;
const STEP_FRAMES = 5;    // one generation every N frames — slow accretion
const HOLD_FRAMES = 240;  // rest at the top before reseeding
const TOP_FADE = 0.55;    // cells thin out toward the top of the viewport

function rulebit(l, c, r) {
  return (RULE >> ((l << 2) | (c << 1) | r)) & 1;
}

function step(row, cols) {
  const next = new Uint8Array(cols);
  for (let c = 0; c < cols; c++) {
    next[c] = rulebit(row[(c - 1 + cols) % cols], row[c], row[(c + 1) % cols]);
  }
  return next;
}

function seedRow(cols) {
  const row = new Uint8Array(cols);
  row[Math.floor(Math.random() * cols)] = 1;
  return row;
}

export function initAutomata() {
  const canvas = document.getElementById('bgAutomaton');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w = 0, h = 0, cols = 0, rows = 0;
  let row = null, rowIndex = 0, hold = 0, frame = 0;
  let rafId = null, running = false;
  let cellR = 212, cellG = 175, cellB = 55, baseAlpha = 0.18;

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
    for (let c = 0; c < cols; c++) {
      if (data[c]) ctx.fillRect(c * CELL, y, CELL - 1, CELL - 1);
    }
  }

  function size() {
    w = window.innerWidth;
    h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / CELL);
    rows = Math.ceil(h / CELL) + 1;
    reseed();
  }

  function reseed() {
    row = seedRow(cols);
    rowIndex = 0;
    hold = 0;
    frame = 0;
    ctx.clearRect(0, 0, w, h);
  }

  // Full cascade in one pass — for reduced motion and after resizes
  function renderFull() {
    ctx.clearRect(0, 0, w, h);
    let r = row;
    for (let i = 0; i < rows; i++) {
      paintRow(r, i);
      r = step(r, cols);
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
      row = step(row, cols);
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

  readTheme();
  size();
  if (REDUCED_MOTION) renderFull();
  else start();

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      size();
      if (REDUCED_MOTION) renderFull();
    }, 200);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  document.addEventListener('earthstar:theme', () => {
    readTheme();
    reseed();
    if (REDUCED_MOTION) renderFull();
  });
}
