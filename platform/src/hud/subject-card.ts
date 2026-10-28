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
import { tierBadge } from './format.js';
import { PAGE_LAYOUT } from './hud.js';

/*
 * Where the card goes.
 *
 * On the phone page — the scene a band across the top, the document below —
 * it is a sheet from the bottom edge: a popover in a band that short covers
 * the thing it is describing, which defeats the point of anchoring it at all.
 * The query is the page layout's own, so the card and the stylesheet change
 * model at the same 860 px.
 *
 * Everywhere else it opens in the stage — the part of the scene no chrome
 * covers: right of the rail, left of the margin, under the header and the
 * notes, above the ticker. Placed against the viewport instead, it opened
 * over the margin's text at 1440 px and could cover the header it sat under.
 */

/** Kept clear of the stage's chrome, and of Earth, by this much. */
const GAP_PX = 12;
/** Kept clear of the notes on the stage by this much. */
const NOTE_GAP_PX = 8;
/** The widest card: a comfortable measure for the prose it carries. */
const CARD_REM = 24;
/**
 * The smallest card worth opening. A stage with less room than this between
 * its chrome — a small window, or a phone on its side, with the margin beside
 * it — gets the subject in the margin instead, at full length, rather than a
 * column of three words or a slot that shows the title and one line.
 */
const MIN_CARD_REM = 18;
const MIN_CARD_HEIGHT_REM = 12;

export interface CardHost {
  /** Open the margin's full detail for a subject. */
  showSubject: (id: string) => void;
  /**
   * Where Earth is drawn, in CSS px from the viewport's top-left, or null when
   * it is not in front of the camera. The card opens on the far side of a
   * click from it, so the answer does not cover the planet it is about.
   */
  earthScreen?: () => { x: number; y: number; r: number } | null;
  /**
   * Other discs the card keeps clear of where it can — the Sun, which Deck
   * frames beside Earth: an Earth card the full height of the stage covered it.
   */
  keepClear?: () => Array<{ x: number; y: number; r: number }>;
  /**
   * The card has opened (`fresh`) or swapped its subject in place — a step
   * the address records, so Back closes what was opened.
   */
  onOpened?: (id: string, fresh: boolean) => void;
  /**
   * The card has closed: by the reader ('user' — ×, Escape, a click away),
   * for its "Full detail" ('more'), or because the address no longer names it
   * ('address'), which the host already knows.
   */
  onClosed?: (reason: CloseReason) => void;
}

export type CloseReason = 'user' | 'more' | 'address';

/** What the card was opened on, kept clear of the card: a body's disc, or the click itself. */
export interface Anchor { x: number; y: number; r: number }

/** A click's own clearance, when the thing clicked has no disc of its own. */
const CLICK_R_PX = 24;

export interface Box { left: number; right: number; top: number; bottom: number }

const rem = (): number => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
/**
 * A rem of the card's measure: the root's, grown as the card's type grows on
 * a large screen (styles.css, --grow), so its lines keep their length there.
 * The card is set in --t-5, which is 0.9 rem before it grows.
 */
const cardRem = (card: HTMLElement): number =>
  rem() * Math.max(1, parseFloat(getComputedStyle(card).fontSize) / (0.9 * rem()) || 1);

/** A box, when the element is laid out and visible. */
function boxOf(el: Element | null): DOMRect | null {
  const r = el?.getBoundingClientRect();
  return r && r.width > 0 && r.height > 0 ? r : null;
}

/**
 * The stage's open area, in viewport px: inside its chrome, less the gap. The
 * names in the scene keep to it too.
 */
export function stageBox(): Box {
  const railCollapsed = document.getElementById('rail')?.classList.contains('is-collapsed');
  const railEdge = boxOf(document.querySelector(railCollapsed ? '.rail-toggle' : '#instruments'));
  const left = (railEdge?.right ?? 0) + GAP_PX;
  // The margin bounds the stage only where it stands beside it; on the phone
  // page it is below, and the window's edge is the bound.
  const margin = boxOf(document.querySelector('aside.margin'));
  const right = (margin && margin.left > left ? margin.left : window.innerWidth) - GAP_PX;
  const top = (boxOf(document.querySelector('header.top'))?.bottom ?? 0) + GAP_PX;
  const ticker = boxOf(document.getElementById('ticker'));
  const bottom = (ticker && ticker.top > top ? ticker.top : window.innerHeight) - GAP_PX;
  return { left, right, top, bottom };
}

