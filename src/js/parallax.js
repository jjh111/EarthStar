// Layered hero parallax. The painting is the page's fixed background: the
// content scrolls up over it, and as it does the layers sink at their own
// depths while a veil of ground colour rises over them (--sink, 0 → 1 over
// the first screen), handing the background over to the automata.
// Desktop: cursor drift while the cover is in view. Touch: scroll depth and
// device tilt where available.

const DEPTHS = [1, 5, 20, 50, 8];
const SCALES = [1, 1, 1, 1.05, 1];

function trackSink() {
  const root = document.documentElement;
  let ticking = false;
  const set = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight || 1)));
    root.style.setProperty('--sink', p.toFixed(3));
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(set); }
  }, { passive: true });
  set();
}

export function initParallax() {
  // The veil is a fade, not motion: it runs under reduced motion too
  trackSink();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.querySelector('.cover') || document.querySelector('.hero');
  const frame = document.querySelector('.hero-image-frame');
  const images = document.querySelectorAll('.hero-images img');
  if (!hero || images.length === 0) return;

  let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
  let scrollProgress = 0;
  let rafId = null;

  function apply() {
    rafId = null;
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;
    images.forEach((img, i) => {
      const depth = DEPTHS[i];
      const tx = currentX * depth;
      // Pointer drift + scroll sink: deeper layers fall behind as you scroll past
      const ty = currentY * depth + scrollProgress * depth * 1.4;
      img.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${SCALES[i]})`;
    });
    const settled = Math.abs(targetX - currentX) + Math.abs(targetY - currentY) < 0.001;
    if (!settled) schedule();
  }

  function schedule() {
    if (rafId === null) rafId = requestAnimationFrame(apply);
  }

  // ── Cursor drift (fine pointers) ──
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    schedule();
  });

  hero.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    schedule();
    images.forEach((img) => { img.style.transition = 'transform 0.5s ease-out'; });
  });

  hero.addEventListener('mouseenter', () => {
    images.forEach((img) => { img.style.transition = 'transform 0.1s ease-out'; });
  });

  // ── Scroll depth (all devices; the only depth source on touch) ──
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      scrollTicking = false;
      const frameH = window.innerHeight || (frame || hero).offsetHeight || 1;
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / frameH));
      schedule();
    });
  }, { passive: true });

  // ── Device tilt (coarse pointers; Android fires without permission,
  //    iOS requires a permission prompt we deliberately don't push) ──
  if (window.matchMedia('(pointer: coarse)').matches &&
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission !== 'function') {
    let baseBeta = null, baseGamma = null;
    window.addEventListener('deviceorientation', (e) => {
      if (e.beta === null || e.gamma === null) return;
      if (baseBeta === null) { baseBeta = e.beta; baseGamma = e.gamma; }
      targetX = Math.max(-1, Math.min(1, (e.gamma - baseGamma) / 30));
      targetY = Math.max(-1, Math.min(1, (e.beta - baseBeta) / 30));
      schedule();
    }, { passive: true });
  }
}
