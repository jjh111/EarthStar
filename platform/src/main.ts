/**
 * The Viewer — entry point.
 *
 * Accuracy charter (plan §2) enforced here by construction:
 *  · the scene renders whether or not the network works (positions are local),
 *    so a data outage never fabricates a sky;
 *  · the HUD's numbers come only from the envelope, and absent values render
 *    as "no data";
 *  · the scale mode label is always on screen.
 */

import './styles.css';
import { Viewer } from './scene/viewer.js';
import { Hud } from './hud/hud.js';
import { NowStore } from './data/store.js';
import { DirectSource } from './data/direct-source.js';
import { MotionPreference } from './a11y/motion.js';
import { announce, installKeyboard } from './a11y/keyboard.js';
import { scaleLabel, type ScaleMode } from './scene/scales.js';
import type { ViewName } from './scene/camera-rig.js';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const hudTop = document.getElementById('hud-top') as HTMLElement;
const hudBottom = document.getElementById('hud-bottom') as HTMLElement;

const viewer = new Viewer(canvas);
const hud = new Hud(hudTop, hudBottom);
const store = new NowStore(new DirectSource(), 60_000);
const motion = new MotionPreference();

const btnDeck = document.getElementById('view-deck') as HTMLButtonElement;
const btnShieldView = document.getElementById('view-shield') as HTMLButtonElement;
const btnOrbit = document.getElementById('view-orbit') as HTMLButtonElement;
const btnScale = document.getElementById('scale-toggle') as HTMLButtonElement;
const btnMotion = document.getElementById('motion-toggle') as HTMLButtonElement;
const btnShield = document.getElementById('shield-toggle') as HTMLButtonElement;
const btnAurora = document.getElementById('aurora-toggle') as HTMLButtonElement;
const scaleLabelEl = document.getElementById('scale-label') as HTMLElement;

let view: ViewName = 'deck';

function syncNarration(): void {
  hud.setNarration({
    mode: viewer.scaleMode, view, reducedMotion: motion.reduced,
    shield: viewer.shieldOn, fieldLines: viewer.fieldLineStats,
    aurora: viewer.auroraOn,
  });
  hud.render(store.get());
}

function setView(v: ViewName): void {
  view = v;
  viewer.setView(v);
  btnDeck.setAttribute('aria-pressed', String(v === 'deck'));
  btnShieldView.setAttribute('aria-pressed', String(v === 'shield'));
  btnOrbit.setAttribute('aria-pressed', String(v === 'orbit'));
  const label = v === 'deck' ? 'Deck' : v === 'shield' ? 'Magnetosphere' : 'Orbit';
  announce(`${label} view.`);
  // The shield is the subject of this view; showing it empty would be a trap.
  if (v === 'shield' && !viewer.shieldOn) setShield(true);
  syncNarration();
}

function setScale(mode: ScaleMode): void {
  viewer.setScaleMode(mode);
  scaleLabelEl.textContent = mode === 'globe' ? 'Globe scale' : 'True scale';
  btnScale.setAttribute('aria-pressed', String(mode === 'true'));
  btnScale.title = scaleLabel(mode);
  announce(scaleLabel(mode));
  syncNarration();
}

btnDeck.addEventListener('click', () => setView('deck'));
btnShieldView.addEventListener('click', () => setView('shield'));
btnOrbit.addEventListener('click', () => setView('orbit'));
btnScale.addEventListener('click', () =>
  setScale(viewer.scaleMode === 'globe' ? 'true' : 'globe'));
function setShield(on: boolean): void {
  viewer.setShieldVisible(on);
  btnShield.setAttribute('aria-pressed', String(on));
  announce(on
    ? 'Magnetic shield shown: IGRF-14 field lines and the Shue 1998 magnetopause.'
    : 'Magnetic shield hidden.');
  syncNarration();
}

btnShield.addEventListener('click', () => setShield(!viewer.shieldOn));

function setAurora(on: boolean): void {
  viewer.setAuroraVisible(on);
  btnAurora.setAttribute('aria-pressed', String(on));
  announce(on ? 'OVATION aurora forecast shown.' : 'Aurora overlay hidden.');
  syncNarration();
}
btnAurora.addEventListener('click', () => setAurora(!viewer.auroraOn));

btnMotion.addEventListener('click', () => {
  motion.setOverride(!motion.reduced);
  announce(motion.reduced ? 'Reduced motion on.' : 'Motion enabled.');
});

motion.subscribe((reduced) => {
  viewer.setReducedMotion(reduced);
  btnMotion.setAttribute('aria-pressed', String(reduced));
  syncNarration();
});

installKeyboard({
  deck: () => setView('deck'),
  shieldView: () => setView('shield'),
  orbit: () => setView('orbit'),
  toggleScale: () => setScale(viewer.scaleMode === 'globe' ? 'true' : 'globe'),
  toggleMotion: () => motion.setOverride(!motion.reduced),
  toggleShield: () => setShield(!viewer.shieldOn),
  toggleAurora: () => setAurora(!viewer.auroraOn),
  refresh: () => { announce('Refreshing.'); void store.refresh(); },
  focusReport: () => document.getElementById('report-h')?.focus(),
});

store.subscribe((state) => {
  viewer.setNow(state.now?.data ?? null);
  viewer.setAurora(state.aurora?.data ?? null);
  syncNarration();
});

// The clock keeps moving even when the feed does not, so ages must tick.
window.setInterval(syncNarration, 30_000);

setScale('globe');
viewer.start();
store.start();

// Frame-rate readout for the performance budget, in the console and on demand.
Object.assign(window as unknown as Record<string, unknown>, {
  __viewer: viewer,
  __stats: () => viewer.stats,
});
