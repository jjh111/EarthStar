/**
 * The trend behind each reading.
 *
 * A tile that shows only "480 km/s" answers a question nobody asked. The
 * question is whether it is rising, and by how much against where it has been —
 * which is what a sparkline is for, and why they belong on the instrument rail
 * rather than only in the detail panel two clicks away.
 *
 * Two tiles deliberately have none. The NOAA scales are a daily categorical
 * forecast, not a series, and the aurora is a single forecast value with no
 * history in the feed. Drawing a line through either would be inventing one.
 */

import type { StoreState } from '../data/store.js';
import { downsample, type Series } from '../data/swpc.js';
import { magnetopause } from '../models/shue1998.js';
import type { SparkOptions } from './sparkline.js';

export interface TileSpark {
  series: Series;
  opts: SparkOptions;
}

/** Column of the merged solar-wind series, aligned on time. */
function windSeries(state: StoreState, key: 'bz_gsm' | 'bt' | 'speed' | 'density'): Series | null {
  const d = state.series?.data;
  if (!d) return null;
  return { time: d.time, value: d[key] };
}

/**
 * The modelled standoff over the same window as the wind that drove it.
 *
 * Computed here rather than stored, because it is a function of three measured
 * columns and keeping a fourth in sync with them would be a way for the tile
 * and the scene to disagree about the same model.
 */
function magnetopauseSeries(state: StoreState): Series | null {
  const d = state.series?.data;
  if (!d) return null;
  const value = d.time.map((_, i) => {
    const mp = magnetopause(d.bz_gsm[i] ?? null, d.density[i] ?? null, d.speed[i] ?? null);
    return mp ? mp.r0Re : null;
  });
  return { time: d.time, value };
}

/**
 * A tile sparkline is about a hundred pixels wide, and the solar-wind feeds
 * carry 1440 samples a day. Thirteen points per pixel is path data nobody can
 * see, redrawn on every refresh. `downsample` buckets by largest absolute
 * value rather than averaging, so a spike survives the reduction — which is
 * the one thing that must not be smoothed away here.
 */
const TILE_POINTS = 110;

export function tileSpark(id: string, state: StoreState): TileSpark | null {
  const s = (series: Series | null, opts: SparkOptions = {}): TileSpark | null =>
    (series && series.value.some((v) => v !== null)
      ? { series: downsample(series, TILE_POINTS), opts }
      : null);

  switch (id) {
    // Zero is the meaningful reference: southward is what couples energy in.
    case 'bz': return s(windSeries(state, 'bz_gsm'), { rule: 0 });
    case 'bt': return s(windSeries(state, 'bt'));
    case 'speed': return s(windSeries(state, 'speed'));
    case 'density': return s(windSeries(state, 'density'));
    // Kp 5 is the storm threshold, and the band below it is "quiet to unsettled".
    case 'kp': return s(state.kpSeries, { rule: 5, band: [0, 4] });
    // Four decades of flux; linear would be a flat line with an occasional spike.
    case 'xray': return s(state.xraySeries, { log: true });
    // The rule is given raw: inlineSpark log-transforms it along with the data.
    case 'protons': return s(state.protonSeries, { log: true, rule: 10 });
    case 'electrons': return s(state.electronSeries, { log: true, rule: 1000 });
    case 'geosync': return s(state.geosyncSeries);
    // The ring current only ever subtracts, so the trace hangs below zero.
    case 'dst': return s(state.dstSeries, { rule: 0 });
    // 6.6 Rₑ is geostationary orbit: the line that matters is whether the
    // boundary is above or below the satellites.
    case 'mpause': return s(magnetopauseSeries(state), { rule: 6.6 });
    default: return null;
  }
}
