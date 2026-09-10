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
import { bodyFacts, distanceText, lightTimeText } from './hud/body-facts.js';
import { LOOPS, fetchLoop, preloadLoop, type ImageLoop } from './data/solar-imagery.js';
import { scaleLabel, type ScaleMode } from './scene/scales.js';
import { VIEWS, type ViewName } from './scene/camera-rig.js';
import { errorReason } from './data/state.js';
import { SubjectCard } from './hud/subject-card.js';
import { subject } from './hud/subjects.js';

const canvas = document.getElementById('scene') as HTMLCanvasElement;
/**
 * One frame of yield before the scene exists: the shell — header, tiles, the
 * report — paints first, and the globe arrives a beat later behind it. The
 * first-paint budget is spent on the words, not on WebGL context setup, which
 * is the same lazy-load-after-first-paint rule the Earth rasters follow.
 */
const viewer = await new Promise<Viewer>((ok) =>
  requestAnimationFrame(() => ok(new Viewer(canvas))));
const store = new NowStore(new DirectSource(), 60_000);
const motion = new MotionPreference();

/* ---------------- solar imagery ---------------- */

let sunTimer: number | null = null;
const loopCache = new Map<string, ImageLoop | null>();

/**
 * Imagery failure gets one honest retry on its own clock — the frame list is
 * tiny, so a minute later is cheap — and the error text names that time
 * instead of "soon".
 */
const IMAGERY_RETRY_MS = 60_000;
const sunRetryTimers = new Map<string, number>();
function retryImagery(kind: 'disk' | 'corona', id: string): void {
  const key = `${kind}:${id}`;
  if (sunRetryTimers.has(key)) return;
  const at = new Date(Date.now() + IMAGERY_RETRY_MS).toISOString();
  if (kind === 'disk') hud.setSunRetry(at); else hud.setCoronaRetry(at);
  const t = window.setTimeout(() => {
    sunRetryTimers.delete(key);
    if (kind === 'disk' ? hud.sunState.loopId === id : hud.sunState.coronaId === id) {
      loopCache.delete(id);
      void (kind === 'disk' ? selectLoop(id) : selectCorona(id));
    }
  }, IMAGERY_RETRY_MS);
  sunRetryTimers.set(key, t);
}

async function selectLoop(id: string): Promise<void> {
  const spec = LOOPS.find((l) => l.id === id && l.kind === 'disk') ?? LOOPS[0]!;
  hud.sunState.loopId = spec.id;
  if (loopCache.has(spec.id)) {
    const cached = loopCache.get(spec.id) ?? null;
    hud.setSunLoop(cached, false);
    sunTexture(cached);
    return;
  }
  hud.setSunLoop(null, true);
  try {
    const loop = await fetchLoop(spec);
    loopCache.set(spec.id, loop);
    if (hud.sunState.loopId === spec.id) {
      hud.setSunLoop(loop, false);
      sunTexture(loop);
    }
  } catch (e) {
    if (hud.sunState.loopId === spec.id) {
      hud.setSunLoop(null, false, errorReason(e));
      retryImagery('disk', spec.id);
    }
  }
}

/**
 * The coronagraph is a second, independent selection — SUVI on the sphere and
 * its card, LASCO on its own plane further out, both at once or either alone.
 * They photograph different regions, so replacing one with the other would
 * throw away half the picture to show the other half.
 */
async function selectCorona(id: string | null): Promise<void> {
  hud.sunState.coronaId = id;
  if (id === null) {
    hud.setCoronaLoop(null, false);
    viewer.setCoronaPlane(null);
    hud.setPlaneCalibration('corona', null);
    viewer.syncCoronaFraming();
    return;
  }
  const spec = LOOPS.find((l) => l.id === id && l.kind === 'coronagraph');
  if (!spec) return;
  if (loopCache.has(spec.id)) {
    hud.setCoronaLoop(loopCache.get(spec.id) ?? null, false);
    return;
  }
  hud.setCoronaLoop(null, true);
  try {
    const loop = await fetchLoop(spec);
    loopCache.set(spec.id, loop);
    if (hud.sunState.coronaId === spec.id) hud.setCoronaLoop(loop, false);
  } catch (e) {
    if (hud.sunState.coronaId === spec.id) {
      hud.setCoronaLoop(null, false, errorReason(e));
      retryImagery('corona', spec.id);
    }
  }
}

