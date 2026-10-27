// Emoji garden — click to plant sprouts, grow trees, place stars in the margins.
// State persists in localStorage. Also feeds the footer coherence meter and
// the margin-star constellations.

import { spawnButterfly, clearButterflies, butterflyCount } from './butterflies.js';
import { drawInto } from './glyph.js';
import { INNERS, textEdges, gutters } from './margins.js';
import { isStill } from './still.js';

const CONFIG = {
  stars: { emoji: '✦', max: 8, gutter: 56 },   // a star needs a gutter this wide
  transient: { emojis: ['🌱', '🌿', '🌸'] },
  footerGarden: { emojis: ['🌱', '🌿', '🌸'], max: 14 }
};

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// A finger cannot aim at a margin, and a phone has none to spare: on touch
// screens a tap in the margin plants a sprout like any other
const COARSE = window.matchMedia('(pointer: coarse)');

let state = {
  heroLeft: [],
  heroRight: [],
  footerGarden: [],
  itemsSinceLastTree: 0
};

// ── Persistence ──────────────────────────────────────────

function loadState() {
  try {
    const saved = localStorage.getItem('earthStarGarden');
    if (saved) {
      const s = JSON.parse(saved);
      const plants = CONFIG.footerGarden.emojis;
      state = {
        heroLeft: (s.heroLeft || []).map(keptStar('left')).filter(Boolean),
        heroRight: (s.heroRight || []).map(keptStar('right')).filter(Boolean),
        footerGarden: (s.footerGarden || []).map(item => ({
          emoji: item.emoji || plants[Math.floor(Math.random() * plants.length)],
          timestamp: item.timestamp || Date.now(),
          isTree: item.isTree || false,
          isNew: false
        })),
        itemsSinceLastTree: s.itemsSinceLastTree || 0
      };
    }
  } catch (e) { /* corrupted state — start fresh */ }
}

// A star is kept as its side and its height on the screen (a fraction of it),
// never as a point: where it is drawn follows the gutter. Older gardens kept
// the point clicked; its height carries over.
function keptStar(side) {
  return (item) => {
    const yFrac = item.yFrac ?? item.y / (window.innerHeight || 1);
    if (!Number.isFinite(yFrac)) return null;
    return { side, yFrac: Math.min(1, Math.max(0, yFrac)), timestamp: item.timestamp || Date.now() };
  };
}

function saveState() {
  try {
    localStorage.setItem('earthStarGarden', JSON.stringify(state));
  } catch (e) { /* storage unavailable — garden lives for this visit only */ }
}

export function clearGarden() {
  try { localStorage.removeItem('earthStarGarden'); } catch (e) { /* nothing kept to clear */ }
  state = { heroLeft: [], heroRight: [], footerGarden: [], itemsSinceLastTree: 0 };
  clearButterflies();
  document.querySelectorAll('.emoji-fading').forEach(el => el.remove());
  renderStars();
  renderFooterGarden();
  updateCoherenceMeter();
}

// ── Coherence meter (∇𝒞 rises as the garden grows) ──────

function coherenceScore() {
  const plants = state.footerGarden.filter(i => !i.isTree).length;
  const trees = state.footerGarden.filter(i => i.isTree).length;
  const stars = state.heroLeft.length + state.heroRight.length;
  return plants + trees * 3 + stars + butterflyCount() * 2;
}

function updateCoherenceMeter() {
  const valueEl = document.getElementById('coherenceValue');
  const barEl = document.getElementById('coherenceBar');
  if (!valueEl || !barEl) return;
  const score = coherenceScore();
  // Asymptotic toward 1 — coherence always has room to grow
  const c = 1 - 1 / (1 + 0.055 * score);
  const value = '∇𝒞 = ' + (score === 0 ? '0.00' : '+' + c.toFixed(2));
  // The value is a live region: it speaks only when it changes
  if (valueEl.textContent !== value) valueEl.textContent = value;
  barEl.style.width = (c * 100) + '%';
  barEl.parentElement.setAttribute('aria-valuenow', c.toFixed(2));
  // Nothing to clear in an empty garden
  const clearBtn = document.getElementById('clearGardenBtn');
  if (clearBtn) clearBtn.hidden = score === 0;
}

// ── Margin stars ─────────────────────────────────────────
// Each is drawn at the middle of its side's gutter, at its height on the
// screen, and moves with the gutter when the window does. A gutter too narrow
// to hold one (phones, tablets) draws none, but keeps them for a wider screen.
// The constellations (delight.js) are drawn from where the stars are drawn.

