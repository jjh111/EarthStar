/**
 * The Sun's rotation axis.
 *
 * It is only ever used as the "up" direction when projecting solar imagery back
 * onto the sphere, which means a wrong answer rotates every active region in
 * the picture and still looks entirely plausible. So it is checked against the
 * two things that define it: its tilt from the ecliptic pole, and the sub-Earth
 * latitude it has to reproduce.
 */

import { describe, expect, it } from 'vitest';
import * as Astronomy from 'astronomy-engine';
import { Vector3 } from 'three';
import { solarNorth, toScene } from '../src/models/ephemeris.js';
import { subEarthLatitude } from '../src/models/cme-cone.js';

/** Ecliptic north in the scene frame, for the tilt comparison. */
function eclipticNorth(date: Date): Vector3 {
  const t = Astronomy.MakeTime(date);
  const v = Astronomy.RotateVector(
    Astronomy.Rotation_ECT_EQD(t), new Astronomy.Vector(0, 0, 1, t),
  );
  return toScene(v).normalize();
}

describe('solarNorth', () => {
  it('is a unit vector', () => {
    expect(solarNorth(new Date('2026-09-07T00:00:00Z')).length()).toBeCloseTo(1, 12);
  });

  it('sits 7.25° from the ecliptic pole, all year round', () => {
    for (const m of [1, 3, 6, 9, 12]) {
      const d = new Date(Date.UTC(2026, m - 1, 15));
      const tilt = (Math.acos(solarNorth(d).dot(eclipticNorth(d))) * 180) / Math.PI;
      expect(tilt).toBeCloseTo(7.25, 3);
    }
  });

  it('reproduces B₀ — the sub-Earth latitude — from the axis alone', () => {
    // B₀ is the angle between the Sun–Earth line and the solar equator, so it
    // is 90° minus the angle from the pole. Computing it two independent ways
    // is what makes the axis trustworthy rather than merely plausible.
    for (const iso of [
      '2026-03-07T00:00:00Z', '2026-06-06T00:00:00Z',
      '2026-09-08T00:00:00Z', '2026-12-07T00:00:00Z',
    ]) {
      const d = new Date(iso);
      const sunToEarth = toScene(
        (() => {
          const t = Astronomy.MakeTime(d);
          const v = Astronomy.GeoVector(Astronomy.Body.Sun, t, true);
          return { x: -v.x, y: -v.y, z: -v.z };
        })(),
      ).normalize();
      const fromPole = (Math.acos(solarNorth(d).dot(sunToEarth)) * 180) / Math.PI;
      expect(90 - fromPole).toBeCloseTo(subEarthLatitude(d), 1);
    }
  });

  it('has Earth south of the solar equator in March and north in September', () => {
    expect(subEarthLatitude(new Date('2026-03-07T00:00:00Z'))).toBeLessThan(0);
    expect(subEarthLatitude(new Date('2026-09-08T00:00:00Z'))).toBeGreaterThan(0);
  });
});
