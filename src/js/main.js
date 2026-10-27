import { initParallax } from './parallax.js';
import { initArchive } from './archive.js';
import { initGarden } from './garden.js';
import { initTimeOfDay, initConstellations, initGomenCrab } from './delight.js';
import { initIdeas } from './ideas.js';
import { initSearch } from './search.js';
import { initSky } from './sky.js';
import { initThread } from './thread.js';
import { initWayfinder } from './wayfinder.js';
import { initTheme } from './theme.js';
import { initStill } from './still.js';
import { initAutomata } from './automata.js';
import { initSeedCopy } from './seed-copy.js';
import { initGomens } from './gomens.js';
import { initWorks, initWorksSearch } from './works.js';

// Theme, stillness and time-of-day first — they change what the page looks like
initTheme();
initStill();
initTimeOfDay();
initSeedCopy();
initGomens();

// Archive, films and ideas immediately: deep links (#doc/…, #film/…, #idea/…)
// must resolve on load. The films' Back listener goes before the ideas'.
initArchive();
initWorks();
initIdeas();
initSearch();
initWorksSearch(); // its groups list after the page's own
initWayfinder(); // listens before the thread names the first section

// The live strip fetches after the page has painted — five requests must not
// compete with the hero image on a slow connection; tiles say "loading" meanwhile
if (document.readyState === 'complete') initSky();
else window.addEventListener('load', initSky, { once: true });

// Interaction and ambience can wait for idle
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
idle(() => {
  initAutomata(); // the ground accretes beneath everything once the page has painted
  initParallax();
  initConstellations(); // must listen before initGarden fires its first stars event
  initGarden();
  initGomenCrab();
  initThread();
});
