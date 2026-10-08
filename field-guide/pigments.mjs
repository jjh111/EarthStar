// The watercolour each swatch on a plate is nearest to, so the colour notes read
// the way a naturalist's would: "sap green, the husk". Used by build.mjs (the
// page) and film/guide.html (the film).
export const PIGMENTS = [
  ['chinese white', [236, 232, 220]], ['naples yellow', [238, 206, 140]], ['cadmium yellow', [236, 196, 60]],
  ['shell gold', [214, 170, 70]], ['yellow ochre', [190, 146, 72]], ['raw sienna', [178, 116, 58]],
  ['burnt sienna', [146, 72, 40]], ['raw umber', [112, 94, 66]], ['burnt umber', [88, 58, 38]],
  ['vermilion', [212, 72, 46]], ['alizarin crimson', [158, 32, 46]], ['rose madder', [222, 150, 158]],
  ['indigo', [48, 58, 92]], ['ultramarine', [58, 78, 170]], ['cerulean', [84, 150, 190]],
  ['viridian', [36, 118, 100]], ['cobalt green', [130, 178, 140]], ['sap green', [92, 120, 52]], ['terre verte', [112, 132, 100]],
  ['hooker’s green', [26, 66, 40]], ['payne’s grey', [72, 80, 92]], ['davy’s grey', [128, 126, 116]],
  ['ivory black', [36, 34, 32]],
];

// "redmean": a cheap distance that weights the channels roughly as the eye does
export function pigment([r, g, b]) {
  let best = null, bd = Infinity;
  for (const [name, [R, G, B]] of PIGMENTS) {
    const m = (r + R) / 2, d = (2 + m / 256) * (r - R) ** 2 + 4 * (g - G) ** 2 + (2 + (255 - m) / 256) * (b - B) ** 2;
    if (d < bd) { bd = d; best = name; }
  }
  return best;
}

// what the swatch is of: the material, without its scene prefix or index
export const material = (n) => n.replace(/^(forest floor|gut wall|bank|riverbed|voronoi) /, '').replace(/ \d+$/, '');
