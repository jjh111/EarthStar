/**
 * Earth Star data contract v1 — TypeScript interface.
 * Mirrors plans/DATA_CONTRACT.md §1–§3. Consumers code against the envelope,
 * never against a transport: stage A (DirectSource, browser fetches upstream),
 * stage B (static JSON on the `data` branch), stage C (Worker) all produce this.
 */

export type Tier = 'measured' | 'modeled' | 'ambient' | 'mixed';

/** The provenance badge shown beside every value (plan §2). */
export type Badge = 'E' | 'D' | 'M';

export interface ModelRef {
  name: string;
  ref?: string;
}

export interface Envelope<T> {
  /** Human-readable source name, e.g. "NOAA SWPC". */
  source: string;
  source_url: string;
  tier: Tier;
  /** Non-null for `tier: 'modeled'` — the named, citable model. */
  model: ModelRef | null;
  /** When we pulled upstream (UTC ISO-8601, `Z`). */
  fetched_at: string;
  /** Timestamp of the most recent datum in `data` (UTC ISO-8601, `Z`). */
  data_time: string;
  /** fetched_at − data_time, seconds. */
  latency_s: number;
  /** Consumers dim the element once age exceeds this. */
  stale_after_s: number;
  units: Record<string, string>;
  data: T;
}

/* ------------------------------------------------------------------ *
 * Endpoint payloads (DATA_CONTRACT.md §2)
 * ------------------------------------------------------------------ */

export interface SolarWindNow {
  time: string;
  bz_gsm: number | null;
  by_gsm: number | null;
  bx_gsm: number | null;
  bt: number | null;
  speed: number | null;
  density: number | null;
  temperature: number | null;
  /** CONTRACT ADDITION (see docs/sources.md §3): upstream now interleaves
   *  several L1 spacecraft; this is the operationally-active one. */
  spacecraft: string | null;
}

export interface KpNow {
  time: string;
  estimated_kp: number | null;
  kp: string | null;
}

export interface XrayNow {
  time: string;
  flux_long: number | null;
  flux_short: number | null;
  class: string | null;
}

export interface ScaleValue {
  scale: number | null;
  text: string | null;
  minor_prob: number | null;
  major_prob: number | null;
}

export interface ScalesNow {
  R: ScaleValue;
  S: ScaleValue;
  G: ScaleValue;
  date: string | null;
  /** Issue time, from upstream DateStamp + TimeStamp. */
  time: string | null;
}

export interface AlertItem {
  issued: string;
  product: string;
  message: string;
  /** First line of the message, for the ticker. */
  headline: string;
}

export interface MagnetopauseNow {
  standoff_re: number | null;
  alpha: number | null;
  /** CONTRACT ADDITION: Farris & Russell 1994 bow shock standoff, Rₑ. */
  bow_shock_re: number | null;
  /** Solar-wind dynamic pressure the solution was computed from, nPa. */
  dyn_pressure_npa: number | null;
  model: string;
}

/** CONTRACT ADDITION: energetic particles at geostationary orbit. */
export interface ParticlesNow {
  time: string;
  proton_10mev: number | null;
  proton_100mev: number | null;
  electron_2mev: number | null;
  satellite: number | null;
  s_scale: number | null;
  s_text: string | null;
}

/** CONTRACT ADDITION: NOAA's L1 wind propagated to the bow shock nose. */
export interface PropagatedNow {
  observed_at: string;
  arrives_at: string;
  speed: number | null;
  density: number | null;
  bz: number | null;
  bt: number | null;
  /** Minutes of measured wind not yet arrived — the warning still in the pipe. */
  lead_minutes: number | null;
}

export interface Now {
  solar_wind: SolarWindNow | null;
  particles: ParticlesNow | null;
  propagated: PropagatedNow | null;
  kp: KpNow | null;
  xray: XrayNow | null;
  scales: ScalesNow | null;
  alerts: AlertItem[];
  magnetopause: MagnetopauseNow | null;
}

/** OVATION aurora grid (contract §2 `/v1/aurora`). */
export interface AuroraGrid {
  lon_start: number; lon_step: number;
  lat_start: number; lat_step: number;
  width: number; height: number;
  /**
   * Probability of visible aurora, 0–100, indexed `lon * height + (lat - lat_start)`.
   * The contract transports this base64-encoded; the DirectSource adapter has
   * the decoded array already and passes it through as-is.
   */
  values: Uint8Array;
}

export interface AuroraNow {
  observation_time: string;
  forecast_time: string;
  grid: AuroraGrid;
  /** Highest probability anywhere on the grid, 0–100. */
  max_probability: number;
}

/** Column-array time series (contract §2 `/v1/solar-wind`), oldest → newest. */
export interface SolarWindSeries {
  time: string[];
  bx_gsm: (number | null)[];
  by_gsm: (number | null)[];
  bz_gsm: (number | null)[];
  bt: (number | null)[];
  density: (number | null)[];
  speed: (number | null)[];
  temperature: (number | null)[];
}

/* ------------------------------------------------------------------ *
 * Staleness / provenance helpers — the "stale is visible" rule (plan §2)
 * ------------------------------------------------------------------ */

export type Freshness = 'fresh' | 'stale' | 'no-data';

export function ageSeconds(env: Envelope<unknown>, now: Date = new Date()): number {
  return (now.getTime() - Date.parse(env.data_time)) / 1000;
}

export function freshness(env: Envelope<unknown> | null, now: Date = new Date()): Freshness {
  if (!env || env.data === null || env.data === undefined) return 'no-data';
  if (!Number.isFinite(Date.parse(env.data_time))) return 'no-data';
  return ageSeconds(env, now) > env.stale_after_s ? 'stale' : 'fresh';
}

/** `HH:MM` UTC, the display convention in contract §4. */
export function hhmmUTC(iso: string | null | undefined): string {
  if (!iso) return '--:--';
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return '--:--';
  const d = new Date(t);
  return `${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}`;
}

export function formatAge(seconds: number): string {
  if (!Number.isFinite(seconds)) return 'unknown';
  const s = Math.max(0, Math.round(seconds));
  if (s < 90) return `${s}s`;
  const m = Math.round(s / 60);
  if (m < 90) return `${m} min`;
  return `${(m / 60).toFixed(1)} h`;
}
