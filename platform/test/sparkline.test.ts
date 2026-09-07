/**
 * Sparklines and downsampling.
 *
 * These graphics sit inside sentences, where a reader will take them at face
 * value, so the failure modes that matter are silent ones: a gap plotted as a
 * zero, a flare averaged away, a log scale swallowing a non-positive sample.
 */

import { describe, expect, it } from 'vitest';
import { inlineSpark, panelSpark } from '../src/hud/sparkline.js';
import { downsample, type Series } from '../src/data/swpc.js';

const times = (n: number): string[] =>
  Array.from({ length: n }, (_, i) => new Date(Date.UTC(2026, 8, 6, 0, i)).toISOString());

const series = (value: (number | null)[]): Series => ({ time: times(value.length), value });

describe('inline sparkline', () => {
  it('renders a path from real values', () => {
    const svg = inlineSpark(series([1, 2, 3, 2, 1]));
    expect(svg).toContain('<svg');
    expect(svg).toMatch(/<path class="spark-path" d="M[\d.]+,[\d.]+L/);
  });

  it('marks the most recent value', () => {
    expect(inlineSpark(series([1, 5, 2]))).toContain('spark-last');
  });

  it('says so rather than drawing nothing when there is no history', () => {
    expect(inlineSpark(series([]))).toContain('spark-missing');
    expect(inlineSpark(series([3]))).toContain('spark-missing');
    expect(inlineSpark(series([null, null]))).toContain('spark-missing');
  });

  it('skips gaps instead of plotting them as zero', () => {
    // A null between two 10s must not pull the line down to the axis.
    const withGap = inlineSpark(series([10, null, 10]));
    const path = /d="([^"]+)"/.exec(withGap)![1]!;
    const ys = [...path.matchAll(/[ML]([\d.]+),([\d.]+)/g)].map((m) => Number(m[2]));
    expect(ys.length).toBe(2);
    expect(Math.abs(ys[0]! - ys[1]!)).toBeLessThan(0.01);
  });

  it('draws a rule only when the value falls inside the plotted range', () => {
    expect(inlineSpark(series([-3, 2, 4]), { rule: 0 })).toContain('spark-rule');
  });

  it('includes the rule in the domain so it cannot fall off the canvas', () => {
    // All values positive, rule at zero: zero must still be inside the box.
    const svg = inlineSpark(series([5, 6, 7]), { rule: 0, height: 20 });
    const y = Number(/spark-rule[^/]*y1="([\d.]+)"/.exec(svg)![1]);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThanOrEqual(20);
  });

  it('handles a log scale across decades and drops non-positive samples', () => {
    const svg = inlineSpark(series([1e-8, 1e-6, 0, 1e-4]), { log: true });
    expect(svg).toContain('spark-path');
    // The zero cannot be plotted on a log axis and must not become 1e-12.
    const pts = [...(/d="([^"]+)"/.exec(svg)![1]!).matchAll(/[ML]/g)].length;
    expect(pts).toBe(3);
  });

  it('is flat, not degenerate, for a constant series', () => {
    const svg = inlineSpark(series([4, 4, 4, 4]));
    const ys = [...(/d="([^"]+)"/.exec(svg)![1]!).matchAll(/[ML][\d.]+,([\d.]+)/g)]
      .map((m) => Number(m[1]));
    expect(new Set(ys.map((y) => y.toFixed(2))).size).toBe(1);
    expect(ys.every((y) => Number.isFinite(y))).toBe(true);
  });

  it('escapes its accessible label', () => {
    expect(inlineSpark(series([1, 2]), { label: '<script>"x"' }))
      .toContain('aria-label="&lt;script&gt;&quot;x&quot;"');
  });
});

describe('panel sparkline', () => {
  it('states the range and the period', () => {
    const html = panelSpark(series([1, 9, 5]), { unit: 'nT' });
    expect(html).toContain('1.0 to 9.0 nT');
    expect(html).toMatch(/over the last \d+ h/);
  });

  it('reports the range in original units on a log scale', () => {
    const html = panelSpark(series([1e-7, 1e-5]), { log: true, format: (v) => v.toExponential(1) });
    expect(html).toContain('1.0e-7');
    expect(html).toContain('1.0e-5');
  });
});

describe('downsampling', () => {
  it('leaves short series alone', () => {
    const s = series([1, 2, 3]);
    expect(downsample(s, 10)).toEqual(s);
  });

  it('hits the target length', () => {
    expect(downsample(series(Array.from({ length: 1000 }, (_, i) => i)), 60).value.length).toBe(60);
  });

  it('preserves a one-sample spike — the sample a reader is looking for', () => {
    // A stride or a mean would drop this; bucketed max-|value| keeps it.
    const vals = new Array(600).fill(1);
    vals[321] = 500;
    expect(Math.max(...(downsample(series(vals), 40).value as number[]))).toBe(500);
  });

  it('keeps the sign of a large negative excursion', () => {
    const vals = new Array(400).fill(0.5);
    vals[200] = -40;
    expect(Math.min(...(downsample(series(vals), 30).value as number[]))).toBe(-40);
  });

  it('keeps time aligned with the value it chose', () => {
    const vals = new Array(200).fill(1);
    vals[150] = 99;
    const out = downsample(series(vals), 20);
    const i = out.value.indexOf(99);
    expect(out.time[i]).toBe(times(200)[150]);
  });

  it('survives an all-null series without inventing points', () => {
    const out = downsample(series(new Array(300).fill(null)), 20);
    expect(out.value.every((v) => v === null)).toBe(true);
  });
});
