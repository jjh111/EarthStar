/**
 * The projection of solar imagery onto the sphere, checked against a synthetic
 * Sun whose bright patches are painted exactly where the numbers say they are.
 *
 * The failure this guards against is not a crash. It is a Sun that looks right
 * and has its active regions rotated, mirrored, or shifted by a tenth of a
 * radius — which is what a sign error in the longitude convention, a swapped
 * image axis, or a mis-measured limb each produce.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import {
  heliographicDirection, projectToImage, regionAgreement,
} from '../src/scene/region-agreement.js';
import type { ActiveRegion } from '../src/data/swpc.js';
import type { DiskCalibration } from '../src/scene/disk-calibration.js';

const NORTH = new Vector3(0, 1, 0);
const EARTH = new Vector3(0, 0, 1);
const CAL: DiskCalibration = { centre: { u: 0.5, v: 0.5 }, radius: 0.3 };
const N = 256;

const region = (lat: number, lon: number, id = 1): ActiveRegion => ({
  region: id, observed: '2026-09-07T00:00:00Z', lat, lon,
  area: 100, spots: 5, spotClass: null, magClass: null, mProb: 10, xProb: 1,
} as ActiveRegion);

describe('heliographicDirection', () => {
  it('puts the central meridian at the sub-Earth point', () => {
    const d = heliographicDirection(0, 0, NORTH, EARTH);
    expect(d.dot(EARTH)).toBeCloseTo(1, 12);
  });

  it('puts the north pole on the rotation axis', () => {
    expect(heliographicDirection(90, 0, NORTH, EARTH).dot(NORTH)).toBeCloseTo(1, 10);
  });

  it('runs positive longitude toward solar east — the left of the image', () => {
    // NOAA's solar_regions.json is east-positive: `longitude: 50` comes with
    // `location: "S11E50"`, and `longitude: -29` with `"N09W29"`. Solar images
    // are published north up, west right, so east is the left. Getting this
    // backwards mirrors every region across the disk and nothing looks wrong —
    // it is what the live check caught on the first run.
    const right = new Vector3().crossVectors(NORTH, EARTH);
    expect(heliographicDirection(0, 40, NORTH, EARTH).dot(right)).toBeLessThan(0);
    expect(heliographicDirection(0, -40, NORTH, EARTH).dot(right)).toBeGreaterThan(0);
  });

  it('always returns a unit vector', () => {
    for (const [b, l] of [[0, 0], [45, 60], [-70, -120], [12, 300]]) {
      expect(heliographicDirection(b!, l!, NORTH, EARTH).length()).toBeCloseTo(1, 12);
    }
  });
});

describe('projectToImage', () => {
  it('maps the sub-Earth point to the measured disk centre', () => {
    const p = projectToImage(heliographicDirection(0, 0, NORTH, EARTH), NORTH, EARTH, CAL);
    expect(p.u).toBeCloseTo(CAL.centre.u, 12);
    expect(p.v).toBeCloseTo(CAL.centre.v, 12);
  });

  it('maps the north pole one disk radius above centre', () => {
    const p = projectToImage(heliographicDirection(90, 0, NORTH, EARTH), NORTH, EARTH, CAL);
    expect(p.v - CAL.centre.v).toBeCloseTo(CAL.radius, 6);
    expect(p.u).toBeCloseTo(CAL.centre.u, 6);
  });

  it('maps the west limb one disk radius to the right', () => {
    // W90 is longitude −90 in NOAA's east-positive field.
    const p = projectToImage(heliographicDirection(0, -90, NORTH, EARTH), NORTH, EARTH, CAL);
    expect(p.u - CAL.centre.u).toBeCloseTo(CAL.radius, 6);
  });
});

/** A disk with bright patches painted at the given heliographic positions. */
function synth(regions: ActiveRegion[], mirrorLongitude = false): Float32Array {
  const a = new Float32Array(N * N);
  const cx = CAL.centre.u * N;
  const cy = (1 - CAL.centre.v) * N;
  const rr = CAL.radius * N;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) a[y * N + x] = Math.hypot(x - cx, y - cy) <= rr ? 90 : 5;
  }
  for (const r of regions) {
    const dir = heliographicDirection(r.lat, mirrorLongitude ? -r.lon : r.lon, NORTH, EARTH);
    const p = projectToImage(dir, NORTH, EARTH, CAL);
    const px = p.u * N, py = (1 - p.v) * N;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (Math.hypot(x - px, y - py) < 5) a[y * N + x] = 240;
      }
    }
  }
  return a;
}

