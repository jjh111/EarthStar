# Session Brief — Viewer: click the thing itself

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-cards` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in the PR).

Second of three. Depends on `VIEWER_SUBJECTS.md` being merged — this brief adds no prose,
only the way to reach it.

## Why

A newcomer points at the screen and asks *what is that*. Today the only honest answer is
"open the Now tab and read four hundred words until you find it." The scene is the
instrument; the explanation is in a panel three tabs away, in a wall of text, written in
the order the report happens to compose rather than the order anyone asks.

The plumbing is already half built and only knows about bodies: `scene/picking.ts` picks
by screen proximity, `viewer.ts` tracks `hovered` on `pointermove`, `main.ts:528` calls
`hud.showBody(p.id)`. Four kinds — planet, sun, moon, spacecraft. Everything that makes
the Viewer worth looking at is unpickable.

## Where the depth lives

**A card at the object**, not another margin tab. The margin is already five tabs deep on
a 1600 px screen and is going to need its own refactor; adding the scene's entire
vocabulary to it would make that worse. A card also answers a different question from a
tab — *what is this thing right here* — and answering it in place is the whole point.

The margin keeps the long form. The card is the doorway.

## Tasks (in order)

1. **A pickable registry, not a switch statement.** `Map<Object3D, string>` from a scene
   object to a subject id, populated where each layer is built. The scene must not grow a
   chain of `instanceof` tests, and a layer that forgets to register itself should fail the
   test from `VIEWER_SUBJECTS.md` task 6.
2. **Raycast for layers, keep proximity for bodies.** Bodies are points or near-points and
   screen proximity is right for them; lines and surfaces need `Raycaster` with
   `params.Line.threshold` set from the camera distance so a field line stays clickable
   when it is a hairline. **Bodies win ties** — a planet under a field line picks the
   planet. The aurora is not geometry: pick the globe, convert the hit to lat/lon, and
   read the OVATION grid at that point, so the card can say the local probability.
3. **Hover gives the one-liner.** A small label following the pointer with `oneLine` and
   the tier badge. This is the affordance that teaches the scene is clickable at all;
   without it nobody discovers the card. Respect `prefers-reduced-motion`: no transition,
   just presence.
4. **Click opens the card.** Anchored near the hit point, flipping to stay on screen:
   label, tier badge, `oneLine`, `meaning`, the live value where the subject has one, its
   `limits`, and a "more" that opens the margin detail. `related[]` renders as links that
   swap the card's subject in place — that is the graph walk, and it is the feature.
5. **Mobile is a sheet, not a popover.** Under the tablet breakpoint the card becomes a
   bottom sheet. An anchored popover on a phone covers the thing it is describing.
6. **Keyboard and screen reader.** The card is reachable without a pointer: a roving
   focus through the pickable set, `Escape` closes, focus returns to where it was, no
   focus trap. Announce the card's opening. This is a gate, not a polish item — `npm run
   a11y` must stay clean at both viewports, and axe will not catch a focus-return bug, so
   test it by hand and say so in the PR.
7. **The colour key.** Blue closed, violet open, teal magnetopause, orange bow shock,
   and the rest — currently stated only in Situation Report prose. A small always-present
   key, each row opening its subject. Cheap once the registry exists, and it is half of
   "what am I looking at".

## Deliberately out of scope

- **The Situation Report.** `VIEWER_NARRATIVE.md`.
- **Any margin redesign.** The margin is crowded and will need reworking; that is its own
  brief, and this one must not pre-empt it. The card's "more" opens the detail tab exactly
  as a tile does today.
- **New subjects or new prose.** If something has no explanation, that is a
  `VIEWER_SUBJECTS.md` bug, not a reason to write one here.

## Acceptance

`npm test` and `npm run a11y` before and after, clean at desktop and phone. A screenshot
of the card open on a field line, on the magnetopause, on a CME cone and on the aurora,
because those are the four that could not be reached before. A frame-time measurement with
the pointer moving across the scene — raycasting against ~10 000 line vertices every
`pointermove` is the obvious way to lose the budget, so throttle it and report the number.
Keyboard walkthrough described in the PR. Contract change requests and open questions in
the PR body.
