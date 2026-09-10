#!/usr/bin/env python3
"""
Generate test/fixtures/t89-geopack.json — reference values for the T89 port.

    python3 -m venv .venv && .venv/bin/pip install geopack
    .venv/bin/python scripts/gen-t89-reference.py

`geopack` (github.com/tsssss/geopack, Sheng Tian) is an independent Python
translation of Tsyganenko's Fortran. Checking our TypeScript against it is the
only reason to trust a 200-line closed-form port: a transposed sign in the tail
warping term draws a magnetosphere that still looks like a magnetosphere.

The grid deliberately spans the regions where different current systems
dominate — the inner region where the ring current does, the dayside where the
Chapman-Ferraro currents do, the tail and lobes where the cross-tail sheet does,
and the flanks — because a port can be right in one of those and wrong in
another.
"""
import json
import os

from geopack.t89 import t89

# Positions in GSM Earth radii. Named so a failing row says where it failed.
POSITIONS = [
    # Inner region: the ring current dominates.
    ("inner dayside", 3.0, 0.0, 0.0),
    ("inner dawn", 0.0, -3.0, 0.0),
    ("inner dusk", 0.0, 3.0, 0.0),
    ("inner north", 0.0, 0.0, 3.0),
    ("inner south", 0.0, 0.0, -3.0),
    ("inner nightside", -3.0, 0.0, 0.0),
    ("inner oblique", 2.0, 1.5, 1.5),
    ("ring current peak", 4.5, 0.0, 0.5),
    ("ring current night", -4.5, 0.0, -0.5),
    # Dayside out to the nose: Chapman-Ferraro.
    ("subsolar 6", 6.0, 0.0, 0.0),
    ("subsolar 8", 8.0, 0.0, 0.0),
    ("subsolar 10", 10.0, 0.0, 0.0),
    ("subsolar 12", 12.0, 0.0, 0.0),
    ("cusp north", 4.0, 0.0, 6.0),
    ("cusp south", 4.0, 0.0, -6.0),
    ("dayside dusk", 6.0, 6.0, 0.0),
    ("dayside dawn", 6.0, -6.0, 0.0),
    ("dayside high lat", 5.0, 2.0, 7.0),
    # Near tail: the current sheet turns on.
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
    ("south lobe 30", -30.0, 0.0, -10.0),
    ("mid tail sheet 30", -30.0, 0.0, 0.5),
    # Far tail, still inside the stated 70 Re fit region.
    ("far tail sheet", -45.0, 0.0, 0.0),
    ("far tail lobe", -45.0, 0.0, 12.0),
    ("far tail flank", -45.0, 15.0, 5.0),
    ("far tail 60", -60.0, 0.0, 2.0),
    ("far tail 60 lobe", -60.0, 5.0, -12.0),
    # Flanks and off-axis.
    ("dusk flank", 0.0, 14.0, 0.0),
    ("dawn flank", 0.0, -14.0, 0.0),
    ("high north", 0.0, 0.0, 12.0),
    ("high south", 0.0, 0.0, -12.0),
    ("oblique far", -15.0, -9.0, 7.0),
    ("oblique near", 4.0, -4.0, -4.0),
]

# Dipole tilt in radians. The extremes bracket the real annual range (about
# +-35 deg); zero is the degenerate case where every sps term drops out, which
# is exactly where a sign error would hide.
TILTS = [-0.61, -0.3, 0.0, 0.3, 0.61]

BANDS = list(range(1, 8))  # IOPT 1..7


def main():
    rows = []
    for tilt in TILTS:
        for iopt in BANDS:
            for name, x, y, z in POSITIONS:
                bx, by, bz = t89(iopt, tilt, x, y, z)
                rows.append([name, iopt, tilt, x, y, z,
                             float(bx), float(by), float(bz)])

    here = os.path.dirname(os.path.abspath(__file__))
    out = os.path.join(here, "..", "test", "fixtures", "t89-geopack.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    payload = {
        "source": "geopack (github.com/tsssss/geopack), function geopack.t89.t89",
        "columns": ["name", "iopt", "tilt_rad", "x_re", "y_re", "z_re",
                    "bx_nt", "by_nt", "bz_nt"],
        "frame": "GSM, positions in Earth radii, field in nT",
        "rows": rows,
    }
    with open(out, "w") as f:
        json.dump(payload, f, separators=(",", ":"))
        f.write("\n")
    print(f"wrote {out} ({len(rows)} rows)")


if __name__ == "__main__":
    main()
