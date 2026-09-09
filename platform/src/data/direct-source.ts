/**
 * Stage A — the browser fetches NOAA SWPC directly and this adapter stamps
 * contract envelopes client-side. Verified CORS (`access-control-allow-origin: *`)
 * on every endpoint used here; see docs/sources.md.
 *
 * Failure is isolated per feed: one endpoint 500ing must never blank the HUD,
 * and must never be papered over with a plausible number. A failed feed becomes
 * `null` + an `error` on its PartMeta, which the HUD renders as "no data".
 */

import { getJson, servedFromMirror } from './fetch-json.js';
import type { AuroraNow, Envelope, Now, SolarWindSeries } from '../contract/types.js';
import { PARTICLE_URL, parseParticles, seriesFor } from './particles.js';
import { PROPAGATED_URL, parsePropagated } from './geospace.js';
import { EPHEM_URL, parseEphemerides, type SpacecraftPos } from './ephemerides.js';
import { DST_URL, DST_LEVEL_TEXT, dstLevel, dstSeries, parseDst } from './dst.js';
import {
  GEOSYNC_URL, GEOSYNC_RE, dipoleFieldAtRe, geosyncSeries, parseGeosync,
} from './geosync.js';
import type { NowEnvelope, PartMeta, Snapshot, Source } from './source.js';
import { magnetopause } from '../models/shue1998.js';
import {
  SWPC_URL, parseAlerts, parseKpNow, parseScalesNow, parseSolarWindNow,
  parseSolarWindSeries, parseXrayFromSeries, parseAurora,
  parseKpSeries, parseXraySeries, downsample, parseRegions,
} from './swpc.js';
import type { ActiveRegion } from './swpc.js';

const SWPC = 'NOAA SWPC';

/** Staleness thresholds, seconds — source-specific, per the charter. */
export const STALE_AFTER = {
  solar_wind: 20 * 60,
  kp: 20 * 60,
  xray: 20 * 60,
  scales: 6 * 60 * 60,
  alerts: 7 * 24 * 60 * 60,
  magnetopause: 20 * 60,
  particles: 30 * 60,
  propagated: 30 * 60,
  geosync: 30 * 60,
  // 1-minute cadence; the model runs ahead, so an arrived sample older than
  // 20 minutes means the pipeline has stopped, not that the wind is quiet.
  dst: 20 * 60,
  // OVATION publishes a ~30-90 minute forecast every ~5 minutes; an hour-old
  // grid is still meaningful, a three-hour-old one is not.
  aurora: 60 * 60,
  regions: 36 * 60 * 60,
  // Hourly product; two hours without an update is a real outage.
  spacecraft: 3 * 60 * 60,
} as const;

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
    // Keyed by the upstream URL, which is the one this function is given —
    // so provenance costs nothing at fifteen call sites.
    ...(servedFromMirror(url) ? { mirrored: true } : {}),
  };
}

export class DirectSource implements Source {
  readonly name = 'DirectSource (stage A · browser → NOAA SWPC)';

  async fetchNow(signal?: AbortSignal): Promise<NowEnvelope> {
    return (await this.fetchSnapshot(signal)).now;
  }

