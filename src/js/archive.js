// The Archive — document library.
// Doc bodies are pre-rendered to HTML fragments at build time and fetched on
// demand (they were previously ~55KB of strings embedded in the critical HTML).
//
// The reader is addressable. Opening a document makes one history entry
// (#doc/<id>), so Back closes it and the visitor stays on the site; previous
// and next replace that entry instead of adding to it, and #doc/<id>/<slug>
// opens at a heading. While it is open the page behind it is inert, and the
// keyboard reads: focus sits on the text, so the arrows, Space and PageDown
// scroll it, and [ and ] turn to the previous or next document.

import { DOCS } from './manifest.gen.js';
import { cardHTML, esc } from './card-template.mjs';
import { copyText } from './seed-copy.js';
import { queryWords, matchesAll, matchesAny, snippet } from './match.js';

let searchQuery = '';
let currentDocId = null;
let renderedDocId = null;  // the document whose text is in the reader now
let lastFocused = null;    // what opened the reader; focus goes back there
let landing = false;       // opened cold from a link: closing lands on the Archive
let closing = false;       // history.back() is on its way; don't send another
let inerted = [];

// The wide reader holds its contents in a rail beside the text
const RAIL = window.matchMedia('(min-width: 1700px) and (min-height: 501px)');

// id → { html, plain, text } — fetched fragments, cached for the session: the
// text as read (for snippets) and lowercased (for matching), contents list left out
const docCache = new Map();
let contentIndexLoading = null;

function $(id) { return document.getElementById(id); }

async function fetchDoc(id) {
  if (docCache.has(id)) return docCache.get(id);
  const res = await fetch(`archive/${id}.html`);
  if (!res.ok) throw new Error(`archive doc ${id}: ${res.status}`);
  const html = await res.text();
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  tmp.querySelector('.archive-toc')?.remove();
  const plain = tmp.textContent.replace(/\s+/g, ' ').trim();
  const entry = { html, plain, text: plain.toLowerCase() };
  docCache.set(id, entry);
  return entry;
}

// Full-text search needs every doc body — load them all once, lazily,
// the first time the user actually types in the search box.
function ensureContentIndex() {
  if (!contentIndexLoading) {
    contentIndexLoading = Promise.allSettled(DOCS.map(d => fetchDoc(d.id)));
  }
  return contentIndexLoading;
}

// ── Grid ─────────────────────────────────────────────────

// The page's one rule (match.js): every word of the query, anywhere in the
// title, the description, the tags or, once it has arrived, the text
function docMatches(d, words) {
  return matchesAll([d.title, d.description, d.tags.join(' '), docCache.get(d.id)?.text].join(' '), words);
}

function renderGrid() {
  const grid = $('archiveGrid');
  const words = queryWords(searchQuery);
  const filtered = words.length ? DOCS.filter((d) => docMatches(d, words)) : DOCS;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="archive-empty">no documents found</div>';
    return;
  }
  grid.innerHTML = filtered.map(cardHTML).join('');
}

export function setArchiveQuery(q) { handleSearch(q); }

function handleSearch(q) {
  searchQuery = q;
  if (q) {
    ensureContentIndex().then(() => {
      // Re-filter once bodies arrive (only if the query is still live), and
      // say so: search.js recounts and redraws its list
      if (!searchQuery) return;
      renderGrid();
      document.dispatchEvent(new Event('earthstar:search-updated'));
    });
  }
  renderGrid();
}

// The documents for the list under the search field: the same rule as the
// grid, each with a line from where its first word was found — the
// description if it is there, else the text
export function searchDocs(q) {
  const words = queryWords(q);
  if (!words.length) return [];
  return DOCS.filter((d) => docMatches(d, words)).map((d) => {
    const text = docCache.get(d.id)?.plain || '';
    const about = !matchesAny(d.description, words) && matchesAny(text, words) ? text : d.description;
    return { id: d.id, title: d.title, snippet: snippet(about, words) };
  });
}

// ── Panel ────────────────────────────────────────────────

function getDocIndex(id) { return DOCS.findIndex(d => d.id === id); }
function isOpen() { return $('archivePanel').classList.contains('open'); }

// '#doc/<id>' or '#doc/<id>/<slug>' → { id, slug }, for documents that exist
function parseDocHash(hash) {
  const m = /^#doc\/([^/]+)(?:\/([^/]+))?$/.exec(hash || '');
  if (!m || getDocIndex(m[1]) < 0) return null;
  return { id: m[1], slug: m[2] || null };
}

