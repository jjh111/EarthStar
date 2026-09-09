import { initParallax } from './parallax.js';
import { initArchive } from './archive.js';
import { initGarden } from './garden.js';
import { initTimeOfDay, initConstellations, initGomenCrab } from './delight.js';
import { initIdeas } from './ideas.js';
import { initSearch } from './search.js';
import { initSky } from './sky.js';
import { initThread } from './thread.js';
import { initTheme } from './theme.js';

// Theme and time-of-day first — they change what the page looks like
initTheme();
initTimeOfDay();

// Archive and ideas immediately: deep links (#doc/…, #idea/…) must resolve on load
initArchive();
initIdeas();
initSearch();

// The live strip fetches after the page has painted — five requests must not
// compete with the hero image on a slow connection; tiles say "loading" meanwhile
if (document.readyState === 'complete') initSky();
else window.addEventListener('load', initSky, { once: true });

// Interaction and ambience can wait for idle
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
idle(() => {
  initParallax();
  initConstellations(); // must listen before initGarden fires its first stars event
  initGarden();
  initGomenCrab();
  initThread();
});
