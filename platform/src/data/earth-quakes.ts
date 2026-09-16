import { getJson } from './fetch-json.js';
import type { Envelope } from '../contract/types.js';

/* USGS earthquake feed — GeoJSON, CORS open per USGS web service policy. */
const USGS_BASE = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary';
export const USGS_URLS = {
  day: USGS_BASE + '/all_day.geojson',
  week: USGS_BASE + '/all_week.geojson',
} as const;

export interface QuakeFeature {
  id: string;
  time: string;
  mag: number | null;
  place: string;
  url: string;
  type: string;
  depthKm: number | null;
  lat: number;
  lon: number;
  nst: number | null;
  isEarthquake: boolean;
}

function quakeTime(ms: unknown): string | null {
  if (typeof ms !== 'number' || !Number.isFinite(ms)) return null;
  const d = new Date(ms);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function parseQuakes(json: unknown): QuakeFeature[] {
  if (!json || typeof json !== 'object') return [];
  const fc = (json as Record<string, unknown>).features;
  if (!Array.isArray(fc)) return [];
  const out: QuakeFeature[] = [];
  for (const f of fc) {
    if (!f || typeof f !== 'object') continue;
    const feat = f as unknown as {
      id?: string;
      properties?: {
        time?: unknown;
        mag?: unknown;
        depth?: unknown;
        nst?: unknown;
        place?: unknown;
        url?: unknown;
        type?: unknown;
      } | null;
      geometry?: {
        coordinates?: number[] | null;
      } | null;
    };
    if (!feat.properties || !feat.geometry || !Array.isArray(feat.geometry.coordinates)) continue;
    const p = feat.properties;
    const coords = feat.geometry.coordinates as number[];
    const time = quakeTime(p.time);
    if (!time) continue;
    const mag = typeof p.mag === 'number' && Number.isFinite(p.mag) ? p.mag : null;
    const depth = typeof p.depth === 'number' && Number.isFinite(p.depth) ? p.depth : null;
    const nst = typeof p.nst === 'number' && Number.isFinite(p.nst) ? p.nst : null;
    const place = typeof p.place === 'string' ? p.place : '';
    const url = typeof p.url === 'string' ? p.url : '';
    const type = typeof p.type === 'string' ? p.type : '';
    const id = typeof f.id === 'string' ? f.id : '';
    out.push({
      id, time, mag, place, url, type,
      depthKm: depth, lat: coords[1] ?? 0, lon: coords[0] ?? 0,
      nst, isEarthquake: type === 'earthquake',
    });
  }
  out.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
  return out;
}

const QUAKE_STALE_DAY = 30 * 60;
const QUAKE_STALE_WEEK = 60 * 60;

export async function fetchQuakesDay(signal?: AbortSignal): Promise<Envelope<QuakeFeature[]>> {
  const fetched_at = new Date().toISOString();
  const res = await getJson<unknown>(USGS_URLS.day, signal);
  if (res.error) throw new Error(res.error);
  const data = parseQuakes(res.json).filter((q) => q.isEarthquake);
  const data_time = data.length ? data[data.length - 1]!.time : fetched_at;
  return {
    source: 'USGS Earthquake Hazards Program',
    source_url: USGS_URLS.day,
    tier: 'measured',
    model: null,
    fetched_at,
    data_time,
    latency_s: Math.round((Date.parse(fetched_at) - Date.parse(data_time)) / 1000),
    stale_after_s: QUAKE_STALE_DAY,
    units: { mag: 'magnitude (Mw)', depthKm: 'km', lat: 'deg', lon: 'deg' },
    data,
  };
}

export async function fetchQuakesWeek(signal?: AbortSignal): Promise<Envelope<QuakeFeature[]>> {
  const fetched_at = new Date().toISOString();
  const res = await getJson<unknown>(USGS_URLS.week, signal);
  if (res.error) throw new Error(res.error);
  const data = parseQuakes(res.json).filter((q) => q.isEarthquake);
  const data_time = data.length ? data[data.length - 1]!.time : fetched_at;
  return {
    source: 'USGS Earthquake Hazards Program',
    source_url: USGS_URLS.week,
    tier: 'measured',
    model: null,
    fetched_at,
    data_time,
    latency_s: Math.round((Date.parse(fetched_at) - Date.parse(data_time)) / 1000),
    stale_after_s: QUAKE_STALE_WEEK,
    units: { mag: 'magnitude (Mw)', depthKm: 'km', lat: 'deg', lon: 'deg' },
    data,
  };
}
