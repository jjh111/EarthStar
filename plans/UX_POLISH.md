# The polish round: the Viewer and the splash

The request: bring the Viewer (`/viewer/`) and the splash (`/`) up to production quality, as
tools in their own right for browsing; test the UX at breakpoints; report the UI efficiency
ratio (useful content to chrome, by share of pixels).

This file is the plan of record and the report. The audit's findings became eighteen briefs. Each
brief is one commit, titled "Viewer Vn" or "Splash Sn". A fresh review followed, then three rounds
of fixes. The results are at the end.

## How it is measured

`test/ux/ux.mjs` shoots both surfaces at nine breakpoints and sorts every viewport pixel, by
region, into one of four classes:

- **content**: the scene, readings, text, cards and figures;
- **chrome**: bars, tabs, controls, panel frames and the brand;
- **art**: the painting, until the ground rises over it;
- **empty**: nothing.

The **ratio** is content ÷ chrome. The splash is sampled one screen at a time down the page, and
its first screen (the fold) is reported on its own too. The Viewer adds first-screen checks
because its ratio alone can be gamed (a flood of expired notices counts as content):

- where the state sentence starts;
- header rows;
- Earth's radius in pixels;
- the share of Earth under chrome;
- the open, unobstructed stage;
- how many rail tiles are visible.

With `MIRROR` set, NOAA and DONKI are answered from the `data` branch's byte-for-byte copy, and
the page clock is set just after it.

## The direction

There are two front doors, and they should read as the work of one instrument maker.

The splash is where the concept speaks: a painted cover, then a field notebook you can search,
covering:

- the seed;
- the five scales;
- the Gomens that turn waste into life;
- the ideas;
- the documents;
- the works.

The Viewer is where the star scale is measured live, and it never claims more than its feeds do.
It never shows a false NOW or a false all-clear: those would be a dark pattern by accident, so
truth comes first, then layout and browsing, then craft.

Both surfaces are addressable (state in the URL, Back closes what you opened), work from the
keyboard, and are calm when they fail ('unavailable' with a retry time).

## Cross-surface rules

- **Brand and home.** The Earth Star mark is top-left on both surfaces and is the home link. The
  Viewer's mark links to `/`, titled "Earth Star — home". The Viewer stays a night instrument.
- **Header pattern.** Both headers are one row, with three parts:
  - the brand on the left;
  - the surface's main tool in the middle: search on the splash, scale/view/layers in the Viewer;
  - utilities on the right.

  Each surface has one single-key entry point that never fires while you type: `/` for search on
  the splash, `?` for help in the Viewer. The Viewer's other scene keys act only when the scene
  or the page body has focus.
- **Links between the surfaces.**
  - **Splash → Viewer:** the cover door, the wayfinder door, the Sky door, and each Sky tile
    deep-linked to its reading (`/viewer/#d=inst.kp`, `#d=inst.speed`, `#d=inst.xray`,
    `#t=report`).
  - **Viewer → splash:** the brand mark, plus the help's About lines to `/`, `/field-guide/` and
    `/#works`.
  - **Arrows and tabs:** `↗` marks a link that leaves the current surface. Earth Star surfaces
    open in the same tab; only offsite links open new tabs, and those say so in visually-hidden
    text.
- **One honesty grammar.** The Viewer's tiers are E measured, D modelled, M ambient. The splash's
  registers are E empirical, H historical, D design, P policy, M mythopoetic. Each key adds one
  sentence on how the other surface reads them. One badge spec for both: a mono capital in a
  1 px hairline box, at least 10 px, with its word in a title or visually-hidden text.
- **One way to write a reading.**
  - **Times:** 'HH:MM UTC' today, 'DD Mon HH:MM UTC' on any other day.
  - **Numbers:** U+2212 for minus, and a unit on every number.
  - **States:** 'unavailable' plus the retry time for a failure; 'stale · 3.2 h' for an old value.
  - **Kp:** NOAA's 1-minute estimate to one decimal, with NOAA's thirds label.
- **Type, colour and targets.**
  - **Fonts and roles:** Cormorant Garamond for names and titles, DM Sans for labels in tracked
    caps, mono for numbers.
  - **Accents:** teal means live or selected in the Viewer; gold means alive on the splash.
  - **Focus:** rings are 2 px, offset, and at least 3:1 against their ground.
  - **Sizes:** 44 px touch targets under `pointer: coarse`, and no text smaller than 10 px on
    either surface.

## The briefs

