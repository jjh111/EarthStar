/**
 * CME cone propagation.
 *
 * This is the only part of the Viewer that claims something about the future,
 * so the claims are pinned: whether Earth is inside the cone, when the front
 * arrives, and that a cone missing any parameter is dropped rather than drawn
 * with a guess.
 */

import { describe, expect, it } from 'vitest';
import { Vector3 } from 'three';
import {
  AU_KM, MEASUREMENT_HEIGHT_RSUN, SOLAR_RADIUS_KM, angleFromEarth, arrivalAtEarth,
  coneAxis, frontDistanceAu, isEarthDirected, subEarthLatitude,
} from '../src/models/cme-cone.js';
import { activeCmes, parseCmes } from '../src/data/cme.js';

const DATE = new Date('2026-09-06T00:00:00Z');
const cone = (o: Partial<Parameters<typeof arrivalAtEarth>[0]> = {}) => ({
  latitude: 0, longitude: 0, halfAngle: 30, speedKms: 800,
  time215: '2026-09-06T00:00:00.000Z', ...o,
});

describe('sub-Earth heliographic latitude (B₀)', () => {
  it('stays inside the ±7.25° the solar tilt allows', () => {
    for (const m of ['01', '03', '06', '09', '12']) {
      const b = subEarthLatitude(new Date(`2026-${m}-15T00:00:00Z`));
      expect(Math.abs(b)).toBeLessThanOrEqual(7.26);
    }
  });

  it('swings through the year rather than sitting at zero', () => {
    const march = subEarthLatitude(new Date('2026-03-06T00:00:00Z'));
    const september = subEarthLatitude(new Date('2026-09-06T00:00:00Z'));
    // Earth is south of the solar equator in March, north in September.
    expect(march).toBeLessThan(-6);
    expect(september).toBeGreaterThan(6);
  });
});

describe('is Earth in the cone', () => {
  it('a cone on the central meridian at Earth’s latitude is Earth-directed', () => {
    const b0 = subEarthLatitude(DATE);
    expect(isEarthDirected(cone({ latitude: b0, longitude: 0, halfAngle: 10 }), DATE)).toBe(true);
    expect(angleFromEarth(cone({ latitude: b0, longitude: 0 }), DATE)).toBeCloseTo(0, 5);
  });

  it('a limb cone is not, however wide', () => {
    expect(isEarthDirected(cone({ longitude: -90, halfAngle: 45 }), DATE)).toBe(false);
    expect(angleFromEarth(cone({ longitude: -90 }), DATE)).toBeGreaterThan(80);
  });

  it('turns on the half-angle at the boundary', () => {
    const b0 = subEarthLatitude(DATE);
    expect(isEarthDirected(cone({ latitude: b0, longitude: 30, halfAngle: 31 }), DATE)).toBe(true);
    expect(isEarthDirected(cone({ latitude: b0, longitude: 30, halfAngle: 29 }), DATE)).toBe(false);
  });

  it('accounts for B₀ rather than assuming Earth sits on the solar equator', () => {
    // In September Earth is ~7° north; a cone at 0° latitude is that far off.
    const off = angleFromEarth(cone({ latitude: 0, longitude: 0 }), DATE);
    expect(off).toBeGreaterThan(6);
  });
});

describe('arrival', () => {
  it('propagates from 21.5 R☉ to 1 AU at the analysed speed', () => {
    const a = arrivalAtEarth(cone({ speedKms: 800 }))!;
    const expectedHours = (AU_KM - MEASUREMENT_HEIGHT_RSUN * SOLAR_RADIUS_KM) / 800 / 3600;
    expect(a.transitHours).toBeCloseTo(expectedHours, 6);
    // 800 km/s is a fast CME: roughly two days, not two hours or two weeks.
    expect(a.transitHours).toBeGreaterThan(40);
    expect(a.transitHours).toBeLessThan(56);
  });

  it('a slow CME takes longer than a fast one', () => {
    expect(arrivalAtEarth(cone({ speedKms: 400 }))!.transitHours)
      .toBeGreaterThan(arrivalAtEarth(cone({ speedKms: 1200 }))!.transitHours);
  });

  it('widens the window with speed, because drag scales with excess speed', () => {
    const slow = arrivalAtEarth(cone({ speedKms: 400 }))!.windowHours;
    const fast = arrivalAtEarth(cone({ speedKms: 2000 }))!.windowHours;
    expect(fast).toBeGreaterThan(slow);
    expect(fast).toBeLessThanOrEqual(24);
  });

  it('refuses to propagate without a usable speed or time', () => {
    expect(arrivalAtEarth(cone({ speedKms: 0 }))).toBeNull();
    expect(arrivalAtEarth(cone({ time215: 'nonsense' }))).toBeNull();
  });
});

