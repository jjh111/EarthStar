// The Ideas dashboard — every Earth Star concept as a compact tile.
// Lens chips filter by facet; the site search (search.js) filters by text.
// Tiles expand in place; the URL hash #idea/<id> deep-links and expands.

let activeLens = 'all';
let query = '';

function tiles() { return Array.from(document.querySelectorAll('.idea')); }

export function ideaMatches(el, q) {
  if (!q) return true;
  const hay = (el.dataset.search || '').toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
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
  if (scroll) el.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return true;
}

export function initIdeas() {
  const grid = document.getElementById('ideas-grid');
  if (!grid) return;

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.idea-head');
    if (!btn) return;
    const el = btn.closest('.idea');
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    el.querySelector('.idea-more').hidden = open;
    el.classList.toggle('is-open', !open);
    if (!open) history.replaceState(null, '', '#idea/' + el.dataset.id);
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

  apply();
}