describe('regionAgreement', () => {
  const regions = [region(15, -30, 1), region(-12, 20, 2), region(5, 45, 3)];

  it('finds the regions bright when the projection is right', () => {
    const r = regionAgreement(synth(regions), N, regions, NORTH, EARTH, CAL, 0)!;
    expect(r.tested).toBe(3);
    expect(r.ratio).toBeGreaterThan(2);
  });

  it('loses the contrast when the longitude convention is flipped', () => {
    // The single most likely mistake, and the one that still looks like a Sun.
    const r = regionAgreement(synth(regions, true), N, regions, NORTH, EARTH, CAL, 0)!;
    expect(r.ratio).toBeLessThan(1.3);
  });

  it('is blind to a north rotated about the line of sight — and that is correct', () => {
    // Worth stating rather than discovering later. Heliographic longitude is
    // measured *from* the central meridian, which is defined by north, so
    // rotating north within the image plane rotates the reported positions and
    // the image frame by the same angle. It is a gauge freedom, not an error
    // this check can find. What it can find is a north tilted out of the plane,
    // which changes B₀ and moves everything in latitude.
    const inPlane = new Vector3(0.5, 0.866, 0).normalize();
    const r = regionAgreement(synth(regions), N, regions, inPlane, EARTH, CAL, 0)!;
    expect(r.ratio).toBeGreaterThan(2);
  });

  it('loses the contrast when north is tilted out of the image plane', () => {
    // This is a wrong B₀ — the sub-Earth latitude — and it slides every region
    // in latitude while leaving the picture looking perfectly reasonable.
    const tilted = new Vector3(0, 0.9, 0.44).normalize();
    const r = regionAgreement(synth(regions), N, regions, tilted, EARTH, CAL, 0)!;
    expect(r.ratio).toBeLessThan(1.5);
  });

  it('loses the contrast when the disk is mis-measured', () => {
    // A centre off by a tenth of a radius, which is smaller than the offset the
    // real frames actually have from the image centre.
    const off = { centre: { u: CAL.centre.u + 0.03, v: CAL.centre.v }, radius: CAL.radius };
    const r = regionAgreement(synth(regions), N, regions, NORTH, EARTH, off, 0)!;
    expect(r.ratio).toBeLessThan(1.5);
  });

  it('skips regions near the limb, where the projection degenerates', () => {
    const limb = [region(0, 85, 1), region(0, -88, 2), region(10, 10, 3), region(-5, -15, 4)];
    const r = regionAgreement(synth(limb), N, limb, NORTH, EARTH, CAL, 0)!;
    expect(r.tested).toBe(2);
  });

  it('rotates reported longitudes forward at the Carrington rate', () => {
    // A day-old list is 14° out of date. Painting the Sun as it is *now* and
    // testing against yesterday's numbers should only agree once the drift is
    // applied.
    // A day of rotation carries features west, so east-longitude decreases.
    const drifted = regions.map((r) => region(r.lat, r.lon - 360 / 25.38, r.region));
    const image = synth(drifted);
    const withDrift = regionAgreement(image, N, regions, NORTH, EARTH, CAL, 24)!;
    const without = regionAgreement(image, N, regions, NORTH, EARTH, CAL, 0)!;
    expect(withDrift.ratio).toBeGreaterThan(without.ratio);
  });

  it('declines to report on fewer than two usable regions', () => {
    expect(regionAgreement(synth([]), N, [], NORTH, EARTH, CAL, 0)).toBeNull();
  });
});
