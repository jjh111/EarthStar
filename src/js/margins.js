// The page's margins. Every section sets its text on one frame (--col, less
// --pad-x each side), so the edges of the text column, read from the layout,
// are the same all the way down the page. What lies outside them is the
// gutter: where the garden's stars and butterflies keep, clear of the words.

export const INNERS = '.stage-inner, .sky-inner, .ideas-inner, .archive-inner, .begin-inner, .works-inner';

/** The left and right edges of a section's text: its inner box, less its padding. */
export function textEdges(inner) {
  const r = inner.getBoundingClientRect();
  const cs = getComputedStyle(inner);
  return { left: r.left + parseFloat(cs.paddingLeft), right: r.right - parseFloat(cs.paddingRight) };
}

/** How wide each gutter is now, and the width of the screen they sit in. */
export function gutters() {
  const w = document.documentElement.clientWidth;
  const inner = document.querySelector(INNERS);
  if (!inner) return { left: 0, right: 0, w };
  const t = textEdges(inner);
  return { left: t.left, right: w - t.right, w };
}
