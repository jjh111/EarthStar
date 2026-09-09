// Day and night. The page follows the visitor's system scheme unless they
// choose; a choice is remembered in this browser. A tiny inline script in
// <head> applies the stored choice before first paint so nothing flashes.

const KEY = 'earthStarTheme';
const media = window.matchMedia('(prefers-color-scheme: dark)');

function current() {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return media.matches ? 'dark' : 'light';
}

function label(btn) {
  const next = current() === 'dark' ? 'light' : 'dark';
  btn.setAttribute('aria-label', `Switch to ${next} theme`);
}

export function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  label(btn);
  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch (e) { /* remembered for this visit only */ }
    label(btn);
    document.dispatchEvent(new CustomEvent('earthstar:theme', { detail: { theme: next } }));
  });
  media.addEventListener('change', () => {
    label(btn);
    document.dispatchEvent(new CustomEvent('earthstar:theme', { detail: { theme: current() } }));
  });
}
