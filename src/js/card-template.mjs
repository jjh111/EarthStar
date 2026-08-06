// Shared between build.mjs (pre-rendered grid) and archive.js (search re-render)
// so the card markup can never drift between server and client.

export function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function cardHTML(doc) {
  return `<article class="archive-card" data-id="${esc(doc.id)}" data-category="${esc(doc.category)}" tabindex="0" role="button" aria-haspopup="dialog">
  <div class="archive-card-title">${esc(doc.title)}</div>
  <div class="archive-card-desc">${esc(doc.description)}</div>
  <div class="archive-card-tags">${doc.tags.map(t => `<span class="archive-tag">${esc(t)}</span>`).join('')}</div>
</article>`;
}
