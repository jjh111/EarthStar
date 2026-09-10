# Session Brief — Viewer: one registry behind every explanation

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-subjects` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in the PR).

First of three. `VIEWER_CARDS.md` and `VIEWER_NARRATIVE.md` both depend on this one and
are small *because* of it.

## Why

The Viewer has four explanation systems and no spine between them:

| system | covers | reached by |
|---|---|---|
| `INSTRUMENTS[]` in `hud/instruments.ts` | 13 numeric tiles, each with `meaning` | clicking a tile |
| `hud/body-facts.ts` | Sun, planets, Moon | clicking in the scene |
| `hud/situation-report.ts` | ~30 paragraphs, regenerated wholesale | the Now tab |
| `data/checks.ts` + the Sources tab | provenance and verification | two more tabs |

Two consequences.

**The drawn objects belong to none of them.** You can click Mars. You cannot click a field
line, the magnetopause, a CME cone, the aurora oval, the wind stream or a coronagraph
plane. Those are what make this an instrument rather than a dashboard, and they are the
first thing anyone points at.

**The same fact is written three or four times.** The Shue magnetopause appears in a tile's
`meaning`, in a Situation Report paragraph, in the Sources model list and in a Checks row.
Four hand-maintained copies drift, and one already had: the report still described the
field lines as "clamped" for the whole of the T89 session, after the clamp was deleted.
That is an accuracy-charter failure, not an untidiness.

## The tier question, and why `limits` is not a confession

The charter's discomfort is real: this instrument straddles measurement and
representation, and the ambition (full solar-system energetics) is far past the MVP. A
required "what this does not say" field sounds like it forces an apology out of every
ambient layer.

It does not, because **`[M]` is already two different things** and the plan already says
so — `VIEWER_PLATFORM_PLAN.md` §2: *"Ambient never impersonates Measured. Particles are
prettier than reality and are labeled `[M]`; their rate and speed come from real density
and velocity."* That sentence describes a **keyed** ambient layer: an invented form
carrying a real number. The starfield is not that. Both are `[M]` today.

So make the distinction structural rather than prose:

- **keyed** `[M]` — the form is invented, one or more of its dimensions is a real
  quantity. Shiver amplitude ← Kp. Particle rate ← density, speed ← wind speed. The limit
  writes itself, always in the same shape: *this dimension is real, that one is invented.*
- **unkeyed** `[M]` — starfield, glow, glass. Carries nothing. The limit is one clause.

`limits` stops being uncomfortable once the answer is mechanical. Record it as
`keyedTo: string | null`, with no default, so the author must decide which kind it is.

And carry the ambition next to the stand-in. A `toPromote` field — *what would raise this
tier, or sharpen it within one* — turns the registry into the honest MVP ledger:

> `layer.field-brightness` — uniform `[M]`; would be `[D]` given flux-tube volume, which
> the trace already computes and discards.
> `model.t89` — `[D]`, Kp-driven; T96 would add IMF and pressure, and every input is
> already fetched.

That is how the ambition gets recorded without being built. Nothing balloons, because
`toPromote` is a sentence, not a commitment.

**Charter change requested:** split `[M]` into keyed and unkeyed in
`VIEWER_PLATFORM_PLAN.md` §2, and add `limits` and `toPromote` as required properties of
every rendered element. Proposed in the PR, not applied.

## The shape

```ts
export interface Subject {
  id: string;                    // 'layer.field-lines' | 'inst.bz' | 'model.t89' | 'body.mars'
  kind: 'measurement' | 'model' | 'layer' | 'body';
  tier: 'E' | 'D' | 'M';
  label: string;
  oneLine: string;               // what it is, in a breath — the hover label
  meaning: string;               // why it is on a space-weather instrument
  howMade: string;               // where the number or the shape comes from
  limits: string;                // what it does NOT say
  keyedTo: string | null;        // `[M]` only: the quantity the artwork carries
  sources: SourceRef[];          // feeds and papers, with links
  related: string[];             // other subject ids — the graph
  toPromote?: string;            // what would raise or sharpen the tier
}
```

`related[]` is what makes the physics navigable. A reader who asks how the Sun reaches us
should be able to walk: `inst.bz` → `concept.reconnection` → `layer.field-lines-open` →
`model.t89` (*no IMF term — these lines are open because the model does not close them,
not because reconnection opened them*) → `model.t96` (not built). That walk is the honest
answer to the question, and today it exists only in scattered comments.

## Tasks (in order)

1. **`src/hud/subjects.ts`** — the type above and the registry. Start by *moving*, not
   writing: `INSTRUMENTS[].meaning` and `body-facts.ts`'s `NOTES` are already the `meaning`
   field for two thirds of the entries.
2. **Entries for every drawn layer.** One per thing the LAYERS control toggles, plus
   everything drawn beneath: field lines (closed and open are one subject with two states),
   magnetopause, bow shock, aurora oval, wind stream, CME cones, Enlil, the Sun's imagery
   spheres, the coronagraph planes and their coverage ladder, the terminator, the
   spacecraft markers, coastlines, the starfield. This is the genuinely new writing.
3. **Model entries.** IGRF-14, T89c, Shue 1998, Farris & Russell 1994, OVATION Prime,
   NOAA Geospace, WSA-Enlil, astronomy-engine. Their citations exist in four places today;
   after this they exist here and the four places read from it.
4. **Keep the render fields where they are.** `Instrument` keeps `value`, `detail`,
   `series`, `part`; it gains `subject: string`. Do not fold rendering into the registry —
   a `Subject` is what a thing *is*, not how it is drawn.
5. **Render the existing detail panel from the registry.** `margin.ts`'s detail view is
   the first consumer. No new interaction in this brief; the panel should look almost
   unchanged and be driven from one place.
6. **Tests that make drift impossible.** Every subject has non-empty `limits`. Every `[M]`
   subject declares `keyedTo` explicitly. Every `[D]` subject has at least one cited
   source. Every id in `related[]` resolves. And the one that matters most: **every layer
   the scene draws has a subject, and every layer subject names something the scene
   draws** — assert against the scene's own object names, so adding a layer without an
   explanation fails, and so does leaving an explanation behind after deleting a layer.
7. **Point the existing consumers at it.** The Sources tab's Models-cited list and the
   Situation Report's model citations read from the registry instead of their own strings.
   `checks.ts` rows name a subject id. Nothing moves visually; four copies become one.

## Deliberately out of scope

- **Scene picking, hover, cards.** `VIEWER_CARDS.md`.
- **Rewriting the Situation Report.** `VIEWER_NARRATIVE.md`. Here it only stops carrying
  its own duplicate citations.
- **Any new physics.**

## Acceptance

`npm test` and `npm run a11y` before and after. The four drift tests above, each failing
if you break it on purpose — demonstrate that in the PR. A count in the PR of how many
duplicated prose strings were removed, because that number is the point of the exercise.
No visual change: Deck, Profile and a tile detail, before and after, should be
indistinguishable. Charter change request in the PR body.
