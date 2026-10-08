// The timeline of "Gomenata", the field-guide film, shared by the picture
// (guide.html) and the score (sound.mjs), so a page turns where it rustles.
export const ORDER = ['clearers', 'unbinders', 'sweepers', 'shorewalkers', 'reeds', 'moundworms', 'smelters', 'mats',
  'circle', 'menders', 'weavers', 'goldfinders', 'bluesap', 'gleaners', 'snowmakers'];

export const PLATE = 4.2;
// within a plate: when each layer of the drawing arrives (seconds from its start)
export const STEP = { turn: [0, 0.6], text: [0.45, 1.7], graphite: [0.6, 1.15], ink: [0.95, 2.05], wash: [1.8, 2.85], marks: [2.55, 3.3], loupe: [2.95, 3.45], tag: [3.25, 3.6] };

export const TL = (() => {
  const t = {};
  t.cover = [0, 6.2];
  t.title = [6.2, 11.6];
  t.preface = [11.6, 20.2];
  t.systema = [20.2, 27.4];
  t.plates = ORDER.map((_, i) => [27.4 + i * PLATE, 27.4 + (i + 1) * PLATE]);
  let x = 27.4 + ORDER.length * PLATE;
  t.scale = [x, x + 9.5];
  x += 9.5;
  t.returns = [x, x + 6.5];
  x += 6.5;
  t.close = [x, x + 7.5];
  t.end = x + 7.5;
  return t;
})();

// moments the score marks
export const TURNS = [TL.title[0], TL.preface[0], TL.systema[0], ...TL.plates.map((p) => p[0]), TL.returns[0]];
export const INKS = TL.plates.map((p) => [p[0] + STEP.ink[0], p[0] + STEP.ink[1]]);
export const WASHES = TL.plates.map((p) => p[0] + STEP.wash[0]);
export const TAGS = TL.plates.map((p) => p[0] + STEP.tag[0]);