const starEls = new Map();   // star → its element

function placeStar(star, g = gutters()) {
  const width = star.side === 'left' ? g.left : g.right;
  if (width < CONFIG.stars.gutter) return null;
  return { x: star.side === 'left' ? width / 2 : g.w - width / 2, y: star.yFrac * window.innerHeight };
}

function renderStars(moved = false) {
  const g = gutters();
  const placed = { left: [], right: [] };
  const kept = new Set([...state.heroLeft, ...state.heroRight]);
  for (const [star, el] of starEls) if (!kept.has(star)) { el.remove(); starEls.delete(star); }
  for (const star of kept) {
    let el = starEls.get(star);
    if (!el) { el = createPersistentEmoji(CONFIG.stars.emoji); starEls.set(star, el); }
    const at = placeStar(star, g);
    el.hidden = !at;
    if (!at) continue;
    // the glyph is 30 px; its centre sits 20 px above the point, as the lines do
    el.style.left = (at.x - 15) + 'px';
    el.style.top = (at.y - 35) + 'px';
    placed[star.side].push(at);
  }
  document.dispatchEvent(new CustomEvent('earthstar:stars', { detail: { ...placed, moved } }));
}

// ── Planting ─────────────────────────────────────────────

function createTransientEmoji(x, y) {
  const emoji = document.createElement('div');
  emoji.className = 'emoji-transient';
  drawInto(emoji, CONFIG.transient.emojis[Math.floor(Math.random() * CONFIG.transient.emojis.length)]);
  emoji.style.left = (x - 12) + 'px';
  emoji.style.top = (y - 12) + 'px';
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
    addPlantToFooter();
  }, REDUCED_MOTION ? 400 : 2000);
}

function addPlantToFooter() {
  const emojiChar = CONFIG.footerGarden.emojis[Math.floor(Math.random() * CONFIG.footerGarden.emojis.length)];
  state.footerGarden.push({ emoji: emojiChar, timestamp: Date.now(), isNew: true, isTree: false });
  state.itemsSinceLastTree++;

  // Every 5 plantings, the oldest sprout becomes a tree
  if (state.itemsSinceLastTree >= 5 && state.footerGarden.length > 0) {
    for (let i = 0; i < state.footerGarden.length; i++) {
      if (!state.footerGarden[i].isTree) {
        state.footerGarden[i].emoji = '🌳';
        state.footerGarden[i].isTree = true;
        state.footerGarden[i].isNew = true;
        state.itemsSinceLastTree = 0;
        onTreeGrown();
        break;
      }
    }
  }

  // Over capacity: compost the oldest non-tree first
  while (state.footerGarden.length > CONFIG.footerGarden.max) {
    let removeIdx = state.footerGarden.findIndex(i => !i.isTree);
    if (removeIdx === -1) removeIdx = 0;
    state.footerGarden.splice(removeIdx, 1);
  }

  saveState();
  renderFooterGarden();
  updateCoherenceMeter();
}

// A grown tree releases a butterfly from the footer garden
function onTreeGrown() {
  if (REDUCED_MOTION) return;
  const garden = document.getElementById('footerGarden');
  if (!garden) return;
  const rect = garden.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    setTimeout(() => spawnButterfly(rect.left + rect.width / 2, rect.top), 600);
  }
}

// Remove the oldest non-tree sprout (the gomen crab feeds on these)
export function composteOldestSprout() {
  const idx = state.footerGarden.findIndex(i => !i.isTree);
  if (idx === -1) return false;
  state.footerGarden.splice(idx, 1);
  saveState();
  renderFooterGarden();
  updateCoherenceMeter();
  return true;
}

function createPersistentEmoji(emojiChar) {
  const el = document.createElement('div');
  el.className = 'emoji-persistent';
  drawInto(el, emojiChar);
  document.body.appendChild(el);
  return el;
}