| Brief | What it does | Commit |
|---|---|---|
| V1 | NOAA notices say "now" only while NOAA says they hold; an outage is never an all-clear | b6d5f3c |
| V2 | Every reading carries its time and its state: tiles, the state sentence, the status line | 0ee755d |
| V3 | The stage states its scale, always, with True one click away; it says when solar imagery is missing | 23a7047 |
| V4 | First-screen checks beside the ratio, plus offline and stale captures | 73c26c9 |
| V5 | Layouts that keep the scene the stage: phone portrait, short landscape, 861–1090 px, one-row margin foot | 088d4b5 |
| V6 | Scene cards open beside their subject; Deck shows Earth and the Sun apart; Polar puts noon at the top | aecd8e4 |
| V7 | The panel holds still while it is read; view, scale, layers, tab and detail live in the URL, with Back | 1709164 |
| V8 | Keys scoped to the scene; a visible `?` that teaches tiers, colours, gestures and rules; names in the scene; the way home | b594e89 |
| V9 | Craft: the rail fits, one type scale with a 10 px floor, the HUD grows on large screens, the margin reads in words | 30e8431 |
| S1 | A one-row wayfinder with a Sections menu; current section marked; headings that sit right | 92581d2 |
| S2 | The painting is the stage: the type sits in the empty sky, the door at the foot; sharp on phones | 28c2778 |
| S3 | Wide screens use their width; the Gomens set 3+2; the sixteen ideas fill full rows | a061778 |
| S4 | The Archive as a catalogue, and a reader that behaves: Back closes it, keys read it, deep links | 4ad497b |
| S5 | Search that counts right and shows grouped, keyboard-driven, shareable results where you type | ff9c262 |
| S6 | Sky now reads like the instrument it advertises, and each tile opens its reading in the Viewer | 188d0c5 |
| S7 | Works: the field guide, the films and the portraits; the Gomens open their plates; Onward once | 0c7bc7f |
| S8 | The delight keeps to the margins and can be stilled; the footer finished | 764adb7 |
| S9 | Accessibility, both themes and no-JS, complete: forced colours, contrast headroom, honest semantics, the badge floor | edb609d |

### V8 — keys scoped to the scene, a `?` that teaches, names in the scene, the way home

Goal: the Viewer explains itself without a manual, and its keyboard never surprises a reader.

- **Scoped keys.** Today the single-key shortcuts are document-wide (see `platform/src/a11y/`
  and `main.ts`). Make them act only when focus is on the scene canvas, the stage or the page
  body, so they never fire while a control, the margin body or a text selection has focus.
  Pressing `?` (or Shift+/) anywhere outside a text field opens the help.
- **A visible `?` button.** Put it in the header's utility end, beside Controls on narrow
  screens. It opens a help dialog: a real `<dialog>` with focus trapped and returned, Escape to
  close, and the address `#help`, so Back closes it. V7's router is in
  `platform/src/hud/route.ts`. The help holds:
  - **Tiers:** what E, D and M mean here, with one sentence on how the splash reads its five
    registers.
  - **Scene key:** the scene's colours and marks (field lines, the magnetopause and bow shock,
    the aurora oval, wind particles, CME cones, the L1 spacecraft, the placeholder Sun), each
    with its tier and source, taken from the subjects registry (`platform/src/hud/subjects.ts`)
    rather than written twice.
  - **Gestures and keys:** for mouse, touch and keyboard.
  - **Rules:** the six rules in one line each.
  - **About:** lines linking to `/`, `/field-guide/` and `/#works`.
- **Header budget.** The header row at 861–1090 px has about 10 px of slack. If the button does
  not fit there, it moves into `.margin-actions` at ≤1090 px. The header must stay one row at
  every harness breakpoint.
- **First visit.** On a first visit, show one dismissible chip once (remembered in
  localStorage, wrapped in try/catch): "Press ? for what you are seeing". No modal on load.
- **Names in the scene.** Label the main bodies and features with small, unobtrusive text
  labels: Earth, the Sun, the Moon, L1 and its spacecraft, the magnetopause, the bow shock.
  They must:
  - go through the same projection the cards use (`viewer.earthScreen()` and picking);
  - hide when occluded or off screen, and never sit over Earth's disc;
  - fade with Motion off as the rest of the scene does;
  - respect reduced motion;
  - be togglable as a layer ("Names", default on at ≥861 px and off on phones if they crowd).
- **The way home.** The brand mark's href is `/`, with the title "Earth Star — home".
- **Measurement.** Update `LAYERS.viewer` in `test/ux/ux.mjs`: the `?` button and the chip are
  chrome, the scene labels are content.
