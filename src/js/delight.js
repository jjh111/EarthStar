// Small delights: time-of-day hero tinting, margin-star constellations,
// and the gomen crab. All decorative, all skipped under reduced motion
// where movement is involved.

import { composteOldestSprout } from './garden.js';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Time of day: the hero breathes with the visitor's local hour ──

export function initTimeOfDay() {
  const hour = new Date().getHours();
  const tod =
    hour >= 5 && hour < 8 ? 'dawn' :
    hour >= 8 && hour < 17 ? 'day' :
    hour >= 17 && hour < 20 ? 'dusk' : 'night';
  document.documentElement.dataset.tod = tod;
}

// ── Constellations: 3+ margin stars on a side connect into a figure ──

let svg = null;

function ensureLayer() {
  if (svg) return svg;
  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'constellation-layer');
  svg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(svg);
  return svg;
}

function drawSide(stars) {
  if (stars.length < 3) return '';
  let lines = '';
  for (let i = 1; i < stars.length; i++) {
    const a = stars[i - 1], b = stars[i];
    lines += `<line class="constellation-line" x1="${a.x}" y1="${a.y - 20}" x2="${b.x}" y2="${b.y - 20}" pathLength="1"/>`;
  }
  return lines;
}

export function initConstellations() {
  document.addEventListener('earthstar:stars', (e) => {
    const { left, right } = e.detail;
    if (left.length < 3 && right.length < 3) {
      if (svg) svg.innerHTML = '';
      return;
    }
    ensureLayer().innerHTML = drawSide(left) + drawSide(right);
  });
}

// ── The gomen crab: type "gomen" and a small waste-metabolizer
//    scuttles across the shore of the page, tidying one sprout ──

let crabActive = false;
let keyBuffer = '';

export function initGomenCrab() {
  if (REDUCED_MOTION) return;
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (e.key.length !== 1) return;
    keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-5);
    if (keyBuffer === 'gomen' && !crabActive) {
      keyBuffer = '';
      summonCrab();
    }
  });
}

function summonCrab() {
  crabActive = true;
  const crab = document.createElement('div');
  crab.className = 'gomen-crab';
  crab.innerHTML = '<span class="gomen-crab-body">🦀</span><span class="gomen-crab-say">gomen’nasai</span>';
  document.body.appendChild(crab);

  const say = crab.querySelector('.gomen-crab-say');
  const mid = window.innerWidth / 2;

  // Walk in from the left
  crab.style.transform = 'translateX(-60px)';
  requestAnimationFrame(() => {
    crab.style.transition = 'transform 3s ease-in-out';
    crab.style.transform = `translateX(${mid}px)`;
  });

  // Pause mid-shore: apologize, metabolize one sprout
  setTimeout(() => {
    say.classList.add('visible');
    const ate = composteOldestSprout();
    if (ate) {
      const sparkle = document.createElement('span');
      sparkle.className = 'gomen-crab-sparkle';
      sparkle.textContent = '✨';
      crab.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1500);
    }
  }, 3100);

  // Walk off to the right
  setTimeout(() => {
    say.classList.remove('visible');
    crab.style.transition = 'transform 3s ease-in-out';
    crab.style.transform = `translateX(${window.innerWidth + 80}px)`;
  }, 5200);

  setTimeout(() => {
    crab.remove();
    crabActive = false;
  }, 8400);
}
