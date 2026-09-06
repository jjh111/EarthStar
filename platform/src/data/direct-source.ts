/**
 * Stage A — the browser fetches NOAA SWPC directly and this adapter stamps
 * contract envelopes client-side. Verified CORS (`access-control-allow-origin: *`)
 * on every endpoint used here; see docs/sources.md.
 *
 * Failure is isolated per feed: one endpoint 500ing must never blank the HUD,
 * and must never be papered over with a plausible number. A failed feed becomes
 * `null` + an `error` on its PartMeta, which the HUD renders as "no data".
 */

import type { Envelope, Now, SolarWindSeries } from '../contract/types.js';
import type { NowEnvelope, PartMeta, Source } from './source.js';
import { magnetopause } from '../models/shue1998.js';
import {
  SWPC_URL, parseAlerts, parseKpNow, parseScalesNow, parseSolarWindNow,
  parseSolarWindSeries, parseXrayFromSeries,
} from './swpc.js';

const SWPC = 'NOAA SWPC';

/** Staleness thresholds, seconds — source-specific, per the charter. */
export const STALE_AFTER = {
  solar_wind: 20 * 60,
  kp: 20 * 60,
  xray: 20 * 60,
  scales: 6 * 60 * 60,
  alerts: 7 * 24 * 60 * 60,
  magnetopause: 20 * 60,
} as const;

const FETCH_TIMEOUT_MS = 15_000;

interface Fetched<T> { json: T | null; error?: string; }

