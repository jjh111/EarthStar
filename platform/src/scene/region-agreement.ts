/**
 * Does the picture agree with the numbers?
 *
 * The Sun in the scene carries a SUVI frame projected back onto the sphere. That
 * projection depends on four things being right at once: the solar rotation
 * axis, the disk's measured centre and radius inside the image, the orthographic
 * mapping, and the direction NOAA's heliographic longitudes run in. Get any one
 * of them wrong — a sign, a swapped axis, a mis-measured limb — and the result
 * is a Sun that looks entirely convincing and has its active regions in the
 * wrong places.
 *
 * NOAA publishes those regions as *numbers*: a daily list of heliographic
 * latitudes and longitudes, produced by a completely different pipeline from the
 * imagery. Active regions are bright in every SUVI passband. So the projection
 * can be checked by asking whether the reported positions land on bright pixels.
 *
 * The absolute contrast is not the test, though, because it depends on the day.
 * On 2026-09-07 the Sun carried nine regions of one to four spots against a
 * bright 304 Å chromosphere, and *every* projection hypothesis — right or wrong —
 * scored between 1.0 and 1.3 times the disk mean. An absolute threshold would
 * have reported a defect in a projection that was correct, which is the mistake
 * the aurora check already made once.
 *
 * So the measurement is comparative: the published positions against the same
 * positions mirrored east–west, which is the likeliest error and the one that
 * still looks like a Sun. When the two score the same the day has no signal to
 * offer, and the check says so rather than guessing.
 */

import { Vector3 } from 'three';
import type { ActiveRegion } from '../data/swpc.js';
import type { DiskCalibration } from './disk-calibration.js';

/** Carrington sidereal rotation, matching the scene's own marker rotation. */
const CARRINGTON_DEG_PER_DAY = 360 / 25.38;

export interface AgreementResult {
  /** Regions that were on the visible disk and far enough from the limb to test. */
  tested: number;
  /** Mean luminance at the reported positions, 0–255. */
  atRegions: number;
  /** Mean luminance across the disk, for comparison. */
  acrossDisk: number;
  ratio: number;
  /**
   * The same measurement with longitudes mirrored east–west: the single most
   * likely projection error, and the control this check is judged against.
   */
  mirroredRatio: number;
}

/**
 * Direction of a heliographic position in the scene frame.
 *
 * `lonDeg` is degrees **east** of the central meridian, which is what NOAA's
 * `solar_regions.json` publishes: a record with `longitude: 50` carries
 * `location: "S11E50"`, and one with `longitude: -29` carries `"N09W29"`. The
 * sign is the opposite of the way solar rotation carries features, and getting
 * it backwards mirrors every region across the disk while leaving a picture
 * that looks entirely correct. The live check caught exactly that.
 *
 * `north` is the rotation axis and `earthDir` the unit vector from the Sun to
 * Earth; together they fix the central meridian, since it is the meridian
 * containing the sub-Earth point.
 */
export function heliographicDirection(
  latDeg: number, lonDeg: number, north: Vector3, earthDir: Vector3,
): Vector3 {
  const b = (latDeg * Math.PI) / 180;
  const l = (lonDeg * Math.PI) / 180;
  // Body frame: x toward the central meridian at the equator, y = north × x,
  // which points solar *west*. Longitudes are east-positive, so they run the
  // other way — hence the negated component.
  const x = earthDir.clone().addScaledVector(north, -earthDir.dot(north)).normalize();
  const y = new Vector3().crossVectors(north, x);
  return new Vector3()
    .addScaledVector(x, Math.cos(b) * Math.cos(l))
    .addScaledVector(y, -Math.cos(b) * Math.sin(l))
    .addScaledVector(north, Math.sin(b));
}

/** Where a direction on the sphere lands in the image, in texture coordinates. */
export function projectToImage(
  dir: Vector3, north: Vector3, earthDir: Vector3, cal: DiskCalibration,
): { u: number; v: number } {
  const up = north.clone().addScaledVector(earthDir, -north.dot(earthDir)).normalize();
  const right = new Vector3().crossVectors(up, earthDir).normalize();
  return {
    u: cal.centre.u + dir.dot(right) * cal.radius,
    v: cal.centre.v + dir.dot(up) * cal.radius,
  };
}

/**
 * Compare reported region positions against the image, on a square luminance
 * buffer. Pure, so the geometry can be tested against a synthetic Sun with
 * regions painted where the numbers say they are.
 *
 * `hoursSinceObserved` rotates the reported longitudes forward at the Carrington
 * rate, because the region list is a daily product and the image is minutes old.
 */
export function regionAgreement(
  lum: Float32Array, n: number, regions: ActiveRegion[],
  north: Vector3, earthDir: Vector3, cal: DiskCalibration,
  hoursSinceObserved: number,
): AgreementResult | null {
  // Rotation carries features west, so their east-longitude decreases with time.
  const drift = -(hoursSinceObserved / 24) * CARRINGTON_DEG_PER_DAY;

  const sample = (u: number, v: number): number | null => {
    // Texture v runs up; image rows run down.
    const x = Math.round(u * n);
    const y = Math.round((1 - v) * n);
    if (x < 1 || y < 1 || x >= n - 1 || y >= n - 1) return null;
    // 3x3 mean: a region is a structure of some size, and NOAA's position is
    // its centroid to a degree or so, not a pixel.
    let s = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += lum[(y + dy) * n + x + dx]!;
    return s / 9;
  };

  const score = (mirror: boolean): { sum: number; n: number } => {
    let sum = 0;
    let n2 = 0;
    for (const r of regions) {
      const lon = (r.lon + drift) * (mirror ? -1 : 1);
      const dir = heliographicDirection(r.lat, lon, north, earthDir);
      // Skip anything near the limb: foreshortening there makes the position
      // uncertain and the projection degenerate.
      if (dir.dot(earthDir) < 0.5) continue;
      const p = projectToImage(dir, north, earthDir, cal);
      const value = sample(p.u, p.v);
      if (value === null) continue;
      sum += value;
      n2++;
    }
    return { sum, n: n2 };
  };

  const real = score(false);
  const mirrored = score(true);
  const tested = real.n;
  if (tested < 2 || mirrored.n < 2) return null;
  const sum = real.sum;

  // Mean over the disk, inside 0.85 R so the limb's own brightening does not
  // set the baseline.
  let diskSum = 0;
  let diskCount = 0;
  const cx = cal.centre.u * n;
  const cy = (1 - cal.centre.v) * n;
  const rr = cal.radius * n * 0.85;
  for (let y = Math.max(0, Math.floor(cy - rr)); y < Math.min(n, Math.ceil(cy + rr)); y++) {
    for (let x = Math.max(0, Math.floor(cx - rr)); x < Math.min(n, Math.ceil(cx + rr)); x++) {
      if (Math.hypot(x - cx, y - cy) > rr) continue;
      diskSum += lum[y * n + x]!;
      diskCount++;
    }
  }
  if (diskCount === 0) return null;

  const atRegions = sum / tested;
  const acrossDisk = diskSum / diskCount;
  if (acrossDisk <= 0) return null;
  return {
    tested, atRegions, acrossDisk,
    ratio: atRegions / acrossDisk,
    mirroredRatio: mirrored.sum / mirrored.n / acrossDisk,
  };
}
