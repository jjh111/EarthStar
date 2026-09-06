/**
 * NOAA SWPC upstream shapes → contract types.
 *
 * Every quirk encoded here was verified live from a browser context on
 * 2026-09-06; see platform/docs/sources.md for the evidence. The three that
 * will silently corrupt the HUD if ignored:
 *
 *   1. Array order is NOT consistent across endpoints. rtsw_*, alerts and
 *      solar_regions are NEWEST-FIRST; planetary_k_index_1m and the GOES
 *      X-ray series are OLDEST-FIRST. Taking `arr[arr.length - 1]` blindly
 *      yields a 24-hour-old value on half the feeds.
 *   2. The real-time solar wind feed interleaves several L1 spacecraft
 *      (ACE, IMAP, SOLAR1/SWFO-L1). Only records with `active: true` are the
 *      operational source. Taking the newest record of any source disagrees
 *      with SWPC's own dashboard.
 *   3. SWPC timestamps come in three flavours: bare (`2026-09-06T17:16:00`,
 *      UTC implied), `Z`-suffixed, and space-separated with millis
 *      (`2026-09-06 12:12:15.890`). All are UTC; only the second parses
 *      correctly with bare `Date.parse` in every engine.
 */

import type {
  AlertItem, KpNow, ScaleValue, ScalesNow, SolarWindNow, SolarWindSeries, XrayNow,
} from '../contract/types.js';

export const SWPC_BASE = 'https://services.swpc.noaa.gov';

export const SWPC_URL = {
  mag: `${SWPC_BASE}/json/rtsw/rtsw_mag_1m.json`,
  wind: `${SWPC_BASE}/json/rtsw/rtsw_wind_1m.json`,
  kp1m: `${SWPC_BASE}/json/planetary_k_index_1m.json`,
  kp3h: `${SWPC_BASE}/products/noaa-planetary-k-index.json`,
  // `xray-flares-latest` carries SWPC's own class LABEL but no current flux in
  // W/m² — its `current_int_xrlong` is an integrated quantity, and reading it
  // as flux reports X19 during a B-class background. Flux comes from the
  // series feed; 6-hour is a fifth the size of 1-day and enough for "now".
  xrayFlares: `${SWPC_BASE}/json/goes/primary/xray-flares-latest.json`,
  xrays6h: `${SWPC_BASE}/json/goes/primary/xrays-6-hour.json`,
  xrays1d: `${SWPC_BASE}/json/goes/primary/xrays-1-day.json`,
  scales: `${SWPC_BASE}/products/noaa-scales.json`,
  alerts: `${SWPC_BASE}/products/alerts.json`,
  summaryMag: `${SWPC_BASE}/products/summary/solar-wind-mag-field.json`,
  summarySpeed: `${SWPC_BASE}/products/summary/solar-wind-speed.json`,
} as const;

/** Parse any SWPC timestamp flavour to a UTC ISO-8601 string with `Z`. */
export function swpcTime(raw: string | null | undefined): string | null {
  if (!raw || typeof raw !== 'string') return null;
  let s = raw.trim().replace(' ', 'T');
  if (!/[Zz]$|[+-]\d{2}:?\d{2}$/.test(s)) s += 'Z';
  const t = Date.parse(s);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
}

/** Coerce to a finite number, mapping SWPC's fill values to null. Never invents a value. */
export function num(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = typeof v === 'number' ? v : Number(v);
  if (!Number.isFinite(n)) return null;
  // -9999 / -999 are documented fill values, not measurements.
  if (n === -9999 || n === -999) return null;
  return n;
}

type Rec = Record<string, unknown>;

function asArray(j: unknown): Rec[] {
  return Array.isArray(j) ? (j as Rec[]) : [];
}

/**
 * Newest record satisfying `ok`, regardless of the feed's array order.
 * Scans by timestamp rather than trusting position — order-agnostic by design.
 */
function newestBy(rows: Rec[], timeField: string, ok: (r: Rec) => boolean): Rec | null {
  let best: Rec | null = null;
  let bestT = -Infinity;
  for (const r of rows) {
    if (!ok(r)) continue;
    const t = Date.parse(swpcTime(r[timeField] as string) ?? '');
    if (Number.isFinite(t) && t > bestT) { bestT = t; best = r; }
  }
  return best;
}

