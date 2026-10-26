// The golden thread — a thin line down the left edge that fills as you read,
// knotted at each section. Progress, wayfinding, and the motif in one:
// the thread of coherence running through the whole page.
// It keeps count at every width, even where the line itself is hidden: the
// wayfinder's links carry aria-current for the section you are in, and each
// change is announced as 'earthstar:section' (the Sections menu names it).

export function initThread() {
  const thread = document.getElementById('thread');
  if (!thread) return;
  const sections = Array.from(document.querySelectorAll('[data-thread]'));
  if (sections.length === 0) return;

  const fill = thread.querySelector('.thread-fill');
  const knots = thread.querySelector('.thread-knots');
  knots.innerHTML = sections.map((s) =>
    `<a class="thread-knot" href="#${s.id}" data-for="${s.id}"><span class="thread-label">${s.dataset.thread}</span></a>`).join('');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wfLinks = Array.from(document.querySelectorAll('.wf-links a'));
  let ticking = false;
  let last;

  function place() {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    const p = docH > 0 ? Math.min(1, y / docH) : 0;
    fill.style.height = (p * 100).toFixed(2) + '%';
    let current = null;
    for (const s of sections) {
      const top = s.getBoundingClientRect().top + y;
      const knot = knots.querySelector(`[data-for="${s.id}"]`);
      const kp = docH > 0 ? Math.min(1, Math.max(0, (top - window.innerHeight * 0.35) / docH)) : 0;
      knot.style.top = (kp * 100).toFixed(2) + '%';
      if (top - window.innerHeight * 0.45 <= y) current = s.id;
    }
    for (const k of knots.children) k.classList.toggle('is-current', k.dataset.for === current);
    if (current === last) return;
    last = current;
    for (const a of wfLinks) {
      if (a.getAttribute('href') === '#' + current) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    }
    const label = current ? document.getElementById(current).dataset.thread : null;
    document.dispatchEvent(new CustomEvent('earthstar:section', { detail: { id: current, label } }));
  }

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; place(); });
  }, { passive: true });
  window.addEventListener('resize', place);
  if (!reduced) thread.classList.add('is-animated');
  place();
  setTimeout(place, 800);
}
