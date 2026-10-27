// Small delights: time-of-day hero tinting, margin-star constellations,
// and the gomen crab. All decorative, all skipped under reduced motion
// where movement is involved.

import { composteOldestSprout } from './garden.js';
import { drawInto, gomenArt } from './glyph.js';

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
// garden.js says where each star is drawn now (in the middle of its gutter),
// and only the stars it draws: a gutter too narrow for stars has no figure.

let svg = null;

function ensureLayer() {
  if (svg) return svg;
  svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'constellation-layer');
  svg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(svg);
  return svg;
}

// The segments of one side's figure, star to star, through each star's centre
function segments(stars) {
  const out = [];
  if (stars.length < 3) return out;
  for (let i = 1; i < stars.length; i++) {
    const a = stars[i - 1], b = stars[i];
    out.push([a.x, a.y - 20, b.x, b.y - 20]);
  }
  return out;
}

export function initConstellations() {
  document.addEventListener('earthstar:stars', (e) => {
    const { left, right, moved } = e.detail;
    const segs = [...segments(left), ...segments(right)];
    if (!segs.length) {
      if (svg) svg.innerHTML = '';
      return;
    }
    const layer = ensureLayer();
    const lines = layer.querySelectorAll('.constellation-line');
    // The same figure, moved (the window changed shape): the lines follow
    // without being drawn again
    if (moved && lines.length === segs.length) {
      segs.forEach(([x1, y1, x2, y2], i) => {
        lines[i].setAttribute('x1', x1); lines[i].setAttribute('y1', y1);
        lines[i].setAttribute('x2', x2); lines[i].setAttribute('y2', y2);
      });
      return;
    }
    layer.innerHTML = segs.map(([x1, y1, x2, y2]) =>
      `<line class="constellation-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" pathLength="1"/>`).join('');
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
  crab.setAttribute('aria-hidden', 'true');
  // a Shore-walker, drawn in the script, comes up the page's shore
  crab.innerHTML = '<span class="gomen-crab-body"></span><span class="gomen-crab-say">gomen’nasai</span>';
  crab.querySelector('.gomen-crab-body').appendChild(gomenArt('shorewalkers'));
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
      drawInto(sparkle, '✨');
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
