/**
 * The help: what the reader is looking at, in one dialog behind `?`.
 *
 * The Viewer used to explain itself only to a reader who already knew where
 * to look — the tiers in the Sources tab, the keys read out to a screen reader
 * and to nobody else, the colours nowhere at all. This is the one place that
 * says all of it: the three tiers, what each mark in the scene is, how to move
 * it, the six rules it is built to, and the way back to the rest of Earth Star.
 *
 * The scene's key is written from the subject registry, like the card and the
 * report, so a mark cannot be described here one way and there another. Only
 * the swatches are this file's own: they are colours in shaders, which nothing
 * outside the scene can read.
 *
 * A real `<dialog>`, opened modal: the page behind is inert, Tab stays inside,
 * Escape closes it, and focus goes back to whatever opened it. Its address is
 * `#help` (route.ts), so Back closes it too; main.ts owns that side.
 */

import { SCENE_KEYS } from '../a11y/keyboard.js';
import { escapeHtml } from './margin.js';
import { TIER_LABEL, TIER_SENTENCE, subject, type Tier } from './subjects.js';
import { TIER_WORD } from './format.js';

/**
 * The marks in the scene, in the order a reader meets them, with the colours
 * the scene draws them in: the same linear RGB the scene passes to three.js
 * (magnetosphere.ts, earth.ts, solar-wind.ts, cmes.ts, spacecraft.ts,
 * sun.ts), encoded for the page as the renderer encodes them for the screen.
 * Two colours where the colour itself carries meaning: closed and open field
 * lines, Earth-directed and other cones, the operating monitor and the rest.
 */
type Rgb = [number, number, number];
const KEY: { id: string; colours: Rgb[]; shape: 'line' | 'dot' | 'disc' | 'diamond' | 'band' }[] = [
  { id: 'layer.field-lines', colours: [[0.42, 0.78, 0.95], [0.72, 0.55, 1.0]], shape: 'line' },
  { id: 'layer.magnetopause', colours: [[0.45, 0.9, 0.8]], shape: 'line' },
  { id: 'layer.bow-shock', colours: [[1.0, 0.62, 0.35]], shape: 'line' },
  { id: 'layer.aurora', colours: [[0.10, 1.0, 0.70], [0.95, 0.30, 0.60]], shape: 'band' },
  { id: 'layer.solar-wind', colours: [[0.62, 0.86, 1.0]], shape: 'dot' },
  { id: 'layer.cme-cones', colours: [[1.0, 0.52, 0.30], [0.62, 0.66, 0.85]], shape: 'line' },
  { id: 'layer.l1-monitors', colours: [[0.62, 0.94, 1.0], [0.52, 0.56, 0.64]], shape: 'diamond' },
  { id: 'layer.sun-placeholder', colours: [[1.0, 0.93, 0.76]], shape: 'disc' },
];

/** Linear RGB to a CSS colour, through the sRGB transfer curve. */
function css([r, g, b]: Rgb): string {
  const enc = (c: number) => Math.round(255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055));
  return `rgb(${enc(r)} ${enc(g)} ${enc(b)})`;
}

/** The six rules (platform/README.md), one line each. */
const RULES = [
  'No fabricated values: a missing reading is a word, “no data” or “unavailable” with its retry time, never a number.',
  'Stale is visible: every reading carries its time, and an old one dims and says how old it is.',
  'Units on everything, and the time in UTC beside every value.',
  'Every model is cited in the Viewer itself: the Sources tab names each one, with its paper.',
  'Tiers are honest: ambient art can be driven by a measurement but never passes for one.',
  'Scale is stated: Globe compresses distance and says so on the stage, and True is one click away.',
];

/** A tier badge, with its word for a reader who hears it rather than sees it. */
function badge(t: Tier): string {
  return `<span class="badge badge-${t.toLowerCase()}" title="${TIER_LABEL[t]}">${t}`
    + `<span class="sr-only"> ${TIER_WORD[t]}</span></span>`;
}

function swatch(colours: Rgb[], shape: string): string {
  const [a, b] = colours.map(css);
  const fill = b ? `linear-gradient(90deg, ${a} 0 50%, ${b} 50% 100%)` : a!;
  return `<span class="help-swatch is-${shape}" style="--sw: ${fill}" aria-hidden="true"></span>`;
}

/** Where a mark comes from: its cited sources, or for ambient art what it carries. */
function provenance(id: string): string {
  const s = subject(id)!;
  if (s.tier === 'M') {
    return s.keyedTo ? `Keyed to ${s.keyedTo.replace(/^./, (c) => c.toLowerCase())}.` : 'Carries nothing measured.';
  }
  return `${s.sources.map((x) => x.name).join(', ')}.`;
}

