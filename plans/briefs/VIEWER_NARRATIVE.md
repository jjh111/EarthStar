# Session Brief — Viewer: the report becomes a graph

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-narrative` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in the PR).

Third of three. Depends on `VIEWER_SUBJECTS.md`; reads better after `VIEWER_CARDS.md` but
does not require it.

## Why

`hud/situation-report.ts` is thirty `lines.push()` calls producing one wall of prose, in
the order the code happens to run. It is the most carefully written thing in the app and
almost nobody reads past the third paragraph. Everything in it is true, cited and
timestamped, and it is delivered as an essay when what a reader wants is a way in.

It also has a second job that must not be broken: **Copy briefing** and **.md** export it
as flat text, with every timestamp and source. That is a genuinely good feature — a
briefing should be flat, quotable and paste-able into an email. The prose is not the
problem; its being the *only* way in is.

## Tasks (in order)

1. **Sentences carry subject ids.** Change the report's builder from
   `lines.push(string)` to pushing spans that may name a subject — the same sentences,
   with `Shue et al. 1998`, `field lines`, `T89` and the rest marked. No rewriting of the
   prose in this task; only marking it.
2. **Rendered, they are links; exported, they are text.** One builder, two renderers. The
   export must be byte-identical to today's for the same data — assert that with a fixture,
   because a briefing that changes shape silently is worse than one that never improved.
3. **"What am I looking at."** An index of every subject currently drawn, grouped by tier,
   each with its `oneLine`, each a link. Generated from the scene's live pickable set, so
   it cannot describe something that is not on screen or omit something that is. This is
   the modular table of contents the whole sequence is for.
4. **Group the report.** The wall becomes labelled sections — the wind, the shield, the
   Sun, the alerts, the scene — collapsed to their first sentence by default, remembered
   per reader the way the Sources sections already are (`margin.ts` has the pattern).
   Reading order stays the same for anyone who expands everything, and the flat export is
   untouched.
5. **The `limits` line gets a home in the prose.** Each section ends with what its
   subjects do *not* say, pulled from the registry rather than written again. This is where
   the accuracy charter becomes something a reader actually encounters instead of a rule
   the code obeys privately.
6. **Retire the duplicates.** After this the report holds no citation strings of its own.
   Count what is left and report it.

## Deliberately out of scope

- **Rewriting the prose.** The sentences are good. This brief changes their delivery.
- **The margin's overall layout.** Five tabs on a 1600 px screen is a real problem and it
  is not this one. Note anything you learn for that brief; do not start it.

## Acceptance

`npm test` and `npm run a11y` before and after. The export fixture proving the briefing is
unchanged. Screenshots of the report collapsed and expanded, and of the index. A count of
citation strings removed. A note in the PR on how the collapsed default reads to someone
who has never seen the app — that is the thing being optimised, and it is the one thing a
test cannot check.
