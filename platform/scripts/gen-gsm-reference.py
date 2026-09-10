#!/usr/bin/env python3
"""
Generate test/fixtures/gsm-geopack.json — reference GSM frames and dipole tilts.

    .venv/bin/python scripts/gen-gsm-reference.py

The dipole tilt is the one number T89 cannot be checked without, and a sign
error in it rotates the entire magnetosphere while still drawing something
plausible. `geopack.recalc(ut)` returns the tilt and sets up the GEO->GSM
rotation from its own IGRF coefficients and its own solar ephemeris, so it is
independent of ours in both inputs.

For each epoch we record the tilt and the images of the three GEO axes under
GEO->GSM. Those three images are the columns of the rotation matrix, so its
rows -- the GSM basis expressed in GEO -- can be reconstructed and compared
against `gsmBasis()` directly.

The epochs walk the annual tilt cycle (solstices and equinoxes, where the tilt
is at its extremes and its zero) and the diurnal one (four times of day, which
is the +-11 deg wobble as the offset dipole swings around the spin axis).
"""
import calendar
import datetime
import json
import os

from geopack import geopack

EPOCHS = [
    "2026-01-15T00:00:00Z", "2026-01-15T06:00:00Z",
    "2026-01-15T12:00:00Z", "2026-01-15T18:00:00Z",
    "2026-03-20T06:00:00Z", "2026-03-20T12:00:00Z", "2026-03-20T18:00:00Z",
    "2026-06-21T00:00:00Z", "2026-06-21T12:00:00Z",
    "2026-09-10T12:00:00Z", "2026-09-22T12:00:00Z",
    "2026-12-21T00:00:00Z", "2026-12-21T12:00:00Z",
    "2027-04-05T03:00:00Z", "2027-08-18T21:00:00Z", "2028-02-29T09:00:00Z",
]


def main():
    rows = []
    for iso in EPOCHS:
        dt = datetime.datetime.strptime(iso, "%Y-%m-%dT%H:%M:%SZ")
        ut = calendar.timegm(dt.timetuple())
        psi = float(geopack.recalc(ut))
        cols = [[float(c) for c in geopack.geogsm(*axis, 1)]
                for axis in [(1.0, 0.0, 0.0), (0.0, 1.0, 0.0), (0.0, 0.0, 1.0)]]
        # cols[j] is the image of GEO axis j, i.e. column j of the rotation.
        # Row i of the rotation is GSM basis vector i expressed in GEO.
        rows.append({
            "epoch": iso,
            "tilt_rad": psi,
            "gsm_x_in_geo": [cols[0][0], cols[1][0], cols[2][0]],
            "gsm_y_in_geo": [cols[0][1], cols[1][1], cols[2][1]],
            "gsm_z_in_geo": [cols[0][2], cols[1][2], cols[2][2]],
        })

    here = os.path.dirname(os.path.abspath(__file__))
    out = os.path.join(here, "..", "test", "fixtures", "gsm-geopack.json")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w") as f:
        json.dump({
            "source": "geopack (github.com/tsssss/geopack): recalc() and geogsm()",
            "frame": "GEO is Earth-fixed, +X through 0N 0E, +Z through the north pole",
            "rows": rows,
        }, f, indent=1)
        f.write("\n")
    print(f"wrote {out} ({len(rows)} epochs)")


if __name__ == "__main__":
    main()