/**
 * Put the newest usable frame on the Sun in the scene.
 *
 * Driven from the loop rather than from the panel: the sphere should carry the
 * live Sun whether or not anyone has opened the Sun tab, and it is the first
 * thing visible on load. Once the panel is open its own frame takes over, so
 * scrubbing the loop scrubs the Sun too.
 *
 * The two instruments go to different places, because they are pictures of
 * different things. A SUVI frame is the disk, and belongs on the sphere. A
 * LASCO frame is the corona with the disk deliberately blocked, and belongs on
 * a plane through the Sun at the scale it was taken at — painting it onto the
 * sphere would carpet the Sun with a picture of the Sun being hidden.
 */
function sunTexture(loop: ImageLoop | null): void {
  const f = loop?.frames[loop.newestGood];
  if (!f) { showSunFrame(null); return; }
  const img = hud.images.acquire(f.url);
  const apply = (): void => showSunFrame(img);
  if (img.complete && img.naturalWidth > 0) apply();
  else img.addEventListener('load', apply, { once: true });
}

/**
 * A disk frame goes to two places at once.
 *
 * The sphere carries the disk, wrapped back on from the direction it was taken
 * from. The card carries everything outside the limb — which the sphere cannot
 * hold, because a point off the limb has no sphere to land on, and which is
 * about a third of the exposure. Together they are the whole frame, each part
 * drawn where it belongs and neither faked into the other.
 *
 * Both routes into the scene come through here — the newest frame on load, and
 * whatever the panel is scrubbed to — because there are two of them and only
 * one decision, and having made it twice is how a LASCO frame ended up
 * projected onto the sphere.
 */
function showSunFrame(img: HTMLImageElement | null): void {
  viewer.setSunImage(img);
  hud.setPlaneCalibration('disk', viewer.setSunCard(img));
  viewer.syncCoronaFraming();
}

/** A coronagraph frame, on its own plane starting outside the occulter. */
function showCoronaFrame(img: HTMLImageElement | null): void {
  hud.setPlaneCalibration('corona', viewer.setCoronaPlane(img));
  viewer.syncCoronaFraming();
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
    checkResult = await runChecks(undefined, viewer.sunProjection());
  } catch (e) {
    checkResult = {
      rows: [{
        name: 'Checks could not run', ours: 'no data', theirs: '—', ok: false,
        // Not a failed check — an absent one. The checks deliberately fetch
        // NOAA by their own path, so an outage stops them while the page may
        // still be serving good bytes from the mirror. Reporting that as a
        // failure would tell a reader their numbers are wrong at the exact
        // moment the numbers are fine.
        inconclusive: true,
        note: `NOAA could not be reached to compare against (${
          e instanceof Error ? e.message : String(e)
        }). This is the comparison being unavailable, not a disagreement with it.`,
      }],
      ranAt: new Date().toISOString(), passed: 0, inconclusive: 1,
    };
  }
  hud.setChecks(checkResult, false);
}

let forecast: ForecastBundle | null = null;
async function loadForecast(): Promise<void> {
  hud.setForecast(null, true);
  try {
    forecast = await fetchForecast();
    hud.setForecast(forecast, false);
  } catch (e) {
    forecast = null;
    hud.setForecast(null, false, errorReason(e));
  }
}

async function loadCycle(): Promise<void> {
  hud.setCycle(null, true);
  try {
    hud.setCycle(await fetchSolarCycle(), false);
  } catch (e) {
    hud.setCycle(null, false, errorReason(e));
  }
}