/**
 * Narrow the box's height to clear every stage note over the span `x0`–`x1`.
 * A note in the upper half pushes the top down, one in the lower half pulls
 * the bottom up — in short landscape the imagery note sits above the ticker.
 */
function clearNotes(box: Box, x0: number, x1: number): Box {
  const out = { ...box };
  const mid = (box.top + box.bottom) / 2;
  for (const note of document.querySelectorAll('#stage-notes > :not([hidden])')) {
    const r = boxOf(note);
    if (!r || r.right <= x0 || r.left >= x1) continue;
    if ((r.top + r.bottom) / 2 < mid) out.top = Math.max(out.top, r.bottom + NOTE_GAP_PX);
    else out.bottom = Math.min(out.bottom, r.top - NOTE_GAP_PX);
  }
  return out;
}

export class SubjectCard {
  private el: HTMLElement;
  private current: string | null = null;
  /** Where the card was asked for, so a walk through related subjects keeps its place. */
  private anchor: Anchor = { x: 0, y: 0, r: CLICK_R_PX };
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
    // Escape is bound to the document, not to the card.
    //
    // Binding it to the card only works while the card holds focus, which it
    // does for exactly as long as it takes to click anything else — drag the
    // camera once and Escape silently stops closing it. A reader has no way to
    // tell that focus is why, and the key that should always work is the one
    // that must never be conditional.
    document.addEventListener('keydown', this.onKeyDown);
  }

  get openId(): string | null { return this.current; }

  get isOpen(): boolean { return !this.el.hidden; }

  /**
   * A click in the scene, with whatever it landed on.
   *
   * **The first click after a card opens only dismisses it.** With a card up,
   * the next click is almost always "put this away, I want to look at
   * something else" — and in a scene this dense it will usually land on
   * another layer, so answering it by opening a second card made the whole
   * thing feel like flypaper: you could not click your way *out*. One click
   * to close, the next to select. Nothing is lost, because the thing you
   * clicked is still there to click again.
   */
  sceneClick(subjectId: string | null, at: { x: number; y: number; r?: number }, note: string | null = null): void {
    if (this.isOpen) { this.close(); return; }
    if (subjectId) this.open(subjectId, at, note);
  }

  /**
   * Show `id` anchored near a point in canvas coordinates.
   *
   * Re-opening the card on a subject it already shows is a no-op rather than a
   * re-render, so a second click on the same field line does not steal focus
   * back from wherever the reader has moved it.
   */
  open(id: string, at: { x: number; y: number; r?: number }, note: string | null = null): void {
    const s = subject(id);
    if (!s) return;
    if (!this.roomInStage()) {
      this.close();
      this.host.showSubject(id);
      return;
    }
    const anchor: Anchor = { x: at.x, y: at.y, r: Math.max(at.r ?? 0, CLICK_R_PX) };
    this.anchor = anchor;
    if (this.current === id && !this.el.hidden) { this.place(anchor); return; }

    // Only remember where focus was on a fresh open. Swapping the card's
    // subject in place must not overwrite it with the card itself.
    const fresh = this.el.hidden;
    if (fresh) this.returnTo = document.activeElement as HTMLElement | null;
    this.current = id;

    const related = s.related.map((rid) => {
      const r = subject(rid);
      // The one-liner is not decoration here. Two subjects can share a label —
      // the magnetopause is both a number on the panel and a wireframe in the
      // scene — and without it the card offers the reader the same word twice.
      return r
        ? `<li><button type="button" class="subject-link" data-card-subject="${escapeHtml(r.id)}">
            ${tierBadge(r.tier)}
            ${escapeHtml(r.label)}</button> — ${escapeHtml(r.oneLine)}</li>`
        : '';
    }).join('');

    this.el.innerHTML = `
      <div class="card-head">
        <h2>${escapeHtml(s.label)}</h2>
        <button type="button" class="card-close" data-card-close
          aria-label="Close">×</button>
      </div>
      <p class="tile-meta">${tierBadge(s.tier, '', false)}
        ${escapeHtml(TIER_LABEL[s.tier])}</p>
      ${note ? `<p class="tile-meta card-record">${escapeHtml(note)}</p>` : ''}
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
    if (!this.place(anchor)) {
      // Neither side of Earth has room clear of both Earth and what was
      // clicked: the answer goes to the margin, at full length, rather than
      // over the thing it is about.
      this.el.hidden = true;
      this.current = null;
      this.returnTo?.focus?.({ preventScroll: true });
      this.returnTo = null;
      if (!fresh) this.host.onClosed?.('more');
      this.host.showSubject(id);
      return;
    }
    // Focus the card itself rather than a control inside it: the reader is
    // reading, not operating. Escape and Tab both work from here.
    this.el.tabIndex = -1;
    this.el.focus({ preventScroll: true });
    this.host.onOpened?.(id, fresh);
  }

  close(reason: CloseReason = 'user'): void {
    if (this.el.hidden) return;
    this.el.hidden = true;
    this.current = null;
    // Give focus back where it came from. axe cannot catch a focus that has
    // been dropped on the body, and a keyboard reader loses their place.
    this.returnTo?.focus?.({ preventScroll: true });
    this.returnTo = null;
    this.host.onClosed?.(reason);
  }

  /**
   * Whether the card can open here: as a sheet, or in a stage with room to
   * read it. The height is judged under every note, the case where the card
   * spans the stage.
   */
  private roomInStage(): boolean {
    if (window.matchMedia(PAGE_LAYOUT).matches) return true;
    const stage = stageBox();
    const box = clearNotes(stage, stage.left, stage.right);
    return box.right - box.left >= MIN_CARD_REM * cardRem(this.el)
      && box.bottom - box.top >= MIN_CARD_HEIGHT_REM * cardRem(this.el);
  }

  /**
   * Beside `at`, inside the stage, on the side of the click away from Earth,
   * and never over either: not over Earth, and not over what was clicked —
   * a body's disc, or the click's own neighbourhood. Returns false when no
   * placement clears both, and the caller opens the subject in the margin.
   *
   * The card is as wide as 24rem or the room beside Earth on that side,
   * whichever is less; when that side has less than the narrowest card, the
   * other side is tried; when neither does — Earth fills the frame, or the
   * stage is small — it takes its narrowest width, flush to the stage's edge
   * on the far side, and covers as little of the planet as it can.
   * Its height is whatever is left between the header, the notes and the
   * ticker over the span it takes, and it scrolls inside that.
   */
  private place(at: Anchor): boolean {
    if (window.matchMedia(PAGE_LAYOUT).matches) {
      this.el.classList.add('is-sheet');
      this.el.style.left = '';
      this.el.style.top = '';
      this.el.style.width = '';
      this.el.style.maxHeight = '';
      return true;
    }
    this.el.classList.remove('is-sheet');
    const stage = stageBox();
    const u = cardRem(this.el);
    const minW = MIN_CARD_REM * u;
    const earth = this.host.earthScreen?.() ?? null;
    const keep = this.host.keepClear?.() ?? [];

    // The room beside Earth on one side, within the stage.
    const beside = (toRight: boolean): [number, number] => {
      if (!earth) return [stage.left, stage.right];
      return toRight
        ? [Math.max(stage.left, earth.x + earth.r + GAP_PX), stage.right]
        : [stage.left, Math.min(stage.right, earth.x - earth.r - GAP_PX)];
    };

    /** A placement on one side, or null when it would cover what was clicked. */
    const tryOn = (toRight: boolean, allowFlush: boolean): { x: number; y: number; w: number; maxH: number } | null => {
      let span = beside(toRight);
      let flush = false;
      if (span[1] - span[0] < minW) {
        if (!allowFlush) return null;
        span = [stage.left, stage.right];
        flush = true;
      }
      const w = Math.min(flush ? minW : CARD_REM * u, span[1] - span[0]);
      const clampX = (x: number) => Math.min(Math.max(x, span[0]), span[1] - w);
      let x = flush
        ? (toRight ? span[1] - w : span[0])
        : clampX(toRight ? at.x + GAP_PX : at.x - GAP_PX - w);
      // Clear of the anchor sideways where the span allows it.
      const anchorL = at.x - at.r - GAP_PX;
      const anchorR = at.x + at.r + GAP_PX;
      if (x < anchorR && x + w > anchorL) {
        if (anchorR + w <= span[1]) x = Math.max(x, anchorR);
        else if (anchorL - w >= span[0]) x = Math.min(x, anchorL - w);
      }
      let box = clearNotes(stage, x, x + w);
      // Off the other discs too, where what is left above or below one of
      // them still holds a readable card.
      for (const k of keep) {
        if (k.x + k.r + GAP_PX <= x || k.x - k.r - GAP_PX >= x + w) continue;
        const above = { ...box, bottom: Math.min(box.bottom, k.y - k.r - GAP_PX) };
        const below = { ...box, top: Math.max(box.top, k.y + k.r + GAP_PX) };
        const fits = (b: Box) => b.bottom - b.top >= MIN_CARD_HEIGHT_REM * u;
        const near = at.y < k.y ? above : below;
        const far = near === above ? below : above;
        if (fits(near)) box = near;
        else if (fits(far)) box = far;
      }
      const maxH = Math.max(0, box.bottom - box.top);
      this.el.style.width = `${Math.round(w)}px`;
      this.el.style.maxHeight = `${Math.round(maxH)}px`;
      const h = this.el.getBoundingClientRect().height;
      let y = Math.max(box.top, Math.min(Math.max(at.y - h / 3, box.top), box.bottom - h));
      // Still over the anchor horizontally: clear it vertically, above or below.
      if (x < anchorR && x + w > anchorL && y < at.y + at.r + GAP_PX && y + h > at.y - at.r - GAP_PX) {
        if (at.y + at.r + GAP_PX + h <= box.bottom) y = at.y + at.r + GAP_PX;
        else if (at.y - at.r - GAP_PX - h >= box.top) y = at.y - at.r - GAP_PX - h;
        else return null;
      }
      return { x, y, w, maxH };
    };

    const away = !earth || at.x >= earth.x;
    const spot = tryOn(away, false) ?? tryOn(!away, false) ?? tryOn(away, true) ?? tryOn(!away, true);
    if (!spot) return false;
    this.el.style.width = `${Math.round(spot.w)}px`;
    this.el.style.maxHeight = `${Math.round(spot.maxH)}px`;
    this.el.style.left = `${Math.round(spot.x)}px`;
    this.el.style.top = `${Math.round(spot.y)}px`;
    return true;
  }

  private onClick = (e: Event): void => {
    const t = e.target as HTMLElement | null;
    if (t?.closest('[data-card-close]')) { this.close(); return; }
    if (t?.closest('[data-card-more]')) {
      const id = this.current;
      this.close('more');
      if (id) this.host.showSubject(id);
      return;
    }
    const hop = t?.closest('[data-card-subject]') as HTMLElement | null;
    const next = hop?.dataset['cardSubject'];
    if (next) {
      // Swap the card's subject in place rather than opening another. This is
      // the graph walk, and it is the feature: Bz → reconnection → field lines
      // → T89, without ever leaving the scene.
      const keep = this.returnTo;
      this.current = null;
      this.open(next, this.anchor);
      this.returnTo = keep;
    }
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key !== 'Escape' || this.el.hidden) return;
    // A modal over the card (the help) owns Escape: it closes that, and only
    // that. Closing both on one key threw the card away and, with the help's
    // history.back() landing on the card's own entry, left a dead Back step.
    if (document.querySelector('dialog[open]')) return;
    // Only swallow the key when there was something to close, so Escape keeps
    // working for whatever else on the page wants it.
    e.stopPropagation();
    this.close();
  };

  dispose(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    this.el.remove();
  }
}