- **Acceptance.**
  - The header is one row at all nine harness breakpoints and at 861, 900 and 1090 wide.
  - Typing in any input, or pressing keys with focus in the margin body, never changes the
    view.
  - `?` opens help from the body, and Escape and Back both close it, with focus returned.
  - Help passes axe.
  - Labels never overlap Earth's disc in Deck, Sunward, Profile, Polar, Corona and System at
    1440×900 and 390×844.
  - vitest and a11y pass, and no harness row regresses on the open stage or Earth under chrome.

### V9 — craft: the rail fits, one type scale, the HUD grows on large screens, the margin reads in words

Goal: one coherent typographic system with a 10 px floor, and a HUD that uses large screens.

- **Type tokens.** One scale of custom properties in `platform/src/styles.css`, roughly
  `--t-0` 10 px through `--t-6`. Clamp them so the HUD grows on fhd and qhd: about +12% at
  1920 and +25% at 2560, via `clamp()` on viewport width. Leave `.ctl` sizes on their own
  tokens so the header does not wrap.
- **The floor.** Nothing renders under 10 px, including:
  - `.badge`, currently about 9.4 px;
  - tile meta, about 9.4 px;
  - the verbatim `<pre class="product">` notice text, about 9.3 px;
  - the M badge in the stage note;
  - the Checks tables.

  Badges follow the shared spec: a mono capital in a 1 px hairline box, at least 10 px, with its
  word in a title or visually-hidden text.
- **The rail fits.**
  - At ≤860 px the rail is 108 px wide and clips 'ELECTRONS ≥2 MEV' and details such as
    '3.4e-7 W/m²', '+5 vs dipole' and 'NOAA Kp 0', and 'stale · 45 min' does not fit. Make
    labels and details fit or wrap gracefully, never clip.
  - On every size, when not all tiles fit, the rail says how many are below and scrolls.
  - Re-check the tablet sentence top (597 against ≤600) after the tokens land.
- **The margin reads in words.**
  - **Plain words:** expand codes and bare symbols into words on first use in the panel (Kp,
    R⊕ "Earth radii", pfu, nT, Dst, L1), with the symbol kept.
  - **Kp in prose:** the Situation Report writes Kp to one decimal with NOAA's thirds label
    (it says 'Planetary K index 0.00' at `situation-report.ts` ~330), and the briefing fixture
    is updated deliberately.
  - **Labels agree:** the subject labels match the tile labels (`inst.xray`, `inst.electrons`).
- **Header at 1181–1300.** At 1280 the header notice still truncates by about 60 px. Tighten
  `.ctl` padding at 1181–1300 if that keeps the one row.
- **Focus and targets.** Focus rings are 2 px solid with an offset and at least 3:1. Touch
  targets are 44 px under `pointer: coarse`.
- **Acceptance.**
  - Measured over the DOM, no computed font-size is under 10 px at any breakpoint.
  - The header is one row everywhere.
  - At 1920 and 2560 the HUD type is visibly larger, and the harness shows more open stage or
    the same.
  - The rail never clips text at 390, 768, 860, 1024 and 1440.
  - vitest and a11y pass.

### S9 — accessibility, both themes and no-JS, complete

Goal: the splash is whole for every reader: either theme, forced colours, no script, any
pointer.

- **Forced colours keep the script.** The drawn glyphs are CSS masks (`src/glyphs/`, used
  through `mask-image`). Under `@media (forced-colors: active)` they vanish or turn into
  blocks. Give the masked elements `forced-color-adjust: none` with a `CanvasText` (or
  `LinkText`) fill, so the script stays legible. Check this with forced-colors emulation in both
  themes.
- **Contrast headroom.** Measure every small-text colour pair from computed styles, in both
  themes, including:
  - the section subtitles;
  - the idea and archive card meta;
  - the Sky tiles' provenance;
  - the Works kicker and provenance;
  - the reader;
  - the footer.

  Raise the muted-ink tokens so small text clears 4.5:1 with headroom (aim for 5:1) and large
  text 3:1. Gold stays reserved for what is alive.
- **The badge floor.** One global `.badge` rule: `max(0.66em, 10px)`, a mono capital in a
  1 px hairline box. Every badge carries its word in a title or visually-hidden text, so a
  screen reader hears "empirical", not "E". Remove the local `max()` rules S6 and S7 added.
  Check that `.sky-tiers` keeps its three badges on the caption's first line. The register
  legend adds one sentence on how the Viewer reads E, D and M.
