// The Ideas dashboard — every Earth Star concept as a compact tile.
// Lens chips filter by facet; the site search (search.js) filters by text.
// Tiles expand in place; the URL hash #idea/<id> deep-links and expands.
// Rows are always full: an open tile has a row of its own (site.css), and the
// tiles of a short last row share it between them (coda, below).

let activeLens = 'all';
let query = '';

function tiles() { return Array.from(document.querySelectorAll('.idea')); }

export function ideaMatches(el, q) {
  if (!q) return true;
  const hay = (el.dataset.search || '').toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}

// Count what is visible and closed, never :nth-child (which counts hidden
// tiles). A last row of n tiles across c columns gives each about c/n of it,
// so a lone tile spans the row and none leaves a hole beside it.
function coda() {
  const grid = document.getElementById('ideas-grid');
  if (!grid) return;
  const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  const closed = tiles().filter((el) => !el.hidden && !el.classList.contains('is-open'));
  const n = cols > 1 ? closed.length % cols : 0;
  const last = closed.slice(closed.length - n);
  const base = Math.floor(cols / (n || 1)), wide = cols % (n || 1);
  for (const el of tiles()) {
    const i = last.indexOf(el);
    const span = i < 0 ? '' : String(base + (i >= n - wide ? 1 : 0));
    el.classList.toggle('is-coda', i >= 0);
    if (el.style.getPropertyValue('--span') !== span) {
      if (span) el.style.setProperty('--span', span); else el.style.removeProperty('--span');
    }
  }
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
  btn.setAttribute('aria-expanded', 'true');
  more.hidden = false;
  el.classList.add('is-open');
  coda();
  if (scroll) el.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return true;
}

export function initIdeas() {
  const grid = document.getElementById('ideas-grid');
  if (!grid) return;

  // Opening names the tile in the URL; closing it hands the URL back to the
  // section. Both replace, so expanding never adds a history entry.
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.idea-head');
    if (!btn) return;
    const el = btn.closest('.idea');
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    el.querySelector('.idea-more').hidden = open;
    el.classList.toggle('is-open', !open);
    coda();
    if (!open) history.replaceState(null, '', '#idea/' + el.dataset.id);
    else if (location.hash === '#idea/' + el.dataset.id) history.replaceState(null, '', '#ideas');
  });

  const chips = document.getElementById('ideas-lenses');
  chips?.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-lens]');
    if (!chip) return;
    activeLens = chip.dataset.lens;
    for (const c of chips.querySelectorAll('[data-lens]')) c.setAttribute('aria-pressed', String(c === chip));
    apply();
  });

  const hash = location.hash;
  if (hash.startsWith('#idea/')) expandIdea(hash.slice(6));
  window.addEventListener('hashchange', () => {
    if (location.hash.startsWith('#idea/')) expandIdea(location.hash.slice(6));
  });

  // The column count follows the container (site.css), so recount when the
  // grid resizes — on the next frame, never inside the observer's callback
  if ('ResizeObserver' in window) new ResizeObserver(() => requestAnimationFrame(coda)).observe(grid);

  apply();
}
