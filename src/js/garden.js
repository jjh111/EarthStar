// Emoji garden — click to plant sprouts, grow trees, place stars in the margins.
// State persists in localStorage. Also feeds the footer coherence meter and
// the margin-star constellations.

import { spawnButterfly, clearButterflies, butterflyCount } from './butterflies.js';

const CONFIG = {
  stars: { emoji: '✦', max: 8 },
  transient: { emojis: ['🌱', '🌿', '🌸'] },
  footerGarden: { emojis: ['🌱', '🌿', '🌸'], max: 14 }
};

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        heroLeft: s.heroLeft || [],
        heroRight: s.heroRight || [],
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

function saveState() {
  try {
    localStorage.setItem('earthStarGarden', JSON.stringify(state));
  } catch (e) { /* storage unavailable — garden lives for this visit only */ }
}

export function clearGarden() {
  localStorage.removeItem('earthStarGarden');
  state = { heroLeft: [], heroRight: [], footerGarden: [], itemsSinceLastTree: 0 };
  clearButterflies();
  document.querySelectorAll('.emoji-persistent, .emoji-fading').forEach(el => el.remove());
  renderFooterGarden();
  updateCoherenceMeter();
  notifyStarsChanged();
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
  valueEl.textContent = '∇𝒞 = ' + (score === 0 ? '0.00' : '+' + c.toFixed(2));
  barEl.style.width = (c * 100) + '%';
  barEl.parentElement.setAttribute('aria-valuenow', c.toFixed(2));
}

// ── Constellation hook (delight.js listens) ─────────────

function notifyStarsChanged() {
  document.dispatchEvent(new CustomEvent('earthstar:stars', {
    detail: { left: state.heroLeft, right: state.heroRight }
  }));
}

// ── Planting ─────────────────────────────────────────────

function createTransientEmoji(x, y) {
  const emoji = document.createElement('div');
  emoji.className = 'emoji-transient';
  emoji.textContent = CONFIG.transient.emojis[Math.floor(Math.random() * CONFIG.transient.emojis.length)];
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

function createPersistentEmoji(x, y, emojiChar, offsetY = 0) {
  const el = document.createElement('div');
  el.className = 'emoji-persistent';
  el.textContent = emojiChar;
  el.style.left = (x - 14) + 'px';
  el.style.top = (y - 14 + offsetY) + 'px';
  document.body.appendChild(el);
  return el;
}

function fadeAwayEmoji(x, y, emojiChar) {
  const el = document.createElement('div');
  el.className = 'emoji-fading';
  el.textContent = emojiChar;
  el.style.left = (x - 14) + 'px';
  el.style.top = (y - 14) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function renderFooterGarden() {
  const garden = document.getElementById('footerGarden');
  if (!garden) return;
  garden.innerHTML = '';

  if (state.footerGarden.length === 0) {
    garden.innerHTML = '<span class="footer-garden-hint">click anywhere to plant...</span>';
    return;
  }

  state.footerGarden.forEach((item, index) => {
    const el = document.createElement('span');
    if (item.isNew) {
      el.className = item.isTree ? 'emoji-footer tree' : 'emoji-footer new';
      item.isNew = false;
    } else {
      el.className = 'emoji-footer';
    }
    el.textContent = item.emoji;
    const untilTree = 5 - state.itemsSinceLastTree;
    el.title = (item.isTree ? 'A grown tree. ' : '') + 'Click to remove. ' + untilTree + ' more until next tree.';
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      state.footerGarden.splice(index, 1);
      if (item.isTree) state.itemsSinceLastTree = 0;
      saveState();
      renderFooterGarden();
      updateCoherenceMeter();
    });
    garden.appendChild(el);
  });
}

// ── Click routing ────────────────────────────────────────

function handleMarginClick(e, isLeft) {
  const x = isLeft ? 40 : window.innerWidth - 40;
  const y = e.clientY;
  const side = isLeft ? 'heroLeft' : 'heroRight';

  if (!state[side]) state[side] = [];
  state[side].push({ x, y, timestamp: Date.now() });

  if (state[side].length > CONFIG.stars.max) {
    const old = state[side].shift();
    fadeAwayEmoji(old.x, old.y, CONFIG.stars.emoji);
  }

  createPersistentEmoji(x, y, CONFIG.stars.emoji, -20);
  saveState();
  updateCoherenceMeter();
  notifyStarsChanged();
}

function handleBodyClick(e) {
  // 30% butterfly, 70% sprout (reduced motion: always sprout)
  if (!REDUCED_MOTION && Math.random() < 0.3) {
    spawnButterfly(e.clientX, e.clientY);
    updateCoherenceMeter();
  } else {
    createTransientEmoji(e.clientX, e.clientY);
  }
}

// True when the click is on (or inside) anything interactive —
// planting must never hijack links, buttons, cards, or the panel.
function isInteractive(target) {
  return !!target.closest(
    'a, button, input, textarea, select, summary, [role="button"], ' +
    '.archive-card, .archive-panel, .archive-panel-overlay, ' +
    '.emoji-footer, .footer-garden, .coherence-meter'
  );
}

// ── Init ─────────────────────────────────────────────────

export function initGarden() {
  loadState();
  renderFooterGarden();
  updateCoherenceMeter();
  notifyStarsChanged();

  // Restore margin stars
  state.heroLeft.forEach(item => createPersistentEmoji(item.x, item.y, CONFIG.stars.emoji, -20));
  state.heroRight.forEach(item => createPersistentEmoji(item.x, item.y, CONFIG.stars.emoji, -20));

  const clearBtn = document.getElementById('clearGardenBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearGarden);

  document.addEventListener('click', (e) => {
    if (isInteractive(e.target)) return;
    if (document.body.classList.contains('panel-open')) return;
    // Don't plant when the user is selecting text
    const sel = window.getSelection();
    if (sel && sel.toString().length > 0) return;

    if (e.clientX < 80) {
      handleMarginClick(e, true);
    } else if (e.clientX > window.innerWidth - 80) {
      handleMarginClick(e, false);
    } else {
      handleBodyClick(e);
    }
  });
}