- **Honest semantics.**
  - Heading order and landmarks are right.
  - Decorative layers are `aria-hidden`: the painting layers, the automata, butterflies, stars
    and the garden glyphs.
  - Buttons are buttons and links are links.
  - The reader and the film dialog are real dialogs with names.
  - Live regions say only what matters: search status, copy confirmations.
- **No-JS, calm and complete.**
  - The `.js` class is set in the head script.
  - Without it, nothing that needs script shows. Hide the search field (`.wf-search`), the copy
    buttons, the theme switch, the still control and the garden.
  - What remains reads as a page:
    - ideas expanded or readable;
    - Archive links that open the document fragments;
    - Sky tiles that say the readings need JavaScript and link to the Viewer;
    - film cards that link to their mp4s.
  - With no script there is no coda, so the 16th idea sits alone in a 3-column row. Fix that in
    CSS.
- **Targets.** 44 px under `pointer: coarse`:
  - the seed copy button, 34 px today;
  - wayfinder controls;
  - the reader header controls, 36 px today; pair the change with `padding-block: 5px` so the
    reader header stays ≤56 px;
  - search options;
  - chips;
  - the film dialog close button.
- **Acceptance.**
  - axe reports 0 violations at desktop and phone, in both themes, with the reader, the search
    and the film dialog open.
  - Every small-text pair is ≥4.5:1 in both themes.
  - The forced-colors screenshots show the script.
  - The no-JS screenshots at 390 and 1440 show a complete, calm page with no dead controls.
  - `test/site.test.mjs` passes, and no harness row regresses.

## The review that followed

Four reviewers who had not seen the work went over the finished round. Each had one lens:

- the Viewer's truth, tested by trying to make it lie: offline, stale by hours and by days,
  partial outages, the mirror fallback;
- the Viewer as a browsing tool at twenty sizes;
- the splash as a browsing tool in both themes;
- craft, accessibility and robustness across both surfaces and the field guide.

Every finding was reproduced by a verifier before it was fixed, and every fix was rechecked in
the browser:

| Round | What happened | Commits |
|---|---|---|
| 1 | 80 findings confirmed: Viewer 1 P0, 10 P1, 18 P2, 20 P3; splash 2 P0, 5 P1, 10 P2, 14 P3. Fixed. | b7c9143, 7fef62a |
| 2 | The recheck found 8 still open or new. Fixed. | baaf85e, 3b1a1a6 |
| 3 | The recheck found 2 P2s. Fixed and checked by hand. | c05e5f0 |

What the review fixed, in the main:

- **The Viewer on a stale or mirrored feed.**
  - A stale mirror no longer reads as a fresh all-clear, and the briefing says when the data came
    from the mirror.
  - The report and the briefing stop calling old readings current ("reaching Earth right now",
    "Nothing is inbound").
  - A DONKI outage now reads as unavailable instead of silently dropping the CMEs.
  - An all-null Enlil tracer is no longer read as "no ejecta reach Earth".
  - A notice whose validity NOAA does not state says so, instead of an invented end time.
  - Every reading time carries UTC, and its date when it is from another day.
- **The Viewer in the hand.**
  - Clicking a body picks the body, not a line through it.
  - The Checks tab no longer labels Earth Star's own model output as NOAA's.
  - The placeholder Sun is tiered as ambient.
  - Escape and Back close exactly one thing.
  - The Sources tables fit the margin.
- **The splash's Sky tiles.**
  - Every reading is dated and aged. The heading stops saying "measured this minute" when a
    reading is old, and the wind tile shows the wind's own time.
  - The feeds are fetched only while the page is visible.
- **The splash and the field guide.**
  - Archive documents have pages of their own, with a head, the styles and a way home, instead
    of a bare fragment.
  - The 44 px touch targets now hold everywhere.
  - The field guide's figure links are reachable and visibly focused, and it has full meta and
    icons.
  - There is a 404 page.

## Results

Both builds were measured back to back with the same harness against the same mirror (the
`data` branch, 27 Oct 2026 13:27 UTC):

- **before:** `cb5b196`, the site as it stood when the round began;
- **after:** the finished round.

Before → **after**.

### The Viewer

