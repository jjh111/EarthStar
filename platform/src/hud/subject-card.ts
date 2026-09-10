/**
 * The card at the object.
 *
 * A reader points at something in the scene and asks what it is. The honest
 * answer used to be "open the Now tab and read four hundred words until you
 * find it" — so the answer now arrives where the question was asked.
 *
 * A card rather than another margin tab, deliberately. The margin is already
 * five tabs deep and will need its own rework; adding the scene's whole
 * vocabulary to it would make that worse. And a card answers a different
 * question from a tab — *what is this thing right here* — which is only worth
 * answering in place. The margin keeps the long form; this is the doorway, and
 * "Full detail" is the door.
 *
 * Everything it shows comes from `subjects.ts`. It writes no prose of its own,
 * so it cannot drift from the tile, the report or the Sources list.
 */

import { TIER_LABEL, subject } from './subjects.js';
import { escapeHtml } from './margin.js';

/** Below this width the card becomes a sheet: a popover on a phone covers the
 * thing it is describing, which defeats the point of anchoring it at all. */
const SHEET_BREAKPOINT_PX = 768;

/** Kept clear of the viewport edge by this much when flipping. */
const MARGIN_PX = 12;

export interface CardHost {
  /** Open the margin's full detail for a subject. */
  showSubject: (id: string) => void;
}

export class SubjectCard {
  private el: HTMLElement;
  private current: string | null = null;
  /** Where focus was before the card took it, so Escape can give it back. */
  private returnTo: HTMLElement | null = null;

  constructor(private host: CardHost) {
    this.el = document.createElement('div');
    this.el.className = 'subject-card';
    this.el.id = 'subject-card';
    this.el.setAttribute('role', 'dialog');
    this.el.setAttribute('aria-label', 'About this element');
    this.el.hidden = true;
    document.body.appendChild(this.el);

    this.el.addEventListener('click', this.onClick);
    this.el.addEventListener('keydown', this.onKeyDown);
  }

  get openId(): string | null { return this.current; }

  /**
   * Show `id` anchored near a point in canvas coordinates.
   *
   * Re-opening the card on a subject it already shows is a no-op rather than a
   * re-render, so a second click on the same field line does not steal focus
   * back from wherever the reader has moved it.
   */
  open(id: string, at: { x: number; y: number }): void {
    const s = subject(id);
    if (!s) return;
    if (this.current === id && !this.el.hidden) { this.place(at); return; }

    // Only remember where focus was on a fresh open. Swapping the card's
    // subject in place must not overwrite it with the card itself.
    if (this.el.hidden) this.returnTo = document.activeElement as HTMLElement | null;
    this.current = id;

    const related = s.related.map((rid) => {
      const r = subject(rid);
      // The one-liner is not decoration here. Two subjects can share a label —
      // the magnetopause is both a number on the panel and a wireframe in the
      // scene — and without it the card offers the reader the same word twice.
      return r
        ? `<li><button type="button" class="subject-link" data-card-subject="${escapeHtml(r.id)}">
            <span class="badge badge-${r.tier.toLowerCase()}">${r.tier}</span>
            ${escapeHtml(r.label)}</button> — ${escapeHtml(r.oneLine)}</li>`
        : '';
    }).join('');

    this.el.innerHTML = `
      <div class="card-head">
        <h2>${escapeHtml(s.label)}</h2>
        <button type="button" class="card-close" data-card-close
          aria-label="Close">×</button>
      </div>
      <p class="tile-meta"><span class="badge badge-${s.tier.toLowerCase()}">${s.tier}</span>
        ${escapeHtml(TIER_LABEL[s.tier])}</p>
      <p class="card-one">${escapeHtml(s.oneLine)}</p>
      <p class="card-meaning">${escapeHtml(s.meaning)}</p>
      ${s.keyedTo
        ? `<p class="fine card-keyed">Ambient, but not arbitrary: ${escapeHtml(s.keyedTo)}.</p>`
        : ''}
      <p class="card-limits"><strong>What it does not say.</strong>
        ${escapeHtml(s.limits)}</p>
      ${related ? `<ul class="subject-links card-related">${related}</ul>` : ''}
      <button type="button" class="card-more" data-card-more>Full detail</button>`;

    this.el.hidden = false;
    this.place(at);
    // Focus the card itself rather than a control inside it: the reader is
    // reading, not operating. Escape and Tab both work from here.
    this.el.tabIndex = -1;
    this.el.focus({ preventScroll: true });
  }

  close(): void {
    if (this.el.hidden) return;
    this.el.hidden = true;
    this.current = null;
    // Give focus back where it came from. axe cannot catch a focus that has
    // been dropped on the body, and a keyboard reader loses their place.
    this.returnTo?.focus?.({ preventScroll: true });
    this.returnTo = null;
  }

  /** Anchor near `at`, flipped to stay on screen; a sheet on a narrow one. */
  private place(at: { x: number; y: number }): void {
    if (window.innerWidth < SHEET_BREAKPOINT_PX) {
      this.el.classList.add('is-sheet');
      this.el.style.left = '';
      this.el.style.top = '';
      return;
    }
    this.el.classList.remove('is-sheet');
    const r = this.el.getBoundingClientRect();
    const w = r.width || 320;
    const h = r.height || 240;
    const x = at.x + w + MARGIN_PX > window.innerWidth
      ? Math.max(MARGIN_PX, at.x - w - MARGIN_PX)
      : at.x + MARGIN_PX;
    const y = Math.min(
      Math.max(MARGIN_PX, at.y - h / 3),
      Math.max(MARGIN_PX, window.innerHeight - h - MARGIN_PX),
    );
    this.el.style.left = `${Math.round(x)}px`;
    this.el.style.top = `${Math.round(y)}px`;
  }

  private onClick = (e: Event): void => {
    const t = e.target as HTMLElement | null;
    if (t?.closest('[data-card-close]')) { this.close(); return; }
    if (t?.closest('[data-card-more]')) {
      const id = this.current;
      this.close();
      if (id) this.host.showSubject(id);
      return;
    }
    const hop = t?.closest('[data-card-subject]') as HTMLElement | null;
    const next = hop?.dataset['cardSubject'];
    if (next) {
      // Swap the card's subject in place rather than opening another. This is
      // the graph walk, and it is the feature: Bz → reconnection → field lines
      // → T89, without ever leaving the scene.
      const at = { x: this.el.offsetLeft, y: this.el.offsetTop + 60 };
      const keep = this.returnTo;
      this.current = null;
      this.open(next, at);
      this.returnTo = keep;
    }
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') { e.stopPropagation(); this.close(); }
  };

  dispose(): void {
    this.el.remove();
  }
}
