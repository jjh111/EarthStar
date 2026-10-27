// The Gomen pictograms: hover (or tap) wakes one. A woken Gomen does its small
// thing — the crab snaps, the antibody turns, the weaver weaves, the orbiter
// patrols — and says what every Gomen is designed to say first.
// The page ships each figure as a picture; with script here to answer a tap,
// it becomes the button that wakes it.

export function initGomens() {
  document.querySelectorAll('span.gomen-pic').forEach((pic) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gomen-pic';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', pic.dataset.wake);
    btn.append(...pic.childNodes);
    pic.replaceWith(btn);
    let timer = null;
    btn.addEventListener('click', () => {
      btn.classList.add('is-awake');
      btn.setAttribute('aria-pressed', 'true');
      clearTimeout(timer);
      timer = setTimeout(() => {
        btn.classList.remove('is-awake');
        btn.setAttribute('aria-pressed', 'false');
      }, 2600);
    });
  });
}