/* ---------------------------------------------------------------- *
 * Solar wind (real-time solar wind feed, `/json/rtsw/`)
 * ---------------------------------------------------------------- */

const isActive = (r: Rec) => r['active'] === true;

export function parseSolarWindNow(magJson: unknown, windJson: unknown): SolarWindNow | null {
  const mag = newestBy(asArray(magJson), 'time_tag', isActive);
  const wind = newestBy(asArray(windJson), 'time_tag', isActive);
  if (!mag && !wind) return null;

  // The two instruments report on slightly different cadences; the element's
  // data_time is the older of the pair, so staleness is never understated.
  const magT = swpcTime(mag?.['time_tag'] as string);
  const windT = swpcTime(wind?.['time_tag'] as string);
  const times = [magT, windT].filter((t): t is string => !!t);
  if (times.length === 0) return null;
  const time = times.reduce((a, b) => (Date.parse(a) < Date.parse(b) ? a : b));

  return {
    time,
    bz_gsm: num(mag?.['bz_gsm']),
    by_gsm: num(mag?.['by_gsm']),
    bx_gsm: num(mag?.['bx_gsm']),
    bt: num(mag?.['bt']),
    speed: num(wind?.['proton_speed']),
    density: num(wind?.['proton_density']),
    temperature: num(wind?.['proton_temperature']),
    spacecraft: (mag?.['source'] as string) ?? (wind?.['source'] as string) ?? null,
  };
}

/** Merged, aligned column arrays for the active spacecraft, oldest → newest. */
export function parseSolarWindSeries(magJson: unknown, windJson: unknown): SolarWindSeries {
  const byMinute = new Map<string, { m?: Rec; w?: Rec }>();
  const key = (r: Rec) => swpcTime(r['time_tag'] as string);

  for (const r of asArray(magJson)) {
    if (!isActive(r)) continue;
    const k = key(r); if (!k) continue;
    (byMinute.get(k) ?? byMinute.set(k, {}).get(k)!).m = r;
  }
  for (const r of asArray(windJson)) {
    if (!isActive(r)) continue;
    // Plasma time tags carry seconds; bin to the minute so the two align.
    const k = key(r); if (!k) continue;
    const binned = k.slice(0, 17) + '00.000Z';
    (byMinute.get(binned) ?? byMinute.set(binned, {}).get(binned)!).w = r;
  }

  const times = [...byMinute.keys()].sort();
  const out: SolarWindSeries = {
    time: times, bx_gsm: [], by_gsm: [], bz_gsm: [], bt: [],
    density: [], speed: [], temperature: [],
  };
  for (const t of times) {
    const { m, w } = byMinute.get(t)!;
    out.bx_gsm.push(num(m?.['bx_gsm']));
    out.by_gsm.push(num(m?.['by_gsm']));
    out.bz_gsm.push(num(m?.['bz_gsm']));
    out.bt.push(num(m?.['bt']));
    out.density.push(num(w?.['proton_density']));
    out.speed.push(num(w?.['proton_speed']));
    out.temperature.push(num(w?.['proton_temperature']));
  }
  return out;
}

/* ---------------------------------------------------------------- *
 * Kp
 * ---------------------------------------------------------------- */

export function parseKpNow(json: unknown): KpNow | null {
  const r = newestBy(asArray(json), 'time_tag', () => true);
  const time = swpcTime(r?.['time_tag'] as string);
  if (!r || !time) return null;
  return {
    time,
    estimated_kp: num(r['estimated_kp']),
    kp: (r['kp'] as string) ?? null,
  };
}

/* ---------------------------------------------------------------- *
 * GOES X-rays
 * ---------------------------------------------------------------- */

/**
 * NOAA flare class from 0.1–0.8 nm flux (W/m²).
 * A < 1e-7 ≤ B < 1e-6 ≤ C < 1e-5 ≤ M < 1e-4 ≤ X   (contract §2)
 */
