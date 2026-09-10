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
import { angularSeparationDeg, decimalYear, geomagneticNorthPole, igrfInValidity } from '../models/igrf14.js';
import { IGRF_EPOCH, IGRF_VALID_UNTIL } from '../models/igrf14-coeffs.js';
import { subsolarPoint } from '../models/ephemeris.js';
import { externalField, lastClosedSunwardRe } from '../models/fieldlines.js';
import { kpBandFraction, kpBandIndex, t89BandLabel } from '../models/t89.js';
import { magnetopause } from '../models/shue1998.js';
import { GEOSYNC_RE, dipoleFieldAtRe } from './geosync.js';
import { EPHEM_URL, parseEphemerides } from './ephemerides.js';
import { DST_URL, parseDst } from './dst.js';
import { enlilAt, fetchEnlil } from './enlil.js';
import { regionAgreement } from '../scene/region-agreement.js';
import type { DiskCalibration } from '../scene/disk-calibration.js';
import type { Vector3 } from 'three';
import { hhmmUTC } from '../contract/types.js';

export interface CheckRow {
  name: string;
  ours: string;
  theirs: string;
  ok: boolean;
  note: string;
  /**
   * The measurement ran but the data cannot settle the question today. Not a
   * pass and not a failure: a check that reports a defect whenever its evidence
   * is weak is a check that will be ignored.
   */
  inconclusive?: boolean;
}

