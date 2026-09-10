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
