import { getJson } from './fetch-json.js';
import type { Envelope } from '../contract/types.js';

const NWS_BASE = 'https://api.weather.gov';
export const NWS_ALERTS_URL = NWS_BASE + '/alerts/active';

export interface NwsAlert {
  id: string;
  title: string;
  description: string;
  instruction: string;
  urgency: string;
  severity: string;
  certainty: string;
  areaDesc: string;
  onset: string | null;
  expires: string | null;
  references: string[];
}

function parseNwsAlerts(json: unknown): NwsAlert[] {
  const o = json as Record<string, unknown> | null;
  if (!o || !o.features) return [];
  const fc = o.features as (Record<string, unknown>)[] | null;
  if (!Array.isArray(fc)) return [];
  const out: NwsAlert[] = [];
  for (const f of fc) {
    const p = f.properties as Record<string, unknown> | null;
    if (!p) continue;
    const id = typeof p.id === 'string' ? p.id : '';
    if (!id) continue;
    out.push({
      id,
      title: typeof p.title === 'string' ? p.title : '',
      description: typeof p.description === 'string' ? p.description : '',
      instruction: typeof p.instruction === 'string' ? p.instruction : '',
      urgency: typeof p.urgency === 'string' ? p.urgency : 'unknown',
      severity: typeof p.severity === 'string' ? p.severity : 'unknown',
      certainty: typeof p.certainty === 'string' ? p.certainty : 'unknown',
      areaDesc: typeof p.areaDesc === 'string' ? p.areaDesc : '',
      onset:
        typeof p.onset === 'string' && p.onset.length > 0 ? p.onset : null,
      expires:
        typeof p.expires === 'string' && p.expires.length > 0 ? p.expires : null,
      references: Array.isArray(p.references)
        ? p.references.map(String).filter(Boolean)
        : [],
    });
  }
  const sevRank: Record<string, number> = {
    extreme: 0,
    severe: 1,
    moderate: 2,
    minor: 3,
    unknown: 4,
  };
  out.sort((a, b) => {
    const aActive =
      !a.expires || Date.parse(a.expires) > Date.now();
    const bActive =
      !b.expires || Date.parse(b.expires) > Date.now();
    if (aActive && !bActive) return -1;
    if (!aActive && bActive) return 1;
    return (sevRank[a.severity] ?? 4) - (sevRank[b.severity] ?? 4);
  });
  return out;
}

function latestOnset(data: NwsAlert[]): string {
  let best: string | null = null;
  for (const a of data) {
    if (!a.onset) continue;
    const t = Date.parse(a.onset);
    if (!Number.isFinite(t)) continue;
    if (!best || t > Date.parse(best)) best = a.onset;
  }
  return best ?? new Date().toISOString();
}

const NWS_STALE = 10 * 60;

export async function fetchNwsAlerts(
  signal?: AbortSignal,
): Promise<Envelope<NwsAlert[]>> {
  const fetched_at = new Date().toISOString();
  const res = await getJson<unknown>(NWS_ALERTS_URL, signal);
  if (res.error) throw new Error(res.error);
  const data = parseNwsAlerts(res.json);
  const data_time = data.length ? latestOnset(data) : fetched_at;
  return {
    source: 'US National Weather Service (api.weather.gov)',
    source_url: NWS_ALERTS_URL,
    tier: 'measured',
    model: null,
    fetched_at,
    data_time,
    latency_s: Math.round(
      (Date.parse(fetched_at) - Date.parse(data_time)) / 1000,
    ),
    stale_after_s: NWS_STALE,
    units: {},
    data,
  };
}
