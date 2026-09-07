/**
 * Particle hazards and wind propagation.
 *
 * The S scale is the only place the Viewer reports a hazard to people, so its
 * thresholds are pinned exactly. Propagation decides which sample the scene is
 * driven by, and picking a sample still in flight would show a future that has
 * not happened.
 */

import { describe, expect, it } from 'vitest';
import { parseParticles, sScale, seriesFor } from '../src/data/particles.js';
import { parsePropagated } from '../src/data/geospace.js';

describe('NOAA S scale', () => {
  it('sits on the published decade thresholds', () => {
    expect(sScale(9.99)!.scale).toBe(0);
    expect(sScale(10)!).toEqual({ scale: 1, text: 'Minor' });
    expect(sScale(100)!).toEqual({ scale: 2, text: 'Moderate' });
    expect(sScale(1e3)!).toEqual({ scale: 3, text: 'Strong' });
    expect(sScale(1e4)!).toEqual({ scale: 4, text: 'Severe' });
    expect(sScale(1e5)!).toEqual({ scale: 5, text: 'Extreme' });
  });

  it('reports quiet as S0, not as missing', () => {
    expect(sScale(0.28)).toEqual({ scale: 0, text: 'None' });
    expect(sScale(0)).toEqual({ scale: 0, text: 'None' });
  });

  it('distinguishes no data from no storm', () => {
    expect(sScale(null)).toBeNull();
    expect(sScale(Number.NaN)).toBeNull();
  });
});

describe('particle parsing', () => {
  const protons = [
    { time_tag: '2026-09-07T04:20:00Z', satellite: 18, energy: '>=10 MeV', flux: 0.2 },
    { time_tag: '2026-09-07T04:25:00Z', satellite: 18, energy: '>=10 MeV', flux: 0.2788 },
    { time_tag: '2026-09-07T04:25:00Z', satellite: 18, energy: '>=100 MeV', flux: 0.2193 },
    { time_tag: '2026-09-07T04:25:00Z', satellite: 18, energy: '>=1 MeV', flux: 32.21 },
  ];
  const electrons = [
    { time_tag: '2026-09-07T04:30:00Z', satellite: 19, energy: '>=2 MeV', flux: 40.82 },
  ];

  it('picks the right energy band — not the loudest one', () => {
    const p = parseParticles(protons, electrons)!;
    // >=1 MeV is 100x larger and would give a wrong S scale entirely.
    expect(p.proton10).toBe(0.2788);
    expect(p.proton100).toBe(0.2193);
    expect(p.electron2).toBe(40.82);
  });

  it('timestamps to the older of the two instruments', () => {
    // Protons 04:25, electrons 04:30 — staleness must not be understated.
    expect(parseParticles(protons, electrons)!.time).toBe('2026-09-07T04:25:00.000Z');
  });

  it('derives the S scale from the 10 MeV band', () => {
    expect(parseParticles(protons, electrons)!.s).toEqual({ scale: 0, text: 'None' });
    const storm = protons.map((r) =>
      r.energy === '>=10 MeV' && r.time_tag === '2026-09-07T04:25:00Z' ? { ...r, flux: 2500 } : r);
    expect(parseParticles(storm, electrons)!.s).toEqual({ scale: 3, text: 'Strong' });
  });

  it('survives one detector being down', () => {
    const p = parseParticles(protons, null)!;
    expect(p.proton10).toBe(0.2788);
    expect(p.electron2).toBeNull();
  });

  it('returns null when both are down', () => {
    expect(parseParticles(null, null)).toBeNull();
    expect(parseParticles([], [])).toBeNull();
  });

  it('builds a series for one band only', () => {
    const s = seriesFor(protons, '>=10 MeV');
    expect(s.value).toEqual([0.2, 0.2788]);
    expect(s.time[0]).toBe('2026-09-07T04:20:00.000Z');
  });
});

describe('propagated solar wind', () => {
  const table = [
    ['time_tag', 'speed', 'density', 'temperature', 'bx', 'by', 'bz', 'bt', 'vx', 'vy', 'vz', 'propagated_time_tag'],
    ['2026-09-07T03:37:00Z', 349.4, 8.63, 58095, 2.74, -8.64, 3.39, 9.68, -349.1, -2, 14.6, '2026-09-07T04:41:25Z'],
    ['2026-09-07T04:00:00Z', 352.0, 9.00, 60000, 3.00, -9.00, -2.50, 10.0, -352.0, 1, 15.0, '2026-09-07T05:04:00Z'],
    ['2026-09-07T04:29:00Z', 349.8, 9.02, 60870, 4.86, -9.37, 1.45, 10.68, -349.4, 0.9, 18.6, '2026-09-07T05:33:22Z'],
  ];

  it('reads columns by name, not by position', () => {
    const p = parsePropagated(table, new Date('2026-09-07T05:10:00Z'))!;
    expect(p.samples.length).toBe(3);
    expect(p.samples[0]!.bz).toBe(3.39);
    expect(p.samples[0]!.speed).toBe(349.4);
  });

  it('selects the sample that has actually arrived, not one still in flight', () => {
    // At 05:10 the 05:04 sample has landed; the 05:33 one has not.
    const p = parsePropagated(table, new Date('2026-09-07T05:10:00Z'))!;
    expect(p.arrivingNow!.arrivesAt).toBe('2026-09-07T05:04:00.000Z');
    expect(p.arrivingNow!.bz).toBe(-2.5);
  });

  it('reports the lead time still in the pipe', () => {
    const p = parsePropagated(table, new Date('2026-09-07T05:10:00Z'))!;
    // Furthest arrival 05:33:22, so ~23 minutes of measured wind still coming.
    expect(p.leadMinutes).toBeGreaterThan(22);
    expect(p.leadMinutes).toBeLessThan(24);
  });

  it('falls back to the earliest sample before anything has landed', () => {
    const p = parsePropagated(table, new Date('2026-09-07T04:00:00Z'))!;
    expect(p.arrivingNow!.arrivesAt).toBe('2026-09-07T04:41:25.000Z');
  });

  it('refuses a table without the columns it needs', () => {
    expect(parsePropagated([['a', 'b'], [1, 2]])).toBeNull();
    expect(parsePropagated([])).toBeNull();
    expect(parsePropagated(null)).toBeNull();
  });
});
