/**
 * The address: what the fragment says, and what it leaves out.
 *
 * The splash's Sky tiles link into the Viewer by these addresses, so the four
 * it uses are held here by name: if one stops opening its reading, a front
 * door on the other surface goes to the plain page without saying so.
 */

import { describe, expect, it } from 'vitest';
import { DEFAULT_LAYERS, formatHash, parseHash, type RouteState } from '../src/hud/route.js';

const plain: RouteState = {
  view: 'deck', scale: 'globe', tab: 'report', detail: null, layers: { ...DEFAULT_LAYERS },
};

describe('the splash links', () => {
  it('opens the Kp, wind-speed and X-ray readings by their registry ids', () => {
    expect(parseHash('#d=inst.kp')).toEqual({ detail: 'inst.kp', layers: {} });
    expect(parseHash('#d=inst.speed')).toEqual({ detail: 'inst.speed', layers: {} });
    expect(parseHash('#d=inst.xray')).toEqual({ detail: 'inst.xray', layers: {} });
  });

  it('opens the report', () => {
    expect(parseHash('#t=report')).toEqual({ tab: 'report', layers: {} });
  });
});

describe('reading an address', () => {
  it('reads every key', () => {
    expect(parseHash('#v=polar&s=true&t=sun&d=inst.bz&l=-wind,+coast')).toEqual({
      view: 'polar', scale: 'true', tab: 'sun', detail: 'inst.bz',
      layers: { wind: false, coast: true },
    });
  });

  it('is the plain page when empty', () => {
    expect(parseHash('')).toEqual({ layers: {} });
    expect(parseHash('#')).toEqual({ layers: {} });
  });

  it('ignores what it does not know, and keeps what it does', () => {
    expect(parseHash('#v=overhead&s=huge&t=detail&d=inst.nope&l=+stars,wind,-field&x=1')).toEqual({
      layers: { field: false },
    });
    expect(parseHash('#v=profile&zoom=3')).toEqual({ view: 'profile', layers: {} });
  });

  it('opens the notices, which are a detail but not a subject', () => {
    expect(parseHash('#d=notices')).toEqual({ detail: 'notices', layers: {} });
  });

  it('takes the house minus, and a plus a query parser turned into a space', () => {
    expect(parseHash('#l=−aurora, cmes')?.layers).toEqual({ aurora: false, cmes: true });
    expect(parseHash('#l=%2Bcoast')?.layers).toEqual({ coast: true });
  });

  it('is not an address when it is an in-page anchor', () => {
    expect(parseHash('#margin-body')).toBeNull();
  });
});

describe('writing an address', () => {
  it('writes nothing for the plain page, so the plain Viewer is /viewer/', () => {
    expect(formatHash(plain)).toBe('');
  });

  it('writes only what differs, in a fixed order', () => {
    expect(formatHash({
      ...plain, view: 'polar', scale: 'true', tab: 'sun',
      layers: { ...DEFAULT_LAYERS, wind: false, coast: true },
    })).toBe('#v=polar&s=true&t=sun&l=-wind,+coast');
  });

  it('names a detail and not the tab it hides', () => {
    expect(formatHash({ ...plain, tab: 'detail', detail: 'inst.bz' })).toBe('#d=inst.bz');
    expect(formatHash({ ...plain, tab: 'detail', detail: 'notices' })).toBe('#d=notices');
  });

  it('reads back what it wrote', () => {
    const s: RouteState = {
      view: 'profile', scale: 'true', tab: 'sources', detail: null,
      layers: { ...DEFAULT_LAYERS, field: false },
    };
    expect(parseHash(formatHash(s))).toEqual({
      view: 'profile', scale: 'true', tab: 'sources', layers: { field: false },
    });
  });
});
