// The Works — the films play in one dialog over the page, and the works and the
// field guide's species join search.
// A film card is a link to the film's file (so it plays without script); here
// it opens the dialog instead. Nothing plays by itself, and nothing of the film
// loads until play is pressed (preload=none). Opening is one history entry,
// #film/<id>, so Back closes it, as Escape and × do, and focus returns to the
// card it was opened from. The tall cut of 'the loom, lifted' plays on a
// portrait screen.

import { registerSearchGroup } from './search.js';
import { queryWords, matchesAll, snippet } from './match.js';

const FILM_HASH = /^#film\/([\w-]+)$/;
let dialog = null;
let opener = null;
let closing = false;   // × or Escape has asked history to step back
let unwinding = false; // the dialog is shut, and its entry is being stepped off

const link = (id) => document.querySelector(`a.work-open[data-film="${id}"]`);
const isOpen = () => !!dialog?.open;

function build() {
  dialog = document.createElement('dialog');
  dialog.className = 'film-dialog';
  dialog.setAttribute('aria-labelledby', 'filmTitle');
  dialog.innerHTML = `<div class="film-head">
      <h2 class="film-title" id="filmTitle"></h2>
      <p class="film-meta"></p>
      <button type="button" class="film-close" aria-label="Close the film" title="Close (Esc)">&times;</button>
    </div>`;
  document.body.appendChild(dialog);
  dialog.querySelector('.film-close').addEventListener('click', close);
  // Escape asks to close: through history, like ×. (When the browser will not
  // let it ask, the dialog just closes, and settle steps off its entry.)
  dialog.addEventListener('cancel', (e) => { if (!e.cancelable) return; e.preventDefault(); close(); });
  // a press on the backdrop (the dialog's own box, outside its contents) closes it
  dialog.addEventListener('click', (e) => { if (e.target === dialog) close(); });
  dialog.addEventListener('close', settle);
}

function show(id) {
  const a = link(id);
  if (!a) return false;
  if (!dialog) build();
  const card = a.closest('.work');
  dialog.dataset.film = id;
  dialog.querySelector('.film-title').textContent = a.firstChild.textContent;
  dialog.querySelector('.film-meta').innerHTML = card.querySelector('.work-kicker').innerHTML
    + ` · ${card.querySelector('.work-prov')?.textContent || ''}`;
  // A new player for each film, its sources in place before it joins the
  // page: the tall cut first, for portrait screens, then the film itself.
  // (Never load() it: Chromium fetches on an explicit load() despite
  // preload=none; a player that arrives with its sources waits for play.)
  const video = document.createElement('video');
  Object.assign(video, { controls: true, playsInline: true, preload: 'none', poster: a.dataset.poster || '' });
  video.append(...[[a.dataset.tall, '(orientation: portrait)'], [a.getAttribute('href')]]
    .filter(([src]) => src).map(([src, media]) => {
      const s = document.createElement('source');
      s.src = src;
      s.type = 'video/mp4';
      if (media) s.media = media;
      return s;
    }));
  dialog.querySelector('video')?.remove();
  dialog.append(video);
  if (!isOpen()) {
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
  video.focus({ preventScroll: true });
  return true;
}

export function openFilm(id, from = null) {
  if (!link(id)) return;
  opener = from;
  const hash = '#film/' + id;
  if (location.hash !== hash) {
    if (history.state?.esFilm) history.replaceState({ esFilm: id }, '', hash);
    else history.pushState({ esFilm: id }, '', hash);
  }
  show(id);
}

// Closing goes back through history when opening made an entry; the
// hashchange that follows closes the dialog
function close() {
  if (closing) return;
  if (history.state?.esFilm) {
    closing = true;
    history.back();
    // Should Back have had nowhere to go, close here rather than leave it open
    setTimeout(() => {
      if (!closing || !isOpen()) return;
      closing = false;
      history.replaceState(null, '', location.pathname + location.search);
      dialog.close();
    }, 600);
  } else dialog.close();
}

// Closed, whichever way (×, Escape, Back, or the browser's own Escape): stop
// the film and let go of it, so nothing more downloads, and give the focus
// back to the card. Should the film's entry still be current (the browser
// closed the dialog without asking), step back off it.
function settle() {
  if (dialog.open) return; // (opened again before the close event arrived)
  const video = dialog.querySelector('video');
  if (video) {
    video.pause();
    video.replaceChildren();
    video.load(); // (with no source left, this only stops the download)
    video.remove();
  }
  document.body.style.overflow = '';
  const back = opener?.isConnected ? opener : link(dialog.dataset.film);
  opener = null;
  back?.focus({ preventScroll: true });
  if (closing || !FILM_HASH.test(location.hash)) return; // (a step back is on its way)
  if (history.state?.esFilm) { unwinding = true; history.back(); }
  else history.replaceState(null, '', location.pathname + location.search);
}

export function initWorks() {
  // A film card plays here; a modified click still gets the file itself
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.work-open[data-film]');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openFilm(a.dataset.film, a);
  });

  // Back and Forward. This listener runs before the ideas' (main.js starts the
  // works first): closing a film returns the page to the entry it was opened
  // from exactly as it was, so no other listener acts on that entry again.
  window.addEventListener('hashchange', (e) => {
    const m = location.hash.match(FILM_HASH);
    if (m && link(m[1])) { show(m[1]); return; }
    if (!isOpen() && !unwinding) return;
    unwinding = false;
    if (isOpen()) dialog.close();
    e.stopImmediatePropagation();
  });
  window.addEventListener('popstate', () => { closing = false; });

  // A film's address, arriving cold: the shelf goes beneath the dialog, so
  // that closing it (or Back) lands on the Works and not off the site
  const m = location.hash.match(FILM_HASH);
  if (m && link(m[1])) {
    if (history.state?.esFilm !== m[1]) {
      history.replaceState(null, '', '#works');
      document.getElementById('works')?.scrollIntoView();
      history.pushState({ esFilm: m[1] }, '', '#film/' + m[1]);
    }
    show(m[1]);
  }
}

// Search: the works and the field guide's fifteen species, from an index the
// build writes (assets/data/search.json), fetched the first time search is
// used. Until it is in, these groups find nothing; when it lands, search
// recounts what it shows.
export function initWorksSearch() {
  const input = document.getElementById('siteSearch');
  let index = null, loading = null;
  const load = () => {
    if (index || loading) return;
    loading = fetch('assets/data/search.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((d) => { index = d; document.dispatchEvent(new CustomEvent('earthstar:search-updated')); })
      .catch(() => { loading = null; }); // the next focus tries again
  };
  input?.addEventListener('focus', load);
  if (new URLSearchParams(location.search).get('q')) load();

  const find = (list) => (q) => {
    const words = queryWords(q);
    return (index?.[list] || []).filter((it) => matchesAll(it.text, words))
      .map((it) => ({ id: it.id, title: it.title, snippet: snippet(it.about, words) }));
  };
  const coarse = window.matchMedia('(pointer: coarse)');
  registerSearchGroup('Works', find('works'), (id) => {
    const it = index?.works.find((w) => w.id === id);
    if (!it) return;
    if (it.film) openFilm(it.film, coarse.matches ? null : input);
    else if (it.href.startsWith('#')) {
      const el = document.getElementById(it.href.slice(1));
      el?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      el?.querySelector('a')?.focus({ preventScroll: true });
    } else location.assign(it.href);
  }, { count: ['work', 'works'], where: '#works' });
  registerSearchGroup('Field guide', find('species'), (id) => location.assign('field-guide/#' + id),
    { count: ['species', 'species'], where: '#works' });
}
