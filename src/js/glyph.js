// Marks from the Earth Star script, as elements: a span masked by the glyph's
// SVG (drawn at build time by src/glyphs/) and coloured by CSS.
//
// The garden has always stored emoji in localStorage, and returning visitors
// still have them; each maps to its drawn glyph, so no saved garden breaks.

const BASE = 'assets/img/glyphs/';
const FROM_EMOJI = {
  '🌱': 'garden-sprout', '🌿': 'garden-leaf', '🌸': 'garden-bloom', '🌳': 'garden-tree',
  '✦': 'star', '🦋': 'butterfly', '✨': 'spark',
};

export function glyphEl(name) {
  const s = document.createElement('span');
  s.className = `glyph g-${name}`;
  s.style.setProperty('--m', `url(${BASE}${name}.svg)`);
  s.setAttribute('aria-hidden', 'true');
  return s;
}

/** Replace el's content with the drawn glyph for an emoji (or a glyph name). */
export function drawInto(el, emojiOrName) {
  const name = FROM_EMOJI[emojiOrName] || emojiOrName;
  el.textContent = '';
  el.appendChild(glyphEl(name));
  el.dataset.glyph = name;
  return el;
}

/** A Gomen's layered figure (wash, ink, gold), e.g. the crab that walks the page. */
export function gomenArt(id) {
  const art = document.createElement('span');
  art.className = 'gomen-art';
  art.setAttribute('aria-hidden', 'true');
  art.innerHTML = `<img class="ga-wash" src="assets/img/gomens/${id}-wash.svg" alt="" width="96" height="96">`
    + `<span class="ga-ink" style="--m:url(assets/img/gomens/${id}-ink.svg)"></span>`
    + `<span class="ga-gold" style="--m:url(assets/img/gomens/${id}-gold.svg)"></span>`;
  return art;
}
