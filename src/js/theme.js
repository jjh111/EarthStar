// Light/dark theme — the page ships dark; the visitor may choose light.
// The head inline script sets data-theme before first paint (no flash);
// this module owns the toggle, persistence, system sync, and the
// theme-color meta. 'earthstar:theme' fires so canvas painters can re-ink.

const KEY = 'earthStarTheme';

export function initTheme() {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const btn = document.getElementById('themeToggle');

  function apply(theme, persist) {
    root.dataset.theme = theme;
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f1e7' : '#0a0806');
    if (btn) {
      const pressed = theme === 'light';
      btn.setAttribute('aria-pressed', String(pressed));
      const icon = btn.querySelector('.theme-toggle-icon');
      if (icon) icon.textContent = pressed ? '☾' : '☀';
    }
    if (persist) { try { localStorage.setItem(KEY, theme); } catch (e) { /* session only */ } }
    document.dispatchEvent(new CustomEvent('earthstar:theme', { detail: { theme } }));
  }

  apply(root.dataset.theme === 'light' ? 'light' : 'dark', false);

  if (btn) {
    btn.addEventListener('click', () => {
      apply(root.dataset.theme === 'light' ? 'dark' : 'light', true);
    });
  }

  // Track the OS while the visitor hasn't made a choice of their own
  const mq = window.matchMedia('(prefers-color-scheme: light)');
  const onSystemChange = (e) => {
    let stored = null;
    try { stored = localStorage.getItem(KEY); } catch (err) { /* private mode */ }
    if (stored !== 'light' && stored !== 'dark') {
      apply(e.matches ? 'light' : 'dark', false);
    }
  };
  if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);
}