| Breakpoint | Size | Content / chrome, % | Ratio | State sentence top (px) | Header rows | Earth r (px) | Earth / Sun under chrome, % | Open stage, % | Scale stated |
|---|---|---|---|---|---|---|---|---|---|
| phone-s | 360×740 | 81 / 9.4 → **75.1 / 21.8** | 8.58 → **3.44** | 962 (below the fold) → **498** | 1 → **1** | 26 → **26** | 0 / 0 → **0 / 0** | 30.1 → **27.4** | no → **yes** |
| phone | 390×844 | 82.9 / 8.3 → **78.3 / 19** | 9.97 → **4.12** | 941 (below the fold) → **542** | 1 → **1** | 30 → **30** | 0 / 0 → **0 / 0** | 31.4 → **29.6** | no → **yes** |
| phone-land | 844×390 | 69.8 / 21.9 → **72.3 / 27.7** | 3.18 → **2.61** | 425 (below the fold) → **128** | 1 → **1** | 14 → **32** | 5.2 / 63.3 → **0 / 0** | 23 → **42.4** | no → **yes** |
| tablet | 768×1024 | 87 / 10 → **85.8 / 12.1** | 8.69 → **7.07** | 718 → **597** | 1 → **1** | 36 → **36** | 0 / 0 → **0 / 0** | 33.9 → **31.5** | no → **yes** |
| tablet-land | 1024×768 | 79.2 / 20.8 → **85.2 / 14.8** | 3.8 → **5.77** | 211 → **146** | 2 → **1** | 64 → **64** | 0 / 0 → **0 / 0** | 43.9 → **43.8** | no → **yes** |
| laptop | 1280×800 | 89.9 / 10.1 → **90.7 / 9.3** | 8.89 → **9.79** | 133 → **122** | 1 → **1** | 67 → **67** | 0 / 0 → **0 / 0** | 54.8 → **53.6** | no → **yes** |
| desktop | 1440×900 | 91.1 / 8.9 → **91.7 / 8.3** | 10.29 → **11.02** | 133 → **122** | 1 → **1** | 75 → **75** | 0 / 0 → **0 / 0** | 56.6 → **56.3** | no → **yes** |
| fhd | 1920×1080 | 93.1 / 6.9 → **93.6 / 6.4** | 13.45 → **14.61** | 133 → **124** | 1 → **1** | 90 → **90** | 0 / 0 → **0 / 0** | 63.3 → **63.2** | no → **yes** |
| qhd | 2560×1440 | 91.1 / 4.9 → **95 / 4.6** | 18.73 → **20.69** | 133 → **126** | 1 → **1** | 120 → **120** | 0 / 0 → **0 / 0** | 71.8 → **72.9** | no → **yes** |

How to read it:

- **Desktop and wider.** The ratio rises at every width from laptop to qhd (8.9 → 9.8 at 1280,
  10.3 → 11.0 at 1440, 18.7 → 20.7 at 2560). The open stage holds within a point, even though
  the stage now carries its scale note.
- **Short screens.**
  - At tablet-land the header falls from two rows to one, and chrome drops from 20.8% to 14.8%.
  - On a landscape phone, Earth more than doubles in size (14 → 32 px). The Sun, which was 63%
    under chrome, is clear, and the open stage nearly doubles (23% → 42%).
- **Phones in portrait.** The ratio falls (8.6 → 3.4 at 360 px, 10.0 → 4.1 at 390 px), and
  that is the honest result.
  - **Before:** the first screen under the scene was about 450 px of NOAA notices, most of them
    days old and labelled NOW. That counted as content, and the state sentence started below
    the fold, at 941–962 px.
  - **After:** the first screen shows the scene with its scale stated, the one notice actually
    in force, the tab bar, and the state sentence (498–542 px). The tab bar, the "?" and the
    one-time hint are chrome, which is where the ratio goes.
  - On a return visit the hint is gone, and the ratio rises by about half a point.
  - The first-screen checks are the measure that matters here, and all of them pass.

### The splash

