import { initParallax } from './parallax.js';
import { initArchive } from './archive.js';
import { initGarden } from './garden.js';
import { initTimeOfDay, initConstellations, initGomenCrab } from './delight.js';

// Time-of-day tint first — it changes what the hero looks like
initTimeOfDay();

// Archive immediately: deep links (#doc/...) must resolve on load
initArchive();

// Interaction layers can wait for idle
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
idle(() => {
  initParallax();
  initConstellations(); // must listen before initGarden fires its first stars event
  initGarden();
  initGomenCrab();
});
