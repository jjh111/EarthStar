// Still the ground. The page's ambient motion (the automata's sweeps, the
// painting's drift, the butterflies, the cover's cue) is atmosphere, and a
// visitor can stop it from the page itself, not only through their system's
// reduced-motion setting. The switch sits in the bar beside day and night, and
// in the Sections menu on narrow screens; the two are kept in step. The choice
// is remembered in this browser, and the inline script in <head> applies it
// before first paint, as it does the theme. What moves listens for
// 'earthstar:still' and asks isStill() when it starts.

const KEY = 'earthStarStill';

export const isStill = () => document.documentElement.hasAttribute('data-still');

export function initStill() {
  const switches = document.querySelectorAll('.wf-still, .wf-still-row');
  if (!switches.length) return;
  const show = () => switches.forEach((s) => s.setAttribute('aria-pressed', String(isStill())));
  show();
  switches.forEach((s) => s.addEventListener('click', () => {
    const still = !isStill();
    document.documentElement.toggleAttribute('data-still', still);
    try {
      if (still) localStorage.setItem(KEY, '1');
      else localStorage.removeItem(KEY);
    } catch (e) { /* remembered for this visit only */ }
    show();
    document.dispatchEvent(new CustomEvent('earthstar:still', { detail: { still } }));
  }));
}
