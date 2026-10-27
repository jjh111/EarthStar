// One search over everything on the page. Ideas and archive documents filter
// in place as you type, by one rule (match.js); and what was found opens under
// the field wherever you are, grouped (Ideas, Gomens, Documents, then the
// Works and the field guide's species), with the words it matched marked.
// Structure is the floor — no model, no network but the documents' own text
// and the works' index, which load on first focus.
// `/` focuses the box. ↓ and ↑ move through the list and Enter opens; with
// nothing chosen, Enter opens the first idea, else the first document. Escape
// closes the list, then clears the field. ?q= keeps the query in the address.

import { setIdeasQuery, expandIdea } from './ideas.js';
import { setArchiveQuery, searchDocs, openDocById } from './archive.js';
import { queryWords, matchesAll, snippet } from './match.js';
import { esc } from './card-template.mjs';

const PER_GROUP = 4;
const COARSE = window.matchMedia('(pointer: coarse)');
const groups = [];

// A kind of thing search can find. `items` is a list of { id, title, text,
// about } — the words are matched in `text`, and the line under the title is
// cut from `about` — or a function of the query that returns { id, title,
// snippet } already matched. `open(id, q)` takes the visitor to it.
// The last argument puts the group's finds in the count line, for a kind the
// page does not filter in a list of its own (the Gomens, the works, the
// species): `count` is its word, [one, many], `where` the section holding them.
export function registerSearchGroup(name, items, open, { count, where } = {}) {
  groups.push({ name, items, open, count, where });
}

function find(q) {
  const words = queryWords(q);
  if (!words.length) return [];
  return groups.map((g) => ({
    ...g,
    hits: typeof g.items === 'function' ? g.items(q)
      : g.items.filter((it) => matchesAll(it.text, words))
        .map((it) => ({ id: it.id, title: it.title, snippet: snippet(it.about ?? it.text, words) })),
  })).filter((g) => g.hits.length);
}

