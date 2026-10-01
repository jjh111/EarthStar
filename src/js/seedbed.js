// The seedbed: a playable elementary automaton in the first section.
// Tap anywhere on it to plant or pull a cell in the seed row; choose a rule;
// watch it grow. Whatever is planted here is also sown into the ground
// beneath the whole page (see automata.js) — the seed, made literal.

import { RULES, step, sown } from './rule.js';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const CELL = 6;
const ROWS_PER_FRAME = 2;

export function initSeedbed() {
  const canvas = document.getElementById('seedbed');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const note = document.getElementById('seedbed-note');
  const ruleButtons = Array.from(document.querySelectorAll('[data-rule]'));

  let cols = 0, rows = 0, w = 0, h = 0;
  let seed = null;           // Uint8Array, the planted row
  let rule = 30;
  let gold = '#b48a0e', ink = '#142e1d';
  let rafId = null;

  function readColors() {
    const s = getComputedStyle(document.documentElement);
    gold = s.getPropertyValue('--gold').trim() || gold;
    ink = s.getPropertyValue('--ink').trim() || ink;
  }

  function fractions() {
    const out = [];
    for (let c = 0; c < cols; c++) if (seed[c]) out.push((c + 0.5) / cols);
    return out;
  }

  function size() {
    const rect = canvas.getBoundingClientRect();
    const nw = Math.max(120, Math.floor(rect.width));
    const nh = Math.max(120, Math.floor(rect.height));
    if (nw === w && nh === h) return false;
    const keep = seed ? fractions() : null;
    w = nw; h = nh;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.floor(w / CELL);
    rows = Math.floor(h / CELL);
    seed = new Uint8Array(cols);
    if (keep && keep.length) for (const f of keep) seed[Math.min(cols - 1, Math.floor(f * cols))] = 1;
    else seed[Math.floor(cols / 2)] = 1;
    return true;
  }

  function paint(r, i) {
    ctx.fillStyle = i === 0 ? ink : gold;
    ctx.globalAlpha = i === 0 ? 1 : Math.max(0.35, 1 - i / (rows * 1.4));
    const y = i * CELL;
    for (let c = 0; c < cols; c++) if (r[c]) ctx.fillRect(c * CELL, y, CELL - 1, CELL - 1);
  }

  function describe() {
    const n = seed.reduce((a, b) => a + b, 0);
    canvas.setAttribute('aria-label',
      `Rule ${rule} grown from ${n} planted cell${n === 1 ? '' : 's'}, ${rows} generations deep. ${RULES[rule]}.`);
    if (note) note.textContent = n === 0
      ? 'Nothing planted, nothing grows. Tap the bed to plant a cell.'
      : `Rule ${rule}: ${RULES[rule]}. ${n === 1 ? 'One cell' : `${n} cells`} planted; the ground beneath this page now grows the same.`;
  }

  function grow() {
    if (rafId !== null) cancelAnimationFrame(rafId);
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, w, h);
    describe();
    let r = seed, i = 0;
    if (REDUCED_MOTION) {
      for (; i < rows; i++) { paint(r, i); r = step(r, rule); }
      ctx.globalAlpha = 1;
      return;
    }
    const tick = () => {
      for (let k = 0; k < ROWS_PER_FRAME && i < rows; k++, i++) { paint(r, i); r = step(r, rule); }
      ctx.globalAlpha = 1;
      rafId = i < rows ? requestAnimationFrame(tick) : null;
    };
    rafId = requestAnimationFrame(tick);
  }

  function sow() {
    sown.rule = rule;
    sown.seed = fractions();
    document.dispatchEvent(new CustomEvent('earthstar:sown', { detail: { rule, seed: sown.seed } }));
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const c = Math.min(cols - 1, Math.max(0, Math.floor((e.clientX - rect.left) / CELL)));
    seed[c] = seed[c] ? 0 : 1;
    grow();
    sow();
  });

  ruleButtons.forEach((btn) => btn.addEventListener('click', () => {
    rule = Number(btn.dataset.rule);
    ruleButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    grow();
    sow();
  }));

  document.getElementById('seedbed-one')?.addEventListener('click', () => {
    seed = new Uint8Array(cols);
    seed[Math.floor(cols / 2)] = 1;
    grow();
    sow();
  });

  document.getElementById('seedbed-scatter')?.addEventListener('click', () => {
    seed = new Uint8Array(cols);
    const n = 3 + Math.floor(Math.random() * 5);
    for (let k = 0; k < n; k++) seed[Math.floor(Math.random() * cols)] = 1;
    grow();
    sow();
  });

  document.addEventListener('earthstar:theme', () => { readColors(); grow(); });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { if (size()) grow(); }, 150);
  });

  readColors();
  size();
  grow();
}
