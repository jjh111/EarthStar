/**
 * The Situation Report (plan §5.4) — the whole scene state narrated in plain
 * language, with tiers and times. This is simultaneously the screen-reader
 * rendering and the "explain it to me" mode, so it must never be a summary of
 * a *different* state than the one on screen, and it must say when it doesn't
 * know something.
 */

import type { NowEnvelope } from '../data/source.js';
import { VIEWS } from '../scene/camera-rig.js';
import type { SpacecraftPos } from '../data/ephemerides.js';
import { hhmmUTC, formatAge } from '../contract/types.js';
import type { AuroraNow, Envelope } from '../contract/types.js';
import type { Cme } from '../data/cme.js';
import { stalenessOf } from './format.js';
import { errorReason } from '../data/state.js';
import { scaleLabel, type ScaleMode } from '../scene/scales.js';
import { subsolarPoint } from '../models/ephemeris.js';
import { igrfCitation } from '../models/igrf14.js';

/** Which fetch lanes are still in flight — the cold start's shape. */
export interface ReportLanes {
  snapshot: boolean;
  aurora: boolean;
  cmes: boolean;
  /** When the store's next poll is due, so an error text can be exact. */
  nextAttempt?: string | null;
}

export interface SceneNarration {
  mode: ScaleMode;
  view: string;
  reducedMotion: boolean;
  shield: boolean;
  cmes?: { shown: boolean; count: number };
  fieldLines: { lines: number; points: number; far?: boolean };
  aurora: boolean;
  wind?: boolean;
  /** Which Earth surface is on the sphere — measured imagery or the vector base. */
  earthSurface?: 'vector' | 'imagery' | 'loading';
}

const KP_WORDS: [number, string][] = [
  [9, 'extreme storm'], [8, 'severe storm'], [7, 'strong storm'],
  [6, 'moderate storm'], [5, 'minor storm'], [4, 'unsettled'], [0, 'quiet'],
];

function kpWord(kp: number | null): string {
  if (kp === null) return 'unknown';
  for (const [floor, word] of KP_WORDS) if (kp >= floor) return word;
  return 'quiet';
}

