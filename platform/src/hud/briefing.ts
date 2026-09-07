/**
 * The panel, as something you can paste somewhere else.
 *
 * A screenshot of this instrument loses exactly what makes it worth trusting:
 * the timestamps, the tiers, and the source each number came from. So the
 * briefing carries them. Every measured value goes out with its observation
 * time and its evidence tier, every modelled one with the model that produced
 * it, and the whole thing is stamped with when it was taken — because a
 * space-weather briefing pasted into a chat three hours later is a different
 * claim from a live one, and nothing else in the message would say so.
 *
 * Markdown, because that is what survives being pasted into a chat, an issue,
 * a document or a terminal.
 */

import type { StoreState } from '../data/store.js';
import type { CheckResult } from '../data/checks.js';
import type { ForecastBundle } from '../data/forecast.js';
import type { PartMeta } from '../data/source.js';
import { INSTRUMENTS } from './instruments.js';
import { badgeFor, formatAge, hhmmUTC, stalenessOf } from './format.js';
import { CLOUD_ARRIVAL } from '../data/enlil.js';

const TIER_WORD: Record<string, string> = {
  E: 'measured', D: 'modelled', M: 'ambient',
};

function line(label: string, value: string, unit: string, meta: PartMeta | undefined, now: Date): string {
  const badge = badgeFor(meta);
  const s = stalenessOf(meta, now);
  const time = meta?.data_time ? `${hhmmUTC(meta.data_time)} UTC` : 'no time';
  const age = meta?.data_time
    ? formatAge((now.getTime() - Date.parse(meta.data_time)) / 1000) : '';
  const stale = s.state === 'stale' ? ' — **stale**' : '';
  return `| ${label} | ${value}${unit ? ` ${unit}` : ''} | ${TIER_WORD[badge] ?? badge} `
    + `| ${time}${age ? `, ${age} old` : ''}${stale} |`;
}

export interface BriefingInput {
  state: StoreState;
  narration: string[];
  checks: CheckResult | null;
  forecast: ForecastBundle | null;
  now?: Date;
  /** Where this was taken from. Passed in so the module stays testable. */
  origin?: string;
}

export function buildBriefing(input: BriefingInput): string {
  const { state, narration, checks, forecast } = input;
  const now = input.now ?? new Date();
  const env = state.now;
  const stamp = `${now.toISOString().slice(0, 16).replace('T', ' ')} UTC`;

  const out: string[] = [];
  out.push(`# Space weather — ${stamp}`);
  out.push('');
  out.push('_From The Viewer (Earth Star). Every value below carries the time it was'
    + ' observed and how it was arrived at. Values age; this briefing does not._');
  out.push('');

  if (!env) {
    out.push('No data had loaded when this briefing was taken.');
    return out.join('\n');
  }

  out.push('## Now');
  out.push('');
  out.push('| Quantity | Value | Evidence | Observed |');
  out.push('|---|---|---|---|');
  for (const inst of INSTRUMENTS) {
    out.push(line(inst.label, inst.value(env.data), inst.unit, env.parts[inst.part], now));
  }
  out.push('');

  // The narration is already written to be read aloud, so it travels as prose.
  if (narration.length > 0) {
    out.push('## Situation');
    out.push('');
    for (const p of narration) out.push(`${p}\n`);
  }

  const enlil = forecast?.enlil;
  if (enlil?.peakSpeed || enlil?.cloudArrival) {
    out.push('## Ahead');
    out.push('');
    if (enlil.peakSpeed?.speed != null) {
      out.push(`- WSA-Enlil peaks at **${enlil.peakSpeed.speed.toFixed(0)} km/s** at `
        + `${hhmmUTC(enlil.peakSpeed.time)} UTC on `
        + `${new Date(enlil.peakSpeed.time).toUTCString().slice(0, 11)} (modelled).`);
    }
    out.push(enlil.cloudArrival
      ? `- Its CME tracer crosses ${CLOUD_ARRIVAL} at `
        + `**${hhmmUTC(enlil.cloudArrival.time)} UTC** on `
        + `${new Date(enlil.cloudArrival.time).toUTCString().slice(0, 11)} — the model's `
        + 'arrival for the ejection in flight.'
      : '- No ejecta reach Earth inside the model’s window.');
    out.push('');
  }

  const alerts = env.data.alerts ?? [];
  if (alerts.length > 0) {
    out.push('## NOAA alerts');
    out.push('');
    for (const a of alerts.slice(0, 6)) {
      out.push(`- ${hhmmUTC(a.issued)} UTC — ${a.headline || a.product}`);
    }
    out.push('');
  }

  if (checks) {
    const decisive = checks.rows.length - checks.inconclusive;
    out.push('## Checks');
    out.push('');
    out.push(`${checks.passed} of ${decisive} cross-checks pass`
      + `${checks.inconclusive > 0
        ? `; ${checks.inconclusive} could not be settled on today's data` : ''}`
      + `, last run ${hhmmUTC(checks.ranAt)} UTC.`);
    out.push('');
    for (const r of checks.rows) {
      const verdict = r.inconclusive ? 'no signal' : r.ok ? 'pass' : 'DRIFT';
      out.push(`- **${r.name}** — ${verdict}: ${r.ours} vs ${r.theirs}`);
    }
    out.push('');
  }

  out.push('## Sources');
  out.push('');
  for (const [key, meta] of Object.entries(env.parts)) {
    out.push(`- \`${key}\` — ${meta.source}`
      + `${meta.model ? ` (${meta.model.name})` : ''}: ${meta.source_url}`);
  }
  out.push('');
  out.push('---');
  out.push('');
  out.push('Evidence tiers: **measured** read from an instrument · **modelled** computed '
    + 'from measured inputs by a named model · **ambient** artwork, never a measurement.');
  out.push('');
  if (input.origin) out.push(`Taken ${stamp} from ${input.origin}`);

  return out.join('\n');
}

/** A filename that sorts and says when. */
export function briefingFilename(now = new Date()): string {
  return `space-weather-${now.toISOString().slice(0, 16).replace(/:/g, '').replace('T', '-')}.md`;
}
