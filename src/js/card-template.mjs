// Shared between build.mjs (pre-rendered grid) and archive.js (search re-render)
// so the card markup can never drift between server and client.

export function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// One document per card, and the title is a real link to the document's own
// page, so it works for keyboards, screen readers and readers without script;
// archive.js opens it in the reader instead. Its ::after covers the card, so
// the whole card is the target. The tags are words to search by, not controls;
// a line breaks only between two of them, never inside one, and each dot binds
// to the tag after it, so a line never ends on a dot.
export function cardHTML(doc) {
  return `<article class="archive-card" data-id="${esc(doc.id)}" data-category="${esc(doc.category)}">
  <p class="archive-card-kicker">${esc(doc.category)}</p>
  <h3 class="archive-card-title"><a href="archive/${esc(doc.id)}.html" data-doc="${esc(doc.id)}">${esc(doc.title)}</a></h3>
  <p class="archive-card-desc">${esc(doc.description)}</p>
  <p class="archive-card-tags">${doc.tags.map((t) => esc(t).replace(/ /g, '\u00a0')).join(' ·\u00a0')}</p>
</article>`;
}
