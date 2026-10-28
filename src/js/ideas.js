// The Ideas dashboard — every Earth Star concept as a compact tile.
// Lens chips filter by facet; the site search (search.js) filters by text.
// Tiles expand in place; the URL hash #idea/<id> deep-links and expands, and
// ?lens=<id> keeps the chosen lens, so a filtered view can be shared.
// Tiles keep the page's order. Rows are always full: an open tile has a row of
// its own (site.css), and the closed tiles of a short row (the last, or the
// one an open tile ends) share it between them (coda, below).

import { queryWords, matchesAll } from './match.js';

let activeLens = 'all';
let query = '';

function tiles() { return Array.from(document.querySelectorAll('.idea')); }

export function ideaMatches(el, q) {
  return matchesAll(el.dataset.search, queryWords(q));
}

// The grid's columns as a card counts them, and the tracks each one spans:
// from 1001 px the three columns are six half-tracks (site.css)
function columns(grid) {
  const tracks = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  return tracks === 6 ? { cols: 3, unit: 2 } : { cols: tracks, unit: 1 };
}

// A run of closed tiles (from the grid's start or an open tile, to the next
// open tile or the end) fills whole rows but for the n left at its tail;
// those n share their row, each about c/n of it, so none leaves a hole beside
// it. On three columns a lone last tile would stand across the whole row, a
// closed card shaped like an open one: the last four set two over two instead.
function share(run, { cols, unit }, spans) {
  const n = cols > 1 ? run.length % cols : 0;
  if (!n) return;
  if (cols === 3 && unit === 2 && n === 1 && run.length >= 4) {
    for (const el of run.slice(-4)) spans.set(el, 3);
    return;
  }
  const tracks = cols * unit;
  const base = Math.floor(tracks / n), wide = tracks % n;
  run.slice(run.length - n).forEach((el, i) => spans.set(el, base + (i >= n - wide ? 1 : 0)));
}

// Count what is visible, never :nth-child (which counts hidden tiles), and
// walk it in the page's order
function coda() {
  const grid = document.getElementById('ideas-grid');
  if (!grid) return;
  const cols = columns(grid);
  const spans = new Map();
  let run = [];
  for (const el of tiles()) {
    if (el.hidden) continue;
    if (el.classList.contains('is-open')) { share(run, cols, spans); run = []; } else run.push(el);
  }
  share(run, cols, spans);
  for (const el of tiles()) {
    const span = spans.has(el) ? String(spans.get(el)) : '';
    el.classList.toggle('is-coda', !!span);
    if (el.style.getPropertyValue('--span') !== span) {
      if (span) el.style.setProperty('--span', span); else el.style.removeProperty('--span');
    }
  }
}

// Opening or closing a tile reflows the rows around it; the head under the
// pointer (or the keys) stays at its height on the screen
function holdStill(head, change) {
  const y0 = head.getBoundingClientRect().top;
  change();
  const dy = head.getBoundingClientRect().top - y0;
  if (Math.abs(dy) > 1) window.scrollBy({ top: dy, behavior: 'instant' });
}

function apply() {
  let shown = 0;
  for (const el of tiles()) {
    const lensOk = activeLens === 'all' || (el.dataset.lens || '').split(' ').includes(activeLens);
    const ok = lensOk && ideaMatches(el, query);
    el.hidden = !ok;
    if (ok) shown++;
  }
  const count = document.getElementById('ideas-count');
  if (count) count.textContent = shown === tiles().length ? `${shown} ideas` : `${shown} of ${tiles().length} ideas`;
  const empty = document.getElementById('ideas-empty');
  if (empty) empty.hidden = shown !== 0;
  coda();
}

export function setIdeasQuery(q) {
  query = q;
  apply();
}

export function expandIdea(id, scroll = true) {
  const el = document.getElementById('idea-' + id);
  if (!el) return false;
  el.hidden = false;
  const btn = el.querySelector('.idea-head');
  const more = el.querySelector('.idea-more');
  const open = () => {
    btn.setAttribute('aria-expanded', 'true');
    more.hidden = false;
    el.classList.add('is-open');
    coda();
  };
  if (!scroll) { holdStill(btn, open); return true; }
  open();
  el.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return true;
}

// The page ships each head as a plain line, its notes open to a reader without
// script (site.css); here each becomes the button that opens and closes them
function headsToButtons(grid) {
  for (const head of grid.querySelectorAll('div.idea-head')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'idea-head';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', head.closest('.idea').id + '-more');
    btn.append(...head.childNodes);
    head.replaceWith(btn);
  }
}

export function initIdeas() {
  const grid = document.getElementById('ideas-grid');
  if (!grid) return;
  headsToButtons(grid);

  // Opening names the tile in the URL; closing it hands the URL back to the
  // section. Both replace, so expanding never adds a history entry.
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.idea-head');
    if (!btn) return;
    const el = btn.closest('.idea');
    const open = btn.getAttribute('aria-expanded') === 'true';
    holdStill(btn, () => {
      btn.setAttribute('aria-expanded', String(!open));
      el.querySelector('.idea-more').hidden = open;
      el.classList.toggle('is-open', !open);
      coda();
    });
    if (!open) history.replaceState(null, '', '#idea/' + el.dataset.id);
    else if (location.hash === '#idea/' + el.dataset.id) history.replaceState(null, '', '#ideas');
  });

  // A lens is part of the address (?lens=, beside any #idea/ or #doc/ hash);
  // 'all' is the plain page. Replaced, never pushed: a lens is a view, not a step.
  const chips = document.getElementById('ideas-lenses');
  const press = (chip) => {
    activeLens = chip.dataset.lens;
    for (const c of chips.querySelectorAll('[data-lens]')) c.setAttribute('aria-pressed', String(c === chip));
  };
  chips?.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-lens]');
    if (!chip) return;
    press(chip);
    apply();
    const url = new URL(location.href);
    if (activeLens === 'all') url.searchParams.delete('lens');
    else url.searchParams.set('lens', activeLens);
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  });
  const lens = new URLSearchParams(location.search).get('lens');
  const chip = lens && [...(chips?.querySelectorAll('[data-lens]') || [])].find((c) => c.dataset.lens === lens);
  if (chip) press(chip);

  // The column count follows the container (site.css), so recount when the
  // grid resizes — on the next frame, never inside the observer's callback
  if ('ResizeObserver' in window) new ResizeObserver(() => requestAnimationFrame(coda)).observe(grid);

  apply();

  // (after the lens: a linked idea opens even where the lens would hide it)
  const hash = location.hash;
  if (hash.startsWith('#idea/')) expandIdea(hash.slice(6));
  window.addEventListener('hashchange', () => {
    if (location.hash.startsWith('#idea/')) expandIdea(location.hash.slice(6));
  });
}
