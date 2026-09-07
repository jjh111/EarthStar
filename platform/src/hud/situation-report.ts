/**
 * The Situation Report (plan §5.4) — the whole scene state narrated in plain
 * language, with tiers and times. This is simultaneously the screen-reader
 * rendering and the "explain it to me" mode, so it must never be a summary of
 * a *different* state than the one on screen, and it must say when it doesn't
 * know something.
 */

import type { NowEnvelope } from '../data/source.js';
import { hhmmUTC, formatAge } from '../contract/types.js';
import type { AuroraNow, Envelope } from '../contract/types.js';
import { stalenessOf } from './format.js';
import { scaleLabel, type ScaleMode } from '../scene/scales.js';
import { subsolarPoint } from '../models/ephemeris.js';

export interface SceneNarration {
  mode: ScaleMode;
  view: string;
  reducedMotion: boolean;
  shield: boolean;
  fieldLines: { lines: number; points: number };
  aurora: boolean;
  wind?: boolean;
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

export function buildSituationReport(
  env: NowEnvelope | null, scene: SceneNarration, now = new Date(),
  aurora: Envelope<AuroraNow | null> | null = null,
): string[] {
  const lines: string[] = [];
  const at = `${hhmmUTC(now.toISOString())} UTC`;

  if (!env) {
    lines.push(`No space-weather data has loaded yet (checked ${at}). The scene below shows body positions only, which are computed locally and do not depend on the network.`);
  }

  const d = env?.data;
  const p = env?.parts;

  /* --- Solar wind ------------------------------------------------------ */
  if (d && p) {
    const s = stalenessOf(p.solar_wind, now);
    const sw = d.solar_wind;
    if (!sw || s.state === 'no-data') {
      lines.push(`Solar wind: no data. ${p.solar_wind.error ? `The feed reported ${p.solar_wind.error}.` : ''} Nothing is being substituted for it.`.trim());
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
      lines.push(
        `That wind was measured at L1, about 1.5 million kilometres sunward, and takes ` +
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
      lines.push('Energetic particle flux: no data. No radiation storm level is shown.');
    }

    /* --- Kp ------------------------------------------------------------ */
    const ks = stalenessOf(p.kp, now);
    if (!d.kp || ks.state === 'no-data') {
      lines.push('Planetary K index: no data.');
    } else {
      lines.push(
        `Planetary K index ${d.kp.estimated_kp === null ? 'no data' : d.kp.estimated_kp.toFixed(2)} — ` +
        `geomagnetic conditions are ${kpWord(d.kp.estimated_kp)}. Measured [E], ` +
        `${hhmmUTC(d.kp.time)} UTC${ks.state === 'stale' ? ' — STALE' : ''}.`,
      );
    }

    /* --- X-ray --------------------------------------------------------- */
    const xs = stalenessOf(p.xray, now);
    if (!d.xray || xs.state === 'no-data') {
      lines.push('GOES X-ray flux: no data.');
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
      lines.push('NOAA R/S/G scales: no data.');
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

  /* --- The scene itself ------------------------------------------------ */
  const ss = subsolarPoint(now);
  lines.push(
    `Scene: the Sun at centre, with Mercury, Venus, Earth and Mars at their true ` +
    `positions for ${at}, computed locally with astronomy-engine [D]. ` +
    `The Sun is currently overhead at ${cardinal(ss.lat, ss.lon)}, and Earth's day/night ` +
    `terminator in the scene is drawn from that point [D]. The Moon is shown at its ` +
    `true direction from Earth.`,
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
  } else {
    lines.push('Aurora: the OVATION forecast has not loaded, so no oval is drawn.');
  }

  if (scene.shield) {
    lines.push(
      `The magnetic shield is drawn: ${scene.fieldLines.lines} field lines traced through ` +
      `IGRF-14 (IAGA, epoch 2025.0 with secular variation to now) [D], blue where they close ` +
      `between hemispheres and violet where they stay open toward the solar wind. The ` +
      `teal boundary is the Shue et al. 1998 magnetopause and the orange one the ` +
      `Farris & Russell 1994 bow shock, both re-shaped by the live solar wind above. ` +
      `The field lines rotate with the Earth because the main field is fixed to it, and ` +
      `they are clamped where they would cross the magnetopause — so the dayside visibly ` +
      `compresses as pressure rises. That clamp is geometry, not magnetohydrodynamics: a ` +
      `full treatment would also stretch the tail. The boundary surfaces stop at 100° ` +
      `from the sunward axis, inside the range Shue et al. fitted; the real magnetotail ` +
      `continues far beyond.`,
    );
  } else {
    lines.push('The magnetic shield is hidden.');
  }
  lines.push(
    `${scaleLabel(scene.mode)}. Camera: ${scene.view} view. ` +
    `${scene.reducedMotion ? 'Reduced motion is on — the corona is still and camera moves cut rather than glide.' : 'Motion is enabled.'}`,
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
    `Colour, starfield and the corona's texture are ambient [M] — they are ` +
    `parameter-driven artwork, not measurements. The corona's brightness follows the ` +
    `measured X-ray flux; its turbulence does not represent anything physical.`,
  );

  return lines;
}
