# earthstar.space — Website Refactor Plan

**Status: PLAN ONLY — no site files modified yet.**

## Current state (measured)

- Single `index.html`: **3,296 lines / ~125KB**, containing two `<style>` blocks
  (~1,400 lines, one injected mid-body), three full documents embedded as
  line-numbered template literals (~1,050 lines — the WRF bill, the Harmonious
  Computing Act, and a copy of the skill), a hand-rolled markdown renderer, and
  ~500 lines of garden/butterfly/parallax JS.
- Hero loads 5 layered webp images eagerly: **~2.17MB** (0-BG alone is 965KB),
  plus logo (73KB) and footer banner (148KB). No `width`/`height`, no `preload`,
  no lazy-loading, no responsive sizes.
- Render-blocking Google Fonts (2 third-party origins, extra round trips).
- Repo ships `index.html.bak` (86KB), `.DS_Store`, and PNG twins of every webp
  (~6.5MB of unused-by-page assets).
- No meta description, no Open Graph / Twitter cards, no favicon, no canonical,
  no robots/sitemap — social shares of earthstar.space render blank cards.
- Debug residue in production: `console.log` throughout, plus a **gold debug dot
  injected on every single click**.
- Interaction bugs: the document-level click handler plants emojis on *any*
  click, so clicking an archive card both opens the doc **and** spawns a sprout +
  debug flash; text selection plants things; `.margin-click-zone` has
  `pointer-events: none` so its hover affordance never fires; the butterfly
  `requestAnimationFrame` loop runs forever even with zero butterflies;
  `clearGarden()` forgets `heroRight`.
- Accessibility: no `prefers-reduced-motion` (parallax + perpetual float
  animations), archive panel has no focus trap / Esc handling / aria roles,
  search input unlabeled, click-to-plant is invisible to keyboard and AT users.
- Parallax is mouse-only — the entire hero effect is dead on touch devices.

## Design stance

Keep the soul: the layered hero, the garden that remembers you, the butterflies,
the basalt-tablet archive. The refactor is about making the craft match the
vision — fast first paint, one source of truth for content, and interactions that
feel intentional instead of accidental.

**Architecture recommendation: no framework.** A tiny build script (single
`build.mjs`, no bundler config) that: minifies, hashes assets, inlines critical
CSS, and generates the archive manifest from the repo's actual markdown files.
Deployed by GitHub Actions to Pages. The site stays hand-crafted, view-sourceable,
and dependency-light — but stops paying the single-file tax.

## Phase 0 — Hygiene (no visual change, ~an afternoon)

1. Delete `index.html.bak`, `.DS_Store`; extend `.gitignore` (`.DS_Store`, build
   output). Move source PNGs to an `Assets/src/` folder (kept, but clearly not
   servable content).
2. Strip all `console.log`s and the per-click debug dot.
3. Fix interaction bugs: exclude interactive elements (`a`, `button`, `input`,
   `.archive-card`, panel) and active text selections from the plant-on-click
   handler; stop the butterfly rAF loop when no butterflies exist; fix
   `clearGarden()`/`heroRight`; remove or fix the dead margin hover affordance.
4. Head metadata: meta description, OG + Twitter card (use `EarthstarBanner`),
   favicon (star/seed mark), canonical, theme-color.
5. Image quick wins: explicit `width`/`height` on all images (kills CLS);
   `<link rel="preload">` + `fetchpriority="high"` on `0-BG.webp`;
   `loading="lazy"` on the footer banner; `decoding="async"` everywhere.
6. `prefers-reduced-motion`: disable parallax drift, floats, and butterflies;
   keep static beauty.

## Phase 1 — Restructure (the actual refactor)

1. **Split the monolith**:
   - `css/site.css` (merge the two style blocks, dedupe, organize by section)
   - `js/garden.js`, `js/archive.js`, `js/parallax.js` — all `type="module"`,
     `defer` by default; garden and parallax init on idle
     (`requestIdleCallback`), archive on first interaction.