  async fetchSnapshot(signal?: AbortSignal): Promise<Snapshot> {
    const [mag, wind, kp, xray, scales, alerts, protons, electrons, prop, geo, dstRaw] =
      await Promise.all([
      getJson<unknown>(SWPC_URL.mag, signal),
      getJson<unknown>(SWPC_URL.wind, signal),
      getJson<unknown>(SWPC_URL.kp1m, signal),
      getJson<unknown>(SWPC_URL.xrays6h, signal),
      getJson<unknown>(SWPC_URL.scales, signal),
      getJson<unknown>(SWPC_URL.alerts, signal),
      getJson<unknown>(PARTICLE_URL.protons, signal),
      getJson<unknown>(PARTICLE_URL.electrons, signal),
      getJson<unknown>(PROPAGATED_URL, signal),
      getJson<unknown>(GEOSYNC_URL, signal),
      getJson<unknown>(DST_URL, signal),
    ]);
    const fetched_at = new Date().toISOString();

    const solar_wind = mag.json || wind.json ? parseSolarWindNow(mag.json, wind.json) : null;
    const kpNow = kp.json ? parseKpNow(kp.json) : null;
    const xrayNow = xray.json ? parseXrayFromSeries(xray.json) : null;
    const scalesNow = scales.json ? parseScalesNow(scales.json) : null;
    const alertList = alerts.json ? parseAlerts(alerts.json) : [];

    const particles = protons.json || electrons.json
      ? parseParticles(protons.json, electrons.json) : null;
    const propagated = prop.json ? parsePropagated(prop.json) : null;
    const geosync = geo.json ? parseGeosync(geo.json) : null;
    // Half of this response is the model's own short forecast; `parseDst` takes
    // the newest sample that has actually arrived and keeps the rest separate.
    const dst = dstRaw.json ? parseDst(dstRaw.json, new Date(fetched_at)) : null;
    const arriving = propagated?.arrivingNow ?? null;

    // Modeled from the measured wind — null in, null out. Never a default.
    /**
     * Computed from the PROPAGATED wind where NOAA provides it: the boundary
     * responds to plasma that has arrived, not to plasma still an hour out at
     * L1. Falls back to the L1 reading when the propagation feed is down, and
     * the Situation Report says which was used.
     */
    const mp = magnetopause(
      arriving?.bz ?? solar_wind?.bz_gsm ?? null,
      arriving?.density ?? solar_wind?.density ?? null,
      arriving?.speed ?? solar_wind?.speed ?? null,
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
      magnetopause: meta(fetched_at,
        arriving?.arrivesAt ?? solar_wind?.time ?? null, STALE_AFTER.magnetopause,
        arriving ? 'Earth Star (from SWPC wind propagated to Earth)'
          : 'Earth Star (from SWPC solar wind at L1)',
        arriving ? PROPAGATED_URL : SWPC_URL.mag, windErr, 'modeled',
        { name: 'Shue et al. 1998', ref: 'doi:10.1029/98JA01103' }),
      particles: meta(fetched_at, particles?.time ?? null, STALE_AFTER.particles,
        `${SWPC} · GOES particle detectors`, PARTICLE_URL.protons,
        protons.error ?? electrons.error),
      geosync: meta(fetched_at, geosync?.time ?? null, STALE_AFTER.geosync,
        `${SWPC} · GOES magnetometer at geostationary orbit`, GEOSYNC_URL, geo.error),
      propagated: meta(fetched_at, arriving?.arrivesAt ?? null, STALE_AFTER.propagated,
        `${SWPC} · solar wind propagated to the bow shock nose`, PROPAGATED_URL,
        prop.error, 'modeled', { name: 'NOAA SWPC propagation' }),
      dst: meta(fetched_at, dst?.now?.time ?? null, STALE_AFTER.dst,
        `${SWPC} · Dst from the Geospace model`, DST_URL, dstRaw.error, 'modeled',
        { name: 'NOAA Geospace (Univ. Michigan BATS-R-US/RCM)' }),
    };

    const lastAhead = dst?.ahead[dst.ahead.length - 1] ?? null;
    const data: Now = {
      solar_wind, kp: kpNow, xray: xrayNow, scales: scalesNow, alerts: alertList,
      dst: dst?.now
        ? {
          time: dst.now.time,
          value_nt: dst.now.dst,
          level: dstLevel(dst.now.dst) === null
            ? null : DST_LEVEL_TEXT[dstLevel(dst.now.dst)!],
          lead_minutes: lastAhead === null ? null
            : Math.round((Date.parse(lastAhead.time) - Date.parse(dst.now.time)) / 60000),
          min_nt: dst.minimum?.dst ?? null,
          min_time: dst.minimum?.time ?? null,
        }
        : null,
      geosync: geosync
        ? {
          time: geosync.time, satellite: geosync.satellite,
          hp_nt: geosync.hp, total_nt: geosync.total,
          deficit_nt: geosync.total === null
            ? null : dipoleFieldAtRe(GEOSYNC_RE) - geosync.total,
          arcjet: geosync.arcjet,
        }
        : null,
      particles: particles
        ? {
          time: particles.time,
          proton_10mev: particles.proton10, proton_100mev: particles.proton100,
          electron_2mev: particles.electron2, satellite: particles.satellite,
          s_scale: particles.s?.scale ?? null, s_text: particles.s?.text ?? null,
        }
        : null,
      propagated: arriving
        ? {
          observed_at: arriving.observedAt, arrives_at: arriving.arrivesAt,
          speed: arriving.speed, density: arriving.density,
          bz: arriving.bz, bt: arriving.bt,
          lead_minutes: propagated?.leadMinutes ?? null,
        }
        : null,
      magnetopause: mp
        ? {
          standoff_re: mp.r0Re, alpha: mp.alpha,
          bow_shock_re: mp.bowShockRe, dyn_pressure_npa: mp.dynPressureNPa,
          model: 'Shue1998',
        }
        : null,
    };

    // Envelope-level data_time is the OLDEST contributing timestamp, so the
    // composite never claims to be fresher than its stalest ingredient.
    const times = Object.values(parts)
      .map((p) => p.data_time).filter((t): t is string => !!t)
      .map((t) => Date.parse(t)).filter(Number.isFinite);
    const data_time = times.length ? new Date(Math.min(...times)).toISOString() : fetched_at;

    const now: NowEnvelope = {
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
        standoff_re: 'Re', bow_shock_re: 'Re', dyn_pressure_npa: 'nPa',
        proton_10mev: 'pfu', proton_100mev: 'pfu', electron_2mev: 'pfu',
        hp_nt: 'nT', total_nt: 'nT', deficit_nt: 'nT',
      },
      data, parts,
    };

