// Layered vista parallax.
// Desktop: cursor-driven drift (as before).
// Touch / mobile: scroll-driven depth + device tilt where available,
// so the vista is alive on every device — previously mouse-only.

const DEPTHS = [1, 5, 20, 50, 8];
const SCALES = [1, 1, 1, 1.05, 1];

export function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const vista = document.querySelector('.vista');
  const frame = document.querySelector('.hero-image-frame');
  const images = document.querySelectorAll('.hero-images img');
  if (!vista || images.length === 0) return;

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
  vista.addEventListener('mousemove', (e) => {
    const rect = vista.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    schedule();
  });

  vista.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    schedule();
    images.forEach((img) => { img.style.transition = 'transform 0.5s ease-out'; });
  });

  vista.addEventListener('mouseenter', () => {
    images.forEach((img) => { img.style.transition = 'transform 0.1s ease-out'; });
  });

  // ── Scroll depth (all devices; the only depth source on touch) ──
  // The vista sits mid-page, so progress is measured as the frame's
  // journey through the viewport: 0 as it enters below, 1 as it leaves above.
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      scrollTicking = false;
      const rect = (frame || vista).getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const span = rect.height + vh;
      scrollProgress = Math.min(1, Math.max(0, (vh - rect.top) / span));
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
