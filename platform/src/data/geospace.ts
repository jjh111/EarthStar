/**
 * Solar wind propagated from L1 to Earth — tier `[D · NOAA]`.
 *
 * Every wind number the Viewer shows is measured at L1, roughly 1.5 million km
 * sunward. At 350 km/s that plasma takes about an hour to reach us, so a
 * magnetopause computed from the L1 reading describes an hour from now, not
 * now. NOAA publishes the same wind already propagated to the bow shock nose,
 * with each sample carrying both its observation time and its arrival time.
 *
 * That lets the scene answer the question it should be answering — what is
 * hitting Earth at this moment — and lets the panel say how much warning is
 * left in the pipe.
 *
 * This feed is arrays-of-arrays with a header row: the only endpoint we consume
 * in the format the contract originally assumed for all of `products/*`.
 */

import { swpcTime, SWPC_BASE, num } from './swpc.js';

export const PROPAGATED_URL = `${SWPC_BASE}/products/geospace/propagated-solar-wind-1-hour.json`;

export interface PropagatedSample {
  /** When the plasma was observed at L1. */
  observedAt: string;
  /** When it reaches the bow shock nose. */
  arrivesAt: string;
  speed: number | null;
  density: number | null;
  temperature: number | null;
  bz: number | null;
  bt: number | null;
}

export interface PropagatedWind {
  samples: PropagatedSample[];
  /** The sample arriving now — what Earth is actually feeling. */
  arrivingNow: PropagatedSample | null;
  /** Minutes of wind already measured but not yet arrived. */
  leadMinutes: number | null;
}

/** Header-row table → objects, by column name rather than by position. */
export function parsePropagated(json: unknown, now = new Date()): PropagatedWind | null {
  if (!Array.isArray(json) || json.length < 2) return null;
  const header = json[0] as unknown;
  if (!Array.isArray(header)) return null;
  const col = (name: string): number => (header as string[]).indexOf(name);

  const iObs = col('time_tag');
  const iArr = col('propagated_time_tag');
  if (iObs < 0 || iArr < 0) return null;
  const iSpeed = col('speed');
  const iDen = col('density');
  const iTemp = col('temperature');
  const iBz = col('bz');
  const iBt = col('bt');

  const samples: PropagatedSample[] = [];
  for (let r = 1; r < json.length; r++) {
    const row = json[r] as unknown[];
    if (!Array.isArray(row)) continue;
    const observedAt = swpcTime(row[iObs] as string);
    const arrivesAt = swpcTime(row[iArr] as string);
    if (!observedAt || !arrivesAt) continue;
    samples.push({
      observedAt, arrivesAt,
      speed: num(row[iSpeed]), density: num(row[iDen]), temperature: num(row[iTemp]),
      bz: num(row[iBz]), bt: num(row[iBt]),
    });
  }
  if (samples.length === 0) return null;
  samples.sort((a, b) => Date.parse(a.arrivesAt) - Date.parse(b.arrivesAt));

  // The sample whose arrival time is nearest to now — never one still in flight.
  const t = now.getTime();
  let arrivingNow: PropagatedSample | null = null;
  for (const s of samples) {
    if (Date.parse(s.arrivesAt) <= t) arrivingNow = s;
  }
  // Before any sample has landed, the earliest is the best available answer.
  arrivingNow ??= samples[0]!;

  const furthest = samples[samples.length - 1]!;
  const lead = (Date.parse(furthest.arrivesAt) - t) / 60000;

  return { samples, arrivingNow, leadMinutes: Number.isFinite(lead) ? lead : null };
}
