/**
 * Cross-checks against NOAA's own published values, by an independent path.
 *
 * Formerly a separate /verify page; now folded into the provenance panel, where
 * it belongs — a claim about accuracy is provenance, and splitting the two put
 * the evidence one navigation away from the number it justifies.
 *
 * These caught two real defects during development: `current_int_xrlong` read as
 * a flux (reported X19.1 during a B3.7 background), and an aurora orientation
 * check written against the dip pole instead of the geomagnetic pole.
 */

import { DirectSource } from './direct-source.js';
import { SWPC_URL, auroraAt, parseXrayLatestClass, xrayClass } from './swpc.js';
import { angularSeparationDeg, geomagneticNorthPole } from '../models/igrf14.js';
import { hhmmUTC } from '../contract/types.js';

export interface CheckRow {
  name: string;
  ours: string;
  theirs: string;
  ok: boolean;
  note: string;
}

export interface CheckResult {
  rows: CheckRow[];
  ranAt: string;
  passed: number;
}

const j = async (u: string, signal?: AbortSignal): Promise<unknown> =>
  (await fetch(u, { cache: 'no-store', signal })).json();

function near(a: number | null, b: number | null, tol: number): boolean {
  if (a === null || b === null || !Number.isFinite(a) || !Number.isFinite(b)) return false;
  return Math.abs(a - b) <= tol;
}

