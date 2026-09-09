// One search over everything on the page: ideas and archive documents filter
// in place as you type. Structure is the floor — no model, no network, and
// every match is visible on the page where it lives. `/` focuses the box.

import { setIdeasQuery } from './ideas.js';
import { setArchiveQuery } from './archive.js';

export function initSearch() {
  const input = document.getElementById('siteSearch');
  if (!input) return;

  let raf = 0;
  const run = () => {
    raf = 0;
    const q = input.value.trim();
    setIdeasQuery(q);
    setArchiveQuery(q);
    document.body.classList.toggle('is-searching', q.length > 0);
    const status = document.getElementById('search-status');
    if (status) {
      const ideas = document.querySelectorAll('.idea:not([hidden])').length;
      const docs = document.querySelectorAll('.archive-card').length;
      status.textContent = q ? `${ideas} idea${ideas === 1 ? '' : 's'} · ${docs} document${docs === 1 ? '' : 's'}` : '';
    }
  };
  input.addEventListener('input', () => { if (!raf) raf = requestAnimationFrame(run); });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { input.value = ''; run(); input.blur(); }
    if (e.key === 'Enter') {
      const first = document.querySelector('.idea:not([hidden]) .idea-head');
      if (first) { first.click(); first.closest('.idea').scrollIntoView({ block: 'center' }); }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.target.closest('input, textarea, select, [contenteditable]')) return;
    e.preventDefault();
    input.focus();
    input.select();
  });
}
