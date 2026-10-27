// Living butterfly system — max 5, orbit the cursor, wander when it leaves.
// Wandering, they keep to the gutters wherever the gutters can hold them, so
// they never settle on the words. A touch screen has no cursor to orbit: there
// each lives about twenty seconds, then flies off the screen. Stilling the
// ground (still.js) sends them all off and lets no more out.
// The rAF loop only runs while butterflies exist.

import { drawInto } from './glyph.js';
import { gutters } from './margins.js';
import { isStill } from './still.js';

const MAX = 5;
const LIFE = 20000;    // ms a butterfly stays on a touch screen
const GUTTER = 60;     // px: gutters at least this wide are where they wander
const COARSE = window.matchMedia('(pointer: coarse)');

let butterflies = [];
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let mouseOnPage = false;
let rafId = null;
let margins = null;    // the gutters, measured once per window shape

// Only a mouse has a cursor to orbit: a finger's taps (and the mouse events
// the browser makes from them) leave the butterflies wandering
document.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  mouseX = e.clientX;
  mouseY = e.clientY;
  mouseOnPage = true;
});
document.addEventListener('mouseleave', () => { mouseOnPage = false; });
window.addEventListener('resize', () => { margins = null; });
document.addEventListener('earthstar:still', (e) => { if (e.detail.still) butterflies.forEach(flyOff); });

export function butterflyCount() {
  return butterflies.length;
}

export function clearButterflies() {
  butterflies.forEach(b => b.el?.remove());
  butterflies = [];
  stopLoop();
}

export function spawnButterfly(x, y) {
  if (isStill()) return;
  const el = document.createElement('div');
  el.className = 'butterfly-living';
  el.setAttribute('aria-hidden', 'true');
  drawInto(el, '🦋');
  const spawnX = x + (Math.random() - 0.5) * 40;
  const spawnY = y + (Math.random() - 0.5) * 40;
  el.style.left = (spawnX - 12) + 'px';
  el.style.top = (spawnY - 12) + 'px';
  document.body.appendChild(el);

  butterflies.push({
    el, x: spawnX, y: spawnY,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    angle: Math.random() * 360,
    born: Date.now(), tx: null, ty: null, leaving: 0
  });

  while (butterflies.length > MAX) {
    const old = butterflies.shift();
    if (old && old.el) {
      old.el.style.transition = 'opacity 0.5s, transform 0.5s';
      old.el.style.opacity = '0';
      old.el.style.transform = 'scale(0)';
      setTimeout(() => old.el?.remove(), 500);
    }
  }

  startLoop();
}

// Off towards the nearer side of the screen, rising a little as it goes
function flyOff(b) {
  if (!b.leaving) b.leaving = b.x < window.innerWidth / 2 ? -1 : 1;
}

// Somewhere to wander to in a gutter, clear of the text and the screen's edge,
// mostly on the side it is already on
function pickTarget(b, g) {
  const left = (b.x < g.w / 2) === (Math.random() < 0.85);
  const width = left ? g.left : g.right;
  b.tx = (left ? 0 : g.w - width) + 16 + Math.random() * (width - 32);
  b.ty = 80 + Math.random() * Math.max(0, window.innerHeight - 160);
}

function startLoop() {
  if (rafId === null) rafId = requestAnimationFrame(update);
}

function stopLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function update() {
  const before = butterflies.length;
  butterflies = butterflies.filter(b => b && b.el && b.el.parentElement);
  if (butterflies.length !== before) document.dispatchEvent(new CustomEvent('earthstar:butterflies'));
  if (butterflies.length === 0) {
    rafId = null;
    return;
  }

  const now = Date.now();
  if (!margins) margins = gutters();
  const inGutters = Math.min(margins.left, margins.right) >= GUTTER;

  butterflies.forEach((b, i) => {
    if (COARSE.matches && now - b.born > LIFE) flyOff(b);

    if (b.leaving) {
      b.vx += b.leaving * 0.2;
      b.vy -= 0.04;
      b.angle += (Math.random() - 0.5) * 6;
      b.vy += Math.sin(b.angle * Math.PI / 180) * 0.05;
    } else if (mouseOnPage) {
      // Orbit the cursor at a gentle, per-butterfly distance
      const dx = b.x - mouseX;
      const dy = b.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist = 100 + (i * 20) + Math.sin(Date.now() / 3000 + b.x * 0.01 + i) * 30;

      b.angle += 0.4 + (i * 0.1);

      if (dist < 50) {
        b.vx += (dx / dist) * 0.2;
        b.vy += (dy / dist) * 0.2;
      } else if (dist < targetDist - 30) {
        b.vx += (dx / dist) * 0.08;
        b.vy += (dy / dist) * 0.08;
      } else if (dist > targetDist + 30) {
        b.vx -= (dx / dist) * 0.06;
        b.vy -= (dy / dist) * 0.06;
      }

      b.vx += Math.cos(b.angle) * 0.008;
      b.vy += Math.sin(b.angle) * 0.008;
    } else {
      // Wander with a unique pattern per butterfly
      b.angle += (Math.random() - 0.5) * (2 + i * 0.5);
      const wander = 0.05 + (i * 0.01);
      if (inGutters) {
        // drawn towards a point in a gutter, with a little of the wander left
        if (b.tx === null || Math.hypot(b.tx - b.x, b.ty - b.y) < 24) pickTarget(b, margins);
        const dx = b.tx - b.x, dy = b.ty - b.y, d = Math.hypot(dx, dy) || 1;
        b.vx += (dx / d) * 0.06 + Math.cos(b.angle * Math.PI / 180) * wander * 0.4;
        b.vy += (dy / d) * 0.06 + Math.sin(b.angle * Math.PI / 180) * wander * 0.4;
      } else {
        b.vx += Math.cos(b.angle * Math.PI / 180) * wander;
        b.vy += Math.sin(b.angle * Math.PI / 180) * wander;
      }
    }

    b.x += b.vx;
    b.y += b.vy;
    b.vx *= 0.94;
    b.vy *= 0.94;

    const maxSpeed = b.leaving ? 4 : mouseOnPage ? 4 + (i * 0.3) : 2 + (i * 0.2);
    const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (speed > maxSpeed) {
      b.vx = (b.vx / speed) * maxSpeed;
      b.vy = (b.vy / speed) * maxSpeed;
    }
    if (speed < 0.2) {
      b.vx += (Math.random() - 0.5) * 0.15;
      b.vy += (Math.random() - 0.5) * 0.15;
    }

    if (b.leaving) {
      // gone once it has left the screen
      if (b.x < -40 || b.x > window.innerWidth + 40 || b.y < -40) b.el.remove();
    } else {
      // in the gutters they may go nearly to the screen's edge
      const margin = 80, edge = inGutters && !mouseOnPage ? 12 : margin;
      if (b.x < edge) { b.x = edge; b.vx = Math.abs(b.vx) * 0.6; }
      if (b.x > window.innerWidth - edge) { b.x = window.innerWidth - edge; b.vx = -Math.abs(b.vx) * 0.6; }
      if (b.y < margin) { b.y = margin; b.vy = Math.abs(b.vy) * 0.6; }
      if (b.y > window.innerHeight - margin) { b.y = window.innerHeight - margin; b.vy = -Math.abs(b.vy) * 0.6; }
    }

    const facingRight = b.vx > 0;
    const wingFlap = Math.sin(Date.now() / 150 + b.y * 0.05 + i * 10) * 0.08 + 1;
    b.el.style.transform = `scaleX(${facingRight ? 1 : -1}) scale(${wingFlap})`;
    b.el.style.left = (b.x - 12) + 'px';
    b.el.style.top = (b.y - 12) + 'px';
  });

  rafId = requestAnimationFrame(update);
}
