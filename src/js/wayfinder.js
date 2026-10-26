// The wayfinder — one row at every size. On narrow screens the six section
// links fold into the Sections menu, whose button names the section you are
// in (the thread announces it: 'earthstar:section'). The menu closes on a
// choice, on Escape, and on a click or focus anywhere outside the bar.

export function initWayfinder() {
  const nav = document.querySelector('.wayfinder');
  const btn = nav?.querySelector('.wf-menu');
  const links = document.getElementById('wfLinks');
  if (!nav || !btn || !links) return;
  const label = btn.querySelector('.wf-menu-label');
  const isOpen = () => nav.classList.contains('is-open');

  function set(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  // The links come before the button in the page's order, so opening the menu
  // takes focus to where you are in it; Tab then walks on through the bar.
  btn.addEventListener('click', () => {
    set(!isOpen());
    if (isOpen()) (links.querySelector('a[aria-current]') || links.querySelector('a:not(.wf-top)'))?.focus({ preventScroll: true });
  });
  links.addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !isOpen()) return;
    set(false);
    btn.focus();
  });
  document.addEventListener('click', (e) => { if (isOpen() && !nav.contains(e.target)) set(false); });
  nav.addEventListener('focusout', (e) => { if (isOpen() && e.relatedTarget && !nav.contains(e.relatedTarget)) set(false); });

  // the name it is heard by keeps the word 'Sections' and the visible name
  document.addEventListener('earthstar:section', (e) => {
    const where = e.detail.label;
    label.textContent = where || 'Sections';
    if (where) btn.setAttribute('aria-label', `Sections: ${where}`);
    else btn.removeAttribute('aria-label');
  });

  // Where the field is too short for the full prompt (phones, landscape phones
  // that keep the links in the row, the tight widths just above the menu)
  // search gets a short prompt rather than a clipped one
  const input = document.getElementById('siteSearch');
  if (!input || !window.ResizeObserver) return;
  const full = input.placeholder;
  const pen = document.createElement('canvas').getContext('2d');
  const prompt = () => {
    const cs = getComputedStyle(input);
    pen.font = `italic ${cs.fontSize} ${cs.fontFamily}`;
    const room = input.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    input.placeholder = pen.measureText(full).width <= room ? full : 'search…';
  };
  new ResizeObserver(prompt).observe(input);
  document.fonts?.ready.then(prompt);
}