export async function runChecks(signal?: AbortSignal): Promise<CheckResult> {
  const rows: CheckRow[] = [];
  const source = new DirectSource();

  const [env, sumMag, sumSpeed, flares, series, aurora] = await Promise.all([
    source.fetchNow(signal),
    j(SWPC_URL.summaryMag, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.summarySpeed, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.xrayFlares, signal) as Promise<unknown>,
    source.fetchSolarWindSeries(signal),
    source.fetchAurora(signal),
  ]);

  const d = env.data;
  const sm = sumMag[0];
  const sp = sumSpeed[0];

  /**
   * Compare like with like. SWPC's summary is one sample at its own time_tag;
   * our "now" is our own newest minute. Bz genuinely moves several nT between
   * them, which says nothing about our parsing — so look up OUR value at THEIR
   * timestamp.
   */
  const at = (stamp: unknown, col: keyof typeof series.data): number | null => {
    const want = String(stamp ?? '').replace(' ', 'T').replace(/Z?$/, 'Z');
    const t = Date.parse(want);
    if (!Number.isFinite(t)) return null;
    const idx = series.data.time.indexOf(new Date(t).toISOString());
    if (idx < 0) return null;
    return (series.data[col] as (number | null)[])[idx] ?? null;
  };

  const stamp = hhmmUTC(String(sm?.['time_tag'] ?? ''));
  rows.push({
    name: 'IMF Bz (GSM), nT',
    ours: at(sm?.['time_tag'], 'bz_gsm')?.toFixed(2) ?? 'no data',
    theirs: String(sm?.['bz_gsm'] ?? 'no data'),
    ok: near(at(sm?.['time_tag'], 'bz_gsm'), Number(sm?.['bz_gsm']), 0.55),
    note: `both at ${stamp} UTC · tol ±0.55 (their integer rounding)`,
  });
  rows.push({
    name: 'IMF total Bt, nT',
    ours: at(sm?.['time_tag'], 'bt')?.toFixed(2) ?? 'no data',
    theirs: String(sm?.['bt'] ?? 'no data'),
    ok: near(at(sm?.['time_tag'], 'bt'), Number(sm?.['bt']), 0.55),
    note: `both at ${stamp} UTC · tol ±0.55`,
  });
  rows.push({
    name: 'Solar wind speed, km/s',
    ours: at(sp?.['time_tag'], 'speed')?.toFixed(1) ?? 'no data',
    theirs: String(sp?.['proton_speed'] ?? 'no data'),
    ok: near(at(sp?.['time_tag'], 'speed'), Number(sp?.['proton_speed']), 1.5),
    note: `both at ${hhmmUTC(String(sp?.['time_tag'] ?? ''))} UTC · tol ±1.5`,
  });

  // Our class, from our parsed flux, against the label SWPC publishes elsewhere.
  const theirClass = parseXrayLatestClass(flares)?.class ?? '';
  const ourClass = d.xray?.class ?? xrayClass(d.xray?.flux_long ?? null);
  rows.push({
    name: 'X-ray class',
    ours: ourClass ?? 'no data',
    theirs: theirClass || 'no data',
    ok: !!ourClass && !!theirClass && ourClass[0] === theirClass[0]
      && Math.abs(parseFloat(ourClass.slice(1)) - parseFloat(theirClass.slice(1))) <= 0.35,
    note: `our thresholds on our parsed flux (${d.xray?.flux_long ? d.xray.flux_long.toExponential(2) : '—'} W/m²) `
      + `vs SWPC's published label. This row caught current_int_xrlong being read as a flux.`,
  });

  /**
   * Match on OUR timestamp, not on whatever is newest at the moment the check
   * runs. Kp updates every minute; comparing a cached reading against a freshly
   * fetched one races the feed and reports drift where there is none.
   */
  const kpRaw = (await j(SWPC_URL.kp1m, signal)) as Array<Record<string, unknown>>;
  const ourKpTime = d.kp?.time ?? null;
  const theirKp = ourKpTime
    ? kpRaw.find((r) => `${String(r['time_tag'])}Z` === ourKpTime.replace('.000Z', 'Z')
        || Date.parse(`${String(r['time_tag'])}Z`) === Date.parse(ourKpTime))
    : undefined;
  rows.push({
    name: 'Planetary Kp (estimated)',
    ours: d.kp?.estimated_kp?.toFixed(2) ?? 'no data',
    theirs: theirKp ? String(theirKp['estimated_kp']) : 'minute not in feed',
    ok: !!theirKp && near(d.kp?.estimated_kp ?? null, Number(theirKp['estimated_kp']), 0.001),
    note: `both at ${hhmmUTC(ourKpTime)} UTC · exact match required. Checks our `
      + `newest-record selection against the same minute upstream.`,
  });

  const magRaw = (await j(SWPC_URL.mag, signal)) as Array<Record<string, unknown>>;
  const newestAny = magRaw.reduce((best, r) =>
    Date.parse(`${String(r['time_tag'])}Z`) > Date.parse(`${String(best['time_tag'])}Z`) ? r : best, magRaw[0]!);
  const activeSources = [...new Set(magRaw.filter((r) => r['active'] === true).map((r) => String(r['source'])))];
  rows.push({
    name: 'L1 spacecraft selected',
    ours: d.solar_wind?.spacecraft ?? 'no data',
    theirs: activeSources.join(', ') || 'none flagged active',
    ok: !!d.solar_wind?.spacecraft && activeSources.includes(d.solar_wind.spacecraft),
    note: `the feed interleaves several spacecraft; newest of ANY source right now is `
      + `"${String(newestAny['source'])}". Taking that instead is the bug this row guards.`,
  });

  /**
   * The auroral oval encircles the geomagnetic (dipole) pole, ~13° from the dip
   * pole. NOAA's oval and our IGRF-14 dipole axis are computed independently; a
   * transposed, mirrored or rotated grid would not agree.
   */
  if (aurora.data) {
    const g = aurora.data.grid;
    const pole = geomagneticNorthPole(new Date());
    let sx = 0, sy = 0, sz = 0, weight = 0;
    for (let lon = 0; lon < g.width; lon++) {
      for (let lat = 45; lat <= 89; lat++) {
        const p = auroraAt(g, lat, lon);
        if (p <= 0) continue;
        const la = (lat * Math.PI) / 180;
        const lo = (lon * Math.PI) / 180;
        sx += p * Math.cos(la) * Math.cos(lo);
        sy += p * Math.cos(la) * Math.sin(lo);
        sz += p * Math.sin(la);
        weight += p;
      }
    }
    if (weight > 0) {
      const r = Math.sqrt(sx * sx + sy * sy + sz * sz);
      const cLat = (Math.asin(sz / r) * 180) / Math.PI;
      const cLon = (Math.atan2(sy, sx) * 180) / Math.PI;
      const sep = angularSeparationDeg(cLat, cLon, pole.lat, pole.lon);
      rows.push({
        name: 'Aurora oval on the geomagnetic pole',
        ours: `centroid ${cLat.toFixed(1)}°N ${cLon.toFixed(1)}°E`,
        theirs: `pole ${pole.lat.toFixed(1)}°N ${pole.lon.toFixed(1)}°E`,
        ok: sep < 5,
        note: `${sep.toFixed(2)}° apart. NOAA's OVATION grid and our IGRF-14 dipole axis are `
          + `independent computations.`,
      });
    }
  } else {
    rows.push({
      name: 'Aurora oval on the geomagnetic pole',
      ours: 'no data', theirs: '—', ok: false,
      note: 'OVATION grid did not load, so orientation could not be checked',
    });
  }

  return {
    rows,
    ranAt: new Date().toISOString(),
    passed: rows.filter((r) => r.ok).length,
  };
}
