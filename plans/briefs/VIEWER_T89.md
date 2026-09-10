# Session Brief — Viewer: the external field (Tsyganenko T89)

**Repo:** `jjh111/EarthStar` · **Branch:** `claude/viewer-t89` (from `main`)
**You own:** `platform/`, `viewer/` (rebuild and commit both). **Do not edit:** `src/`,
`index.html`, `assets/`, `archive/`, `skill_extract/`, `plans/*` (propose in the PR).
**Environment:** local, network to NOAA SWPC. Node 22. Python 3 with `pip` available —
you will need it once, to generate reference values.

## Why

The field lines in the Viewer are **IGRF alone, geometrically clamped at the Shue
boundary**. `src/scene/magnetosphere.ts:54` says so in as many words: *"It is a geometric
clamp."* IGRF is the field of the Earth's interior. It contains no external currents at
all, so the shape it draws is a tilted dipole in a bag, and every deformation that makes a
magnetosphere a magnetosphere is missing by construction:

| current system | what it does to the shape |
|---|---|
| Chapman–Ferraro (magnetopause) | compresses the dayside |
| cross-tail current sheet | stretches the nightside into lobes — the largest single deformation |
| ring current | inflates the inner magnetosphere; **this is what Dst measures, and we already display Dst beside a field that does not respond to it** |
| Region 1/2 Birkeland | shears the field at auroral latitudes |
| IMF interconnection | opens dayside flux under southward Bz |

The clamp is not wrong so much as empty: it stops lines at a boundary instead of letting a
field *shape* them. Replacing it is the difference between a diagram and a measurement.

## The model

**Tsyganenko 1989 (T89)** — *A magnetospheric magnetic field model with a warped tail
current sheet*, Planet. Space Sci. 37(1) 5–20. It returns the **external** field in nT;
the total is IGRF + T89.

Chosen over T96/TS05 as the first step because it is portable and we already have its
driver:

- **Inputs:** a Kp band, the dipole tilt angle, and position in **GSM** Rₑ. Nothing else.
- **Form:** closed-form. ~550 lines of Fortran, elementary arithmetic and trig, no
  iteration, no matrix solves, no special functions. 210 coefficients as 30 parameters × 7
  Kp bands.
- **No JavaScript or TypeScript port exists.** Python, IDL and Fortran only — checked.
  This is new ground for a browser.

Its limits, which the app must state rather than hide:

- Kp is binned into **seven bands**, so the field steps rather than glides. Retracing is
  therefore rare, which is good for the frame budget and bad for the eye — do not animate
  across a band change as if it were continuous.
- T89 knows nothing about **IMF By/Bz or solar-wind pressure**. Southward-Bz opening is
  *not* represented. That is T96's job and it is out of scope here.
- It is a 1989 fit over the spacecraft data of its era, valid within the fit region of the
  original paper. Establish that radius from the paper and refuse to evaluate outside it,
  the way `igrfInValidity` guards IGRF's epoch.

## Tasks (in order)

1. **Vendor the coefficients, do not retype them.** Mirror what `vendor/igrf14coeffs.txt`
   + `scripts/gen-igrf.mjs` already do: put the Fortran source in `vendor/`, write
   `scripts/gen-t89.mjs` to emit `src/models/t89-coeffs.ts`, and keep the vendored file as
   the source of truth. 210 hand-copied numbers is 210 chances to be wrong in a way no
   test will catch.
2. **GSE → GSM.** We compute GSE (`gseBasis` in `models/ephemeris.ts`) and we have the
   IGRF dipole (`geomagneticNorthPole` in `models/igrf14.ts`). GSM is GSE rotated about
   the sunward axis until the dipole lies in the X–Z plane; the dipole tilt angle falls
   out of the same construction. Test the round trip and the tilt against published values
   for a few epochs — a sign error here rotates the whole magnetosphere and still looks
   plausible.
3. **Port T89.** `src/models/t89.ts`, same shape as `igrf14.ts`: a pure function from
   (position, Kp band, tilt) to a field vector, no DOM, no three.js.
4. **Verify against an independent implementation.** Install the Python `geopack` package
   (`tsssss/geopack`), evaluate T89 over a grid — a few hundred points spanning the
   dayside, the tail, the lobes and the inner region, across all seven Kp bands — and
   vendor that table as a test fixture. Assert agreement to a stated tolerance. This is
   exactly the pattern `test/igrf14.test.ts` uses against BGS, and it is the only reason
   to trust a 550-line port.
5. **Trace the sum.** `traceAll` integrates `igrfVector`; it becomes IGRF + T89. Delete
   the geometric clamp — a line now stops because the field takes it away, not because a
   surface cut it off. Expect the tail lines to become long: cap by arc length or step
   count, and say in the panel that the tail is truncated for drawing rather than ending.
6. **A check that can fail.** In the house style of `src/data/checks.ts`: T89's implicit
   dayside standoff is driven by **Kp**, while our Shue-1998 magnetopause is driven by
   **live solar-wind pressure**. They will not always agree. Compare the last closed field
   line's sunward extent against the Shue standoff and report the disagreement — with
   `inconclusive` when Kp is mid-band, since a seven-band model cannot be held to a
   pressure-driven boundary's precision.
7. **Tier and cite.** `[D]`, "Tsyganenko 1989 (T89), external field, Kp-driven" alongside
   IGRF-14 in the Models-cited list, the Sources panel and the Situation Report. Say
   plainly what it does *not* include: no IMF dependence, so no dayside opening.

## Deliberately out of scope

- **T96/TS05.** We already fetch every input T96 needs — Pdyn, Dst, IMF By and Bz — so it
  is the obvious follow-on, and the architecture here should not make it harder. It is not
  this brief.
- **The bow shock and the magnetosheath.** A separate and real problem: the bow shock and
  magnetopause are drawn as wireframe surfaces, and the actual deflection is the IMF
  *draping* through the sheath between them. Draped sheath lines would say something two
  glassy domes cannot. Raise it as a follow-on brief; do not improvise it here.
- **Flux-driven line brightness.** Wanted, and it belongs with the sheath work.

## Acceptance

`npm test` and `npm run a11y` before and after. The reference-table test passing at a
stated tolerance, with the tolerance justified in a comment. Frame-time budget unchanged
(commit `9a5c807`) — measure the retrace cost and report it; note that a Kp band change is
the only trigger, so the cost is amortised over hours. Screenshots of Deck, Profile and
Polar before and after, because the point of the whole exercise is that the shape changes.
Contract change requests and open questions in the PR body.
