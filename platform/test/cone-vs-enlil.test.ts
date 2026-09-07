/**
 * Our cone arrival against Enlil's.
 *
 * The panel makes a claim about physics here — that a constant-speed
 * propagation should run *early* against a model that includes drag — and then
 * tells the reader which direction it found. A sign error would state the
 * opposite with equal confidence, and it would read just as plausibly.
 */

import { describe, expect, it } from 'vitest';
import { coneVsEnlil } from '../src/hud/margin.js';
import type { Cme } from '../src/data/cme.js';

const base = {
  id: 'x', time215: '2026-09-06T12:00:00Z', lat: 0, lon: 0, halfAngle: 40,
  speedKms: 900, earthDirected: true, offAxisDeg: 3, arrivalFromEnlil: false,
} as unknown as Cme;

const cone = (iso: string, fromEnlil = false): Cme[] => [{
  ...base, arrivalFromEnlil: fromEnlil,
  arrival: { time: iso, windowHours: 12 },
} as unknown as Cme];

/** Far enough ahead that "still inbound" is unambiguous. */
const CONE = new Date(Date.now() + 20 * 3.6e6).toISOString();
const ENLIL_LATER = new Date(Date.now() + 24 * 3.6e6).toISOString();
const ENLIL_EARLIER = new Date(Date.now() + 16 * 3.6e6).toISOString();

describe('coneVsEnlil', () => {
  it('calls the cone early when Enlil arrives later — and explains it with drag', () => {
    const html = coneVsEnlil(ENLIL_LATER, cone(CONE));
    expect(html).toContain('4 h');
    expect(html).toContain('earlier');
    expect(html).toContain('decelerate');
    expect(html).not.toContain('wrong direction');
  });

  it('flags the reverse as unexpected instead of narrating it as normal', () => {
    const html = coneVsEnlil(ENLIL_EARLIER, cone(CONE));
    expect(html).toContain('later');
    expect(html).toContain('wrong direction');
  });

  it('refuses to compare Enlil with itself', () => {
    // DONKI sometimes supplies an Enlil-derived arrival. Presenting that as an
    // independent second opinion would be the worst kind of false agreement.
    const html = coneVsEnlil(ENLIL_LATER, cone(CONE, true));
    expect(html).toContain('same model');
    expect(html).not.toContain('earlier');
  });

  it('says there is nothing to compare rather than comparing against nothing', () => {
    expect(coneVsEnlil(ENLIL_LATER, [])).toContain('nothing to compare');
  });

  it('ignores cones whose arrival has already passed', () => {
    const past = new Date(Date.now() - 5 * 3.6e6).toISOString();
    expect(coneVsEnlil(ENLIL_LATER, cone(past))).toContain('nothing to compare');
  });
});