export interface CheckResult {
  rows: CheckRow[];
  ranAt: string;
  passed: number;
  /** Rows that ran but could not settle the question on today's data. */
  inconclusive: number;
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

/**
 * The live solar projection, supplied by the scene. Optional: the checks run
 * without a browser scene in tests, and a missing projection means one fewer
 * row rather than a failure.
 */
export interface SunProjection {
  image: HTMLImageElement;
  calibration: DiskCalibration;
  north: Vector3;
  earthDir: Vector3;
}

/** Luminance of a drawable, at `n`x`n`. Null when the canvas cannot be read. */
function luminanceOf(source: CanvasImageSource, n: number): Float32Array | null {
  const c = document.createElement('canvas');
  c.width = n; c.height = n;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  try {
    ctx.drawImage(source, 0, 0, n, n);
    const d = ctx.getImageData(0, 0, n, n).data;
    const out = new Float32Array(n * n);
    for (let i = 0; i < n * n; i++) {
      out[i] = 0.299 * d[i * 4]! + 0.587 * d[i * 4 + 1]! + 0.114 * d[i * 4 + 2]!;
    }
    return out;
  } catch {
    return null;
  }
}

export async function runChecks(
  signal?: AbortSignal, sun?: SunProjection | null,
): Promise<CheckResult> {
  const rows: CheckRow[] = [];
  const source = new DirectSource();

  const [env, sumMag, sumSpeed, flares, series, aurora, ephem, dstRaw, enlil] =
    await Promise.all([
    source.fetchNow(signal),
    j(SWPC_URL.summaryMag, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.summarySpeed, signal) as Promise<Array<Record<string, unknown>>>,
    j(SWPC_URL.xrayFlares, signal) as Promise<unknown>,
    source.fetchSolarWindSeries(signal),
    source.fetchAurora(signal),
    j(EPHEM_URL, signal),
    j(DST_URL, signal),
    // 212 KB, and the only row that can say anything about a model's skill.
    fetchEnlil(signal),
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
      // Absent evidence, not contradictory evidence. The grid is the largest
      // payload the Viewer fetches and it does occasionally fail to arrive;
      // calling that DRIFT accuses the orientation maths of a fault the run
      // never tested, which is the precise way a checks page teaches people to
      // stop reading it.
      inconclusive: true,
      note: 'OVATION grid did not load, so orientation could not be checked. This is the '
        + 'check having no evidence, not the oval being in the wrong place.',
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
   * nothing about L1. So the two disagreeing is a statement about the model,
   * not about our parsing.
   *
   * The test is coarse, and deliberately coarser than it first was. Dst and Kp
   * measure different things — the ring current's depression of the field
   * against the range of mid-latitude disturbance over three hours — and the
   * ring current responds first. At storm onset Dst routinely crosses −30 nT
   * while Kp is still 3, which the first version of this row reported as a
   * defect. It is not one; it is what a storm beginning looks like.
   *
   * So each index is placed in a band, and only a two-band contradiction counts
   * — one saying severe while the other says quiet. Anything closer is reported
   * as unsettled, with both numbers shown.
   */
  const dstParsed = parseDst(dstRaw, new Date());
  const dstNow = dstParsed.now?.dst ?? null;
  const kpNow = d.kp?.estimated_kp ?? null;
  if (dstNow !== null && kpNow !== null) {
    const dstBand = dstNow <= -100 ? 2 : dstNow <= -30 ? 1 : 0;
    const kpBand = kpNow >= 6 ? 2 : kpNow >= 4 ? 1 : 0;
    const gap = Math.abs(dstBand - kpBand);
    const word = ['quiet', 'disturbed', 'severe'];
    rows.push({
      name: 'Modelled Dst vs measured Kp',
      ours: `Dst ${dstNow.toFixed(0)} nT → ${word[dstBand]}`,
      theirs: `Kp ${kpNow.toFixed(2)} → ${word[kpBand]}`,
      ok: gap === 0,
      inconclusive: gap === 1,
      note: gap >= 2
        ? `Two bands apart, which the difference between the indices cannot explain. `
          + `A model driven by the L1 wind against a measurement from ground magnetometers; `
          + `they share no input, so one of them is wrong.`
        : gap === 1
          ? `One band apart, which is what a storm beginning looks like: the ring current `
            + `responds before the mid-latitude range does, so Dst crosses its threshold `
            + `first. Not a contradiction, and not evidence of agreement either. `
            + `${dstParsed.ahead.length} of the Dst feed's samples lie in the future and are `
            + `excluded from "now".`
          : `A model driven by the L1 wind against a measurement from ground magnetometers `
            + `— they share no input. Bands are Dst −30 and −100 nT, Kp 4 and 6. `
            + `${dstParsed.ahead.length} of the feed's samples lie in the future and are `
            + `excluded from "now".`,
    });
  }

  /**
   * A model's forecast against a measurement of the same quantity.
   *
   * Every other row here checks a parse. This one checks WSA-Enlil. The model
   * is initialised from solar magnetograms and analysed CME cones and never
   * sees L1, so its output for a moment that has already happened can be set
   * against the wind NOAA measured and propagated to Earth for that same
   * moment — two independent numbers for one physical quantity.
   *
   * The threshold is loose because the row is an instrument, not a verdict on
   * the forecast: a good heliospheric model is routinely tens of km/s out, and
   * that is not a defect in either the model or our code. What a 200 km/s
   * disagreement would mean is that we are reading the wrong column or
   * aligning the wrong times, which is what this is here to catch.
   */
  const arriving = d.propagated;
  if (enlil && arriving?.speed != null && arriving.arrives_at) {
    const at = enlilAt(enlil, new Date(arriving.arrives_at));
    if (at?.speed != null) {
      const delta = at.speed - arriving.speed;
      const pct = (delta / arriving.speed) * 100;
      rows.push({
        name: 'WSA-Enlil hindcast vs measured wind',
        ours: `measured ${arriving.speed.toFixed(0)} km/s`,
        theirs: `Enlil ${at.speed.toFixed(0)} km/s`,
        ok: Math.abs(delta) <= 200,
        note: `${delta >= 0 ? '+' : ''}${delta.toFixed(0)} km/s (${pct.toFixed(0)}%) at `
          + `${hhmmUTC(arriving.arrives_at)} UTC. Enlil is driven by solar magnetograms and `
          + `CME cone fits and never sees L1, so this is a model against a measurement of `
          + `the same quantity. The tolerance is ±200 km/s: it catches a misread column or `
          + `a time misalignment, not ordinary forecast error.`,
      });
    }
  }

  /**
   * The picture against the numbers.
   *
   * The Sun in the scene carries a SUVI frame projected back onto the sphere,
   * which depends on the solar rotation axis, the disk's measured centre and
   * radius, the orthographic mapping and the direction NOAA's longitudes run.
   * Get any of them wrong and the result is a convincing Sun with its active
   * regions in the wrong places.
   *
   * NOAA publishes those regions as numbers, from a different pipeline than the
   * imagery, and active regions are bright in every SUVI passband. So this asks
   * whether the reported positions land on bright pixels. A wrong projection
   * scatters them onto ordinary disk and the contrast collapses.
   */
  if (sun) {
    const N = 384;
    const lum = luminanceOf(sun.image, N);
    const regions = (await source.fetchRegions(signal)).data;
    const observed = regions[0]?.observed;
    const hours = observed ? (Date.now() - Date.parse(observed)) / 3_600_000 : 0;
    const agree = lum
      ? regionAgreement(lum, N, regions, sun.north, sun.earthDir, sun.calibration, hours)
      : null;
    if (agree) {
      // Comparative, not absolute: the published positions against the same
      // positions mirrored east–west. A day of small regions on a bright
      // chromosphere gives both a similar score, and that is a statement about
      // the day rather than about the projection.
      const margin = agree.mirroredRatio > 0 ? agree.ratio / agree.mirroredRatio : 0;
      const decisive = Math.abs(margin - 1) >= 0.06;
      rows.push({
        name: 'Solar imagery lines up with the region list',
        ours: `${agree.ratio.toFixed(2)}x disk mean at ${agree.tested} reported positions`,
        theirs: `${agree.mirroredRatio.toFixed(2)}x mirrored east–west`,
        ok: decisive && margin > 1,
        inconclusive: !decisive,
        note: decisive
          ? `The imagery and the region list come from different pipelines, so this tests `
            + `our projection — the rotation axis, the measured disk centre and radius, and `
            + `the longitude convention — rather than either of theirs. Longitudes rotated `
            + `${hours.toFixed(0)} h forward at the Carrington rate.`
          : `Too close to call today: the published positions and their mirror image score `
            + `within ${(Math.abs(margin - 1) * 100).toFixed(0)}% of each other, so the `
            + `picture cannot settle the projection. That happens when the regions are `
            + `small — ${agree.tested} tested here — against a bright chromosphere. `
            + `Reporting a defect on this evidence would be crying wolf.`,
      });
    }
  }

  /**
   * Two independent readings of the same surface.
   *
   * The shield's field lines are traced through IGRF + T89, and T89's only
   * driver is a Kp band — a three-hourly planetary index, in seven steps. The
   * magnetopause wireframe beside them is Shue et al. 1998, driven by the
   * minute-cadence solar-wind pressure and Bz measured at L1. Both are claims
   * about where the dayside boundary is, and nothing makes them agree.
   *
   * So this row can fail, which is the point of it. A large, sustained
   * disagreement is real information: Kp is an average over three hours of
   * ground magnetometer ranges, so it lags a pressure pulse badly, and during
   * a sudden commencement the wind knows the magnetosphere has been squeezed
   * while Kp still says it is quiet.
   *
   * It reports `inconclusive` mid-band. T89 steps between seven fits; a Kp of
   * 3.5 is drawn with exactly the same field as a Kp of 3.0, so holding it to
   * a pressure-driven boundary's precision there would be testing the
   * quantisation, not the models.
   */
  const windMp = magnetopause(
    d.propagated?.bz ?? d.solar_wind?.bz_gsm ?? null,
    d.propagated?.density ?? d.solar_wind?.density ?? null,
    d.propagated?.speed ?? d.solar_wind?.speed ?? null,
  );
  const band = kpNow === null ? null : kpBandIndex(kpNow);
  const ext = kpNow === null ? null : externalField(new Date(), kpNow);
  const t89Nose = ext ? lastClosedSunwardRe(new Date(), ext) : null;

  if (t89Nose === null || windMp === null || band === null || kpNow === null) {
    rows.push({
      name: 'Dayside standoff: T89 (Kp) vs Shue 1998 (wind)',
      ours: t89Nose === null ? 'no Kp' : `${t89Nose.toFixed(1)} Rₑ`,
      theirs: windMp === null ? 'no wind' : `${windMp.r0Re.toFixed(1)} Rₑ`,
      ok: false,
      inconclusive: true,
      note: 'One of the two drivers is missing, so there is nothing to compare. '
        + 'Absent evidence, not disagreement — with no Kp the shield is IGRF alone, '
        + 'and with no wind there is no modelled boundary to draw.',
    });
  } else {
    const gap = t89Nose - windMp.r0Re;
    /**
     * Three Earth radii, and the width is the finding rather than a fudge.
     *
     * T89 has no pressure term at all: one Kp band is one field, whatever the
     * wind is doing. But the wind varies enormously *within* a quiet Kp — from
     * 0.2 nPa to 10 nPa is all consistent with Kp 0–1 — and Shue puts the nose
     * anywhere from 14.5 Rₑ to 8.0 Rₑ across that range, against T89's single
     * 10.7 Rₑ for the band. A tighter threshold would report a defect every
     * time the wind was thin, which is the mistake the aurora-oval row above
     * was rewritten to stop making: it would be measuring the weather.
     *
     * So this catches gross faults — a transposed GSM axis, a broken standoff
     * search, a Shue solution reading pressure upside down — and it reports
     * the gap on every run whether or not it passes, because the number is
     * more use than the verdict.
     */
    const TOL_RE = 3.0;
    const midBand = kpBandFraction(kpNow) > 0.25 && kpBandFraction(kpNow) < 0.75;
    rows.push({
      name: 'Dayside standoff: T89 (Kp) vs Shue 1998 (wind)',
      ours: `${t89Nose.toFixed(1)} Rₑ at Kp ${kpNow.toFixed(1)} (${t89BandLabel(band)})`,
      theirs: `${windMp.r0Re.toFixed(1)} Rₑ from ${windMp.dynPressureNPa.toFixed(2)} nPa`,
      ok: Math.abs(gap) <= TOL_RE,
      inconclusive: midBand && Math.abs(gap) > TOL_RE,
      note: `${gap >= 0 ? '+' : ''}${gap.toFixed(2)} Rₑ. Ours is the sunward reach of the last `
        + `closed field line through the traced field — T89's own answer, since the model has `
        + `no boundary in it. Theirs is the Shue nose from the propagated wind. `
        + `The two share no inputs. `
        + (midBand
          ? `Kp ${kpNow.toFixed(1)} sits mid-band, where T89 draws exactly the field it would `
            + `at Kp ${Math.floor(kpNow).toFixed(1)} — too coarse to be held to a `
            + `pressure-driven boundary. A gap beyond ${TOL_RE} Rₑ on this run would be `
            + `reported as unsettled rather than as a fault in either model.`
          : `Kp is near a band edge, so the comparison is as sharp as a seven-band model gets. `
            + `A gap beyond ${TOL_RE} Rₑ means the wind has moved somewhere the three-hourly `
            + `index cannot follow — or that one of the two is wired wrong.`),
    });
  }

  /**
   * The one check with no upstream to compare against, because the thing it
   * watches is a calendar. IGRF is reissued every five years; past
   * `IGRF_VALID_UNTIL` the synthesis keeps returning plausible numbers by
   * extrapolating the secular variation, and every field line stays exactly as
   * convincing as it was the day before. Nothing else on the page would notice,
   * and the citation would go on naming a validity window that had closed.
   *
   * It reports the remaining runway on every run rather than only failing at
   * the boundary — an expiry that announces itself years early can be planned
   * for; one that fires on the day is an outage.
   */
  const yearNow = decimalYear(new Date());
  const yearsLeft = IGRF_VALID_UNTIL - yearNow;
  rows.push({
    name: 'Field model inside its published validity',
    ours: `${yearNow.toFixed(2)}`,
    theirs: `IGRF-14, ${IGRF_EPOCH.toFixed(1)}–${IGRF_VALID_UNTIL.toFixed(1)}`,
    ok: igrfInValidity(new Date()),
    note: yearsLeft >= 0
      ? `${yearsLeft.toFixed(1)} years of validity remain; IAGA reissues the model every five `
        + 'years, so IGRF-15 is the successor to fetch.'
      : `Expired ${(-yearsLeft).toFixed(1)} years ago. The field lines are extrapolated beyond `
        + 'the published secular variation and are labelled as such; replace the coefficients '
        + 'with IGRF-15 via scripts/gen-igrf.mjs.',
  });

  return {
    rows,
    ranAt: new Date().toISOString(),
    // An inconclusive row is not counted against the total: it did not fail,
    // and pretending it passed would be as wrong as pretending it failed.
    passed: rows.filter((r) => r.ok).length,
    inconclusive: rows.filter((r) => r.inconclusive).length,
  };
}