function fadeAwayEmoji(x, y, emojiChar) {
  const el = document.createElement('div');
  el.className = 'emoji-fading';
  drawInto(el, emojiChar);
  el.style.left = (x - 15) + 'px';
  el.style.top = (y - 15) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function renderFooterGarden() {
  const garden = document.getElementById('footerGarden');
  if (!garden) return;
  garden.innerHTML = '';

  const act = COARSE.matches ? 'tap' : 'click';
  if (state.footerGarden.length === 0) {
    const hint = document.createElement('span');
    hint.className = 'footer-garden-hint';
    hint.textContent = act + ' anywhere to plant…';
    garden.appendChild(hint);
    return;
  }

  // Each plant is a button, so the garden can be tended from the keyboard too
  state.footerGarden.forEach((item, index) => {
    const el = document.createElement('button');
    el.type = 'button';
    if (item.isNew) {
      el.className = item.isTree ? 'emoji-footer tree' : 'emoji-footer new';
      item.isNew = false;
    } else {
      el.className = 'emoji-footer';
    }
    drawInto(el, item.emoji);
    el.setAttribute('aria-label', item.isTree ? 'Remove tree' : 'Remove sprout');
    const untilTree = 5 - state.itemsSinceLastTree;
    el.title = (item.isTree ? 'A grown tree. ' : '') + (act === 'tap' ? 'Tap' : 'Click') + ' to remove. ' + untilTree + ' more until the next tree.';
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const tending = garden.contains(document.activeElement);
      state.footerGarden.splice(index, 1);
      if (item.isTree) state.itemsSinceLastTree = 0;
      saveState();
      renderFooterGarden();
      updateCoherenceMeter();
      // whoever was tending from the keyboard keeps their place in the row
      if (tending) garden.querySelectorAll('.emoji-footer')[Math.min(index, state.footerGarden.length - 1)]?.focus();
    });
    garden.appendChild(el);
  });
}

// ── Click routing ────────────────────────────────────────

// The margin a click landed in, if it is one that can hold a star: outside
// the text column of the section clicked (with 8 px of grace beside it), or,
// where there is no column (the cover), within 80 px of the screen's edge.
// Never on a touch screen, and never where the gutter is under 56 px.
function marginSide(e) {
  if (COARSE.matches) return null;
  const inner = e.target.closest('section, footer')?.querySelector(INNERS);
  let side = null;
  if (inner) {
    const t = textEdges(inner);
    if (e.clientX < t.left - 8) side = 'left';
    else if (e.clientX > t.right + 8) side = 'right';
  } else if (e.clientX < 80) side = 'left';
  else if (e.clientX > document.documentElement.clientWidth - 80) side = 'right';
  if (!side) return null;
  const g = gutters();
  return (side === 'left' ? g.left : g.right) >= CONFIG.stars.gutter ? side : null;
}

function handleMarginClick(e, side) {
  const stars = side === 'left' ? state.heroLeft : state.heroRight;
  stars.push({ side, yFrac: e.clientY / (window.innerHeight || 1), timestamp: Date.now() });

  if (stars.length > CONFIG.stars.max) {
    const at = placeStar(stars.shift());
    if (at) fadeAwayEmoji(at.x, at.y - 20, CONFIG.stars.emoji);
  }

  saveState();
  renderStars();
  updateCoherenceMeter();
}

function handleBodyClick(e) {
  // 30% butterfly, 70% sprout (reduced motion or a stilled ground: always sprout)
  if (!REDUCED_MOTION && !isStill() && Math.random() < 0.3) {
    spawnButterfly(e.clientX, e.clientY);
    updateCoherenceMeter();
  } else {
    createTransientEmoji(e.clientX, e.clientY);
  }
}

// True when the click is on (or inside) anything interactive —
// planting must never hijack links, buttons, cards, the panel, or the bar.
function isInteractive(target) {
  return !!target.closest(
    'a, button, input, textarea, select, summary, [role="button"], .wayfinder, ' +
    '.archive-card, .archive-panel, .archive-panel-overlay, dialog, ' +
    '.emoji-footer, .footer-garden, .coherence-meter, .gomen-pic'
  );
}

// ── Init ─────────────────────────────────────────────────

export function initGarden() {
  loadState();
  renderFooterGarden();
  updateCoherenceMeter();
  renderStars();

  // The stars follow the gutters as the window changes shape
  let starFrame = null;
  window.addEventListener('resize', () => {
    if (starFrame === null) starFrame = requestAnimationFrame(() => { starFrame = null; renderStars(true); });
  });
  // a butterfly that flies off takes its share of coherence with it
  document.addEventListener('earthstar:butterflies', updateCoherenceMeter);

  const clearBtn = document.getElementById('clearGardenBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearGarden);

  document.addEventListener('click', (e) => {
    if (isInteractive(e.target)) return;
    if (document.body.classList.contains('panel-open')) return;
    // Don't plant when the user is selecting text
    const sel = window.getSelection();
    if (sel && sel.toString().length > 0) return;

    const side = marginSide(e);
    if (side) handleMarginClick(e, side);
    else handleBodyClick(e);
  });
}
