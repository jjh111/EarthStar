import { initTheme } from './theme.js';
import { initParallax } from './parallax.js';
import { initArchive } from './archive.js';
import { initGarden } from './garden.js';
import { initTimeOfDay, initConstellations, initGomenCrab } from './delight.js';
import { initAutomata } from './automata.js';

// Theme first — the canvas painters read the palette from it
initTheme();

// Time-of-day tint next — it changes what the vista looks like
initTimeOfDay();

// Archive immediately: deep links (#doc/...) must resolve on load
initArchive();

// The automata ground is behind everything; start it before idle
initAutomata();

// Interaction layers can wait for idle
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
idle(() => {
  initParallax();
  initConstellations(); // must listen before initGarden fires its first stars event
  initGarden();
  initGomenCrab();
});
