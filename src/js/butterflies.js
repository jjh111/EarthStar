// Living butterfly system — max 5, orbit the cursor, wander when it leaves.
// The rAF loop only runs while butterflies exist.

const MAX = 5;

let butterflies = [];
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let mouseOnPage = false;
let rafId = null;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  mouseOnPage = true;
});
document.addEventListener('mouseleave', () => { mouseOnPage = false; });
document.addEventListener('mouseenter', () => { mouseOnPage = true; });

export function butterflyCount() {
  return butterflies.length;
}

export function clearButterflies() {
  butterflies.forEach(b => b.el?.remove());
  butterflies = [];
  stopLoop();
}

export function spawnButterfly(x, y) {
  const el = document.createElement('div');
  el.className = 'butterfly-living';
  el.textContent = '🦋';
  const spawnX = x + (Math.random() - 0.5) * 40;
  const spawnY = y + (Math.random() - 0.5) * 40;
  el.style.left = (spawnX - 12) + 'px';
  el.style.top = (spawnY - 12) + 'px';
  document.body.appendChild(el);

  butterflies.push({
    el, x: spawnX, y: spawnY,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    angle: Math.random() * 360
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
  butterflies = butterflies.filter(b => b && b.el && b.el.parentElement);
  if (butterflies.length === 0) {
    rafId = null;
    return;
  }

  butterflies.forEach((b, i) => {
    if (mouseOnPage) {
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
      b.vx += Math.cos(b.angle * Math.PI / 180) * wander;
      b.vy += Math.sin(b.angle * Math.PI / 180) * wander;
    }

    b.x += b.vx;
    b.y += b.vy;
    b.vx *= 0.94;
    b.vy *= 0.94;

    const maxSpeed = mouseOnPage ? 4 + (i * 0.3) : 2 + (i * 0.2);
    const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (speed > maxSpeed) {
      b.vx = (b.vx / speed) * maxSpeed;
      b.vy = (b.vy / speed) * maxSpeed;
    }
    if (speed < 0.2) {
      b.vx += (Math.random() - 0.5) * 0.15;
      b.vy += (Math.random() - 0.5) * 0.15;
    }

    const margin = 80;
    if (b.x < margin) { b.x = margin; b.vx = Math.abs(b.vx) * 0.6; }
    if (b.x > window.innerWidth - margin) { b.x = window.innerWidth - margin; b.vx = -Math.abs(b.vx) * 0.6; }
    if (b.y < margin) { b.y = margin; b.vy = Math.abs(b.vy) * 0.6; }
    if (b.y > window.innerHeight - margin) { b.y = window.innerHeight - margin; b.vy = -Math.abs(b.vy) * 0.6; }

    const facingRight = b.vx > 0;
    const wingFlap = Math.sin(Date.now() / 150 + b.y * 0.05 + i * 10) * 0.08 + 1;
    b.el.style.transform = `scaleX(${facingRight ? 1 : -1}) scale(${wingFlap})`;
    b.el.style.left = (b.x - 12) + 'px';
    b.el.style.top = (b.y - 12) + 'px';
  });

  rafId = requestAnimationFrame(update);
}