2. **Single source of truth for the Archive**: the embedded line-numbered
   template literals duplicate markdown that already lives in the repo (WRF bill,
   skill). Replace with:
   - `archive/` folder of clean markdown files + `archive/manifest.json`
     (id, title, category, description, tags, provenance metadata).
   - Docs fetched on demand when a card is opened (they're below the fold and
     behind a click — they don't belong in critical HTML). This alone removes
     ~55KB from `index.html`.
   - The skill document is **generated** from `skill_extract/earth-star/SKILL.md`
     at build time — website and skill can never drift again.
3. **Markdown rendering**: replace the hand-rolled renderer (nested-list and
   escaping edge cases) with `marked` (~7KB gz, vendored locally — no CDN), or
   pre-render to HTML at build time (preferred: zero client-side parsing).
4. **Fonts**: self-host the two families as woff2 subsets (`font-display: swap`
   retained). Removes both third-party origins from the critical path.
5. **Build + deploy**: `build.mjs` (minify HTML/CSS/JS, hash filenames,
   pre-render archive docs) + GitHub Actions workflow → Pages artifact. Local dev
   remains "open index.html".
6. **Sanitization**: escape interpolated values in `innerHTML` templates
   (card titles/tags, breadcrumbs) — hygiene even for own content.

## Phase 2 — Performance targets

| Metric | Now (est.) | Target |
|---|---|---|
| Critical HTML | 125KB | < 25KB |
| Hero image payload (first view) | ~2.4MB | < 700KB |
| LCP (4G, mid phone) | 4–6s | < 1.8s |
| CLS | non-zero (unsized images) | ~0 |
| Lighthouse (all categories) | — | ≥ 95 |

How the image budget is met:
- Generate AVIF + webp at 3 widths (960/1440/2048) for each hero layer;
  `<picture>`/`srcset` + `sizes`. 0-BG at 1440 AVIF should land near 200KB.
- Consider flattening the two lowest-parallax-depth layers (BG + glimmer move
  1px and 8px per unit) into one composite for the initial paint, swapping in
  layers on idle — biggest single win if visual fidelity holds.
- Hashed filenames → immutable cache headers (Pages honors these for hashed assets).

Measure with Lighthouse CI in the Actions workflow (budget file) so regressions fail the build.

## Phase 3 — Artistic delight (pick ~3, each small and reversible)

1. **Hero alive on touch**: scroll-driven and device-orientation parallax so
   mobile finally gets the depth effect (currently mouse-only).
2. **Time-of-day hero**: tint the sun/glimmer layers by the visitor's local hour
   — dawn golds, noon clarity, dusk embers, night starfield. Pure CSS filters,
   zero payload.
3. **Garden 2.0**: the localStorage garden becomes a small ecosystem — trees
   occasionally release a butterfly; a subtle ∇𝒞 coherence meter in the footer
   rises as the garden grows across visits. Ties the site's central metaphor to
   its central interaction.
4. **Canvas butterflies**: replace emoji-div butterflies with a tiny canvas
   renderer — real wing-flap easing, cheaper than N absolutely-positioned DOM
   nodes, honors reduced-motion.
5. **Constellations**: margin-click stars connect with faint lines once 5+ exist,
   forming a constellation unique to the visitor.
6. **Archive as artifact**: staggered tablet reveal on scroll
   (IntersectionObserver), reading-progress line in the panel, a print stylesheet
   so the WRF bill prints like legislation.
7. **Easter egg**: typing "gomen" spawns a small iridescent crab that walks the
   footer and tidies (removes) one stray sprout — the waste-metabolizer, embodied.

All gated behind `prefers-reduced-motion` and off the critical path.

## Phase 4 — Content & provenance tie-in (pairs with the skill plan)

- Each archive doc's manifest entry carries provenance metadata (source, author,
  date, status: *proposed / vision / documented*), rendered as a header line in
  the panel — the site models the epistemic honesty the v3.0 skill codifies.
- Regenerated skill doc (v3.0) replaces the embedded v2.x copy automatically at
  build time.

## Verification

- Lighthouse + axe before/after on throttled mobile profile; numbers recorded in
  the PR.
- Manual pass: touch device (parallax, panel, planting), keyboard-only
  (open/close archive, Esc, focus trap), reduced-motion, and a social-share card
  preview.

## Suggested order

Phase 0 → Phase 1 → Phase 2 ship together as the "production quality" PR
(visually identical, dramatically faster). Phase 3 items land as individual
follow-ups so each delight can be judged on its own. Phase 4 rides with the
skill v3.0 update.
