/**
 * Source adapter interface. Stage A (DirectSource, browser → upstream),
 * stage B (static JSON on the `data` branch) and stage C (Worker) all
 * implement this, so moving up a stage is a config change, not a rewrite.
 * See plans/VIEWER_PLATFORM_PLAN.md §5.2.
 */

import type { AuroraNow, Envelope, ModelRef, Now, SolarWindSeries, Tier } from '../contract/types.js';
import type { ActiveRegion, Series } from './swpc.js';
import type { SpacecraftPos } from './ephemerides.js';

/**
 * Per-sub-object provenance for a `tier: 'mixed'` envelope.
 * CONTRACT CHANGE REQUEST (additive) — see docs/sources.md §3.
 */
export interface PartMeta {
  tier: Tier;
  source: string;
  source_url: string;
  model: ModelRef | null;
  data_time: string | null;
  latency_s: number | null;
  stale_after_s: number;
  /** Populated when the upstream fetch failed; the element renders "no data". */
  error?: string;
  /** These bytes came from Earth Star's mirror because upstream was
   *  unreachable. The timestamps inside them are still upstream's own. */
  mirrored?: boolean;
}

export interface NowEnvelope extends Envelope<Now> {
  parts: Record<keyof Now, PartMeta>;
}

export interface Snapshot {
  now: NowEnvelope;
  series: Envelope<SolarWindSeries>;
  /** Kp and X-ray history, parsed from the same responses as `now`. */
  kpSeries: Series;
  xraySeries: Series;
  protonSeries: Series;
  electronSeries: Series;
  geosyncSeries: Series;
  /** Arrived Dst samples only — the model's forecast tail is never plotted here. */
  dstSeries: Series;
}

export interface Source {
  readonly name: string;
  /**
   * `/now` and the solar-wind series come from the same two upstream files, so
   * they are fetched together — one round trip, and the sparkline is guaranteed
   * to be the same data as the reading above it.
   */
  fetchSnapshot(signal?: AbortSignal): Promise<Snapshot>;
  fetchNow(signal?: AbortSignal): Promise<NowEnvelope>;
  fetchSolarWindSeries(signal?: AbortSignal): Promise<Envelope<SolarWindSeries>>;
  fetchAurora(signal?: AbortSignal): Promise<Envelope<AuroraNow | null>>;
  fetchRegions(signal?: AbortSignal): Promise<Envelope<ActiveRegion[]>>;
  /** Hourly, and 70 KB gzipped — fetched on the slow lane, not with /now. */
  fetchEphemerides(signal?: AbortSignal): Promise<Envelope<SpacecraftPos[]>>;
}