| Breakpoint | Size | Whole page: content / chrome / art / empty, % | Page ratio | Fold: content / chrome / art, % | Horizontal scroll |
|---|---|---|---|---|---|
| phone-s | 360×740 | 72.2 / 14.4 / 4.3 / 9.1 → **76.5 / 9.1 / 4.3 / 10.1** | 5.01 → **8.41** | 17.2 / 6.2 / 76.6 → **16.7 / 6.3 / 76.9** | no → **no** |
| phone | 390×844 | 73 / 12.9 / 5 / 9.1 → **76.3 / 8.4 / 5.3 / 10** | 5.68 → **9.11** | 15.2 / 5 / 79.8 → **14.8 / 5.1 / 80.1** | no → **no** |
| phone-land | 844×390 | 63.9 / 25 / 2.6 / 8.5 → **73.5 / 13.7 / 2.6 / 10.1** | 2.55 → **5.36** | 32.4 / 9.5 / 58.1 → **27.6 / 9.5 / 62.9** | no → **no** |
| tablet | 768×1024 | 72 / 10.9 / 9.6 / 7.5 → **76.4 / 7 / 8.6 / 8** | 6.64 → **10.93** | 11.6 / 2 / 86.4 → **12 / 2.1 / 86** | no → **no** |
| tablet-land | 1024×768 | 70.3 / 11.1 / 7.8 / 10.8 → **70.3 / 10.8 / 7.5 / 11.3** | 6.35 → **6.51** | 17.7 / 4 / 78.3 → **13.2 / 4 / 82.8** | no → **no** |
| laptop | 1280×800 | 63.9 / 11.9 / 8.7 / 15.5 → **65.1 / 10.7 / 8.4 / 15.7** | 5.37 → **6.08** | 19 / 3 / 78 → **12.5 / 3 / 84.5** | no → **no** |
| desktop | 1440×900 | 57.7 / 10.5 / 10.2 / 21.6 → **61.4 / 10.3 / 9.6 / 18.7** | 5.51 → **5.99** | 15.9 / 2.4 / 81.7 → **11.5 / 2.5 / 86.1** | no → **no** |
| fhd | 1920×1080 | 45.9 / 7.8 / 12.7 / 33.6 → **58.7 / 9.4 / 12.5 / 19.5** | 5.86 → **6.25** | 10 / 1.5 / 88.6 → **11.1 / 1.7 / 87.2** | no → **no** |
| qhd | 2560×1440 | 37.9 / 5.8 / 15.6 / 40.7 → **55.8 / 7.4 / 17.9 / 18.9** | 6.53 → **7.52** | 5.6 / 0.8 / 93.6 → **9.3 / 1 / 89.7** | no → **no** |

How to read it:

- **Whole page.** The page ratio rises at every size, most on small screens (5.0 → 8.4 at
  360 px, 2.6 → 5.4 on a landscape phone, 6.6 → 10.9 on a tablet).
- **Phones.** The one-row wayfinder halves the chrome on phones (25% → 14% in landscape).
- **Wide screens.** Wide screens now use their width. At 1920 the empty share falls from 34% to
  20%, and at 2560 from 41% to 19%, where content rises from 38% to 56%.
- **The fold.** The fold's ratio falls on purpose: the cover's type moved into the painting's
  empty sky, so more of the painting shows (art 78% → 85% at 1280). The painting is the stage.

The images are in `plans/ux-polish/`:

- `viewer-before-after.jpg`: the screenshot and colour map before, then after, at phone,
  phone-land, tablet-land and desktop (green content, red chrome, grey empty);
- `splash-before-after.jpg`: the whole page at 1440, before on the left and after on the right.

## Known gaps

- **The header notice.** It ends in an ellipsis at a few in-between widths where the Viewer's
  header changes layout (1201, 1401–1432, 1501–1540, 1601–1680). The ticker shows it whole.
- **Duplicated notice on phones.** The phone header repeats the notice the ticker shows under
  the scene. Dropping it there is the next chrome to reclaim.
- **Kp tooltips.** The Ahead tab's Kp bar tooltips still give NOAA's 3-hour values to two
  decimals, not thirds labels.
- **Front-door images.** Recapture the Viewer's og image and the splash's Sky door from a
  networked run with real solar imagery. The sandbox blocks imagery, and the unobserved
  placeholder Sun must not become the front door.
- **Film playback.** Check that the films play in a real browser, including the tall cut on a
  phone. Headless Chromium here fetches them but cannot play them.
- **Sandbox limits.** Real-GPU frame rate, the cold-start and code-split work, and the aurora
  contour were deferred. The sandbox cannot measure the first two, and the aurora contour needs
  its own honesty review.

## Re-running

```sh
python3 -m http.server 8901 --bind 127.0.0.1 &                 # from the repo root
git archive origin/data | tar -x -C /tmp/mirror                 # today's feeds
BASE_URL=http://localhost:8901 CHROMIUM=/path/to/chrome MIRROR=/tmp/mirror/v1 \
  node test/ux/ux.mjs --out test/ux/out                         # both surfaces, nine sizes
node test/ux/compare.mjs <before dir> <after dir> viewer out.jpg phone,desktop
node test/ux/strip.mjs test/ux/out/splash-desktop-full.jpg out.jpg
```
