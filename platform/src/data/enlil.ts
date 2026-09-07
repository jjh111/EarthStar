/**
 * WSA-Enlil at Earth — the solar-wind forecast, as numbers rather than pictures.
 *
 * Everything else labelled "forecast" in the Viewer is either NOAA's prose or
 * our own constant-speed cone propagation. This is a physics-based
 * magnetohydrodynamic simulation of the inner heliosphere, sampled at Earth:
 * radial speed, density, temperature, the field vector, magnetic polarity, and
 * a passive tracer that marks where a CME's plasma is. Three days of hindcast
 * and four of forecast, at the model's own ~137-second timestep.
 *
 * Two things it gives that nothing else here does.
 *
 * **A model that includes drag.** Our cone propagation carries ejections at
 * constant speed, which is stated in the panel as a bound rather than a
 * prediction. Enlil decelerates them against the ambient wind. When the two
 * disagree about an arrival, Enlil is the better answer and the difference is
 * worth showing rather than hiding.
 *
 * **A hindcast that can be checked.** Enlil is initialised from solar
 * magnetograms and CME cone fits — it never sees L1. So comparing its hindcast
 * speed at Earth with the speed we measured at the same moment is a genuine
 * model-against-measurement test, not a feed checking itself.
 *
 * The response is 212 KB gzipped and newest-first. It is fetched on demand, not
 * on the load path.
 */

import { SWPC_BASE, num, swpcTime, type Series } from './swpc.js';

export const ENLIL_URL = `${SWPC_BASE}/json/enlil_time_series.json`;

export interface EnlilSample {
  time: string;
  /** Radial speed at Earth, km/s. */
  speed: number | null;
  density: number | null;
  temperature: number | null;
  /** Radial field component, nT. */
  br: number | null;
  /** Sector polarity; sign says which way the field points along the spiral. */
  polarity: number | null;
  /**
   * Passive CME tracer, 0–1ish. Near zero is ambient wind; a rise to order 0.1
   * or above means the model has ejecta at Earth. It is a mixing fraction, not
   * a density or a probability, and the panel says so.
   */
  cloud: number | null;
}

export interface EnlilRun {
  /** Samples at or before `now`, oldest → newest. */
  past: EnlilSample[];
  /** Samples after `now`, oldest → newest. */
  ahead: EnlilSample[];
  /** Fastest sample still ahead — the shock, when there is one. */
  peakSpeed: EnlilSample | null;
  /** Highest cloud tracer still ahead — when ejecta reach Earth in the model. */
  peakCloud: EnlilSample | null;
  /** First future sample whose tracer crosses `CLOUD_ARRIVAL`. */
  cloudArrival: EnlilSample | null;
  firstTime: string | null;
  lastTime: string | null;
}

/**
 * Tracer level at which the model is carrying appreciable ejecta at Earth.
 * The tracer spans ~30 orders of magnitude in a quiet stretch, so any threshold
 * is a convention; 0.1 is well clear of the numerical floor and comfortably
 * inside the values reached during a modelled arrival.
 */
export const CLOUD_ARRIVAL = 0.1;

type Rec = Record<string, unknown>;

export function parseEnlil(json: unknown, now = new Date()): EnlilRun {
  const empty: EnlilRun = {
    past: [], ahead: [], peakSpeed: null, peakCloud: null,
    cloudArrival: null, firstTime: null, lastTime: null,
  };
  if (!Array.isArray(json)) return empty;

  const all: EnlilSample[] = [];
  for (const r of json as Rec[]) {
    const time = swpcTime(typeof r['time_tag'] === 'string' ? r['time_tag'] : null);
    if (time === null) continue;
    all.push({
      time,
      speed: num(r['v_r']),
      density: num(r['earth_particles_per_cm3']),
      temperature: num(r['temperature']),
      br: num(r['b_r']),
      polarity: num(r['polarity']),
      cloud: num(r['cloud']),
    });
  }
  if (all.length === 0) return empty;
  all.sort((a, b) => a.time.localeCompare(b.time));

  const t = now.getTime();
  const past = all.filter((s) => Date.parse(s.time) <= t);
  const ahead = all.filter((s) => Date.parse(s.time) > t);

  const best = (
    list: EnlilSample[], key: 'speed' | 'cloud',
  ): EnlilSample | null => list.reduce<EnlilSample | null>(
    (m, s) => (s[key] !== null && (m === null || s[key]! > m[key]!) ? s : m), null,
  );

  return {
    past, ahead,
    peakSpeed: best(ahead, 'speed'),
    peakCloud: best(ahead, 'cloud'),
    cloudArrival: ahead.find((s) => (s.cloud ?? 0) >= CLOUD_ARRIVAL) ?? null,
    firstTime: all[0]!.time,
    lastTime: all[all.length - 1]!.time,
  };
}

/** One column as a Series, for the sparklines. */
export function enlilSeries(
  samples: EnlilSample[], key: 'speed' | 'density' | 'temperature' | 'cloud',
): Series {
  return { time: samples.map((s) => s.time), value: samples.map((s) => s[key]) };
}

/**
 * The hindcast sample nearest a given time, for comparison with what was
 * actually measured then. Returns null when the run does not cover that time,
 * or when the nearest sample is further away than `toleranceMinutes` — a
 * comparison against a sample from the wrong hour is worse than none.
 */
export function enlilAt(
  run: EnlilRun, when: Date, toleranceMinutes = 15,
): EnlilSample | null {
  const t = when.getTime();
  let best: EnlilSample | null = null;
  let bestGap = Infinity;
  for (const s of [...run.past, ...run.ahead]) {
    const gap = Math.abs(Date.parse(s.time) - t);
    if (gap < bestGap) { bestGap = gap; best = s; }
  }
  return bestGap <= toleranceMinutes * 60_000 ? best : null;
}

export async function fetchEnlil(signal?: AbortSignal, now = new Date()): Promise<EnlilRun | null> {
  try {
    const res = await fetch(ENLIL_URL, { cache: 'no-store', signal });
    if (!res.ok) return null;
    return parseEnlil(await res.json(), now);
  } catch {
    return null;
  }
}
