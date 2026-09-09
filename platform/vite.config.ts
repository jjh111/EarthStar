import { defineConfig } from 'vite';

// The Viewer builds to ../viewer/, which is committed and served by GitHub Pages
// at earthstar.space/viewer/ — same convention as the splash site (source folder →
// committed built folder, no deploy workflow). See plans/VIEWER_PLATFORM_PLAN.md §5.2.
export default defineConfig({
  base: '/viewer/',
  build: {
    outDir: '../viewer',
    emptyOutDir: true,
    target: 'es2022',
    // Payload budget: ≤ 3 MB initial (plan §5.4). Warn well before that.
    chunkSizeWarningLimit: 1200,
  },
  server: {
    port: 5180,
    // The two type families are shared with the splash and live at the repo
    // root, one level above this project. `vite build` inlines them into
    // ../viewer/assets/ with content hashes, so production is self-contained —
    // but the dev server refuses to serve outside its own root by default, and
    // the @font-face URLs come back 403 with the page silently falling back to
    // system fonts. Allowing the parent makes dev show what production shows.
    fs: { allow: ['..'] },
  },
});