// The title link of a document's card, if search has not filtered it out
function cardLink(id) { return id ? $('archiveGrid').querySelector(`a[data-doc="${id}"]`) : null; }

function provenanceHTML(doc) {
  const prov = doc.provenance, agents = doc.agents;
  return `<div class="archive-provenance">
      <span class="prov-kind">${esc(doc.category)}</span>
      ${prov ? `<span class="prov-status">${esc(prov.status)}</span>
      <span class="prov-meta">${esc(prov.author)} · ${esc(prov.date)}</span>` : ''}
      ${agents ? `<span class="prov-agents">${esc(agents.note)}${agents.skill
        ? ` <a href="${esc(agents.skill)}" download>take the .skill</a>` : ''}</span>` : ''}
    </div>`;
}

// The way on, at the foot of the text: real buttons, named for where they go
function endHTML(id) {
  const idx = getDocIndex(id);
  const prev = DOCS[idx - 1], next = DOCS[idx + 1];
  if (!prev && !next) return '';
  return `<nav class="archive-end" aria-label="More documents">
      ${prev ? `<button type="button" class="archive-end-btn prev" data-nav="prev"><span aria-hidden="true">←</span> Previous: <span class="archive-end-name">${esc(prev.title)}</span></button>` : ''}
      ${next ? `<button type="button" class="archive-end-btn next" data-nav="next">Next: <span class="archive-end-name">${esc(next.title)}</span> <span aria-hidden="true">→</span></button>` : ''}
    </nav>`;
}

// Bring a heading to the top of the reader (no slug, or one not found: the start)
function toSlug(slug) {
  const body = $('archivePanelBody');
  const h = slug ? document.getElementById(`doc/${currentDocId}/${slug}`) : null;
  body.scrollTop = h ? h.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop - 12 : 0;
  return h;
}

// The heading the reader is under: the last one at or above the top of the text
function currentSlug() {
  const body = $('archivePanelBody');
  const top = body.getBoundingClientRect().top + 24;
  let slug = null;
  for (const h of body.querySelectorAll('.archive-md h2[id], .archive-md h3[id]')) {
    if (h.getBoundingClientRect().top > top) break;
    slug = h.id.split('/').pop();
  }
  return slug;
}

// A code block or a table wider than the text scrolls sideways, so it takes
// the focus too, and the keys can scroll it
function scrollersFocusable() {
  for (const el of $('archivePanelBody').querySelectorAll('.archive-md pre, .archive-md table')) {
    if (el.scrollWidth > el.clientWidth + 1) el.tabIndex = 0;
    else el.removeAttribute('tabindex');
  }
}