async function getJson<T>(url: string, signal?: AbortSignal): Promise<Fetched<T>> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(new Error('timeout')), FETCH_TIMEOUT_MS);
  const onAbort = () => ctl.abort(signal?.reason);
  signal?.addEventListener('abort', onAbort, { once: true });
  try {
    const res = await fetch(url, { cache: 'no-store', signal: ctl.signal });
    if (!res.ok) return { json: null, error: `HTTP ${res.status}` };
    return { json: (await res.json()) as T };
  } catch (e) {
    return { json: null, error: e instanceof Error ? e.message : String(e) };
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

function latency(fetchedAt: string, dataTime: string | null): number | null {
  if (!dataTime) return null;
  const l = (Date.parse(fetchedAt) - Date.parse(dataTime)) / 1000;
  return Number.isFinite(l) ? Math.round(l) : null;
}

function meta(
  fetchedAt: string, dataTime: string | null, staleAfter: number,
  source: string, url: string, error?: string,
  tier: PartMeta['tier'] = 'measured', model: PartMeta['model'] = null,
): PartMeta {
  return {
    tier, source, source_url: url, model,
    data_time: dataTime, latency_s: latency(fetchedAt, dataTime),
    stale_after_s: staleAfter, ...(error ? { error } : {}),
  };
}

export class DirectSource implements Source {
  readonly name = 'DirectSource (stage A · browser → NOAA SWPC)';

  async fetchNow(signal?: AbortSignal): Promise<NowEnvelope> {
    const [mag, wind, kp, xray, scales, alerts] = await Promise.all([
      getJson<unknown>(SWPC_URL.mag, signal),
      getJson<unknown>(SWPC_URL.wind, signal),
      getJson<unknown>(SWPC_URL.kp1m, signal),
      getJson<unknown>(SWPC_URL.xrays6h, signal),
      getJson<unknown>(SWPC_URL.scales, signal),
      getJson<unknown>(SWPC_URL.alerts, signal),
    ]);
    const fetched_at = new Date().toISOString();

    const solar_wind = mag.json || wind.json ? parseSolarWindNow(mag.json, wind.json) : null;
    const kpNow = kp.json ? parseKpNow(kp.json) : null;
    const xrayNow = xray.json ? parseXrayFromSeries(xray.json) : null;
    const scalesNow = scales.json ? parseScalesNow(scales.json) : null;
    const alertList = alerts.json ? parseAlerts(alerts.json) : [];

    // Modeled from the measured wind — null in, null out. Never a default.
    const mp = magnetopause(
      solar_wind?.bz_gsm ?? null, solar_wind?.density ?? null, solar_wind?.speed ?? null,
    );

    const windErr = mag.error ?? wind.error;
    const parts: Record<keyof Now, PartMeta> = {
      solar_wind: meta(fetched_at, solar_wind?.time ?? null, STALE_AFTER.solar_wind,
        `${SWPC} · real-time solar wind (L1)`, SWPC_URL.mag, windErr),
      kp: meta(fetched_at, kpNow?.time ?? null, STALE_AFTER.kp,
        `${SWPC} · planetary K (estimated)`, SWPC_URL.kp1m, kp.error),
      xray: meta(fetched_at, xrayNow?.time ?? null, STALE_AFTER.xray,
        `${SWPC} · GOES XRS (0.1–0.8 nm)`, SWPC_URL.xrays6h, xray.error),
      scales: meta(fetched_at, scalesNow?.time ?? null,
        STALE_AFTER.scales, `${SWPC} · NOAA scales`, SWPC_URL.scales, scales.error,
        'modeled', { name: 'NOAA G/S/R scales' }),
      alerts: meta(fetched_at, alertList[0]?.issued ?? null, STALE_AFTER.alerts,
        `${SWPC} · alerts, watches & warnings`, SWPC_URL.alerts, alerts.error),
      magnetopause: meta(fetched_at, solar_wind?.time ?? null, STALE_AFTER.magnetopause,
        'Earth Star (from SWPC solar wind)', SWPC_URL.mag, windErr, 'modeled',
        { name: 'Shue et al. 1998', ref: 'doi:10.1029/98JA01103' }),
    };

    const data: Now = {
      solar_wind, kp: kpNow, xray: xrayNow, scales: scalesNow, alerts: alertList,
      magnetopause: mp
        ? { standoff_re: mp.r0Re, alpha: mp.alpha, model: 'Shue1998' }
        : null,
    };

    // Envelope-level data_time is the OLDEST contributing timestamp, so the
    // composite never claims to be fresher than its stalest ingredient.
    const times = Object.values(parts)
      .map((p) => p.data_time).filter((t): t is string => !!t)
      .map((t) => Date.parse(t)).filter(Number.isFinite);
    const data_time = times.length ? new Date(Math.min(...times)).toISOString() : fetched_at;

    return {
      source: SWPC,
      source_url: 'https://services.swpc.noaa.gov/',
      tier: 'mixed', model: null,
      fetched_at, data_time,
      latency_s: latency(fetched_at, data_time) ?? 0,
      stale_after_s: STALE_AFTER.solar_wind,
      units: {
        bz_gsm: 'nT', by_gsm: 'nT', bx_gsm: 'nT', bt: 'nT',
        speed: 'km/s', density: 'cm^-3', temperature: 'K',
        estimated_kp: 'Kp', flux_long: 'W/m^2', flux_short: 'W/m^2',
        standoff_re: 'Re',
      },
      data, parts,
    };
  }

  async fetchSolarWindSeries(signal?: AbortSignal): Promise<Envelope<SolarWindSeries>> {
    const [mag, wind] = await Promise.all([
      getJson<unknown>(SWPC_URL.mag, signal),
      getJson<unknown>(SWPC_URL.wind, signal),
    ]);
    const fetched_at = new Date().toISOString();
    const data = parseSolarWindSeries(mag.json, wind.json);
    const data_time = data.time[data.time.length - 1] ?? fetched_at;
    return {
      source: `${SWPC} · real-time solar wind (L1)`,
      source_url: SWPC_URL.mag,
      tier: 'measured', model: null,
      fetched_at, data_time,
      latency_s: latency(fetched_at, data_time) ?? 0,
      stale_after_s: STALE_AFTER.solar_wind,
      units: { bz_gsm: 'nT', bt: 'nT', speed: 'km/s', density: 'cm^-3', temperature: 'K' },
      data,
    };
  }
}
