/**
 * The Situation Report (plan §5.4) — the whole scene state narrated in plain
 * language, with tiers and times. This is simultaneously the screen-reader
 * rendering and the "explain it to me" mode, so it must never be a summary of
 * a *different* state than the one on screen, and it must say when it doesn't
 * know something.
 */

import type { NowEnvelope } from '../data/source.js';
import { hhmmUTC, formatAge } from '../contract/types.js';
import { stalenessOf } from './format.js';
import { scaleLabel, type ScaleMode } from '../scene/scales.js';
import { subsolarPoint } from '../models/ephemeris.js';

export interface SceneNarration {
  mode: ScaleMode;
  view: string;
  reducedMotion: boolean;
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

    /* --- Magnetopause (modeled) ---------------------------------------- */
    if (d.magnetopause?.standoff_re != null) {
      lines.push(
        `Modeled [D] magnetopause standoff: ${d.magnetopause.standoff_re.toFixed(1)} Earth radii ` +
        `on the sunward side, computed from the solar wind above using Shue et al. 1998 ` +
        `(doi:10.1029/98JA01103). Not yet drawn in the scene — that lands in phase 1.`,
      );
    } else {
      lines.push('Magnetopause standoff: not computed, because the solar-wind inputs it needs are missing.');
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
  lines.push(
    `${scaleLabel(scene.mode)}. Camera: ${scene.view} view. ` +
    `${scene.reducedMotion ? 'Reduced motion is on — the corona is still and camera moves cut rather than glide.' : 'Motion is enabled.'}`,
  );
  lines.push(
    `Colour, starfield and the corona's texture are ambient [M] — they are ` +
    `parameter-driven artwork, not measurements. The corona's brightness follows the ` +
    `measured X-ray flux; its turbulence does not represent anything physical.`,
  );

  return lines;
}
