# Vendored model coefficients

## `igrf14coeffs.txt`

The 14th generation International Geomagnetic Reference Field, Schmidt semi-normalised
spherical harmonic coefficients to degree 13, as published by IAGA.

- **Source:** <https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt>
- **Retrieved:** 2026-09-06, unmodified
- **Released:** November 2024. Main field epoch 2025.0; secular variation valid 2025–2030.
- **Status:** public domain (IAGA / NOAA NCEI / BGS)

This file is the source of truth. `src/models/igrf14-coeffs.ts` is generated from it by
`scripts/gen-igrf.mjs` and holds only the 2025.0 main field and the 2025–30 secular
variation — the historical epochs back to 1900 are not shipped to the browser.

`test/igrf14.test.ts` re-parses this file and asserts the generated module still matches,
so the two cannot drift.

## `t89c.f`

Tsyganenko's magnetospheric external field model, T89c — the April 1992 revision
of T89, release dated 12 February 1996. Fixed-form Fortran 77, ~490 lines,
including the small demonstration main program of the original distribution.

- **Source:** `github.com/sdelarquier/tsyganenko`, `tsyganenko/T89.f` — an
  unmodified redistribution of Tsyganenko's own file (the author's own site,
  `geo.phys.spbu.ru`, no longer resolves).
- **Retrieved:** 2026-09-10, unmodified. `sha256
  e5e170abcdfbf4a9bb1a42490191a8ff81c63d0d229c85e987a9cd27c3e5b011`
- **Author:** N. A. Tsyganenko, HSTX Corp./NASA GSFC. Copyright 1989, 1992.
- **Reference:** *A magnetospheric magnetic field model with a warped tail
  current sheet*, Planet. Space Sci. **37**(1) 5–20, 1989.

Two other copies were fetched and diffed against this one before it was chosen,
because a corrupted copy of a 550-line numerical routine is not something a
reader would notice:

- `PRBEM/IRBEM`, `source/Tsyganenko89.f` — identical arithmetic, but modified:
  the tilt is passed through a `COMMON` block instead of the argument list.
- `mattkjames7/geopack`, `src/fortran/T89c.f` — **corrupt**. Line 263 reads
  `HRDXL=0.5D0*RDXL36`, referring to a variable that does not exist; under
  Fortran's implicit typing that compiles and silently produces the wrong tail
  closure field.

`src/models/t89-coeffs.ts` is generated from this file by `scripts/gen-t89.mjs`,
which parses the `DATA PARAM/.../` block — 30 parameters × 7 Kp bands, in
Fortran's column-major order. `test/t89.test.ts` re-parses the vendored file and
asserts the generated module still matches, so the two cannot drift.

The port itself is `src/models/t89.ts`, verified against the Python `geopack`
package over 1540 points; see `scripts/gen-t89-reference.py`. It adds one limit
the paper does not state — a 20 Rₑ sunward cut-off, because T89 has no
magnetopause and its dayside field runs away outside one. `docs/sources.md` §5
records the measurement behind it.

## `t96.f`

Tsyganenko's magnetospheric field model T96 — the `T96_01` release of 22 June 1996,
carrying the two corrections T. Sotirelis reported in April 1997 (a stray closing
parenthesis in `R2_BIRK`, and a 0/0 on the Z axis sidestepped in `XKSI`). Fixed-form
Fortran 77, 2579 lines, 34 subroutines and functions, 47 `DATA` statements holding 848
fitted coefficients.

- **Source:** `github.com/sdelarquier/tsyganenko`, `tsyganenko/T96.f` — the same
  redistribution the T89c file above came from, and unmodified for the same reason: it
  keeps Tsyganenko's original subroutine names, argument lists and numeric literals.
- **Retrieved:** 2026-09-11, unmodified. `sha256
  dcfb44e8184b427d57ad3dfa4dccf2cbae1c35f4f5d0014aeab9226b5afc03f6`
- **Author:** N. A. Tsyganenko, Raytheon STX / NASA GSFC. Copyright 1995, 1996.
- **References:** *Modeling the Earth's magnetospheric magnetic field confined within a
  realistic magnetopause*, J. Geophys. Res. **100**, 5599, 1995; Tsyganenko and Stern,
  *Modeling the global magnetic field of the large-scale Birkeland current systems*,
  J. Geophys. Res. **101**, 27187, 1996.

Three copies were fetched and compared before this one was chosen — the same precaution as
for T89c, and more necessary here, because 848 coefficients spread over 47 `DATA` statements
is not something a reader would notice going wrong:

- `mattkjames7/geopack`, `src/fortran/T96.f` — **arithmetic identical.** Every one of the
  1338 statements matches after removing a `T96` prefix the repository adds to each
  subroutine name and its `REAL*8` re-declaration of the interface variables. All 47 `DATA`
  payloads match exactly. (Note that this repository's *T89c* file is corrupt; its T96 is
  not, and the two were checked independently.)
- `PRBEM/IRBEM`, `source/Tsyganenko96.f` — nine statements differ, every one a deliberate
  IRBEM edit: the tilt passed through a `COMMON` block, `π` and `2π` computed as
  `4·atan(1)` instead of the file's literals, `DFLOAT(K)` dropped, `0.` respelled `0`. No
  arithmetic difference. Its `DATA` payloads match apart from one removed `π` literal.

The comparison was made statement-by-statement with continuations joined and numeric
literals canonicalised, because the file uses **tabs in the label field** in twenty places —
a GNU extension Tsyganenko's own file relies on, which a naïve column-6 reader silently
mangles. `scripts/gen-t96.mjs` handles it, and `test/t96.test.ts` asserts the parse finds
exactly 34 routines and 848 numbers.

`src/models/t96-coeffs.ts` is generated from this file by `scripts/gen-t96.mjs`, which reads
every `DATA` statement, resolves array shapes from `DIMENSION` *and* `COMMON` declarations —
T96 initialises COMMON arrays from `DATA` statements inside the routines that use them — and
expands Fortran repeat counts (`2*-7.D0` is two values, not a product). `test/t96.test.ts`
re-parses the vendored file and asserts the generated module still matches, both ways: no
coefficient missing, and none exported without a `DATA` statement behind it.

The port is `src/models/t96.ts`, verified against the Python `geopack` package over 2520
points. Its worst disagreement — 4.9 × 10⁻⁵ nT — is accounted for rather than tolerated:
three places where `geopack` modernised a literal the released Fortran holds truncated.
`docs/sources.md` §5 has the table and the method.