    // Built from the same two responses — no second round trip, and the
    // history can never disagree with the current reading drawn above it.
    const seriesData = parseSolarWindSeries(mag.json, wind.json);
    const seriesTime = seriesData.time[seriesData.time.length - 1] ?? fetched_at;
    const series: Envelope<SolarWindSeries> = {
      source: `${SWPC} · real-time solar wind (L1)`,
      source_url: SWPC_URL.mag,
      tier: 'measured', model: null,
      fetched_at, data_time: seriesTime,
      latency_s: latency(fetched_at, seriesTime) ?? 0,
      stale_after_s: STALE_AFTER.solar_wind,
      units: { bz_gsm: 'nT', bt: 'nT', speed: 'km/s', density: 'cm^-3', temperature: 'K' },
      data: seriesData,
    };

    // Sparkline histories come free: they are parsed from responses this
    // method already has in hand. Downsampled here rather than in the renderer
    // so the cost is paid once per refresh, not once per repaint.
    return {
      now, series,
      kpSeries: downsample(parseKpSeries(kp.json), 120),
      xraySeries: downsample(parseXraySeries(xray.json), 120),
      protonSeries: downsample(seriesFor(protons.json, '>=10 MeV'), 120),
      geosyncSeries: downsample(geosyncSeries(geo.json, 'total'), 120),
      dstSeries: dstSeries(dstRaw.json, new Date(fetched_at)),
      electronSeries: downsample(seriesFor(electrons.json, '>=2 MeV'), 120),
    };
  }

  async fetchAurora(signal?: AbortSignal): Promise<Envelope<AuroraNow | null>> {
    const res = await getJson<unknown>(SWPC_URL.aurora, signal);
    // A transport failure is an error state, not "no data" — throw so the
    // store's slow lane records it and the tile can say why it is empty.
    if (!res.json) throw new Error(res.error ?? 'unreachable');
    const fetched_at = new Date().toISOString();
    const data = parseAurora(res.json);
    // Staleness is measured against the OBSERVATION, not the forecast: the
    // forecast time is in the future and would make a stale grid look fresh.
    const data_time = data?.observation_time ?? fetched_at;
    return {
      source: `${SWPC} · OVATION Prime aurora forecast`,
      source_url: SWPC_URL.aurora,
      tier: 'modeled',
      model: { name: 'OVATION Prime (NOAA SWPC)' },
      fetched_at, data_time,
      latency_s: latency(fetched_at, data_time) ?? 0,
      stale_after_s: STALE_AFTER.aurora,
      units: { values: '% probability of visible aurora' },
      data,
    };
  }

  async fetchRegions(signal?: AbortSignal): Promise<Envelope<ActiveRegion[]>> {
    const res = await getJson<unknown>(SWPC_URL.regions, signal);
    if (!res.json) throw new Error(res.error ?? 'unreachable');
    const fetched_at = new Date().toISOString();
    const data = parseRegions(res.json);
    const data_time = data[0]?.observed ?? fetched_at;
    return {
      source: `${SWPC} · solar region summary`,
      source_url: SWPC_URL.regions,
      tier: 'measured', model: null,
      fetched_at, data_time,
      latency_s: latency(fetched_at, data_time) ?? 0,
      stale_after_s: STALE_AFTER.regions,
      units: { lat: 'deg', lon: 'deg from central meridian', area: 'millionths of hemisphere' },
      data,
    };
  }

  async fetchEphemerides(signal?: AbortSignal): Promise<Envelope<SpacecraftPos[]>> {
    const res = await getJson<unknown>(EPHEM_URL, signal);
    if (!res.json) throw new Error(res.error ?? 'unreachable');
    const fetched_at = new Date().toISOString();
    const data = parseEphemerides(res.json);
    // The newest of the per-spacecraft newests: they share a cadence, so this
    // is the age of the whole set rather than of the luckiest member.
    const data_time = data.reduce<string | null>(
      (a, s) => (a === null || s.time > a ? s.time : a), null,
    ) ?? fetched_at;
    return {
      source: `${SWPC} · RTSW ephemerides`,
      source_url: EPHEM_URL,
      tier: 'measured', model: null,
      fetched_at, data_time,
      latency_s: latency(fetched_at, data_time) ?? 0,
      stale_after_s: STALE_AFTER.spacecraft,
      units: { gse: 'km', distanceRe: 'Earth radii', offAxisDeg: 'deg' },
      data,
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
