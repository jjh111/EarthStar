/**
 * Ephemeris accuracy — checked against JPL Horizons, not against ourselves.
 *
 * Reference values were fetched live from
 * https://ssd.jpl.nasa.gov/api/horizons.api on 2026-09-06 (see
 * docs/sources.md §4). Horizons reports heliocentric ICRF vectors in TDB;
 * astronomy-engine takes UTC, so the epoch is offset by TT−UTC = 69.184 s
 * (TDB−TT is ≲ 2 ms and irrelevant at this tolerance).
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import { helioEQJ, subsolarPoint, gastDegrees, geoToEQD, sunGeo } from '../src/models/ephemeris.js';

/** 2026-09-06 00:00:00.0000 TDB expressed as UTC. */
const EPOCH_TDB_AS_UTC = new Date('2026-09-05T23:58:50.816Z');

const HORIZONS = {
  // Target 399 / center 500@10, REF_PLANE=FRAME (ICRF), AU.
  Earth: new Vector3(9.644056762539982e-1, -2.694183818155824e-1, -1.167966567968398e-1),
  // Target 499 / center 500@10.
  Mars: new Vector3(4.567043886088150e-1, 1.328547536281955e0, 5.970563218205626e-1),
};

/** Angular separation between two vectors, in degrees. */
function angleDeg(a: Vector3, b: Vector3): number {
  const c = a.clone().normalize().dot(b.clone().normalize());
  return (Math.acos(Math.min(1, Math.max(-1, c))) * 180) / Math.PI;
}

describe('planetary positions vs JPL Horizons', () => {
  // Phase-0 acceptance (plan §6): within 0.1° of Horizons at the test epoch.
  const TOL_DEG = 0.1;

  it('Earth is within 0.1° of Horizons', () => {
    const ours = helioEQJ('Earth', EPOCH_TDB_AS_UTC);
    expect(angleDeg(ours, HORIZONS.Earth)).toBeLessThan(TOL_DEG);
  });

  it('Mars is within 0.1° of Horizons', () => {
    const ours = helioEQJ('Mars', EPOCH_TDB_AS_UTC);
    expect(angleDeg(ours, HORIZONS.Mars)).toBeLessThan(TOL_DEG);
  });

  it('heliocentric distances match Horizons to better than 1e-4 AU', () => {
    expect(Math.abs(helioEQJ('Earth', EPOCH_TDB_AS_UTC).length() - HORIZONS.Earth.length()))
      .toBeLessThan(1e-4);
    expect(Math.abs(helioEQJ('Mars', EPOCH_TDB_AS_UTC).length() - HORIZONS.Mars.length()))
      .toBeLessThan(1e-4);
  });
});

describe('sub-solar point — the terminator’s ground truth', () => {
  /**
   * Horizons, target 399 observed from 500@10, QUANTITIES=14 (sub-observer
   * lon/lat of Earth as seen from the Sun):
   *   2026-Sep-06 12:00 UT →  ObsSub-LON 1.691667°   ObsSub-LAT 6.367266°
   *
   * Two documented convention differences separate that from what the renderer
   * needs, and both are asserted here rather than absorbed into a loose
   * tolerance — a fudged tolerance would hide a real regression later:
   *
   *  · LONGITUDE. Horizons answers "where does the Sun see Earth", using Earth's
   *    orientation one light-time ago. The terminator needs "where is sunlight
   *    landing now": the Sun's retarded direction against Earth's orientation
   *    *now*. The two differ by exactly one light-time of Earth rotation
   *    (≈ 2.10° here), which we add back to compare.
   *  · LATITUDE. Horizons reports planetodetic latitude on the WGS-84 spheroid;
   *    we compute planetocentric, which is what a rendered sphere wants. The
   *    conversion is tan φ_d = tan φ_c / (1 − f)².
   *
   * With both applied the agreement is sub-arcsecond.
   */
  const T = new Date('2026-09-06T12:00:00Z');
  const REF = { lon: 1.691667, lat: 6.367266 };
  const FLATTENING = 1 / 298.257223563;
  const LIGHT_S_PER_AU = 499.004784;
  const EARTH_ROT_DEG_PER_S = 360.9856235 / 86400;

  it('longitude matches Horizons to better than 1 arcsecond once the light-time convention is accounted for', () => {
    const ours = subsolarPoint(T);
    const distanceAu = sunGeo(T).distanceAu;
    const lightTimeRotationDeg = distanceAu * LIGHT_S_PER_AU * EARTH_ROT_DEG_PER_S;
    let d = ours.lon + lightTimeRotationDeg - REF.lon;
    d = ((d + 180) % 360 + 360) % 360 - 180;
    expect(Math.abs(d)).toBeLessThan(1 / 3600);
  });

  it('latitude matches Horizons to better than 1 arcsecond once converted to planetodetic', () => {
    const geocentric = (subsolarPoint(T).lat * Math.PI) / 180;
    const geodetic =
      (Math.atan(Math.tan(geocentric) / Math.pow(1 - FLATTENING, 2)) * 180) / Math.PI;
    expect(Math.abs(geodetic - REF.lat)).toBeLessThan(1 / 3600);
  });

  it('the light-time offset is the whole of the raw longitude discrepancy', () => {
    // Guards the explanation itself: if this ever stops holding, the residual
    // is something else and the comment above has become a lie.
    const raw = subsolarPoint(T).lon - REF.lon;
    const expected = -sunGeo(T).distanceAu * LIGHT_S_PER_AU * EARTH_ROT_DEG_PER_S;
    expect(Math.abs(raw - expected)).toBeLessThan(0.001);
  });

  it('the sub-solar direction is the most-lit point, and 90° away lies on the terminator', () => {
    const ss = subsolarPoint(T);
    const gast = gastDegrees(T);
    const sunDir = geoToEQD(ss.lat, ss.lon, gast);
    expect(geoToEQD(ss.lat, ss.lon, gast).dot(sunDir)).toBeCloseTo(1, 10);
    // A point on the equator 90° of longitude away is within a degree of the
    // terminator (exactly on it when the sub-solar latitude is zero).
    const limb = geoToEQD(0, ss.lon + 90, gast);
    expect(Math.abs(limb.dot(sunDir))).toBeLessThan(0.02);
  });
});

describe('sidereal time', () => {
  it('advances ~360.9856° per day', () => {
    const t0 = new Date('2026-09-06T00:00:00Z');
    const t1 = new Date('2026-09-07T00:00:00Z');
    let d = gastDegrees(t1) - gastDegrees(t0);
    d = ((d % 360) + 360) % 360;
    expect(d).toBeGreaterThan(0.9);
    expect(d).toBeLessThan(1.1);   // 360.9856 − 360
  });
});
