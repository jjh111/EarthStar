# Session Brief — Viewer Phase P: Polish

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-polish` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in PR).
**Environment:** local with network access (NOAA hosts + `earthobservatory.nasa.gov` /
`visibleearth.nasa.gov` for Blue/Black Marble downloads). Node 22.

## Read first
`plans/VIEWER_NEXT_PLAN.md` §0–1 (the review and this phase), `platform/README.md` (the
six rules — they are not style preferences), `platform/docs/sources.md` §3 (the upstream
traps). Run `npm test` and `npm run a11y` before you change anything, and again before
you open the PR.

## Tasks (in this order)

1. **Raster Earth base.** Vendor NASA Blue Marble Next Generation (day, public domain) at
   4096×2048 → WebP (~600 KB) plus a 2048 phone variant, and Black Marble 2016 night
   lights at 2048 → WebP (~250 KB). Feed both through the existing terminator shader in
   `src/scene/earth.ts`: day texture on the lit side, city lights emissive on the night
   side, blended across the real twilight band. Keep `earth-texture.ts` coastlines as an
   optional overlay (a registry toggle later; a boolean now). Lazy-load after first
   paint; choose the size by `devicePixelRatio × viewport`. Tier `[E]` with the
   composite's acquisition period stated in the provenance drawer and the Situation
   Report ("surface: NASA Blue Marble, 2004 composite; lights: Black Marble 2016").
2. **Field-line legibility.** In `src/scene/magnetosphere.ts` / `models/fieldlines.ts`:
   seed count and line opacity as a function of camera distance; beyond ~100 Rₑ draw the
   magnetopause + bow-shock silhouette and ~12 signature lines only; depth-fade lines
   behind the globe (cheap: opacity by view-space z). Halve the Kp shiver amplitude.
3. **Deck view framing and the Sun panel.** PR #12 already put Deck behind Earth looking
   sunward; keep it, check the Moon clears the limb at Globe scale and the five vantage
   points make sense on a 390-px phone. Then two Sun-panel fixes: (a) `margin.ts` returns
   the disk loop's failure text *before* the coronagraph section renders, so a SUVI
   outage hides a working LASCO — render both sections in every state, each with its own
   loading / no data / error text per task 4; (b) the Corona view frames on the bare
   sphere when no plane is loaded (the Sun fills the viewport in its base colour) — give
   it a default framing distance. The image planes were re-blended by the Director
   (normal blend, circular mask as alpha, `SKY_OPACITY` / `PEDESTAL_LIFT` in `sun.ts`);
   tune those two constants by eye against live C2/C3 frames, don't return to additive.
4. **Label states — loading is not "no data".** Today a cold visitor sees `no data` on
   every tile and the Sun panel until first fetches land. Define and implement four
   mutually exclusive states for every tile, the Sun panel, the layer toggles, and every
   Situation Report sentence — a value slot shows a number in exactly one of them:
   - **loading** — never received: dimmed tile, value slot shows a thin pulse or `…`,
     label and unit still legible, badge greyed. Never the words "no data". Per lane:
     the snapshot lane resolves in seconds while imagery is still loading.
   - **no data** — a completed fetch carried nothing usable (empty, all fill values, a
     dead feed like `geospace_pred_est_kp_1_hour`): literal `no data`, with the feed's
     newest timestamp when it has one, so the reader can tell "quiet feed" from "dead
     feed".
   - **error** — the fetch failed after the retry and the mirror: `unavailable` + reason
     class (`upstream 404` / `offline` / `blocked`) + next attempt time; if a previous
     good value exists it stays on screen aging, with the error beneath it.
   - **stale** — unchanged from today.
   Put the state machine in one place (`src/data/store.ts` or a new `src/data/state.ts`)
   with a test per transition, and drive the CSS from a single `data-state` attribute.
   Sequence the cold start: snapshot lane → slow lane → imagery (first frame only); the
   Sun panel gets its own loading state with the frame timestamp appearing before the
   pixels. The Situation Report reads "Solar wind: loading." during the cold start, not
   "no data", and its cold-start paragraph is short — the full report renders when the
   snapshot lane is live. Acceptance: throttle the network to slow 3G, record the first
   ten seconds, and confirm that `no data` never appears for anything still pending.
5. **Fonts and meta.** Replace the Google Fonts links in `platform/index.html` with
   `@font-face` rules pointing at `../assets/fonts/CormorantGaramond.woff2`,
   `CormorantGaramond-italic.woff2`, `DMSans.woff2` (variable; weights 400–600 /
   300–500 — copy the rules from `src/fonts/fonts.css` in the splash). Add OG/Twitter
   card (`viewer/og.jpg`, 1200×630 deck-view screenshot), canonical
   `https://earthstar.space/viewer/`, `theme-color`. **No visual-style changes** beyond
   what the state work needs: an Earth Star style guide is a separate future track; the
   Viewer keeps its current palette and type.
6. **Hold the line.** Frame-time budget unchanged (see commit `9a5c807`); `npm run a11y`
   zero violations; Lighthouse mobile ≥ 90 perf / 100 a11y on `/viewer/`; `viewer/`
   ≤ 3 MB including the new textures.

## Acceptance
Screenshots (deck, orbit, system, phone) in `platform/docs/screenshots/`; test + a11y
output and Lighthouse numbers in the PR body; no fabricated values introduced (the
texture is imagery, labelled and dated).
