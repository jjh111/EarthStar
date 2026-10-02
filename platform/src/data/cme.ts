/**
 * Coronal mass ejections from NASA CCMC's DONKI catalogue — tier `[D · NASA]`
 * for the cone parameters, which are a human analyst's fit to coronagraph
 * imagery, and `[D]` for our propagation of them.
 *
 * DONKI at CCMC needs no API key. CCMC moved its API on 2026-09-30 (see
 * DONKI_BASE); the old address began answering with an HTML page, and this
 * lane went dark without saying so. The fetch now goes through `get()`:
 * upstream, retry, then the stage B mirror, which also carries DONKI, so a
 * future move, outage or CORS change degrades to the mirror's copy.
 */

import type { ConeParams } from '../models/cme-cone.js';
import { get } from './fetch-json.js';
import { arrivalAtEarth, angleFromEarth, isEarthDirected } from '../models/cme-cone.js';

// Moved by CCMC on 2026-09-30 from https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get: same parameters and JSON; the
// old base now answers with an HTML page.
export const DONKI_BASE = 'https://ccmc.gsfc.nasa.gov/DONKI-API/get';

export interface Cme extends ConeParams {
  id: string;
  /** DONKI's classification: S slow, C common, O occasional, R rare, ER extremely rare. */
  type: string;
  note: string;
  link: string | null;
  earthDirected: boolean;
  /** Degrees between the cone axis and Earth. */
  offAxisDeg: number;
  arrival: { time: string; windowHours: number; transitHours: number } | null;
  /** Null when DONKI supplied a modelled arrival instead of ours. */
  arrivalFromEnlil: boolean;
}

const iso = (v: unknown): string | null => {
  const s = String(v ?? '').trim();
  if (!s) return null;
  // DONKI omits seconds: "2026-09-06T02:10Z".
  const t = Date.parse(/\dZ$/.test(s) && s.length === 17 ? s.replace('Z', ':00Z') : s);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
};

const numOrNull = (v: unknown): number | null => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

export function parseCmes(json: unknown, now = new Date()): Cme[] {
  if (!Array.isArray(json)) return [];
  const out: Cme[] = [];

  for (const r of json as Array<Record<string, unknown>>) {
    const time215 = iso(r['time21_5']);
    const latitude = numOrNull(r['latitude']);
    const longitude = numOrNull(r['longitude']);
    const halfAngle = numOrNull(r['halfAngle']);
    const speedKms = numOrNull(r['speed']);
    // Every one of these is needed to place or propagate the cone; without them
    // there is nothing to draw and nothing to claim.
    if (time215 === null || latitude === null || longitude === null
      || halfAngle === null || speedKms === null || speedKms <= 0) continue;

    const cone: ConeParams = { latitude, longitude, halfAngle, speedKms, time215 };

    // Enlil arrival when DONKI ran it; ours otherwise, as the contract specifies.
    const enlil = Array.isArray(r['enlilList']) ? (r['enlilList'] as Array<Record<string, unknown>>) : [];
    const enlilArrival = enlil.map((e) => iso(e['estimatedShockArrivalTime'])).find((t) => t !== null) ?? null;

    out.push({
      ...cone,
      id: String(r['associatedCMEID'] ?? `${time215}-${speedKms}`),
      type: String(r['type'] ?? ''),
      note: String(r['note'] ?? ''),
      link: (r['link'] as string) ?? null,
      earthDirected: isEarthDirected(cone, new Date(time215)),
      offAxisDeg: angleFromEarth(cone, new Date(time215)),
      arrival: enlilArrival
        ? { time: enlilArrival, windowHours: 7, transitHours: (Date.parse(enlilArrival) - Date.parse(time215)) / 3.6e6 }
        : arrivalAtEarth(cone),
      arrivalFromEnlil: enlilArrival !== null,
    });
  }

  return out.sort((a, b) => Date.parse(b.time215) - Date.parse(a.time215));
}

/**
 * The CMEs worth drawing.
 *
 * DONKI analyses a few dozen a week and most go nowhere near Earth; drawing all
 * of them fills the frame with overlapping cones and communicates nothing. So:
 * every Earth-directed one still in flight, plus a handful of the most recent
 * others for context, and nothing older than the time a slow CME takes to cross
 * 1 AU.
 */
export function activeCmes(
  cmes: Cme[], now = new Date(), maxAgeDays = 3.5, maxOffAxis = 6,
): Cme[] {
  const t = now.getTime();
  const recent = cmes.filter((c) => {
    const age = (t - Date.parse(c.time215)) / 86_400_000;
    return age >= 0 && age <= maxAgeDays;
  });
  const directed = recent.filter((c) => c.earthDirected);
  const others = recent.filter((c) => !c.earthDirected).slice(0, maxOffAxis);
  return [...directed, ...others];
}

export async function fetchCmes(signal?: AbortSignal, days = 7): Promise<Cme[]> {
  const start = new Date(Date.now() - days * 86_400_000);
  // One template literal, so the mirror's endpoint discovery copies exactly
  // this query. endDate is omitted: DONKI defaults it to today.
  const url = `${DONKI_BASE}/CMEAnalysis?startDate=${start.toISOString().slice(0, 10)}&mostAccurateOnly=true`;
  const r = await get<unknown>(url, signal);
  // A failure throws, so the lane shows an error. Returning [] here once made
  // a blocked request look exactly like a quiet week with no ejections.
  if (r.json === null) throw new Error(r.error ?? 'DONKI unreachable');
  return parseCmes(r.json);
}