const hud = new Hud({
  onSelectLoop: (id) => void selectLoop(id),
  onSelectCorona: (id) => void selectCorona(id),
  onLoadCycle: () => void loadCycle(),
  onLoadForecast: () => void loadForecast(),
  onToggleSunPlay: () => void toggleSunPlay(),
  onScrubSun: (i) => { hud.setSunPlaying(false); hud.setSunFrame(i); },
  onRunChecks: () => void doChecks(),
  onSunFrame: (img) => showSunFrame(img),
  onCoronaFrame: (img) => showCoronaFrame(img),
});

/* ---------------- controls ---------------- */

const btn = (id: string) => document.getElementById(id) as HTMLButtonElement;
const btnScaleGlobe = btn('scale-globe');
const btnScaleTrue = btn('scale-true');
const btnMotion = btn('motion-toggle');
const btnShield = btn('shield-toggle');
const btnAurora = btn('aurora-toggle');
const btnWind = btn('wind-toggle');
const btnCme = btn('cme-toggle');
const btnCoast = btn('coast-toggle');

/**
 * The view buttons are generated from the same list the camera reads, so a
 * vantage point cannot exist in one and not the other.
 */
const viewGroup = document.getElementById('view-group') as HTMLElement;
const viewButtons = new Map<ViewName, HTMLButtonElement>();
for (const v of VIEWS) {
  const b = document.createElement('button');
  b.className = 'ctl';
  b.type = 'button';
  b.id = `view-${v.id}`;
  b.textContent = v.label;
  b.title = v.title;
  b.setAttribute('aria-pressed', String(v.id === 'deck'));
  b.addEventListener('click', () => setView(v.id));
  viewGroup.append(b);
  viewButtons.set(v.id, b);
}

let view: ViewName = 'deck';

function syncNarration(): void {
  hud.setNarration({
    mode: viewer.scaleMode, view, reducedMotion: motion.reduced,
    shield: viewer.shieldOn, fieldLines: viewer.fieldLineStats,
    aurora: viewer.auroraOn, wind: viewer.windOn,
    earthSurface: viewer.earthSurfaceState,
    cmes: { shown: viewer.cmesOn, count: viewer.cmeCount },
  });
  hud.render(store.get());
}

function setView(v: ViewName): void {
  view = v;
  viewer.setView(v);
  for (const [id, b] of viewButtons) b.setAttribute('aria-pressed', String(id === v));
  const spec = VIEWS.find((x) => x.id === v);
  announce(`${spec?.label ?? v} view — ${spec?.title ?? ''}`);
  // Three of the five views exist to show the shield; turning it on for them
  // beats presenting an empty frame and leaving the reader to find the switch.
  if ((v === 'profile' || v === 'sunward') && !viewer.shieldOn) {
    setShield(true);
  }
  // The polar view exists to show the oval; arriving to a bare globe would be
  // an odd way to present it.
  if (v === 'polar' && !viewer.auroraOn) setAurora(true);
  syncNarration();
}

