/**
 * The Viewer — entry point.
 *
 * Charter, enforced by construction: the scene renders whether or not the
 * network works (positions are computed locally), the HUD's numbers come only
 * from the envelope, absent values render as "no data", and the scale mode is
 * always on screen.
 */

import './styles.css';
import { Viewer } from './scene/viewer.js';
import { Hud } from './hud/hud.js';
import { NowStore } from './data/store.js';
import { DirectSource } from './data/direct-source.js';
import { MotionPreference } from './a11y/motion.js';
import { announce, installKeyboard } from './a11y/keyboard.js';
import { runChecks, type CheckResult } from './data/checks.js';
import { fetchForecast, type ForecastBundle } from './data/forecast.js';
import { fetchSolarCycle } from './data/solar-cycle.js';
import { LOOPS, fetchLoop, preloadLoop, type ImageLoop } from './data/solar-imagery.js';
import { scaleLabel, type ScaleMode } from './scene/scales.js';
import type { ViewName } from './scene/camera-rig.js';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const viewer = new Viewer(canvas);
const store = new NowStore(new DirectSource(), 60_000);
const motion = new MotionPreference();

/* ---------------- solar imagery ---------------- */

let sunTimer: number | null = null;
const loopCache = new Map<string, ImageLoop | null>();

async function selectLoop(id: string): Promise<void> {
  const spec = LOOPS.find((l) => l.id === id) ?? LOOPS[0]!;
  hud.sunState.loopId = spec.id;
  if (loopCache.has(spec.id)) {
    hud.setSunLoop(loopCache.get(spec.id) ?? null, false);
    return;
  }
  hud.setSunLoop(null, true);
  const loop = await fetchLoop(spec);
  loopCache.set(spec.id, loop);
  if (hud.sunState.loopId === spec.id) hud.setSunLoop(loop, false);
}

function stepSun(): void {
  const s = hud.sunState;
  if (!s.playing || !s.loop || hud.activeTab !== 'sun') return;
  if (s.preloaded < s.loop.frames.length) return;
  hud.setSunFrame((s.frameIndex + 1) % s.loop.frames.length);
}

/**
 * Play is a two-stage control: the first press downloads the loop (cost stated
 * on the button), later presses toggle playback.
 */
async function toggleSunPlay(): Promise<void> {
  const s = hud.sunState;
  if (!s.loop) return;
  if (s.preloaded >= s.loop.frames.length) {
    hud.setSunPlaying(!s.playing);
    return;
  }
  if (s.preloading) return;
  hud.setSunPreload(0, true);
  await preloadLoop(s.loop, (n) => hud.setSunPreload(n, true));
  hud.setSunPreload(s.loop.frames.length, false);
  hud.setSunPlaying(true);
}

/* ---------------- checks ---------------- */

let checkResult: CheckResult | null = null;
async function doChecks(): Promise<void> {
  hud.setChecks(null, true);
  try {
    checkResult = await runChecks();
  } catch (e) {
    checkResult = {
      rows: [{
        name: 'Checks could not run', ours: 'error', theirs: '—', ok: false,
        note: e instanceof Error ? e.message : String(e),
      }],
      ranAt: new Date().toISOString(), passed: 0,
    };
  }
  hud.setChecks(checkResult, false);
}

let forecast: ForecastBundle | null = null;
async function loadForecast(): Promise<void> {
  hud.setForecast(null, true);
  try {
    forecast = await fetchForecast();
  } catch {
    forecast = null;
  }
  hud.setForecast(forecast, false);
}

async function loadCycle(): Promise<void> {
  hud.setCycle(null, true);
  hud.setCycle(await fetchSolarCycle(), false);
}

const hud = new Hud({
  onSelectLoop: (id) => void selectLoop(id),
  onLoadCycle: () => void loadCycle(),
  onLoadForecast: () => void loadForecast(),
  onToggleSunPlay: () => void toggleSunPlay(),
  onScrubSun: (i) => { hud.setSunPlaying(false); hud.setSunFrame(i); },
  onRunChecks: () => void doChecks(),
});

/* ---------------- controls ---------------- */

const btn = (id: string) => document.getElementById(id) as HTMLButtonElement;
const btnDeck = btn('view-deck');
const btnShieldView = btn('view-shield');
const btnOrbit = btn('view-orbit');
const btnScale = btn('scale-toggle');
const btnMotion = btn('motion-toggle');
const btnShield = btn('shield-toggle');
const btnAurora = btn('aurora-toggle');
const btnWind = btn('wind-toggle');
const btnCme = btn('cme-toggle');
const scaleLabelEl = document.getElementById('scale-label') as HTMLElement;

