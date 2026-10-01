// The Gomen pictograms: hover (or tap) wakes one. A woken Gomen does its small
// thing — the crab snaps, the antibody turns, the weaver weaves, the orbiter
// patrols — and says what every Gomen is designed to say first.

export function initGomens() {
  document.querySelectorAll('.gomen-pic').forEach((btn) => {
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
