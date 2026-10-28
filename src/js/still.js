// Still the ground. The page's ambient motion (the automata's sweeps, the
// painting's drift, the butterflies, the cover's cue) is atmosphere, and a
// visitor can stop it from the page itself, not only through their system's
// reduced-motion setting. The switch sits in the bar beside day and night, and
// in the Sections menu on narrow screens; the two are kept in step. The choice
// is remembered in this browser, and the inline script in <head> applies it
// before first paint, as it does the theme. What moves listens for
// 'earthstar:still' and asks isStill() when it starts.

const KEY = 'earthStarStill';
// The system's reduced motion stills the ground already: then the switch
// shows pressed, says why, and has nothing to change
const RM = window.matchMedia('(prefers-reduced-motion: reduce)');

export const isStill = () => document.documentElement.hasAttribute('data-still');

export function initStill() {
  const switches = document.querySelectorAll('.wf-still, .wf-still-row');
  if (!switches.length) return;
  const show = () => switches.forEach((s) => {
    s.setAttribute('aria-pressed', String(isStill() || RM.matches));
    if (RM.matches) s.setAttribute('aria-disabled', 'true'); else s.removeAttribute('aria-disabled');
    if (RM.matches) s.title = 'Still: your system asks for reduced motion';
    else if (s.classList.contains('wf-still')) s.title = 'Still the ground';
    else s.removeAttribute('title');
  });
  show();
  RM.addEventListener?.('change', show);
  switches.forEach((s) => s.addEventListener('click', () => {
    if (RM.matches) return;
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