let view: ViewName = 'deck';

function syncNarration(): void {
  hud.setNarration({
    mode: viewer.scaleMode, view, reducedMotion: motion.reduced,
    shield: viewer.shieldOn, fieldLines: viewer.fieldLineStats,
    aurora: viewer.auroraOn, wind: viewer.windOn,
    cmes: { shown: viewer.cmesOn, count: viewer.cmeCount },
  });
  hud.render(store.get());
}

function setView(v: ViewName): void {
  view = v;
  viewer.setView(v);
  btnDeck.setAttribute('aria-pressed', String(v === 'deck'));
  btnShieldView.setAttribute('aria-pressed', String(v === 'shield'));
  btnOrbit.setAttribute('aria-pressed', String(v === 'orbit'));
  announce(`${v === 'deck' ? 'Deck' : v === 'shield' ? 'Magnetosphere' : 'Orbit'} view.`);
  if (v === 'shield' && !viewer.shieldOn) setShield(true);
  syncNarration();
}

function setScale(mode: ScaleMode): void {
  viewer.setScaleMode(mode);
  scaleLabelEl.textContent = mode === 'globe' ? 'Globe' : 'True';
  btnScale.setAttribute('aria-pressed', String(mode === 'true'));
  btnScale.title = scaleLabel(mode);
  announce(scaleLabel(mode));
  syncNarration();
}

function setShield(on: boolean): void {
  viewer.setShieldVisible(on);
  btnShield.setAttribute('aria-pressed', String(on));
  announce(on ? 'Magnetic field lines and boundaries shown.' : 'Field hidden.');
  syncNarration();
}

function setAurora(on: boolean): void {
  viewer.setAuroraVisible(on);
  btnAurora.setAttribute('aria-pressed', String(on));
  announce(on ? 'Aurora forecast shown.' : 'Aurora hidden.');
  syncNarration();
}

function setWind(on: boolean): void {
  viewer.setWindVisible(on);
  btnWind.setAttribute('aria-pressed', String(on));
  announce(on ? 'Solar wind stream shown.' : 'Solar wind stream hidden.');
  syncNarration();
}

btnDeck.addEventListener('click', () => setView('deck'));
btnShieldView.addEventListener('click', () => setView('shield'));
btnOrbit.addEventListener('click', () => setView('orbit'));
btnScale.addEventListener('click', () => setScale(viewer.scaleMode === 'globe' ? 'true' : 'globe'));
btnShield.addEventListener('click', () => setShield(!viewer.shieldOn));
btnAurora.addEventListener('click', () => setAurora(!viewer.auroraOn));
btnWind.addEventListener('click', () => setWind(!viewer.windOn));
function setCmes(on: boolean): void {
  viewer.setCmesVisible(on);
  btnCme.setAttribute('aria-pressed', String(on));
  announce(on ? 'CME cones shown.' : 'CME cones hidden.');
  syncNarration();
}
btnCme.addEventListener('click', () => setCmes(!viewer.cmesOn));

btnMotion.addEventListener('click', () => motion.setOverride(!motion.reduced));

motion.subscribe((reduced) => {
  viewer.setReducedMotion(reduced);
  btnMotion.setAttribute('aria-pressed', String(!reduced));
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
  toggleWind: () => setWind(!viewer.windOn),
  toggleCmes: () => setCmes(!viewer.cmesOn),
  refresh: () => { announce('Refreshing.'); void store.refresh(); },
  focusReport: () => hud.selectTab('report'),
});

store.subscribe((state) => {
  viewer.setNow(state.now?.data ?? null);
  viewer.setAurora(state.aurora?.data ?? null);
  viewer.setRegions(state.regions?.data ?? [], state.regions?.data?.[0]?.observed ?? null);
  viewer.setCmes(state.cmes);
  viewer.setSpacecraft(state.spacecraft?.data ?? []);
  syncNarration();
});

// Ages tick even when the feed does not.
window.setInterval(syncNarration, 30_000);
sunTimer = window.setInterval(stepSun, 220);

setScale('globe');
setWind(true);
viewer.start();
store.start();
void selectLoop(LOOPS[0]!.id);

// The render scale adapts on its own; sample it at 1 Hz so the HUD can say so.
// Reading it per frame would put a DOM write in the animation loop to report on
// the cost of the animation loop.
window.setInterval(() => hud.setStats(viewer.stats), 1000);

Object.assign(window as unknown as Record<string, unknown>, {
  __viewer: viewer,
  __stats: () => viewer.stats,
  __sunTimer: sunTimer,
});