describe('front position', () => {
  it('starts at the measurement height and advances at the analysed speed', () => {
    const c = cone({ speedKms: 1000 });
    const at0 = frontDistanceAu(c, new Date(c.time215));
    expect(at0).toBeCloseTo((MEASUREMENT_HEIGHT_RSUN * SOLAR_RADIUS_KM) / AU_KM, 6);
    const after10h = frontDistanceAu(c, new Date(Date.parse(c.time215) + 10 * 3.6e6));
    expect(after10h - at0).toBeCloseTo((1000 * 36000) / AU_KM, 6);
  });

  it('never runs backwards for a future CME', () => {
    const c = cone({ time215: '2026-09-10T00:00:00.000Z' });
    expect(frontDistanceAu(c, DATE)).toBeGreaterThanOrEqual(0);
  });
});

describe('cone axis', () => {
  const sunToEarth = new Vector3(1, 0, 0);

  it('longitude 0 at Earth’s latitude points at Earth', () => {
    const b0 = subEarthLatitude(DATE);
    const a = coneAxis(cone({ latitude: b0, longitude: 0 }), sunToEarth);
    // Not exactly (1,0,0): B₀ tilts it, but it must be within a few degrees.
    const dot = new Vector3(a.x, a.y, a.z).normalize().dot(sunToEarth);
    expect(Math.acos(dot) * 180 / Math.PI).toBeLessThan(8);
  });

  it('is a unit vector for any orientation', () => {
    for (const [lat, lon] of [[0, 0], [45, 90], [-60, -170], [7, 180]]) {
      const a = coneAxis(cone({ latitude: lat, longitude: lon }), sunToEarth);
      expect(Math.hypot(a.x, a.y, a.z)).toBeCloseTo(1, 9);
    }
  });

  it('sends a 180° cone away from Earth', () => {
    const a = coneAxis(cone({ latitude: 0, longitude: 180 }), sunToEarth);
    expect(new Vector3(a.x, a.y, a.z).normalize().dot(sunToEarth)).toBeLessThan(-0.9);
  });
});

describe('parsing DONKI', () => {
  const raw = [
    { time21_5: '2026-09-06T02:10Z', latitude: 20, longitude: -59, halfAngle: 11,
      speed: 875, type: 'C', associatedCMEID: 'A', note: 'x', enlilList: [] },
    { time21_5: '2026-09-06T14:18Z', latitude: 5, longitude: -34, halfAngle: 10,
      speed: 467, type: 'S', associatedCMEID: 'B' },
    // Unusable: no speed, so nothing can be placed or propagated.
    { time21_5: '2026-09-05T01:00Z', latitude: 0, longitude: 0, halfAngle: 20,
      speed: null, associatedCMEID: 'C' },
  ];

  it('reads DONKI’s seconds-less timestamps', () => {
    expect(parseCmes(raw)[0]!.time215).toBe('2026-09-06T14:18:00.000Z');
  });

  it('drops a CME missing a parameter rather than guessing one', () => {
    const out = parseCmes(raw);
    expect(out.map((c) => c.id)).not.toContain('C');
    expect(out.length).toBe(2);
  });

  it('sorts newest first and computes an arrival for each', () => {
    const out = parseCmes(raw);
    expect(out[0]!.id).toBe('B');
    expect(out.every((c) => c.arrival !== null)).toBe(true);
    expect(out.every((c) => c.arrivalFromEnlil === false)).toBe(true);
  });

  it('prefers DONKI’s own Enlil arrival when it has one', () => {
    const withEnlil = [{ ...raw[0], enlilList: [{ estimatedShockArrivalTime: '2026-09-08T06:00Z' }] }];
    const c = parseCmes(withEnlil)[0]!;
    expect(c.arrivalFromEnlil).toBe(true);
    expect(c.arrival!.time).toBe('2026-09-08T06:00:00.000Z');
  });

  it('keeps only recent CMEs for drawing', () => {
    const out = parseCmes(raw);
    expect(activeCmes(out, new Date('2026-09-07T00:00:00Z')).length).toBe(2);
    expect(activeCmes(out, new Date('2026-09-20T00:00:00Z')).length).toBe(0);
  });

  it('caps the off-axis crowd but never drops an Earth-directed one', () => {
    // DONKI analyses dozens a week; drawing them all is noise. Earth-directed
    // cones are the point and must survive the cap.
    const many = Array.from({ length: 30 }, (_, i) => ({
      time21_5: '2026-09-06T12:00Z', latitude: 0, longitude: -120,
      halfAngle: 10, speed: 600, associatedCMEID: `off-${i}`,
    }));
    const b0Cone = {
      time21_5: '2026-09-06T12:00Z', latitude: 7, longitude: 0,
      halfAngle: 40, speed: 700, associatedCMEID: 'hit',
    };
    const out = activeCmes(parseCmes([...many, b0Cone]), new Date('2026-09-07T00:00:00Z'));
    expect(out.filter((c) => c.earthDirected).map((c) => c.id)).toContain('hit');
    expect(out.length).toBeLessThanOrEqual(1 + 6);
  });

  it('survives junk', () => {
    expect(parseCmes(null)).toEqual([]);
    expect(parseCmes([{}])).toEqual([]);
  });
});
