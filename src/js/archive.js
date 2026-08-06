// The Archive — document library.
// Doc bodies are pre-rendered to HTML fragments at build time and fetched on
// demand (they were previously ~55KB of strings embedded in the critical HTML).

import { DOCS } from './manifest.gen.js';
import { cardHTML, esc } from './card-template.mjs';

let searchQuery = '';
let currentDocId = null;
let lastFocusedCard = null;

// id → { html, text } — fetched fragments, cached for the session
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
  const entry = { html, text: tmp.textContent.toLowerCase() };
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

function renderGrid() {
  const grid = $('archiveGrid');
  let filtered = DOCS;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = DOCS.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q)) ||
      (docCache.get(d.id)?.text.includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="archive-empty">no documents found</div>';
    return;
  }
  grid.innerHTML = filtered.map(cardHTML).join('');
}

function handleSearch(q) {
  searchQuery = q;
  if (q) {
    ensureContentIndex().then(() => {
      // Re-filter once bodies arrive (only if the query is still live)
      if (searchQuery) renderGrid();
    });
  }
  renderGrid();
}

// ── Panel ────────────────────────────────────────────────

function getDocIndex(id) { return DOCS.findIndex(d => d.id === id); }

async function openDoc(id, fromCard) {
  const doc = DOCS.find(d => d.id === id);
  if (!doc) return;

  currentDocId = id;
  if (fromCard) lastFocusedCard = fromCard;
  history.replaceState(null, '', '#doc/' + id);

  $('archivePanel').classList.add('open');
  $('archivePanelOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('panel-open');

  $('archiveBreadcrumbs').innerHTML = `
    <span class="archive-crumb archive-crumb-root" data-close role="button" tabindex="0">The Archive</span>
    <span class="archive-crumb-sep">/</span>
    <span class="archive-crumb">${esc(doc.category)}</span>
    <span class="archive-crumb-sep">/</span>
    <span class="archive-crumb archive-crumb-title" id="archiveDocTitle">${esc(doc.title)}</span>
  `;

  const body = $('archivePanelBody');
  const prov = doc.provenance;
  const provHTML = prov ? `
    <div class="archive-provenance">
      <span class="prov-status">${esc(prov.status)}</span>
      <span class="prov-meta">${esc(prov.author)} · ${esc(prov.date)}</span>
    </div>` : '';

  body.innerHTML = provHTML + '<div class="archive-md archive-loading">…</div>';
  body.scrollTop = 0;
  updateNav();
  $('archivePanelClose').focus();

  try {
    const entry = await fetchDoc(id);
    if (currentDocId !== id) return; // user navigated away mid-fetch
    body.innerHTML = provHTML + '<div class="archive-md">' + entry.html + '</div>';
    body.scrollTop = 0;
  } catch (e) {
    if (currentDocId !== id) return;
    body.innerHTML = provHTML + '<div class="archive-md"><p>Could not load this document. Check your connection and try again.</p></div>';
  }
}

function closePanel() {
  $('archivePanel').classList.remove('open');
  $('archivePanelOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('panel-open');
  currentDocId = null;
  history.replaceState(null, '', window.location.pathname + window.location.search);
  if (lastFocusedCard && lastFocusedCard.isConnected) lastFocusedCard.focus();
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
  const prev = idx > 0 ? DOCS[idx - 1] : null;
  const next = idx >= 0 && idx < DOCS.length - 1 ? DOCS[idx + 1] : null;

  $('archiveBtnPrev').disabled = !prev;
  $('archiveBtnNext').disabled = !next;

  const prevEl = $('archiveFooterPrev');
  const nextEl = $('archiveFooterNext');
  prevEl.toggleAttribute('disabled', !prev);
  nextEl.toggleAttribute('disabled', !next);
  $('archivePrevName').textContent = prev ? prev.title : '';
  $('archiveNextName').textContent = next ? next.title : '';
}

// Keep keyboard focus inside the dialog while it's open
function trapFocus(e) {
  const panel = $('archivePanel');
  if (!panel.classList.contains('open') || e.key !== 'Tab') return;
  const focusables = panel.querySelectorAll('button:not([disabled]), [tabindex="0"], a[href]');
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

// ── Init ─────────────────────────────────────────────────

export function initArchive() {
  const grid = $('archiveGrid');

  // Card activation (click + Enter/Space) via delegation
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.archive-card');
    if (card) openDoc(card.dataset.id, card);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.archive-card');
    if (card) {
      e.preventDefault();
      openDoc(card.dataset.id, card);
    }
  });

  const search = $('archiveSearch');
  search.addEventListener('input', () => handleSearch(search.value));
  search.addEventListener('focus', ensureContentIndex, { once: true });

  $('archivePanelOverlay').addEventListener('click', closePanel);
  $('archivePanelClose').addEventListener('click', closePanel);
  $('archiveBtnPrev').addEventListener('click', navPrev);
  $('archiveBtnNext').addEventListener('click', navNext);
  $('archiveFooterPrev').addEventListener('click', navPrev);
  $('archiveFooterNext').addEventListener('click', navNext);
  $('archiveBreadcrumbs').addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closePanel();
  });

  document.addEventListener('keydown', (e) => {
    if (!$('archivePanel').classList.contains('open')) return;
    if (e.key === 'Escape') {
      closePanel();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      navPrev();
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      navNext();
      e.preventDefault();
    } else {
      trapFocus(e);
    }
  });

  // Deep link (#doc/<id>) + back/forward
  function openFromHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#doc/')) {
      const id = hash.slice(5);
      if (DOCS.find(d => d.id === id)) {
        openDoc(id);
        return true;
      }
    }
    return false;
  }

  openFromHash();
  window.addEventListener('hashchange', () => {
    if (!openFromHash() && currentDocId) closePanel();
  });
}