// The words marked where they appear, everything else escaped
function marked(text, words) {
  if (!words.length) return esc(text);
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .sort((a, b) => b.length - a.length).join('|')})`, 'gi');
  return String(text).split(re).map((part, i) => (i % 2 ? `<mark>${esc(part)}</mark>` : esc(part))).join('');
}

const smooth = () => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');

// The three groups on the page; the Works and the field guide's species join
// through registerSearchGroup (works.js)
function registerPageGroups(input) {
  // Ideas: the tiles the page is showing, which the query and the lens have
  // already filtered by the same rule, so the list and the count agree
  const ideas = [...document.querySelectorAll('.idea')].map((el) => ({
    el, id: el.dataset.id,
    title: el.querySelector('.idea-name')?.textContent || '',
    about: `${el.querySelector('.idea-meaning')?.textContent || ''} ${el.querySelector('.idea-more')?.textContent || ''}`,
  }));
  registerSearchGroup('Ideas', (q) => {
    const words = queryWords(q);
    return ideas.filter((it) => !it.el.hidden).map((it) => ({ id: it.id, title: it.title, snippet: snippet(it.about, words) }));
  }, openIdea);

  // Gomens: one to a scale, found by scale, name, reading and lore; opening
  // one brings its card to the middle of the screen and its name into focus
  const gomens = [...document.querySelectorAll('.scale')].map((el) => {
    const text = (s) => el.querySelector(s)?.textContent.replace(/\s+/g, ' ').trim() || '';
    const scale = text('.scale-name'), radicals = text('.gomen-radicals');
    const name = el.querySelector('.gomen-name')?.firstChild?.textContent.trim() || '';
    const reading = el.querySelector('.gomen-reading')?.lastChild?.textContent.trim() || '';
    const lore = text('.gomen-line');
    return { id: el.id, title: name, text: [scale, name, radicals, reading, lore].join(' '), about: `${scale} · ${reading}. ${lore}` };
  });
  registerSearchGroup('Gomens', gomens, (id) => {
    const card = document.getElementById(id);
    if (!card) return;
    card.scrollIntoView({ block: 'center', behavior: smooth() });
    const name = card.querySelector('.gomen-name');
    if (name) { name.tabIndex = -1; name.focus({ preventScroll: true }); }
  }, { count: ['Gomen', 'Gomens'], where: '#scales' });

  // Documents: the catalogue and, once loaded, every document's text; opened
  // in the reader at the first place the words appear. Focus comes back to
  // the field when it closes, except on touch screens, where that would raise
  // the keyboard again.
  registerSearchGroup('Documents', searchDocs, (id, q) => openDocById(id, q, COARSE.matches ? null : input));
}

// An idea from search opens like a tapped one: expanded, named in the URL,
// brought into view. Never a click, which would close an open one.
function openIdea(id) {
  if (expandIdea(id)) history.replaceState(null, '', '#idea/' + id);
}

export function initSearch() {
  const input = document.getElementById('siteSearch');
  const search = input?.closest('.wf-search');
  const nav = input?.closest('.wayfinder');
  const pop = document.getElementById('searchPop');
  const list = document.getElementById('searchResults');
  const status = document.getElementById('search-status');
  if (!input || !search || !pop || !list) return;
  const count = pop.querySelector('.search-count');
  const all = pop.querySelector('.search-all');
  registerPageGroups(input);

  let options = [];   // what the list offers, in order: { group, id }
  let active = -1;    // the option the keys are on; -1 is the field itself
  const isOpen = () => !pop.hidden;

  function setActive(i) {
    list.querySelector('[aria-selected="true"]')?.setAttribute('aria-selected', 'false');
    active = i;
    const opt = i >= 0 ? document.getElementById('sr-' + i) : null;
    if (!opt) { active = -1; input.removeAttribute('aria-activedescendant'); return; }
    opt.setAttribute('aria-selected', 'true');
    input.setAttribute('aria-activedescendant', opt.id);
    opt.scrollIntoView({ block: 'nearest' });
  }

  // The list, and the count it shares with the live region. The status is
  // written only when its words change, so a screen reader hears each count once.
  let said = '';
  function show(q, keep = false) {
    const words = queryWords(q);
    const found = find(q);
    const was = keep && active >= 0 ? options[active] : null;
    options = [];
    list.innerHTML = found.map((g, gi) => `<div class="sr-group" role="group" aria-labelledby="sr-g${gi}">
      <div class="sr-head" id="sr-g${gi}" role="presentation">${esc(g.name)} <span class="sr-n">${g.hits.length}</span></div>
      ${g.hits.slice(0, PER_GROUP).map((h) => {
        const i = options.push({ group: g, id: h.id }) - 1;
        return `<div class="sr-opt" role="option" id="sr-${i}" aria-selected="false"><span class="sr-title">${marked(h.title, words)}</span><span class="sr-snip">${marked(h.snippet, words)}</span></div>`;
      }).join('')}
    </div>`).join('');
    list.hidden = options.length === 0;
    setActive(was ? options.findIndex((o) => o.group.name === was.group.name && o.id === was.id) : -1);

    // ideas and documents as the page shows them; then whatever else was found
    const ideas = document.querySelectorAll('.idea:not([hidden])').length;
    const docs = document.querySelectorAll('#archiveGrid .archive-card').length;
    const more = found.filter((g) => g.count);
    const n = (k, one, many = one + 's') => `${k} ${k === 1 ? one : many}`;
    const line = q ? [n(ideas, 'idea'), ...more.map((g) => n(g.hits.length, ...g.count)), n(docs, 'document')].join(' · ') : '';
    if (status && line !== said) status.textContent = said = line;
    const none = ideas + docs + more.length === 0;
    count.textContent = none ? 'Nothing here matches — try fewer words' : line;
    all.hidden = none;
    all.setAttribute('href', ideas ? '#ideas' : docs ? '#archive-section' : more[0]?.where || '#scales');
  }

  // The list opens under the bar wherever you are; on the cover the bar has
  // not reached the top of the screen yet, so it is brought there
  function barToTop() {
    const top = nav.getBoundingClientRect().top;
    if (top > 0.5) window.scrollBy(0, top);
  }
  function openList() {
    if (!input.value.trim()) return;
    pop.hidden = false;
    search.classList.add('pop-open');
    input.setAttribute('aria-expanded', 'true');
    barToTop();
  }
  function closeList() {
    if (!isOpen()) return;
    setActive(-1);
    pop.hidden = true;
    search.classList.remove('pop-open');
    input.setAttribute('aria-expanded', 'false');
  }

  // After opening something on a touch screen, let go of the field so the
  // keyboard folds away from what was opened
  function settle() { if (COARSE.matches && document.activeElement === input) input.blur(); }
  function choose(i) {
    const o = options[i];
    if (!o) return;
    closeList();
    writeURL();
    o.group.open(o.id, input.value.trim());
    settle();
  }

  // The query lives in the address (?q=), beside any #idea/ or #doc/ hash,
  // replaced a moment after typing stops and dropped when the field is empty.
  // Anything search opens writes it first, so Back returns to the query too.
  let urlTimer = 0;
  function writeURL() {
    clearTimeout(urlTimer);
    const q = input.value.trim();
    const url = new URL(location.href);
    if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
    if (url.search !== location.search) history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }
  const keepInURL = () => { clearTimeout(urlTimer); urlTimer = setTimeout(writeURL, 300); };

  let raf = 0;
  const run = () => {
    raf = 0;
    const q = input.value.trim();
    setIdeasQuery(q);
    setArchiveQuery(q);
    document.body.classList.toggle('is-searching', q.length > 0);
    show(q);
    if (!q) closeList();
    else if (document.activeElement === input) openList();
    keepInURL();
  };
  input.addEventListener('input', () => { if (!raf) raf = requestAnimationFrame(run); });
  // the keys act on what was typed, even within the frame it was typed in
  const flush = () => { if (raf) { cancelAnimationFrame(raf); run(); } };
  // the documents' text has arrived (archive.js): recount, and keep the key's place
  document.addEventListener('earthstar:search-updated', () => show(input.value.trim(), true));

  input.addEventListener('keydown', (e) => {
    if (e.isComposing) return;
    const q = input.value.trim();
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      flush();
      if (!q) return;
      e.preventDefault();
      if (!isOpen()) { openList(); setActive(options.length ? 0 : -1); return; }
      const n = options.length;
      if (n) setActive(e.key === 'ArrowDown' ? (active + 1) % n : (active <= 0 ? n - 1 : active - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      flush();
      if (isOpen() && active >= 0) { choose(active); return; }
      if (!q) return;
      const idea = document.querySelector('.idea:not([hidden])');
      const doc = document.querySelector('#archiveGrid .archive-card');
      closeList();
      writeURL();
      if (idea) openIdea(idea.dataset.id);
      else if (doc) openDocById(doc.dataset.id, q, COARSE.matches ? null : input);
      settle();
    } else if (e.key === 'Escape') {
      // (and the field's own Escape, which would clear it at the first press)
      e.preventDefault();
      if (isOpen()) closeList();
      else if (input.value) { input.value = ''; run(); }
      else input.blur();
    }
  });

  // The list keeps the focus in the field: a press on an option chooses it
  // without the field letting go first. (Its scrollbar still drags, and the
  // list is never a stop of its own: the keys reach it through the field.)
  list.addEventListener('mousedown', (e) => { if (e.target !== list) e.preventDefault(); });
  list.addEventListener('focus', () => input.focus({ preventScroll: true }));
  list.addEventListener('click', (e) => {
    const opt = e.target.closest('[role="option"]');
    if (opt) choose(Number(opt.id.slice(3)));
  });
  all.addEventListener('click', () => { closeList(); input.blur(); });
  input.addEventListener('focus', openList);
  input.addEventListener('click', () => { if (!isOpen()) openList(); });
  search.addEventListener('focusout', (e) => { if (isOpen() && e.relatedTarget && !search.contains(e.relatedTarget)) closeList(); });
  document.addEventListener('click', (e) => { if (isOpen() && !search.contains(e.target)) closeList(); });

  // (not while the archive reader or a film is open: the page behind is inert)
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (document.body.classList.contains('panel-open') || document.querySelector('dialog[open]')) return;
    e.preventDefault();
    input.focus({ preventScroll: true });
    input.select();
    barToTop();
  });

  // A shared ?q= arrives searched: the page filtered and the count said, the
  // list waiting for the field to be used
  const q = new URLSearchParams(location.search).get('q');
  if (q) { input.value = q; run(); }
}
