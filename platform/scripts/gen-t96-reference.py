#!/usr/bin/env python3
"""
Generate test/fixtures/t96-geopack.json — reference values for the T96 port.

    python3 -m venv .venv && .venv/bin/pip install geopack
    .venv/bin/python scripts/gen-t96-reference.py

`geopack` (github.com/tsssss/geopack, Sheng Tian) is an independent Python
translation of Tsyganenko's Fortran. Checking our TypeScript against it is the
only reason to trust a port this size: T96 is 1338 statements across 34
routines, and a transposed sign in the Region 2 sheet draws a magnetosphere
that still looks like a magnetosphere.

The grid is chosen to reach every branch, not to cover space evenly. T96 is a
piecewise model and most of its bugs would hide in one piece:

  * `T96_01` has three cases — inside the magnetopause, in the boundary layer,
    and outside it — so the positions include points either side of sigma = 1.08
    and inside the 0.005-wide layer between.
  * `BIRK1TOT_02` splits the Region 1 field four ways by invariant latitude:
    high-latitude, plasma sheet, and the two boundary layers, where it
    interpolates between two different basis sets. The northern and southern
    layers take opposite roots and swap which basis belongs to which end, which
    is exactly the kind of thing a port gets backwards.
  * `R2_BIRK` splits five ways across the Region 2 current layer.

The wind conditions likewise: northward and southward Bz, both By signs, quiet
and storm pressure, and one case outside the author's stated ranges, because
that is what a real storm looks like and the app will run it there.
"""
import json
import os

from geopack.t96 import t96

# Positions in GSM Earth radii. Named so a failing row says where it failed.
POSITIONS = [
    # Inner region: ring current and Region 2.
    ("inner dayside", 3.0, 0.0, 0.0),
    ("inner dawn", 0.0, -3.0, 0.0),
    ("inner dusk", 0.0, 3.0, 0.0),
    ("inner north", 0.5, 0.0, 3.0),
    ("inner south", 0.5, 0.0, -3.0),
    ("inner nightside", -3.0, 0.0, 0.0),
    ("inner oblique", 2.0, 1.5, 1.5),
    ("ring current peak", 4.5, 0.0, 0.5),
    ("ring current night", -4.5, 0.0, -0.5),
    ("R2 layer night", -5.3, 0.0, 0.0),
    ("R2 layer dusk", -4.0, 3.0, 1.0),
    # Region 1 oval and the two boundary layers around it: r = 4 sweeps
    # invariant latitude through all four of BIRK1TOT_02's cases.
    ("R1 sweep 55N", 2.29, 0.0, 3.28),
    ("R1 sweep 62N", 1.88, 0.0, 3.53),
    ("R1 sweep 66N", 1.63, 0.0, 3.65),
    ("R1 sweep 70N", 1.37, 0.0, 3.76),
    ("R1 sweep 74N", 1.10, 0.0, 3.85),
    ("R1 sweep 78N", 0.83, 0.0, 3.91),
    ("R1 sweep 82N", 0.56, 0.0, 3.96),
    ("R1 sweep 62S", 1.88, 0.0, -3.53),
    ("R1 sweep 70S", 1.37, 0.0, -3.76),
    ("R1 sweep 78S", 0.83, 0.0, -3.91),
    ("R1 sweep dusk 70N", 0.0, 1.37, 3.76),
    ("R1 sweep tail 70N", -1.37, 0.0, 3.76),
    # Dayside out to the nose: Chapman-Ferraro and the IMF penetration.
    ("subsolar 6", 6.0, 0.0, 0.0),
    ("subsolar 8", 8.0, 0.0, 0.0),
    ("subsolar 10", 10.0, 0.0, 0.0),
    ("cusp north", 4.0, 0.0, 6.0),
    ("cusp south", 4.0, 0.0, -6.0),
    ("dayside dusk", 6.0, 6.0, 0.0),
    ("dayside dawn", 6.0, -6.0, 0.0),
    ("dayside high lat", 5.0, 2.0, 7.0),
    # Near tail: the current sheet.
    ("near tail sheet", -8.0, 0.0, 0.0),
    ("near tail above", -8.0, 0.0, 3.0),
    ("near tail below", -8.0, 0.0, -3.0),
    ("near tail dusk", -8.0, 5.0, 0.0),
    ("near tail dawn", -8.0, -5.0, 0.0),
    ("tail 12 sheet", -12.0, 0.0, 0.0),
    ("tail 12 warped", -12.0, 8.0, 2.0),
    # Mid tail and the lobes.
    ("mid tail sheet", -20.0, 0.0, 0.0),
    ("north lobe 20", -20.0, 0.0, 8.0),
    ("south lobe 20", -20.0, 0.0, -8.0),
    ("mid tail dusk", -20.0, 10.0, 0.0),
    ("mid tail dawn", -20.0, -10.0, 0.0),
    ("north lobe 30", -30.0, 0.0, 10.0),
    ("mid tail sheet 30", -30.0, 0.0, 0.5),
    ("far tail sheet", -45.0, 0.0, 0.0),
    ("far tail lobe", -45.0, 0.0, 12.0),
    ("far tail flank", -45.0, 15.0, 5.0),
    ("far tail 60", -60.0, 0.0, 2.0),
    # Flanks, and the magnetopause: T96's boundary sits near 11 Re at the nose
    # for Pdyn = 2, so these straddle it at several local times.
    ("dusk flank", 0.0, 14.0, 0.0),
    ("dawn flank", 0.0, -14.0, 0.0),
    ("high north", 0.0, 0.0, 12.0),
    ("high south", 0.0, 0.0, -12.0),
    ("near nose inside", 10.5, 0.0, 0.0),
    ("near nose boundary", 11.05, 0.0, 0.0),
    ("near nose outside", 12.5, 0.0, 0.0),
    ("flank boundary dusk", 0.0, 16.0, 0.0),
    ("flank outside dusk", 0.0, 22.0, 0.0),
    ("outside sunward", 16.0, 0.0, 0.0),
    ("outside north", 0.0, 0.0, 20.0),
    ("tail flank outside", -20.0, 28.0, 0.0),
    ("oblique far", -15.0, -9.0, 7.0),
    ("oblique near", 4.0, -4.0, -4.0),
]