// Everything behind the reader leaves the tab order and the accessibility tree
function show() {
  $('archivePanel').classList.add('open');
  $('archivePanelOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('panel-open');
  for (const el of document.body.children) {
    if (el.id === 'archivePanel' || el.id === 'archivePanelOverlay' || el.inert || el.tagName === 'SCRIPT') continue;
    el.inert = true;
    inerted.push(el);
  }
}

export async function openDoc(id, from = null, slug = null) {
  const doc = DOCS.find(d => d.id === id);
  if (!doc) return;
  const wasOpen = isOpen();
  const hash = '#doc/' + id + (slug ? '/' + slug : '');

  // One entry per opening: push from a closed reader, replace from an open one.
  // A hash the browser has already moved to (Forward, a typed URL) is only marked.
  if (location.hash !== hash) {
    if (wasOpen) history.replaceState({ esDoc: id }, '', hash);
    else history.pushState({ esDoc: id }, '', hash);
  } else if (history.state?.esDoc !== id) {
    history.replaceState({ esDoc: id }, '', hash);
  }

  // The document is already in the reader: a contents link only moves the text
  if (wasOpen && renderedDocId === id) {
    const h = toSlug(slug);
    if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
    return;
  }

  currentDocId = id;
  if (!wasOpen) {
    lastFocused = from;
    show();
  }

  $('archiveBreadcrumbs').innerHTML = `
    <button type="button" class="archive-crumb archive-crumb-root" data-close>The Archive</button>
    <span class="archive-crumb-sep" aria-hidden="true">/</span>
    <span class="archive-crumb archive-crumb-cat">${esc(doc.category)}</span>
    <span class="archive-crumb-sep" aria-hidden="true">/</span>
    <span class="archive-crumb archive-crumb-title" id="archiveDocTitle">${esc(doc.title)}</span>
  `;

  const body = $('archivePanelBody');
  const provHTML = provenanceHTML(doc);
  renderedDocId = null;
  body.classList.remove('has-toc');
  body.innerHTML = provHTML + '<div class="archive-md archive-loading">…</div>';
  body.scrollTop = 0;
  updateNav();
  body.focus({ preventScroll: true });

  try {
    const entry = await fetchDoc(id);
    if (currentDocId !== id) return; // user navigated away mid-fetch
    body.innerHTML = provHTML + '<div class="archive-md">' + entry.html + '</div>' + endHTML(id);
    // The contents list leads the fragment; lift it beside the text, where the
    // wide reader makes it a rail
    const md = body.querySelector('.archive-md');
    const toc = md.querySelector(':scope > .archive-toc');
    if (toc) {
      md.before(toc);
      toc.open = RAIL.matches;
    }
    body.classList.toggle('has-toc', !!toc);
    renderedDocId = id;
    scrollersFocusable();
    toSlug(slug);
  } catch (e) {
    if (currentDocId !== id) return;
    body.innerHTML = provHTML + '<div class="archive-md"><p>Could not load this document. Check your connection and try again.</p></div>';
  }
  // The text has the focus, not the close button: the keys scroll it
  body.focus({ preventScroll: true });
}

// Opened from search: the reader shows the first place the query's words
// appear, marked, in the middle of the text's window
export async function openDocById(id, q = '', from = null) {
  await openDoc(id, from);
  const words = queryWords(q);
  if (!words.length || renderedDocId !== id) return;
  const md = $('archivePanelBody').querySelector('.archive-md');
  const walk = document.createTreeWalker(md, NodeFilter.SHOW_TEXT);
  for (let node = walk.nextNode(); node; node = walk.nextNode()) {
    const low = node.data.toLowerCase();
    const hits = words.map((w) => [low.indexOf(w), w.length]).filter(([i]) => i >= 0);
    if (!hits.length) continue;
    const [at, len] = hits.reduce((a, b) => (b[0] < a[0] ? b : a));
    const mark = document.createElement('mark');
    mark.className = 'search-hit';
    const range = document.createRange();
    range.setStart(node, at);
    range.setEnd(node, at + len);
    range.surroundContents(mark);
    mark.scrollIntoView({ block: 'center' });
    return;
  }
}

// Closing goes back through history when opening made an entry; the
// hashchange that follows does the closing itself (closeVisual)
function closePanel() {
  if (closing) return;
  if (history.state?.esDoc) {
    closing = true;
    history.back();
    // Should Back have had nowhere to go (no popstate came), close here rather
    // than leave the reader stuck open
    setTimeout(() => {
      if (!closing || !isOpen()) return;
      closeVisual();
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }, 600);
  } else {
    closeVisual();
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function closeVisual() {
  $('archivePanel').classList.remove('open');
  $('archivePanelOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('panel-open');
  for (const el of inerted) el.inert = false;
  inerted = [];

  // Back to what opened the reader (search may have redrawn a card since);
  // a cold link lands on the Archive, on the card of the document last read
  let back = lastFocused;
  if (back && !back.isConnected) back = cardLink(back.dataset.doc);
  if (landing) {
    $('archive-section').scrollIntoView();
    back = back || cardLink(currentDocId);
  }
  back?.focus({ preventScroll: true });

  currentDocId = renderedDocId = lastFocused = null;
  landing = closing = false;
}

function navPrev() {
  const idx = getDocIndex(currentDocId);
  if (idx > 0) openDoc(DOCS[idx - 1].id);
}

function navNext() {
  const idx = getDocIndex(currentDocId);
  if (idx >= 0 && idx < DOCS.length - 1) openDoc(DOCS[idx + 1].id);
}

function updateNav() {
  const idx = getDocIndex(currentDocId);
  $('archiveBtnPrev').disabled = idx <= 0;
  $('archiveBtnNext').disabled = idx < 0 || idx >= DOCS.length - 1;
}

// Keep keyboard focus inside the dialog while it's open
function trapFocus(e) {
  const panel = $('archivePanel');
  if (!panel.classList.contains('open') || e.key !== 'Tab') return;
  const focusables = Array.from(panel.querySelectorAll('button:not([disabled]), summary, a[href], [tabindex="0"]'))
    .filter((el) => el.getClientRects().length > 0);
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    last.focus();
    e.preventDefault();
  } else if (!e.shiftKey && document.activeElement === last) {
    first.focus();
    e.preventDefault();
  }
}

// A link to where the reader is now: the document, and the heading above the
// top of the text once it has scrolled past one
let copiedTimer = null;
async function copyLink() {
  if (!currentDocId) return;
  const slug = currentSlug();
  const url = location.origin + location.pathname + '#doc/' + currentDocId + (slug ? '/' + slug : '');
  const ok = await copyText(url);
  const btn = $('archiveCopyLink');
  btn.classList.toggle('is-copied', ok);
  $('archiveStatus').textContent = ok ? 'Link copied' : 'Copy failed — the address bar has the link to this document';
  clearTimeout(copiedTimer);
  copiedTimer = setTimeout(() => {
    btn.classList.remove('is-copied');
    $('archiveStatus').textContent = '';
  }, 2000);
}

// ── Init ─────────────────────────────────────────────────

export function initArchive() {
  // A card is opened by its title link, so the keyboard and the click are the
  // link's own; without script the link opens the document's page instead
  $('archiveGrid').addEventListener('click', (e) => {
    const link = e.target.closest('a[data-doc]');
    if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openDoc(link.dataset.doc, link);
  });

  // Every other way in (an idea's link, Onward, a contents list) is a
  // #doc/ link: each opens the reader with exactly one history entry
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#doc/"]');
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const at = parseDocHash(link.getAttribute('href'));
    if (!at) return;
    e.preventDefault();
    openDoc(at.id, link, at.slug);
  });

  // The site-wide search box (search.js) drives this module; warm the
  // full-text index the first time it is focused.
  const search = $('siteSearch');
  search?.addEventListener('focus', ensureContentIndex, { once: true });

  $('archivePanelOverlay').addEventListener('click', closePanel);
  $('archivePanelClose').addEventListener('click', closePanel);
  $('archiveBtnPrev').addEventListener('click', navPrev);
  $('archiveBtnNext').addEventListener('click', navNext);
  $('archiveCopyLink').addEventListener('click', copyLink);
  $('archiveBreadcrumbs').addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closePanel();
  });
  $('archivePanelBody').addEventListener('click', (e) => {
    const nav = e.target.closest('[data-nav]');
    if (nav) (nav.dataset.nav === 'prev' ? navPrev : navNext)();
  });
  RAIL.addEventListener?.('change', () => {
    const toc = $('archivePanelBody').querySelector('.archive-toc');
    if (toc) toc.open = RAIL.matches;
  });
  let sized = null;
  window.addEventListener('resize', () => {
    if (isOpen() && sized === null) sized = requestAnimationFrame(() => { sized = null; scrollersFocusable(); });
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      closePanel();
      e.preventDefault();
    } else if (e.key === 'Tab') {
      trapFocus(e);
    } else if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.target.closest('input, textarea, select, [contenteditable]')) {
      // [ and ] turn the page; the arrows, Space and PageDown are left to the text
      if (e.key === '[') { navPrev(); e.preventDefault(); }
      else if (e.key === ']') { navNext(); e.preventDefault(); }
    }
  });

  // Deep link (#doc/<id>[/<slug>]) on load. Arriving cold, the Archive is put
  // beneath the reader, so that closing it (or Back) lands there and not off
  // the site; a reload of an open reader keeps the history it had.
  const at = parseDocHash(location.hash);
  if (at) {
    if (history.state?.esDoc !== at.id) {
      history.replaceState(null, '', '#archive-section');
      $('archive-section').scrollIntoView();
      history.pushState({ esDoc: at.id }, '', '#doc/' + at.id + (at.slug ? '/' + at.slug : ''));
      landing = true;
    }
    openDoc(at.id, null, at.slug);
  }

  // Back and Forward, and any hash typed into the address bar. Closing returns
  // the page to the entry it was opened from, exactly as it was: no other
  // listener may act on that entry's hash again (ideas.js would re-open and
  // scroll to an #idea/ the reader was opened from). This listener is added
  // first, because main.js starts the archive before the ideas.
  window.addEventListener('hashchange', (e) => {
    const now = parseDocHash(location.hash);
    if (now) openDoc(now.id, null, now.slug);
    else if (isOpen()) {
      closeVisual();
      e.stopImmediatePropagation();
    }
  });
  window.addEventListener('popstate', () => { closing = false; });
}