function setScale(mode: ScaleMode): void {
  viewer.setScaleMode(mode);
  btnScaleGlobe.setAttribute('aria-pressed', String(mode === 'globe'));
  btnScaleTrue.setAttribute('aria-pressed', String(mode === 'true'));
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

/**
 * The header's real height, published to CSS.
 *
 * On a phone it wraps to two or three rows depending on whether a notice is
 * outstanding, so anything that has to sit below it — the sticky tab bar —
 * needs the measured value rather than the desktop constant.
 */
const headerEl = document.querySelector('header.top') as HTMLElement;
function publishHeaderHeight(): void {
  document.documentElement.style.setProperty(
    '--header-real-h', `${Math.round(headerEl.getBoundingClientRect().height)}px`,
  );
}
publishHeaderHeight();
if (typeof ResizeObserver !== 'undefined') {
  new ResizeObserver(publishHeaderHeight).observe(headerEl);
}

// On a phone the control clusters fold behind a disclosure; on a desktop the
// button is not rendered and this does nothing.
const controlsToggle = btn('controls-toggle');
const controlsEl = document.getElementById('controls') as HTMLElement;
controlsToggle.addEventListener('click', () => {
  const open = controlsEl.classList.toggle('is-open');
  controlsToggle.setAttribute('aria-expanded', String(open));
});

btnScaleGlobe.addEventListener('click', () => setScale('globe'));
btnScaleTrue.addEventListener('click', () => setScale('true'));
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

function setCoast(on: boolean): void {
  viewer.setCoastOverlay(on);
  btnCoast.setAttribute('aria-pressed', String(on));
  announce(on
    ? 'Vector coastlines drawn over the surface imagery.'
    : 'Coastlines hidden — the raster surface only.');
  syncNarration();
}
btnCoast.addEventListener('click', () => setCoast(!viewer.coastOverlayOn));

btnMotion.addEventListener('click', () => motion.setOverride(!motion.reduced));

motion.subscribe((reduced) => {
  viewer.setReducedMotion(reduced);
  btnMotion.setAttribute('aria-pressed', String(!reduced));
  syncNarration();
});

installKeyboard({
  view: (i) => { const v = VIEWS[i]; if (v) setView(v.id); },
  toggleScale: () => setScale(viewer.scaleMode === 'globe' ? 'true' : 'globe'),
  toggleMotion: () => motion.setOverride(!motion.reduced),
  toggleShield: () => setShield(!viewer.shieldOn),
  toggleAurora: () => setAurora(!viewer.auroraOn),
  toggleWind: () => setWind(!viewer.windOn),
  toggleCmes: () => setCmes(!viewer.cmesOn),
  refresh: () => { announce('Refreshing.'); void store.refresh(); },
  focusReport: () => hud.selectTab('report'),
});

/* Cold-start sequencing (task: snapshot lane → slow lane → imagery). The Sun's
   frame list is megabytes behind a slow link and every JSON the instrument rail
   needs is a few hundred KB, so imagery waits for the snapshot lane to resolve
   — live or failed — before it starts. Declared before the subscription below,
   which fires synchronously with the store's current state. */
let sunImageryStarted = false;
function maybeStartImagery(): void {
  if (sunImageryStarted) return;
  if (store.get().lanes.snapshot) return;
  sunImageryStarted = true;
  void selectLoop(LOOPS[0]!.id);
}

store.subscribe((state) => {
  viewer.setNow(state.now?.data ?? null);
  viewer.setAurora(state.aurora?.data ?? null);
  viewer.setRegions(state.regions?.data ?? [], state.regions?.data?.[0]?.observed ?? null);
  viewer.setCmes(state.cmes);
  viewer.setSpacecraft(state.spacecraft?.data ?? []);
  maybeStartImagery();
  syncNarration();
});

/* ---------------- Earth base imagery ---------------- */

/**
 * The first Earth pixel on the page that is a measurement. The vector base map
 * paints first paint; NASA's composites are fetched after the scene has drawn,
 * so they never block the first frame.
 *
 * The size follows devicePixelRatio × viewport width: a texture wider than the
 * pixels it can ever cover is bandwidth and memory spent for nothing. The
 * 4096 variant covers desktops and large tablets; everything narrower than
 * 2048 device pixels gets the 2048 set.
 */
let earthImageryStarted = false;
function loadEarthImagery(): void {
  if (earthImageryStarted) return;
  earthImageryStarted = true;
  const dpr = Math.min(devicePixelRatio || 1, 3);
  const deviceWidth = (canvas.clientWidth || window.innerWidth) * dpr;
  const suffix = deviceWidth >= 2048 ? '4096' : '2048';
  const load = (file: string, ok: (img: HTMLImageElement) => void): void => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => ok(img);
    img.onerror = () => { viewer.setEarthSurfaceState('vector'); syncNarration(); };
    img.src = `/viewer/earth-${file}.webp`;
  };
  load(`day-${suffix}`, (img) => {
    viewer.setEarthDayImage(img);
    viewer.setEarthSurfaceState('imagery');
    syncNarration();
  });
  load('night-2048', (img) => {
    viewer.setEarthNightImage(img);
    hud.setEarthLights(true);
    syncNarration();
  });
}

