/**
 * The render-scale ladder.
 *
 * This scene is fill-bound: measured on an M2 Max its GPU cost runs 0.29 ms per
 * megapixel, dead linear from 2.5 MP to 10 MP. So the only real lever is how
 * many pixels to draw, and the right number is a property of the machine rather
 * than of the scene. These tests are about the one thing that can go wrong with
 * such a rule — oscillation — and about not degrading past the point where the
 * picture stops being worth showing.
 */

import { describe, expect, it } from 'vitest';
import { nextRung, type LadderState } from '../src/scene/viewer.js';

const base: LadderState = {
  current: 2, medianFrameMs: 16.7, max: 2, msaa: false, good: 0, bad: 0,
};

/** Run the rule for `n` seconds at a fixed frame time. */
function settle(start: Partial<LadderState>, ms: number, n: number): number[] {
  let s: LadderState = { ...base, ...start };
  const path: number[] = [s.current];
  for (let i = 0; i < n; i++) {
    const r = nextRung({ ...s, medianFrameMs: ms });
    s = {
      ...s, current: r.ratio, good: r.good, bad: r.bad,
      ceiling: r.ceiling, demotedFrom: r.demotedFrom,
    };
    path.push(r.ratio);
  }
  return path;
}

describe('nextRung', () => {
  it('holds at full resolution when frames fit the budget', () => {
    expect(settle({}, 16.7, 10).every((r) => r === 2)).toBe(true);
  });

  it('needs two consecutive slow seconds before dropping — one is not enough', () => {
    const one = nextRung({ ...base, medianFrameMs: 33 });
    expect(one.ratio).toBe(2);
    expect(one.bad).toBe(1);
    const two = nextRung({ ...base, medianFrameMs: 33, bad: 1 });
    expect(two.ratio).toBe(1.75);
  });

  it('a single slow second between fast ones does not accumulate', () => {
    let s: LadderState = { ...base };
    for (const ms of [33, 16, 33, 16, 33, 16]) {
      const r = nextRung({ ...s, medianFrameMs: ms });
      s = { ...s, current: r.ratio, good: r.good, bad: r.bad };
    }
    expect(s.current).toBe(2);
  });

  it('walks down to the floor on a machine that cannot keep up', () => {
    const path = settle({}, 40, 30);
    // Without MSAA the floor is one rendered pixel per CSS pixel: below that
    // there is neither supersampling nor multisampling to hide anything.
    expect(path[path.length - 1]).toBe(1);
    expect(Math.min(...path)).toBe(1);
  });

  it('goes further when MSAA is available to fall back on', () => {
    const path = settle({ msaa: true }, 40, 40);
    expect(path[path.length - 1]).toBe(0.75);
  });

  it('climbs back, but needs far more evidence than it needed to drop', () => {
    const r5 = settle({ current: 1.5 }, 16.7, 5);
    expect(r5[r5.length - 1]).toBe(1.5);
    const r6 = settle({ current: 1.5 }, 16.7, 6);
    expect(r6[r6.length - 1]).toBe(1.75);
  });

  it('never climbs above the ratio the display actually has', () => {
    const path = settle({ current: 1, max: 1 }, 8, 40);
    expect(Math.max(...path)).toBe(1);
  });

  it('stops reaching for a rung that has failed twice', () => {
    // A machine comfortable at 1.25 and just short at 1.5 cycles forever under
    // a rule with hysteresis alone: six good seconds, a step up, two bad
    // seconds, a step down, and a buffer reallocation each time. The ceiling
    // ratchet is what ends that.
    let s: LadderState = { ...base, current: 1.5 };
    const seen: number[] = [];
    for (let i = 0; i < 120; i++) {
      const ms = s.current >= 1.5 ? 26 : 15;
      const r = nextRung({ ...s, medianFrameMs: ms });
      s = {
        ...s, current: r.ratio, good: r.good, bad: r.bad,
        ceiling: r.ceiling, demotedFrom: r.demotedFrom,
      };
      seen.push(r.ratio);
    }
    // It is allowed two attempts at 1.5 and then must stay put.
    expect(s.current).toBe(1.25);
    expect(s.ceiling).toBe(1.25);
    const last = seen.slice(40);
    expect(last.every((r) => r === 1.25)).toBe(true);
    // And it really did try twice before giving up, rather than never climbing.
    expect(seen.filter((r) => r === 1.5).length).toBeGreaterThan(1);
  });

  it('does not ratchet the ceiling on a single bad patch', () => {
    // One rough stretch — a background tab, a GC pause — should cost a rung,
    // not permanently cap the machine.
    let s: LadderState = { ...base };
    for (const ms of [40, 40, 16, 16, 16, 16, 16, 16, 16]) {
      const r = nextRung({ ...s, medianFrameMs: ms });
      s = {
        ...s, current: r.ratio, good: r.good, bad: r.bad,
        ceiling: r.ceiling, demotedFrom: r.demotedFrom,
      };
    }
    expect(s.ceiling).toBe(2);
    expect(s.current).toBe(2);
  });

  it('snaps an off-ladder ratio onto the ladder rather than getting stuck', () => {
    expect(nextRung({ ...base, current: 1.37 }).ratio).toBe(1.25);
  });
});
