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
import { subsolarPoint } from '../models/ephemeris.js';
import { GEOSYNC_RE, dipoleFieldAtRe } from './geosync.js';
import { EPHEM_URL, parseEphemerides } from './ephemerides.js';
import { DST_URL, parseDst } from './dst.js';
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

/** Initial great-circle bearing from one geographic point to another, degrees. */
function bearingDeg(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const r = Math.PI / 180;
  const dLon = (lon2 - lon1) * r;
  const y = Math.sin(dLon) * Math.cos(lat2 * r);
  const x = Math.cos(lat1 * r) * Math.sin(lat2 * r)
    - Math.sin(lat1 * r) * Math.cos(lat2 * r) * Math.cos(dLon);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

function near(a: number | null, b: number | null, tol: number): boolean {
  if (a === null || b === null || !Number.isFinite(a) || !Number.isFinite(b)) return false;
  return Math.abs(a - b) <= tol;
}

export async function runChecks(signal?: AbortSignal): Promise<CheckResult> {
  const rows: CheckRow[] = [];
  const source = new DirectSource();

  const [env, sumMag, sumSpeed, flares, series, aurora, ephem, dstRaw] = await Promise.all([
    source.fetchNow(signal),
    j(SWPC_URL.summaryMag, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.summarySpeed, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.xrayFlares, signal) as Promise<unknown>,
    source.fetchSolarWindSeries(signal),
    source.fetchAurora(signal),
    j(EPHEM_URL, signal),
    j(DST_URL, signal),
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
   * The one falsifiable claim the shield makes. Shue puts the magnetopause
   * somewhere; GOES sits at 6.6 Rₑ and measures a real field there. If the
   * model says the boundary is outside geostationary orbit, the spacecraft
   * should be inside the magnetosphere and reading a field of roughly dipole
   * order. If it says inside, GOES should be in the solar wind and the field
   * should have collapsed.
   */
  const g = d.geosync;
  const standoff = d.magnetopause?.standoff_re ?? null;
  if (g && g.total_nt !== null && standoff !== null) {
    const dipole = dipoleFieldAtRe(GEOSYNC_RE);
    const insideModel = standoff > GEOSYNC_RE;
    // Inside the magnetosphere the field is dipole-order, depressed by the ring
    // current; outside it collapses to solar-wind values of a few nT.
    const looksInside = g.total_nt > dipole * 0.25;
    rows.push({
      name: 'Shield model vs GOES at 6.6 Rₑ',
      ours: `standoff ${standoff.toFixed(1)} Rₑ → ${insideModel ? 'inside' : 'OUTSIDE'}`,
      theirs: `${g.total_nt.toFixed(0)} nT → ${looksInside ? 'inside' : 'outside'}`,
      ok: insideModel === looksInside,
      note: `Dipole at 6.6 Rₑ is ${dipole.toFixed(0)} nT; GOES-${g.satellite ?? '?'} reads `
        + `${g.total_nt.toFixed(0)} nT, a deficit of ${(dipole - g.total_nt).toFixed(0)} nT `
        + `from the ring and magnetopause currents. The check is the agreement of the two `
        + `verdicts, not the numbers — Shue's boundary and this magnetometer are `
        + `independent.${g.arcjet ? ' NOTE: thruster firing, reading suspect.' : ''}`,
    });
  }

  /**
   * The auroral oval encircles the geomagnetic (dipole) pole, ~13° from the dip
   * pole — but it is not centred on it. The oval brightens on the nightside, so
   * its brightness-weighted centroid is pulled toward magnetic midnight by an
   * amount that grows with activity.
   *
   * An earlier version of this check asserted centroid ≈ pole within 5°, which
   * passed only because it was written on a quiet day; it went amber the moment
   * the nightside brightened, reporting a defect in a grid that was correct.
   * The invariant is the *direction*: whatever the separation, the centroid
   * should lie on the anti-sunward side of the pole. A transposed, mirrored or
   * rotated grid fails that immediately, and it stays true at every activity
   * level, which is the whole point of a check.
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
      // Magnetic midnight, near enough: the meridian opposite the sub-solar
      // point. Computed from the ephemeris, independently of the aurora grid.
      const sub = subsolarPoint(new Date());
      const midnightLon = ((sub.lon + 360) % 360) - 180;
      const toCentroid = bearingDeg(pole.lat, pole.lon, cLat, cLon);
      const toMidnight = bearingDeg(pole.lat, pole.lon, -sub.lat, midnightLon);
      const off = Math.abs(((toCentroid - toMidnight + 540) % 360) - 180);
      rows.push({
        name: 'Aurora oval displaced toward magnetic midnight',
        ours: `centroid bears ${toCentroid.toFixed(0)}° from the pole`,
        theirs: `midnight bears ${toMidnight.toFixed(0)}°`,
        // The claim is deliberately weak, because the centroid is a coarse
        // statistic: a probability-weighted mean over a 45° latitude band that
        // includes the dayside cusp. What it can honestly assert is which half
        // of the sky the oval sits in. Substorm onset is pre-midnight, so a
        // duskward bias of tens of degrees is expected and is not a defect.
        ok: off < 90 && sep < 25,
        note: `${off.toFixed(0)}° apart in bearing — the nightside half — with the centroid `
          + `${sep.toFixed(1)}° from the pole. NOAA's OVATION grid, our IGRF-14 dipole axis and `
          + `the sub-solar point are three independent computations; a transposed or mirrored `
          + `grid puts the oval on the dayside and fails here.`,
      });
    }
  } else {
    rows.push({
      name: 'Aurora oval displaced toward magnetic midnight',
      ours: 'no data', theirs: '—', ok: false,
      note: 'OVATION grid did not load, so orientation could not be checked',
    });
  }

  /**
   * Two independent feeds each name the operational L1 spacecraft: the wind and
   * mag files carry an `active` flag per record, and so does the ephemeris
   * file. If they ever disagree we are attributing measurements to one craft
   * and drawing the marker for another, and every "measured by …" line on the
   * page is wrong. Nothing else on the page would notice.
   */
  const craft = parseEphemerides(ephem);
  const ephemActive = craft.find((c) => c.active)?.source ?? null;
  const windActive = d.solar_wind?.spacecraft ?? null;
  const pos = craft.find((c) => c.active);
  rows.push({
    name: 'Operational L1 spacecraft',
    ours: windActive ?? 'no data',
    theirs: ephemActive ?? 'no data',
    ok: !!windActive && windActive === ephemActive,
    note: pos
      ? `wind/mag feed vs ephemeris feed · ${pos.distanceRe.toFixed(0)} Rₑ upstream, `
        + `${pos.offAxisRe.toFixed(1)} Rₑ off the Sun–Earth line`
      : 'wind/mag feed vs ephemeris feed',
  });

  /**
   * A model against a measurement, which is rarer here than it sounds.
   *
   * NOAA's Dst is *computed from the L1 solar wind*, so comparing it with the
   * wind proves nothing — it would only be checking arithmetic against its own
   * input. Estimated Kp comes from a network of ground magnetometers and knows
   * nothing about L1. So the two disagreeing about whether the ground is quiet
   * is a statement about the model, not about our parsing.
   *
   * The claim is deliberately coarse. Dst and Kp measure different things — one
   * the ring current's depression of the field, the other the range of
   * mid-latitude disturbance in three hours — and they are only loosely
   * correlated storm to storm. What they should never do is contradict each
   * other about quiet versus disturbed.
   */
  const dstParsed = parseDst(dstRaw, new Date());
  const dstNow = dstParsed.now?.dst ?? null;
  const kpNow = d.kp?.estimated_kp ?? null;
  if (dstNow !== null && kpNow !== null) {
    const dstDisturbed = dstNow <= -30;
    const kpDisturbed = kpNow >= 4;
    const aheadCount = dstParsed.ahead.length;
    rows.push({
      name: 'Modelled Dst vs measured Kp',
      ours: `Dst ${dstNow.toFixed(0)} nT → ${dstDisturbed ? 'disturbed' : 'quiet'}`,
      theirs: `Kp ${kpNow.toFixed(2)} → ${kpDisturbed ? 'disturbed' : 'quiet'}`,
      ok: dstDisturbed === kpDisturbed,
      note: `A model driven by the L1 wind against a measurement from ground `
        + `magnetometers — they share no input. Thresholds are Dst ≤ −30 nT and Kp ≥ 4; `
        + `the two indices are only loosely correlated, so this checks that they agree on `
        + `quiet versus disturbed, nothing finer. ${aheadCount} of the feed's samples lie `
        + `in the future and are excluded from "now".`,
    });
  }

  return {
    rows,
    ranAt: new Date().toISOString(),
    passed: rows.filter((r) => r.ok).length,
  };
}
