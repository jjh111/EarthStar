/**
 * Source adapter interface. Stage A (DirectSource, browser → upstream),
 * stage B (static JSON on the `data` branch) and stage C (Worker) all
 * implement this, so moving up a stage is a config change, not a rewrite.
 * See plans/VIEWER_PLATFORM_PLAN.md §5.2.
 */

import type { AuroraNow, Envelope, ModelRef, Now, SolarWindSeries, Tier } from '../contract/types.js';

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
}

export interface NowEnvelope extends Envelope<Now> {
  parts: Record<keyof Now, PartMeta>;
}

export interface Snapshot {
  now: NowEnvelope;
  series: Envelope<SolarWindSeries>;
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
}