// Two frames out: the first painted frame exists, the imagery starts behind it.
function afterFirstPaint(fn: () => void): void {
  requestAnimationFrame(() => requestAnimationFrame(fn));
}

// Ages tick even when the feed does not.
window.setInterval(syncNarration, 30_000);
sunTimer = window.setInterval(stepSun, 220);

setScale('globe');
setWind(true);
viewer.start();
store.start();
afterFirstPaint(loadEarthImagery);

/* ---------------- picking ---------------- */

const tipEl = document.getElementById('tip') as HTMLElement;
let tipKey = '';
const card = new SubjectCard({ showSubject: (id) => hud.showSubject(id) });

viewer.onHover = (p) => {
  if (!p) {
    tipEl.hidden = true;
    tipKey = '';
    return;
  }
  const facts = bodyFacts(p.id as never, new Date());
  // Earth has no distance-from-Earth to quote, so it says where it is instead.
  const line = p.kind === 'sun'
    ? 'Sun · open the Sun panel'
    : p.kind === 'spacecraft'
    ? `${p.label} · L1 monitor`
    : facts.auFromEarth !== null
      ? `${p.label} · ${distanceText(facts.auFromEarth)} · light ${lightTimeText(facts.lightSeconds)}`
      : facts.auFromSun !== null
        ? `${p.label} · ${distanceText(facts.auFromSun)} from the Sun`
        : p.label;
  // Only touch the text when it changes; the position moves every pointer event.
  if (line !== tipKey) { tipEl.textContent = line; tipKey = line; }
  tipEl.hidden = false;
  tipEl.style.transform = `translate(${p.screen.x + 14}px, ${p.screen.y + 14}px)`;
};

/**
 * The layer hover shares the body tooltip: one label, one place on screen,
 * whichever kind of thing is under the pointer. Its job is to teach that the
 * scene is clickable at all — without it nobody discovers the card.
 */
viewer.onLayerHover = (p) => {
  if (!p) {
    if (tipKey.startsWith('layer:')) { tipEl.hidden = true; tipKey = ''; }
    return;
  }
  const s = subject(p.subject);
  if (!s) return;
  const key = `layer:${s.id}`;
  if (key !== tipKey) { tipEl.textContent = `${s.label} · ${s.oneLine}`; tipKey = key; }
  tipEl.hidden = false;
  tipEl.style.transform = `translate(${p.screen.x + 14}px, ${p.screen.y + 14}px)`;
};

viewer.onLayerSelect = (p) => {
  // Empty sky dismisses. A click that hits nothing is a click that means
  // "never mind", and leaving the card up would make the scene feel stuck.
  if (!p) { card.close(); return; }
  card.open(p.subject, p.screen);
};

viewer.onSelect = (p) => {
  // The Sun has a whole panel of its own — live imagery in six passbands, the
  // region list, and 278 years of cycle history. Sending a click there beats
  // sending it to a distance table.
  if (p.kind === 'sun') hud.selectTab('sun');
  else if (p.kind === 'spacecraft') hud.selectTab('sources');
  else hud.showBody(p.id);
};

// The render scale adapts on its own; sample it at 1 Hz so the HUD can say so.
// Reading it per frame would put a DOM write in the animation loop to report on
// the cost of the animation loop.
window.setInterval(() => hud.setStats(viewer.stats), 1000);

Object.assign(window as unknown as Record<string, unknown>, {
  __viewer: viewer,
  __hud: hud,
  __stats: () => viewer.stats,
  __sunTimer: sunTimer,
});