export function xrayClass(fluxLong: number | null): string | null {
  if (fluxLong === null || !Number.isFinite(fluxLong) || fluxLong <= 0) return null;
  const bands: [string, number][] = [['X', 1e-4], ['M', 1e-5], ['C', 1e-6], ['B', 1e-7], ['A', 1e-8]];
  for (const [letter, floor] of bands) {
    if (fluxLong >= floor) {
      const mant = fluxLong / floor;
      // X-class is open-ended (X12.4); the others live in [1, 10).
      return `${letter}${mant.toFixed(1)}`;
    }
  }
  return `A${(fluxLong / 1e-8).toFixed(1)}`;
}

/**
 * SWPC's own current class label. This feed carries NO current flux in W/m²
 * (`current_int_xrlong` is integrated, ~1.9e-3 while the band is B3.7), so the
 * flux fields are deliberately null here and come from the series instead.
 * Used for the independent cross-check on the verify page.
 */
export function parseXrayLatestClass(json: unknown): { time: string; class: string } | null {
  const r = asArray(json)[0];
  const time = swpcTime(r?.['time_tag'] as string);
  const cls = r?.['current_class'] as string | undefined;
  if (!r || !time || !cls) return null;
  return { time, class: cls };
}

/** Full 1-day series fallback: two energy bands interleaved in one array. */
export function parseXrayFromSeries(json: unknown): XrayNow | null {
  const rows = asArray(json);
  const long = newestBy(rows, 'time_tag', (r) => String(r['energy']).startsWith('0.1-0.8'));
  const short = newestBy(rows, 'time_tag', (r) => String(r['energy']).startsWith('0.05-0.4'));
  const time = swpcTime(long?.['time_tag'] as string);
  if (!long || !time) return null;
  const fluxLong = num(long['flux']);
  return { time, flux_long: fluxLong, flux_short: num(short?.['flux']), class: xrayClass(fluxLong) };
}

/* ---------------------------------------------------------------- *
 * NOAA R/S/G scales
 * ---------------------------------------------------------------- */

function scaleValue(v: unknown): ScaleValue {
  const o = (v ?? {}) as Rec;
  const text = (o['Text'] as string) ?? null;
  return {
    scale: num(o['Scale']),               // upstream sends this as a STRING
    text: text ? text[0]!.toUpperCase() + text.slice(1) : null,  // upstream is lowercase
    // R carries MinorProb/MajorProb; S carries a single Prob; G carries neither.
    minor_prob: num(o['MinorProb'] ?? o['Prob']),
    major_prob: num(o['MajorProb']),
  };
}

export function parseScalesNow(json: unknown): ScalesNow | null {
  const o = json as Rec | null;
  const today = (o?.['0'] ?? null) as Rec | null;
  if (!today) return null;
  const date = (today['DateStamp'] as string) ?? null;
  const clock = (today['TimeStamp'] as string) ?? null;
  return {
    R: scaleValue(today['R']),
    S: scaleValue(today['S']),
    G: scaleValue(today['G']),
    date,
    // Upstream refreshes this product through the day; taking DateStamp alone
    // pinned it to midnight and made a live feed read as 18 hours stale.
    time: date ? swpcTime(clock ? `${date}T${clock}` : `${date}T00:00:00`) : null,
  };
}

/* ---------------------------------------------------------------- *
 * Alerts
 * ---------------------------------------------------------------- */

export function parseAlerts(json: unknown, limit = 8): AlertItem[] {
  return asArray(json)
    .map((r) => {
      const issued = swpcTime(r['issue_datetime'] as string);
      const message = ((r['message'] as string) ?? '').replace(/\r/g, '');
      if (!issued) return null;
      // The useful line is the ALERT/WARNING/WATCH/SUMMARY header, not the code block.
      const headline =
        message.split('\n').map((l) => l.trim())
          .find((l) => /^(ALERT|WARNING|WATCH|SUMMARY|EXTENDED WARNING|CANCEL)/i.test(l))
        ?? message.split('\n').find((l) => l.trim().length > 0)?.trim()
        ?? '';
      return { issued, product: (r['product_id'] as string) ?? '', message, headline };
    })
    .filter((a): a is AlertItem => a !== null)
    .sort((a, b) => Date.parse(b.issued) - Date.parse(a.issued))
    .slice(0, limit);
}
