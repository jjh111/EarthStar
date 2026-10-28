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
import {
  NO_DATA, TIER_WORD, badgeFor, copyTaken, formatAge, inForce, kpLabel, mirrorCopy, noticeWord,
  splitNotices, validityText, whenUTC,
} from './format.js';
import { errorReason, valueState } from '../data/state.js';
import { CLOUD_ARRIVAL } from '../data/enlil.js';

/**
 * One row, in the state its tile is in: "unavailable" with the next attempt
 * for a feed that failed, "no data" for one that answered with nothing — two
 * different claims, neither of them a number, and neither given a unit.
 */
function line(
  label: string, value: string, unit: string, meta: PartMeta | undefined, now: Date,
  state: StoreState,
): string {
  const env = state.now;
  const st = valueState({
    lane: { loading: state.lanes?.snapshot ?? false, error: env ? null : state.lastError ?? null,
      nextAttempt: state.nextAttempt ?? null },
    received: !!env, meta, now,
  });
  const tier = TIER_WORD[badgeFor(meta)];
  if (st.state === 'error') {
    const next = state.nextAttempt ? `next attempt ${whenUTC(state.nextAttempt, now)}` : 'next refresh';
    return `| ${label} | unavailable (${errorReason(meta?.error ?? state.lastError)}) | ${tier} | ${next} |`;
  }
  if (st.state !== 'fresh' && st.state !== 'stale') return `| ${label} | ${NO_DATA} | ${tier} | no time |`;
  if (value === NO_DATA) return `| ${label} | ${NO_DATA} | ${tier} | ${whenUTC(meta?.data_time, now)} |`;
  const age = formatAge((now.getTime() - Date.parse(meta!.data_time!)) / 1000);
  return `| ${label} | ${value}${unit ? ` ${unit}` : ''} | ${tier} `
    + `| ${whenUTC(meta!.data_time, now)}, ${age} old${st.state === 'stale' ? ' — **stale**' : ''} |`;
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
  // Read from the mirror, the briefing says so before anything else: its
  // values keep NOAA's times, but none of them was read from NOAA today.
  const copy = mirrorCopy(env?.parts);
  if (copy) {
    out.push(`_Read from Earth Star's mirror of NOAA SWPC (${copyTaken(copy.at, now)}); `
      + 'NOAA was unreachable from this browser._');
    out.push('');
  }

  if (!env) {
    out.push('No data had loaded when this briefing was taken.');
    return out.join('\n');
  }

  out.push('## Now');
  out.push('');
  out.push('| Quantity | Value | Evidence | Observed |');
  out.push('|---|---|---|---|');
  for (const inst of INSTRUMENTS) {
    // Kp as the tile writes it: one decimal, and NOAA's own thirds beside it.
    const thirds = inst.id === 'kp' ? kpLabel(env.data.kp?.kp) : null;
    const value = inst.value(env.data);
    out.push(line(inst.label, value, `${inst.unit}${thirds && value !== NO_DATA ? ` (NOAA Kp ${thirds})` : ''}`,
      env.parts[inst.part], now, state));
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
      const last = enlil.peakSpeed.time === enlil.lastTime;
      out.push(`- WSA-Enlil ${last ? 'rises to' : 'peaks at'} **${enlil.peakSpeed.speed.toFixed(0)} km/s** `
        + `${last ? "at the run's last sample, " : 'at '}${whenUTC(enlil.peakSpeed.time, now)} (modelled).`);
    }
    // Three claims, never two: the tracer crosses, stays below, or was not published.
    out.push(enlil.cloudArrival
      ? `- Its CME tracer crosses ${CLOUD_ARRIVAL} at **${whenUTC(enlil.cloudArrival.time, now)}** — the `
        + "model's arrival for the ejection in flight."
      : enlil.tracerPublished
        ? '- Its CME tracer stays below the arrival level: no ejecta reach Earth inside the model’s window.'
        : '- NOAA’s run carries no CME tracer values, so nothing here says whether ejecta reach Earth.');
    out.push('');
  }

  // A failed read is said, not omitted: a briefing with no notices section
  // reads as a quiet day, which is the one thing a failed fetch cannot claim.
  const alerts = env.data.alerts ?? [];
  const ns = valueState({
    lane: { loading: state.lanes?.snapshot ?? false, error: null, nextAttempt: state.nextAttempt ?? null },
    received: true, meta: env.parts.alerts, now,
  });
  out.push('## NOAA notices');
  out.push('');
  if (ns.state === 'error') {
    out.push(`NOAA notices: unavailable (${errorReason(env.parts.alerts?.error)}).`);
  } else {
    const { current, ended } = splitNotices(alerts, now);
    // Everything in force, then the most recent of what has ended.
    const listed = [...current, ...ended].slice(0, Math.max(6, current.length));
    if (current.length === 0) {
      out.push(env.parts.alerts?.mirrored
        ? `No notice in force in Earth Star's copy of NOAA's feed (${copyTaken(env.parts.alerts.mirrored_at, now)}).`
        : `No NOAA notice in force (checked ${whenUTC(env.fetched_at, now)}).`);
      if (listed.length) out.push('');
    }
    for (const a of listed) {
      const until = whenUTC(a.validUntil, now);
      const status = a.event ? validityText(a, now)
        : inForce(a, now)
          ? (a.validityStated ? `in force until ${until}` : `validity not stated; held in force until ${until}`)
          : (a.validityStated ? `${noticeWord(a, now)} ${until}` : `${noticeWord(a, now)}; validity not stated`);
      const tier = a.tier ? ` [${a.tier}]` : '';
      out.push(`- ${whenUTC(a.issued, now)} — ${a.headline || a.product}${tier} — ${status}`);
    }
  }
  out.push('');

  if (checks) {
    const decisive = checks.rows.length - checks.inconclusive;
    out.push('## Checks');
    out.push('');
    out.push(`${checks.passed} of ${decisive} cross-checks pass`
      + `${checks.inconclusive > 0
        ? `; ${checks.inconclusive} could not be settled on today's data` : ''}`
      + `, last run ${whenUTC(checks.ranAt, now)}.`);
    out.push('');
    for (const r of checks.rows) {
      const verdict = r.inconclusive ? 'no signal' : r.ok ? 'pass' : 'DRIFT';
      out.push(`- **${r.name}** — ${verdict}: ours ${r.ours} vs ${r.against ?? 'theirs'} ${r.theirs}`);
    }
    out.push('');
  }

  out.push('## Sources');
  out.push('');
  for (const [key, meta] of Object.entries(env.parts)) {
    out.push(`- \`${key}\` — ${meta.source}`
      + `${meta.model ? ` (${meta.model.name})` : ''}: ${meta.source_url}${meta.mirrored ? ' (via mirror)' : ''}`);
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