# (Pdyn nPa, Dst nT, By nT, Bz nT). The first is the model's own reference
# state; the last is deliberately outside the author's stated ranges, because a
# severe storm is exactly when someone looks and the app does not refuse to draw.
WIND = [
    ("reference", 2.0, 0.0, 0.0, 0.0),
    ("quiet north", 1.2, -8.0, 2.0, 4.0),
    ("quiet south", 1.2, -15.0, -3.0, -4.0),
    ("active south", 4.0, -60.0, 5.0, -8.0),
    ("active north", 4.0, -40.0, -6.0, 8.0),
    ("dawnward By", 3.0, -30.0, -9.0, 1.0),
    ("duskward By", 3.0, -30.0, 9.0, -1.0),
    ("storm extrapolated", 8.0, -150.0, -12.0, -20.0),
]

# Dipole tilt in radians. The extremes bracket the real annual range (about
# +-35 deg); zero is the degenerate case where every sps term drops out, which
# is exactly where a sign error would hide.
TILTS = [-0.55, -0.25, 0.0, 0.25, 0.55]


def main():
    rows = []
    for wname, pdyn, dst, by, bz in WIND:
        for tilt in TILTS:
            for name, x, y, z in POSITIONS:
                bx_, by_, bz_ = t96([pdyn, dst, by, bz], tilt, x, y, z)
                rows.append([name, wname, pdyn, dst, by, bz, tilt, x, y, z,
                             float(bx_), float(by_), float(bz_)])

    here = os.path.dirname(os.path.abspath(__file__))
    out = os.path.join(here, "..", "test", "fixtures", "t96-geopack.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    payload = {
        "source": "geopack (github.com/tsssss/geopack), function geopack.t96.t96",
        "columns": ["name", "wind", "pdyn_npa", "dst_nt", "by_nt", "bz_nt",
                    "tilt_rad", "x_re", "y_re", "z_re", "bx_nt", "by_nt", "bz_nt"],
        "frame": "GSM, positions in Earth radii, field in nT",
        "note": ("geopack uses scipy's Bessel functions where the vendored "
                 "Fortran uses its own Abramowitz & Stegun polynomials; "
                 "test/t96.test.ts measures what that costs."),
        "rows": rows,
    }
    with open(out, "w") as f:
        json.dump(payload, f, separators=(",", ":"))
        f.write("\n")
    print(f"wrote {out} ({len(rows)} rows)")


if __name__ == "__main__":
    main()
