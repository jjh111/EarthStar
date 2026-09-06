/** Reduced motion is a first-class mode, not a degradation (plan §5.4). */

export class MotionPreference {
  private mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  private listeners = new Set<(reduced: boolean) => void>();
  private override: boolean | null = null;

  constructor() {
    this.mq.addEventListener('change', () => this.emit());
  }

  get reduced(): boolean {
    return this.override ?? this.mq.matches;
  }

  /** User toggle wins over the OS setting, for this session. */
  setOverride(v: boolean | null): void { this.override = v; this.emit(); }

  subscribe(fn: (reduced: boolean) => void): () => void {
    this.listeners.add(fn);
    fn(this.reduced);
    return () => this.listeners.delete(fn);
  }

  private emit(): void { for (const fn of this.listeners) fn(this.reduced); }
}