function cardinal(lat: number, lon: number): string {
  const ns = lat >= 0 ? 'N' : 'S';
  const ew = lon >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(1)}°${ns}, ${Math.abs(lon).toFixed(1)}°${ew}`;
}

/**
 * When the next attempt happens, for a sentence in the error state. The store
 * polls on a fixed cadence and reports when the next one is due, so the
 * sentence states a time rather than "soon".
 */
function nextAttemptText(lanes: ReportLanes): string {
  const t = lanes.nextAttempt ? Date.parse(lanes.nextAttempt) : NaN;
  return Number.isFinite(t)
    ? ` The next attempt is at ${hhmmUTC(new Date(t).toISOString())} UTC.`
    : ' The next attempt is the next refresh cycle.';
}

export function buildSituationReport(
  env: NowEnvelope | null, scene: SceneNarration, now = new Date(),
  aurora: Envelope<AuroraNow | null> | null = null,
  cmes: Cme[] = [],
  spacecraft: SpacecraftPos[] = [],
  lanes: ReportLanes = { snapshot: false, aurora: false, cmes: false },
): string[] {
  const lines: string[] = [];
  const at = `${hhmmUTC(now.toISOString())} UTC`;

  /**
   * Cold start. Nothing has been measured *yet* — a different claim from
   * "no data" — so the whole report is one short paragraph saying what is
   * already live (positions, terminator, scene) and what is on its way. The
   * full per-instrument report renders once the snapshot lane resolves.
   */
  if (!env) {
    if (lanes.snapshot) {
      lines.push(
        `Solar wind: loading. Positions, the terminator and the scene are computed ` +
        `locally and are already live; the measurements land as the feeds resolve, ` +
        `snapshot lane first (checked ${at}).`,
      );
      // The one scene fact worth stating during a cold start: what is on the
      // globe while the rasters are still in flight.
      const ss = subsolarPoint(now);
      lines.push(
        `Scene: the Sun at centre, planets at their true positions for ${at} [D]; the ` +
        `Sun is overhead at ${cardinal(ss.lat, ss.lon)}. ` +
        (scene.earthSurface === 'imagery'
          ? `Earth's surface is NASA's Blue Marble composite (2004) [E].`
          : `Earth's surface imagery is still loading; the vector base map is on the globe.`),
      );
      return lines;
    }
    lines.push(`No space-weather data has loaded yet (checked ${at}). The scene below shows body positions only, which are computed locally and do not depend on the network.`);
  }

  const d = env?.data;
  const p = env?.parts;

  /* --- Solar wind ------------------------------------------------------ */
  if (d && p) {
    const s = stalenessOf(p.solar_wind, now);
    const sw = d.solar_wind;
    if (!sw || s.state === 'no-data') {
      // A failed feed reads as "unavailable" with its reason; a feed that
      // answered with nothing usable reads as "no data" — different claims.
      lines.push(p.solar_wind?.error
        ? `Solar wind: unavailable (${errorReason(p.solar_wind.error)}). ${nextAttemptText(lanes)} Nothing is being substituted for it.`
        : `Solar wind: no data. Nothing is being substituted for it.`);
    } else {
      const bz = sw.bz_gsm;
      const dirn = bz === null ? 'unknown'
        : bz < -5 ? 'strongly southward, which couples energy into the magnetosphere'
        : bz < 0 ? 'southward'
        : 'northward, which keeps the magnetosphere relatively closed';
      lines.push(
        `Solar wind at L1, measured by ${sw.spacecraft ?? 'the active spacecraft'}: ` +
        `Bz ${bz === null ? 'no data' : `${bz.toFixed(1)} nanotesla`} (${dirn}); ` +
        `total field ${sw.bt === null ? 'no data' : `${sw.bt.toFixed(1)} nT`}; ` +
        `speed ${sw.speed === null ? 'no data' : `${Math.round(sw.speed)} kilometres per second`}; ` +
        `density ${sw.density === null ? 'no data' : `${sw.density.toFixed(1)} protons per cubic centimetre`}. ` +
        `Measured [E], timestamped ${hhmmUTC(sw.time)} UTC` +
        (s.state === 'stale' ? `, and now STALE — ${formatAge(s.ageS ?? 0)} old.` : `, ${formatAge(s.ageS ?? 0)} old.`),
      );
    }

    /* --- propagation: how much warning is left --- */
    if (d.propagated) {
      const lead = d.propagated.lead_minutes;
      // The distance and the offset are measured now, not assumed: the
      // ephemeris feed reports where the spacecraft actually is, and the
      // off-axis part is the bit a nominal "1.5 million km sunward" hides.
      const craft = spacecraft.find((c) => c.active) ?? null;
      const where = craft
        ? `at L1, ${(craft.distanceRe * 6371.2 / 1e6).toFixed(2)} million kilometres `
          + `sunward and ${craft.offAxisRe.toFixed(0)} Earth radii off the Sun–Earth line `
          + `(${craft.offAxisDeg.toFixed(1)}°) [E]`
        : 'at L1, about 1.5 million kilometres sunward';
      lines.push(
        `That wind was measured ${where}, and takes ` +
        `roughly an hour to arrive. NOAA propagates it to the bow shock nose [D · NOAA]: ` +
        `what is reaching Earth right now was observed at ` +
        `${hhmmUTC(d.propagated.observed_at)} UTC, with Bz ` +
        `${d.propagated.bz === null ? 'no data' : `${d.propagated.bz.toFixed(1)} nT`} and ` +
        `speed ${d.propagated.speed === null ? 'no data' : `${Math.round(d.propagated.speed)} km/s`}. ` +
        (lead !== null && lead > 0
          ? `There are about ${Math.round(lead)} minutes of already-measured wind still in ` +
            `flight — that is the warning currently in hand.`
          : 'No further measured wind is in flight.'),
      );
    }

    /* --- the one in-situ magnetic measurement --- */
    const gs = d.geosync;
    if (gs && gs.total_nt !== null) {
      const standoff = d.magnetopause?.standoff_re ?? null;
      lines.push(
        `GOES-${gs.satellite ?? '?'} measures ${gs.total_nt.toFixed(0)} nT at geostationary ` +
        `orbit, 6.6 Earth radii out [E], ${hhmmUTC(gs.time)} UTC` +
        (gs.arcjet ? ' — though its thruster was firing, so the reading is suspect' : '') +
        `. That is ${gs.deficit_nt !== null && gs.deficit_nt > 0
          ? `${gs.deficit_nt.toFixed(0)} nT below` : 'about'} the dipole value for that ` +
        `distance; the difference is the ring current and magnetopause currents subtracting ` +
        `from Earth's own field. ` +
        (standoff !== null
          ? standoff <= 6.6
            ? 'With the modelled boundary inside 6.6 Rₑ, the spacecraft should be out in ' +
              'the solar wind — that is a claim this measurement can falsify.'
            : 'The modelled boundary is outside 6.6 Rₑ, so the spacecraft should be inside ' +
              'the magnetosphere, which is what this field says.'
          : ''),
      );
    }

    /* --- particles: the hazard to people and satellites --- */
    const pt = d.particles;
    if (pt) {
      const sTxt = pt.s_scale === null ? 'no data'
        : `S${pt.s_scale}${pt.s_text ? ` (${pt.s_text})` : ''}`;
      lines.push(
        `Energetic particles at geostationary orbit, measured by GOES [E], ` +
        `${hhmmUTC(pt.time)} UTC: protons above 10 MeV at ` +
        `${pt.proton_10mev === null ? 'no data' : `${pt.proton_10mev.toFixed(2)} pfu`}, ` +
        `radiation storm level ${sTxt}` +
        (pt.s_scale !== null && pt.s_scale >= 3
          ? ' — at this level aviation crews on polar routes take real dose.' : '.') +
        ` Electrons above 2 MeV at ` +
        `${pt.electron_2mev === null ? 'no data' : `${Math.round(pt.electron_2mev)} pfu` }` +
        (pt.electron_2mev !== null && pt.electron_2mev >= 1000
          ? ', above NOAA\u2019s alert level for satellite charging.'
          : ', below the level that charges satellites.'),
      );
    } else {
      lines.push(p.particles?.error
        ? `Energetic particle flux: unavailable (${errorReason(p.particles.error)}). ${nextAttemptText(lanes)} No radiation storm level is shown.`
        : 'Energetic particle flux: no data. No radiation storm level is shown.');
    }

    /* --- Kp ------------------------------------------------------------ */
    const ks = stalenessOf(p.kp, now);
    if (!d.kp || ks.state === 'no-data') {
      lines.push(p.kp?.error
        ? `Planetary K index: unavailable (${errorReason(p.kp.error)}). ${nextAttemptText(lanes)}`
        : 'Planetary K index: no data.');
    } else {
      lines.push(
        `Planetary K index ${d.kp.estimated_kp === null ? 'no data' : d.kp.estimated_kp.toFixed(2)} — ` +
        `geomagnetic conditions are ${kpWord(d.kp.estimated_kp)}. Measured [E], ` +
        `${hhmmUTC(d.kp.time)} UTC${ks.state === 'stale' ? ' — STALE' : ''}.`,
      );
    }

    /* --- Ring current --------------------------------------------------- */
    const ds = stalenessOf(p.dst, now);
    if (!d.dst || ds.state === 'no-data') {
      lines.push(p.dst?.error
        ? `Ring current (Dst): unavailable (${errorReason(p.dst.error)}). ${nextAttemptText(lanes)}`
        : 'Ring current (Dst): no data.');
    } else {
      const ahead = d.dst.lead_minutes;
      lines.push(
        `Ring current index Dst ${d.dst.value_nt === null ? 'no data' : `${d.dst.value_nt.toFixed(0)} nanotesla`} — ` +
        `${d.dst.level ?? 'unclassified'}. This is how much a torus of trapped ions ` +
        `drifting around Earth is subtracting from the surface field; it is the ` +
        `single number that best tracks the size of a storm. Modelled [D] by NOAA's ` +
        `Geospace run from the L1 solar wind — not Kyoto's measured index, which has no ` +
        `route into a browser — for ${hhmmUTC(d.dst.time)} UTC` +
        `${ds.state === 'stale' ? ' — STALE' : ''}. ` +
        (ahead !== null && ahead > 0
          ? `The model runs ${ahead} minutes ahead of that; the value quoted is the newest ` +
            `one whose time has arrived, not the newest one in the file.`
          : 'The model has no lead beyond that sample.'),
      );
    }

    /* --- X-ray --------------------------------------------------------- */
    const xs = stalenessOf(p.xray, now);
    if (!d.xray || xs.state === 'no-data') {
      lines.push(p.xray?.error
        ? `GOES X-ray flux: unavailable (${errorReason(p.xray.error)}). ${nextAttemptText(lanes)}`
        : 'GOES X-ray flux: no data.');
    } else {
      lines.push(
        `Solar X-ray background is class ${d.xray.class ?? 'no data'} ` +
        `(${d.xray.flux_long === null ? 'no data' : `${d.xray.flux_long.toExponential(1)} watts per square metre`}, ` +
        `0.1–0.8 nanometre band, GOES). Measured [E], ${hhmmUTC(d.xray.time)} UTC` +
        `${xs.state === 'stale' ? ' — STALE' : ''}.`,
      );
    }

    /* --- NOAA scales --------------------------------------------------- */
    if (d.scales) {
      const g = d.scales.G, r = d.scales.R, sS = d.scales.S;
      lines.push(
        `NOAA scales today: radio blackouts R${r.scale ?? '–'} (${r.text ?? 'no data'}), ` +
        `solar radiation S${sS.scale ?? '–'} (${sS.text ?? 'no data'}), ` +
        `geomagnetic storms G${g.scale ?? '–'} (${g.text ?? 'no data'}). ` +
        `NOAA's own product, modeled [D].`,
      );
    } else {
      lines.push(p.scales?.error
        ? `NOAA R/S/G scales: unavailable (${errorReason(p.scales.error)}). ${nextAttemptText(lanes)}`
        : 'NOAA R/S/G scales: no data.');
    }

    /* --- The shield (modeled) ------------------------------------------ */
    const mp = d.magnetopause;
    if (mp?.standoff_re != null) {
      const compressed = mp.standoff_re < 9
        ? ' That is a compressed magnetosphere — the shield is being pushed in.'
        : mp.standoff_re > 11.5 ? ' That is an expanded, quiet magnetosphere.' : '';
      lines.push(
        `Modeled [D] magnetopause standoff: ${mp.standoff_re.toFixed(1)} Earth radii on the ` +
        `sunward side, with flaring parameter ${mp.alpha?.toFixed(2) ?? 'no data'}, computed from ` +
        `the ${d.propagated ? 'propagated' : 'L1'} solar wind above (dynamic pressure ` +
        `${mp.dyn_pressure_npa?.toFixed(2) ?? 'no data'} nanopascals) using Shue et al. 1998, ` +
        `doi:10.1029/98JA01103.${compressed}` +
        (mp.bow_shock_re != null
          ? ` The bow shock stands off at ${mp.bow_shock_re.toFixed(1)} Earth radii ` +
            `(Farris & Russell 1994).`
          : ''),
      );
    } else {
      lines.push('Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing. No boundary is drawn.');
    }

    /* --- Alerts --------------------------------------------------------- */
    if (d.alerts.length > 0) {
      const a = d.alerts[0]!;
      lines.push(
        `Most recent NOAA notice, ${hhmmUTC(a.issued)} UTC: ${a.headline || a.product}. ` +
        `${d.alerts.length} notices in the last three days.`,
      );
    } else {
      lines.push('No NOAA alerts, watches or warnings in the feed.');
    }
  }

  /* --- CMEs: the only thing here that is still on its way --------------- */
  const inbound = cmes
    .filter((c) => c.earthDirected && c.arrival && Date.parse(c.arrival.time) > now.getTime())
    .sort((a, b) => Date.parse(a.arrival!.time) - Date.parse(b.arrival!.time));

  if (inbound.length > 0) {
    const c = inbound[0]!;
    const hours = (Date.parse(c.arrival!.time) - now.getTime()) / 3.6e6;
    lines.push(
      `A coronal mass ejection is on its way. NASA's DONKI catalogue analysed it leaving ` +
      `the Sun at ${Math.round(c.speedKms)} km/s on ${hhmmUTC(c.time215)} UTC, with a ` +
      `${Math.round(c.halfAngle)}° half-angle cone pointed ${c.offAxisDeg < 5 ? 'almost directly at Earth'
        : `${Math.round(c.offAxisDeg)}° off the Earth line`} [D · NASA]. ` +
      `Propagating it radially at that constant speed puts arrival near ` +
      `${hhmmUTC(c.arrival!.time)} UTC, about ${hours < 24 ? `${Math.round(hours)} hours`
        : `${(hours / 24).toFixed(1)} days`} from now, give or take ` +
      `${c.arrival!.windowHours} hours [D · cone]. ` +
      `${c.arrivalFromEnlil ? 'That arrival time is NOAA/NASA\u2019s own Enlil run.'
        : 'Constant speed ignores drag — real ejections decelerate toward the ambient wind, ' +
          'so fast ones tend to arrive later than this and slow ones earlier. The window ' +
          'is an order-of-magnitude bound, not a fitted error.'}` +
      `${inbound.length > 1 ? ` ${inbound.length - 1} more are also inbound.` : ''}`,
    );
  } else if (cmes.length > 0) {
    lines.push(
      `${cmes.length} coronal mass ejection${cmes.length > 1 ? 's have' : ' has'} been ` +
      `analysed in the last few days, none of them Earth-directed with an arrival still ` +
      `ahead of us. Nothing is inbound.`,
    );
  }

  if (scene.cmes && scene.cmes.count > 0) {
    lines.push(
      `${scene.cmes.count} cone${scene.cmes.count > 1 ? 's are' : ' is'} drawn expanding ` +
      `from the Sun [D], warm where Earth lies inside the cone and cool where it does not. ` +
      `The apex direction, half-angle and speed are DONKI's analysis of coronagraph ` +
      `imagery; the radial propagation is ours.`,
    );
  }

  /* --- The scene itself ------------------------------------------------ */
  const ss = subsolarPoint(now);
  lines.push(
    `Scene: the Sun at centre, with all eight planets at their true ` +
    `positions for ${at}, computed locally with astronomy-engine [D]. ` +
    `The Sun is currently overhead at ${cardinal(ss.lat, ss.lon)}, and Earth's day/night ` +
    `terminator in the scene is drawn from that point [D]. The Moon is shown at its ` +
    `true direction from Earth.`,
  );
  /* --- The Earth's surface, and where its pixels come from --------------- */
  lines.push(
    scene.earthSurface === 'imagery'
      ? `Earth's surface is measured imagery [E]: NASA's Blue Marble Next Generation ` +
        `composite, acquired through 2004, with NASA's Black Marble 2016 night lights ` +
        `drawn as emission on the night side. Nothing about it is live — it is a dated ` +
        `composite, and it says so here rather than pretending to be today's clouds.`
      : scene.earthSurface === 'loading'
        ? `Earth's surface imagery (NASA's Blue Marble and Black Marble composites) is ` +
          `still loading; the vector base map is on the globe until it arrives.`
        : `Earth's surface is the vector base map — NASA's raster composites (Blue ` +
          `Marble 2004, Black Marble 2016) did not load, so no imagery is implied.`,
  );
  /* --- Aurora --------------------------------------------------------- */
  if (!scene.aurora) {
    lines.push('The aurora overlay is hidden.');
  } else if (aurora?.data) {
    const a = aurora.data;
    const ageS = (now.getTime() - Date.parse(a.observation_time)) / 1000;
    const stale = ageS > aurora.stale_after_s;
    lines.push(
      `Aurora: NOAA's OVATION Prime model [D · NOAA] puts the peak probability of visible ` +
      `aurora at ${a.max_probability}% in this forecast, valid ${hhmmUTC(a.forecast_time)} UTC ` +
      `and computed from an observation at ${hhmmUTC(a.observation_time)} UTC ` +
      `(${formatAge(ageS)} old${stale ? ', STALE' : ''}). It is drawn as the glowing oval over ` +
      `the poles, on a 1°-by-1° grid, teal through magenta with increasing probability — ` +
      `a legend for intensity, not the aurora's real colours. ` +
      `The oval encircles the magnetic pole, not the geographic one — which is why it ` +
      `sits off-centre.`,
    );
  } else if (lanes.aurora) {
    lines.push('Aurora: loading. The OVATION forecast lands with the slow lane; no oval is drawn yet.');
  } else {
    lines.push('Aurora: the OVATION forecast is unavailable, so no oval is drawn.');
  }

  if (scene.shield) {
    const far = scene.fieldLines.far === true;
    lines.push(
      `The magnetic shield is drawn: ${scene.fieldLines.lines} field lines traced through ` +
      `${igrfCitation(new Date())} [D], blue where they close ` +
      `between hemispheres and violet where they stay open toward the solar wind. The ` +
      `teal boundary is the Shue et al. 1998 magnetopause and the orange one the ` +
      `Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. ` +
      `The field lines rotate with the Earth because the main field is fixed to it, and ` +
      `they are clamped where they would cross the magnetopause — so the dayside visibly ` +
      `compresses as pressure rises. That clamp is geometry, not magnetohydrodynamics: a ` +
      `full treatment would also stretch the tail. The boundary surfaces stop at 100° ` +
      `from the sunward axis, inside the range Shue et al. fitted; the real magnetotail ` +
      `continues far beyond.` +
      (far
        ? ' From this far out the full line cage would read as noise, so it gives way to ' +
          'twelve signature lines and the boundary silhouette; the cage returns as the ' +
          'camera closes in.'
        : ''),
    );
  } else {
    lines.push('The magnetic shield is hidden.');
  }
  lines.push(
    `${scaleLabel(scene.mode)}. Camera: ${VIEWS.find((v) => v.id === scene.view)?.label
      ?? scene.view} — ${VIEWS.find((v) => v.id === scene.view)?.title ?? ''}. ` +
    `${scene.reducedMotion ? 'Reduced motion is on — camera moves cut rather than glide.' : 'Motion is enabled.'}`,
  );
  if (scene.wind !== false && d?.solar_wind?.speed != null) {
    lines.push(
      `The streaming particles are ambient [M] — far sparser and brighter than the real ` +
      `wind, which is invisible. What is real is their behaviour: they move at a rate set ` +
      `by the measured ${Math.round(d.solar_wind.speed)} km/s, their number follows the ` +
      `measured density, and they part around the same modelled magnetopause the HUD ` +
      `reports. When the boundary is pushed in, the flow closes in with it.`,
    );
  }
  if ((d?.kp?.estimated_kp ?? 0) > 4) {
    lines.push(
      `The field lines are shivering. That is ambient [M] — a legend for the elevated ` +
      `Kp above, not a motion the real field makes.`,
    );
  }
  lines.push(
    `Colour and the starfield are ambient [M] — parameter-driven artwork, not ` +
    `measurements. There is no invented glow around the Sun: the region a painted ` +
    `corona would have occupied is the region the LASCO coronagraphs actually ` +
    `photograph, and that imagery is shown there instead when it is switched on.`,
  );

  return lines;
}
