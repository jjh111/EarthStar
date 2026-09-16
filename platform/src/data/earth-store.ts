import { fetchQuakesDay, type QuakeFeature } from './earth-quakes.js';
import { fetchQuakesWeek } from './earth-quakes.js';
import { fetchNwsAlerts, type NwsAlert } from './earth-alerts.js';
import { fetchPlaceWeather } from './earth-weather.js';
import type { PlaceWeather } from './earth-weather.js';
import type { Envelope } from '../contract/types.js';
import type { LaneItem } from './state.js';

/** Per-lane load state for the Earth lanes. */
export interface EarthLanes {
  quakes: boolean;
  alerts: boolean;
  places: boolean;
}

export interface EarthState {
  /** Past 24 h, earthquake-type only. */
  quakesDay: Envelope<QuakeFeature[]> | null;
  /** Past 7 days, earthquake-type only. */
  quakesWeek: Envelope<QuakeFeature[]> | null;
  /** Active NWS alerts, US only. */
  alerts: Envelope<NwsAlert[]> | null;
  /** Weather for every pinned place the app knows about. Keyed by place id. */
  places: Record<string, Envelope<PlaceWeather>>;
  lastAttempt: string | null;
  lanes: EarthLanes;
  /** Per-lane failures, for the no-data / error labels. */
  laneErrors: { quakes: string | null; alerts: string | null; places: string | null };
}

type Listener = (s: EarthState) => void;

const QUAKES_INTERVAL_MS = 2 * 60 * 1000; // USGS day feed updates minute-ly; 2 min is comfortable
const ALERTS_INTERVAL_MS = 5 * 60 * 1000; // active alerts endpoint updates frequently
const PLACES_INTERVAL_MS = 10 * 60 * 1000; // place weather is slow; 10 min is fine

function lane(item: keyof EarthLanes, state: EarthState): LaneItem & { nextAttempt: string | null } {
  return {
    loading: state.lanes[item],
    error: state.laneErrors[item],
    nextAttempt: state.lastAttempt ? new Date(Date.now() + 60_000).toISOString() : null,
  };
}

export class EarthStore {
  private state: EarthState = {
    quakesDay: null,
    quakesWeek: null,
    alerts: null,
    places: {},
    lastAttempt: null,
    lanes: { quakes: true, alerts: true, places: true },
    laneErrors: { quakes: null, alerts: null, places: null },
  };
  private listeners = new Set<Listener>();
  private timer: number | null = null;
  private placesTimer: number | null = null;
  private placesFetch: Promise<void> | null = null;

  constructor(private places: Array<{ id: string; lat: number; lon: number; name: string }>) {}

  get(): EarthState {
    return this.state;
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.state);
    return () => this.listeners.delete(fn);
  }

  private emit(patch: Partial<EarthState>): void {
    this.state = { ...this.state, ...patch };
    for (const fn of this.listeners) fn(this.state);
  }

  async refreshQuakes(signal?: AbortSignal): Promise<void> {
    this.emit({ lanes: { ...this.state.lanes, quakes: true } });
    try {
      const [day, week] = await Promise.all([
        fetchQuakesDay(signal),
        fetchQuakesWeek(signal),
      ]);
      this.emit({
        quakesDay: day,
        quakesWeek: week,
        lanes: { ...this.state.lanes, quakes: false },
        laneErrors: { ...this.state.laneErrors, quakes: null },
        lastAttempt: new Date().toISOString(),
      });
    } catch (e) {
      this.emit({
        lanes: { ...this.state.lanes, quakes: false },
        laneErrors: { ...this.state.laneErrors, quakes: e instanceof Error ? e.message : String(e) },
        lastAttempt: new Date().toISOString(),
      });
    }
  }

  async refreshAlerts(signal?: AbortSignal): Promise<void> {
    this.emit({ lanes: { ...this.state.lanes, alerts: true } });
    try {
      const env = await fetchNwsAlerts(signal);
      this.emit({
        alerts: env,
        lanes: { ...this.state.lanes, alerts: false },
        laneErrors: { ...this.state.laneErrors, alerts: null },
        lastAttempt: new Date().toISOString(),
      });
    } catch (e) {
      this.emit({
        lanes: { ...this.state.lanes, alerts: false },
        laneErrors: { ...this.state.laneErrors, alerts: e instanceof Error ? e.message : String(e) },
        lastAttempt: new Date().toISOString(),
      });
    }
  }

  async refreshPlaces(signal?: AbortSignal): Promise<void> {
    // Debounce rapid re-requests: the whole places batch is one fetch round.
    if (this.placesFetch) return;
    this.placesFetch = (async () => {
      this.emit({ lanes: { ...this.state.lanes, places: true } });
      try {
        const next: Record<string, Envelope<PlaceWeather>> = {};
        await Promise.all(
          this.places.map(async (p) => {
            try {
              next[p.id] = await fetchPlaceWeather(p.name, p.lat, p.lon, signal);
            } catch {
              // A single place failing must not blank the rest.
              next[p.id] = {
                source: 'Open-Meteo (free tier, no key)',
                source_url: '',
                tier: 'modeled' as const,
                model: null,
                fetched_at: new Date().toISOString(),
                data_time: new Date().toISOString(),
                latency_s: 0,
                stale_after_s: 15 * 60,
                units: {},
                data: null as unknown as PlaceWeather,
              } as Envelope<PlaceWeather>;
            }
          }),
        );
        this.emit({
          places: next,
          lanes: { ...this.state.lanes, places: false },
          laneErrors: { ...this.state.laneErrors, places: null },
          lastAttempt: new Date().toISOString(),
        });
      } catch (e) {
        this.emit({
          lanes: { ...this.state.lanes, places: false },
          laneErrors: { ...this.state.laneErrors, places: e instanceof Error ? e.message : String(e) },
          lastAttempt: new Date().toISOString(),
        });
      } finally {
        this.placesFetch = null;
      }
    })();
    await this.placesFetch;
  }

  lanesFor(kind: keyof EarthLanes): LaneItem & { nextAttempt: string | null } {
    return lane(kind, this.state);
  }

  start(): void {
    if (this.timer !== null) return;
    void this.refreshQuakes();
    void this.refreshAlerts();
    this.timer = window.setInterval(() => {
      void this.refreshQuakes();
      void this.refreshAlerts();
    }, Math.min(QUAKES_INTERVAL_MS, ALERTS_INTERVAL_MS));
    // Places refresh on its own slower cadence, and only if the app provided any.
    if (this.places.length > 0) {
      void this.refreshPlaces();
      this.placesTimer = window.setInterval(() => void this.refreshPlaces(), PLACES_INTERVAL_MS);
    }
    document.addEventListener('visibilitychange', this.onVisible);
  }

  stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.placesTimer !== null) {
      clearInterval(this.placesTimer);
      this.placesTimer = null;
    }
    document.removeEventListener('visibilitychange', this.onVisible);
  }

  private onVisible = (): void => {
    if (document.visibilityState === 'visible') {
      void this.refreshQuakes();
      void this.refreshAlerts();
      if (this.places.length > 0) void this.refreshPlaces();
    }
  };
}