export function helpHtml(): string {
  const tiers = (['E', 'D', 'M'] as Tier[]).map((t) => `
    <li>${badge(t)} <strong>${TIER_LABEL[t]}.</strong> ${escapeHtml(TIER_SENTENCE[t])}</li>`).join('');
  const marks = KEY.map(({ id, colours, shape }) => {
    const s = subject(id)!;
    return `<li>${swatch(colours, shape)}<span class="help-mark">${badge(s.tier)}
      <strong>${escapeHtml(s.label)}.</strong> ${escapeHtml(s.oneLine)}
      <span class="help-src">${escapeHtml(provenance(id))}</span></span></li>`;
  }).join('');
  const keys = SCENE_KEYS.map(([k, d]) => `<div><dt><kbd>${escapeHtml(k)}</kbd></dt><dd>${escapeHtml(d)}</dd></div>`).join('');
  return `
    <div class="help-head">
      <h2 id="help-title">What you are seeing</h2>
      <button type="button" class="help-close" data-help-close aria-label="Close help">×</button>
    </div>
    <div class="help-body">
      <section aria-labelledby="help-tiers">
        <h3 id="help-tiers">Tiers</h3>
        <p>Every reading, model and mark here carries one of three badges.</p>
        <ul class="help-tiers">${tiers}</ul>
        <p class="help-aside">The splash marks its words with five registers instead: E empirical,
          H historical, D design, P policy and M mythopoetic. E is a measurement on both, but its D
          is a design and its M a vision, where here they are a model and artwork.</p>
      </section>
      <section aria-labelledby="help-key">
        <h3 id="help-key">In the scene</h3>
        <p>Point at anything to name it, and click it for its card. With Names on, Earth, the Sun,
          the Moon, L1 and the two boundaries are named where they stand.</p>
        <ul class="help-key">${marks}</ul>
      </section>
      <section aria-labelledby="help-moves">
        <h3 id="help-moves">Moving and keys</h3>
        <dl class="help-moves">
          <div><dt>Mouse</dt><dd>Drag to turn, right-drag or Shift-drag to move, scroll to zoom.</dd></div>
          <div><dt>Touch</dt><dd>One finger turns, two pinch to zoom and drag to move. Tap anything for its card.</dd></div>
          <div><dt>Keyboard</dt><dd>Tab reaches every control. These keys act on the scene: click it, or
            Tab to it, first. <kbd>?</kbd> opens this from anywhere but a text field, and
            <kbd>Esc</kbd> closes a card or this.</dd></div>
        </dl>
        <dl class="help-keys">${keys}</dl>
      </section>
      <section aria-labelledby="help-rules">
        <h3 id="help-rules">Rules</h3>
        <ol class="help-rules">${RULES.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ol>
      </section>
      <section aria-labelledby="help-about">
        <h3 id="help-about">About</h3>
        <p>The Viewer measures Earth Star’s star scale live, from NOAA’s feeds.</p>
        <ul class="help-about">
          <li><a href="/">Earth Star <span aria-hidden="true">↗</span></a> — the seed, the five scales,
            the Gomens and the ideas.</li>
          <li><a href="/field-guide/">Gomenata <span aria-hidden="true">↗</span></a> — the field guide
            to the adjacent life.</li>
          <li><a href="/#works">The works <span aria-hidden="true">↗</span></a> — the field guide, the
            films and the portraits.</li>
        </ul>
      </section>
    </div>`;
}

export interface HelpHost {
  /** The dialog closed by its own means — Escape, ×, a click outside — not by the address. */
  onClosed(): void;
}

export class Help {
  readonly el: HTMLDialogElement;
  /** Where focus was before the dialog took it, so closing can give it back. */
  private returnTo: HTMLElement | null = null;
  /** The address is closing it, so it must not tell the host it closed itself. */
  private quiet = false;

  constructor(private host: HelpHost) {
    this.el = document.createElement('dialog');
    this.el.className = 'help';
    this.el.id = 'help';
    this.el.setAttribute('aria-labelledby', 'help-title');
    this.el.innerHTML = helpHtml();
    document.body.appendChild(this.el);
    this.el.addEventListener('click', (e) => {
      const t = e.target as HTMLElement;
      // The × closes; so does a click on the backdrop, which lands on the
      // dialog element itself rather than on anything inside it.
      if (t.closest('[data-help-close]') || t === this.el) this.close();
    });
    this.el.addEventListener('close', this.onClose);
  }

  get isOpen(): boolean { return this.el.open; }

  open(): void {
    if (this.el.open) return;
    const active = document.activeElement as HTMLElement | null;
    this.returnTo = active && active !== document.body ? active : null;
    // From the top each time; showModal puts focus on the ×, so Escape and
    // Enter both close it and Tab walks down through the links.
    this.el.querySelector<HTMLElement>('.help-body')?.scrollTo(0, 0);
    this.el.showModal();
  }

  /** Close it. `byAddress` when Back or a link closed it, so the host is not told twice. */
  close(byAddress = false): void {
    if (!this.el.open) return;
    this.quiet = byAddress;
    this.el.close();
  }

  private onClose = (): void => {
    // Back where it was opened from; opened from the scene, back to the scene.
    if (this.returnTo?.isConnected) this.returnTo.focus({ preventScroll: true });
    else (document.activeElement as HTMLElement | null)?.blur?.();
    this.returnTo = null;
    const quiet = this.quiet;
    this.quiet = false;
    if (!quiet) this.host.onClosed();
  };
}
