import { getJson } from './fetch-json.js';
import type { Envelope } from '../contract/types.js';

const METEO_BASE = 'https://api.open-meteo.com/v1/forecast';

export interface PlaceWeather {
  place: string;
  lat: number;
  lon: number;
  current: MeteoCurrent;
  forecast: MeteoHourly;
  forecastPrecip3dMm: number;
}

export interface MeteoCurrent {
  time: string;
  temperature_2m: number | null;
  relative_humidity_2m: number | null;
  apparent_temperature: number | null;
  precipitation: number | null;
  weather_code: number | null;
  wind_speed_10m: number | null;
  wind_direction_10m: number | null;
  surface_pressure: number | null;
}

export interface MeteoHourly {
  time: string[];
  temperature_2m: (number | null)[];
  precipitation: (number | null)[];
  weather_code: (number | null)[];
  wind_speed_10m: (number | null)[];
}

function num(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function strTime(v: unknown): string {
  return typeof v === 'string' ? v : new Date().toISOString();
}

function arrOfNum(a: unknown): (number | null)[] {
  if (!Array.isArray(a)) return [];
  return a.map(num);
}

function arrOfStr(a: unknown): string[] {
  if (!Array.isArray(a)) return [];
  return a.map(String);
}

function meteoNow(raw: unknown): MeteoCurrent | null {
  const o = raw as Record<string, unknown> | null;
  if (!o || !o.current) return null;
  const c = o.current as Record<string, unknown>;
  return {
    time: strTime(c.time),
    temperature_2m: num(c.temperature_2m),
    relative_humidity_2m: num(c.relative_humidity_2m),
    apparent_temperature: num(c.apparent_temperature),
    precipitation: num(c.precipitation),
    weather_code: num(c.weather_code),
    wind_speed_10m: num(c.wind_speed_10m),
    wind_direction_10m: num(c.wind_direction_10m),
    surface_pressure: num(c.surface_pressure),
  };
}

function meteoHourly(raw: unknown): MeteoHourly | null {
  const o = raw as Record<string, unknown> | null;
  if (!o || !o.hourly) return null;
  const h = o.hourly as Record<string, unknown>;
  return {
    time: arrOfStr(h.time),
    temperature_2m: arrOfNum(h.temperature_2m),
    precipitation: arrOfNum(h.precipitation),
    weather_code: arrOfNum(h.weather_code),
    wind_speed_10m: arrOfNum(h.wind_speed_10m),
  };
}

export async function fetchPlaceWeather(
  place: string,
  lat: number,
  lon: number,
  signal?: AbortSignal,
): Promise<Envelope<PlaceWeather>> {
  const fetched_at = new Date().toISOString();
  const url =
    METEO_BASE +
    '?latitude=' +
    lat +
    '&longitude=' +
    lon +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure' +
    '&hourly=temperature_2m,precipitation,weather_code,wind_speed_10m' +
    '&forecast_days=3';
  const res = await getJson<unknown>(url, signal);
  if (res.error) throw new Error(res.error);
  const now = meteoNow(res.json);
  const hourly = meteoHourly(res.json) ?? {
    time: [],
    temperature_2m: [],
    precipitation: [],
    weather_code: [],
    wind_speed_10m: [],
  };
  const forecastPrecip3dMm = hourly.precipitation.reduce(
    (s: number, v: number | null) => s + (v ?? 0),
    0,
  );
  const data_time = now?.time ?? fetched_at;
  return {
    source: 'Open-Meteo (free tier, no key)',
    source_url: url,
    tier: 'modeled',
    model: { name: 'Open-Meteo weather model' },
    fetched_at,
    data_time,
    latency_s: Math.round(
      (Date.parse(fetched_at) - Date.parse(data_time)) / 1000,
    ),
    stale_after_s: 15 * 60,
    units: {
      temperature_2m: 'degC',
      apparent_temperature: 'degC',
      relative_humidity_2m: '%',
      precipitation: 'mm',
      wind_speed_10m: 'km/h',
      surface_pressure: 'hPa',
    },
    data: {
      place,
      lat,
      lon,
      current: now ?? {
        time: data_time,
        temperature_2m: null,
        relative_humidity_2m: null,
        apparent_temperature: null,
        precipitation: null,
        weather_code: null,
        wind_speed_10m: null,
        wind_direction_10m: null,
        surface_pressure: null,
      },
      forecast: hourly,
      forecastPrecip3dMm,
    },
  };
}
