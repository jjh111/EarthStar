/**
 * Where the L1 monitors actually are — tier `[E]`.
 *
 * Every space-weather display draws the L1 sentinel as a dot on the Sun–Earth
 * line. It is not on the line. The monitors fly Lissajous orbits about the L1
 * point and wander tens of Earth radii off-axis, which matters: the solar wind
 * is structured on scales smaller than that excursion, so the flux tube the
 * spacecraft samples is not always the flux tube that hits Earth. Drawing the
 * true offset is the difference between "we measured the wind" and "we measured
 * *a* wind, about an hour upstream and some way to the side".
 *
 * Feed traps, verified live 2026-09-07:
 *
 *  1. The endpoint is `rtsw_ephemerides_1h` — hourly. There is no `_1m`
 *     variant despite the sibling `rtsw_mag_1m` / `rtsw_wind_1m` naming; the
 *     obvious guess 404s.
 *  2. Records for all three spacecraft are interleaved and ordered newest
 *     first, so "the first record" and "the newest active record" are
 *     different things. Same trap as the mag and wind feeds.
 *  3. `x_gsm`/`vx_gci` and friends are null for the inactive spacecraft and
 *     sometimes for the active one. GSE is the column that is always present.
 */

import { SWPC_BASE, num, swpcTime } from './swpc.js';
import { EARTH_RADIUS_KM } from '../models/fieldlines.js';

export const EPHEM_URL = `${SWPC_BASE}/json/rtsw/rtsw_ephemerides_1h.json`;

/** What each spacecraft at L1 is for, in one line. Ambient `[M]` context. */
export const SPACECRAFT_NOTE: Record<string, string> = {
  SOLAR1: 'SWFO-L1, NOAA’s operational wind monitor since 2026',
  DSCOVR: 'NOAA, operational 2016–2026, now a backup',
  ACE: 'NASA, launched 1997 and still returning data',
  IMAP: 'NASA, launched 2025 — interstellar mapping, wind as a by-product',
};

export interface SpacecraftPos {
  time: string;
  /** Upstream's spacecraft name: SOLAR1, ACE, IMAP, DSCOVR. */
  source: string;
  /** True for the one whose measurements NOAA is currently distributing. */
  active: boolean;
  /** Geocentric Solar Ecliptic, km. X sunward, Z ecliptic north, Y duskward. */
  gse: { x: number; y: number; z: number };
  /** Distance from Earth, Earth radii. */
  distanceRe: number;
  /** Distance from the Sun–Earth line, Earth radii — the part nobody draws. */
  offAxisRe: number;
  /** Angle between the spacecraft and the Sun as seen from Earth, degrees. */
  offAxisDeg: number;
}

type Rec = Record<string, unknown>;

/**
 * Newest sample for each spacecraft in the feed. All of them, not just the
 * active one: three craft strung along L1 with one operational is itself the
 * honest picture, and it makes the handover from DSCOVR to SWFO-L1 visible
 * rather than something the reader has to already know.
 */
export function parseEphemerides(json: unknown): SpacecraftPos[] {
  if (!Array.isArray(json)) return [];
  const newest = new Map<string, { rec: Rec; t: number; iso: string }>();

  for (const r of json as Rec[]) {
    const src = typeof r['source'] === 'string' ? r['source'] : null;
    const iso = swpcTime(typeof r['time_tag'] === 'string' ? r['time_tag'] : null);
    if (!src || !iso) continue;
    // GSE is the frame that survives; a record without it is unusable.
    if (num(r['x_gse']) === null || num(r['y_gse']) === null || num(r['z_gse']) === null) continue;
    const t = Date.parse(iso);
    if (!Number.isFinite(t)) continue;
    const prev = newest.get(src);
    if (!prev || t > prev.t) newest.set(src, { rec: r, t, iso });
  }

  const out: SpacecraftPos[] = [];
  for (const [source, { rec, iso }] of newest) {
    const x = num(rec['x_gse'])!, y = num(rec['y_gse'])!, z = num(rec['z_gse'])!;
    const offAxisKm = Math.hypot(y, z);
    const distKm = Math.hypot(x, offAxisKm);
    out.push({
      time: iso,
      source,
      active: rec['active'] === true,
      gse: { x, y, z },
      distanceRe: distKm / EARTH_RADIUS_KM,
      offAxisRe: offAxisKm / EARTH_RADIUS_KM,
      offAxisDeg: (Math.atan2(offAxisKm, x) * 180) / Math.PI,
    });
  }

  // Active first, then by distance — so the operational craft leads any list.
  out.sort((a, b) => Number(b.active) - Number(a.active) || a.distanceRe - b.distanceRe);
  return out;
}

/** The one whose numbers the rest of the Viewer is showing, if any. */
export function activeSpacecraft(list: SpacecraftPos[]): SpacecraftPos | null {
  return list.find((s) => s.active) ?? null;
}
