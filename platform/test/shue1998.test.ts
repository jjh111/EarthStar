/**
 * Shue et al. 1998 magnetopause. Checked for algebraic correctness at the
 * published coefficients and for the physical behaviours the paper describes;
 * the scene's shield is only trustworthy if these hold.
 */

import { describe, expect, it } from 'vitest';
import {
  bowShockStandoff, dynamicPressureNPa, magnetopause, shueAlpha, shueR0, shueRadius,
} from '../src/models/shue1998.js';

describe('dynamic pressure', () => {
  it('matches the standard 1.6726e-6·n·v² form', () => {
    // n = 5 cm⁻³, v = 400 km/s → 1.338 nPa
    expect(dynamicPressureNPa(5, 400)).toBeCloseTo(1.338, 3);
  });
});

describe('standoff distance r₀', () => {
  it('sits in the accepted 10–11 Rₑ band for nominal quiet solar wind', () => {
    const r0 = shueR0(0, dynamicPressureNPa(5, 400));
    expect(r0).toBeGreaterThan(10);
    expect(r0).toBeLessThan(11.5);
  });

  it('compresses to 6–8 Rₑ under strong storm driving', () => {
    // Bz = −20 nT, n = 20 cm⁻³, v = 600 km/s — a severe but realistic storm.
    const r0 = shueR0(-20, dynamicPressureNPa(20, 600));
    expect(r0).toBeGreaterThan(6);
    expect(r0).toBeLessThan(8);
  });

  it('is monotonic: southward Bz compresses the magnetopause', () => {
    const dp = dynamicPressureNPa(5, 400);
    expect(shueR0(-10, dp)).toBeLessThan(shueR0(0, dp));
    expect(shueR0(0, dp)).toBeLessThan(shueR0(10, dp));
  });

  it('is monotonic: higher dynamic pressure compresses the magnetopause', () => {
    expect(shueR0(0, 8)).toBeLessThan(shueR0(0, 2));
  });

  it('saturates for strongly northward Bz, as the tanh term requires', () => {
    const dp = dynamicPressureNPa(5, 400);
    expect(Math.abs(shueR0(30, dp) - shueR0(50, dp))).toBeLessThan(0.02);
  });

  it('follows the Dp^(−1/6.6) power law exactly', () => {
    const a = shueR0(0, 1);
    const b = shueR0(0, 4);
    expect(b / a).toBeCloseTo(Math.pow(4, -1 / 6.6), 10);
  });
});

describe('flaring parameter α', () => {
  it('increases as Bz turns southward (a more open, flared tail)', () => {
    const dp = dynamicPressureNPa(5, 400);
    expect(shueAlpha(-10, dp)).toBeGreaterThan(shueAlpha(10, dp));
  });

  it('lands near 0.55–0.6 for nominal conditions', () => {
    const a = shueAlpha(0, dynamicPressureNPa(5, 400));
    expect(a).toBeGreaterThan(0.5);
    expect(a).toBeLessThan(0.62);
  });
});

describe('the r(θ) surface', () => {
  it('equals r₀ at the subsolar point', () => {
    expect(shueRadius(10, 0.58, 0)).toBeCloseTo(10, 10);
  });

  it('flares outward toward the terminator and the tail', () => {
    const r0 = 10, a = 0.58;
    expect(shueRadius(r0, a, Math.PI / 2)).toBeGreaterThan(r0);
    expect(shueRadius(r0, a, (2 * Math.PI) / 3)).toBeGreaterThan(shueRadius(r0, a, Math.PI / 2));
  });
});

describe('bow shock (Farris & Russell 1994)', () => {
  it('stands off ~1.3× the magnetopause at a nominal Mach number', () => {
    expect(bowShockStandoff(10, 8) / 10).toBeCloseTo(1.3, 1);
  });

  it('always lies outside the magnetopause', () => {
    for (const r0 of [6, 8, 10, 12]) expect(bowShockStandoff(r0)).toBeGreaterThan(r0);
  });
});

describe('missing inputs', () => {
  it('returns null rather than a plausible default', () => {
    expect(magnetopause(null, 5, 400)).toBeNull();
    expect(magnetopause(-5, null, 400)).toBeNull();
    expect(magnetopause(-5, 5, null)).toBeNull();
    expect(magnetopause(-5, 0, 400)).toBeNull();     // zero density is not a pressure
  });

  it('produces a complete solution when all inputs are present', () => {
    const mp = magnetopause(-4.58, 4.77, 339.2)!;
    expect(mp.r0Re).toBeGreaterThan(8);
    expect(mp.r0Re).toBeLessThan(13);
    expect(mp.bowShockRe).toBeGreaterThan(mp.r0Re);
    expect(mp.dynPressureNPa).toBeCloseTo(dynamicPressureNPa(4.77, 339.2), 10);
  });
});
