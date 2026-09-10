/**
 * What a body says about itself when you touch it.
 *
 * The numbers come from the ephemeris, so what is worth testing is that they
 * are *addressed* correctly — the Sun's distance is from Earth and not from
 * itself, Earth has no distance from Earth — and that they are rendered in
 * units a reader can hold. "0.00 AU" for the Moon is arithmetically correct and
 * communicates nothing.
 */

import { describe, expect, it } from 'vitest';
import { bodyFacts, distanceText, lightTimeText } from '../src/hud/body-facts.js';
import { bodySubjectId, subject } from '../src/hud/subjects.js';

const DATE = new Date('2026-09-07T18:00:00Z');

describe('bodyFacts', () => {
  it('puts Earth about an AU from the Sun and gives it no distance from itself', () => {
    const e = bodyFacts('Earth', DATE);
    expect(e.auFromSun).toBeGreaterThan(0.98);
    expect(e.auFromSun).toBeLessThan(1.02);
    expect(e.auFromEarth).toBeNull();
    expect(e.lightSeconds).toBeNull();
  });

  it('gives the Sun a distance from Earth, not from itself', () => {
    const s = bodyFacts('Sun', DATE);
    expect(s.auFromSun).toBeNull();
    expect(s.auFromEarth).toBeGreaterThan(0.98);
    // The eight-minute number everyone knows.
    expect(s.lightSeconds!).toBeGreaterThan(470);
    expect(s.lightSeconds!).toBeLessThan(510);
  });

  it('puts the outer planets where they belong', () => {
    expect(bodyFacts('Jupiter', DATE).auFromSun!).toBeGreaterThan(4.9);
    expect(bodyFacts('Jupiter', DATE).auFromSun!).toBeLessThan(5.5);
    expect(bodyFacts('Neptune', DATE).auFromSun!).toBeGreaterThan(29);
    expect(bodyFacts('Neptune', DATE).auFromSun!).toBeLessThan(31);
  });

  it('gives the Moon a lunar distance, not a rounding error', () => {
    const m = bodyFacts('Moon', DATE);
    expect(m.auFromEarth!).toBeGreaterThan(0.0022);
    expect(m.auFromEarth!).toBeLessThan(0.0028);
    expect(m.lightSeconds!).toBeGreaterThan(1.1);
    expect(m.lightSeconds!).toBeLessThan(1.4);
  });

  it('gives the Sun an apparent diameter of about half a degree', () => {
    const arcsec = bodyFacts('Sun', DATE).arcsecFromEarth!;
    expect(arcsec / 3600).toBeGreaterThan(0.5);
    expect(arcsec / 3600).toBeLessThan(0.56);
  });

  it('says why each body is on a space-weather instrument', () => {
    // The prose moved to the subject registry; what matters is still that
    // every body the scene can show has some, so the claim moves with it.
    for (const n of ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter',
      'Saturn', 'Uranus', 'Neptune', 'Moon'] as const) {
      const s = subject(bodySubjectId(n));
      expect(s, n).not.toBeNull();
      expect(s!.meaning.length, n).toBeGreaterThan(40);
    }
  });
});

describe('distanceText', () => {
  it('uses kilometres below a hundredth of an AU', () => {
    // The Moon is 0.0026 AU. "0.00 AU" is correct and useless.
    expect(distanceText(0.00257)).toMatch(/thousand km/);
    expect(distanceText(0.00257)).not.toMatch(/AU/);
  });

  it('uses AU above that', () => {
    expect(distanceText(1.014)).toBe('1.014 AU');
  });

  it('has no answer rather than a zero when there is no distance', () => {
    expect(distanceText(null)).toBe('—');
  });
});

describe('lightTimeText', () => {
  it('reads in seconds, minutes or hours as the number demands', () => {
    expect(lightTimeText(1.28)).toBe('1.3 s');
    expect(lightTimeText(499)).toBe('8 min 19 s');
    expect(lightTimeText(9720)).toBe('2.7 h');
  });

  it('switches to hours at an hour, not at ninety minutes', () => {
    // "71 min 2 s" is a worse rendering of Saturn's light time than "1.2 h".
    expect(lightTimeText(4262)).toBe('1.2 h');
  });

  it('has no answer rather than a zero', () => {
    expect(lightTimeText(null)).toBe('—');
  });
});
