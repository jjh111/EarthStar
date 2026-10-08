# Gomenata: a field guide to the adjacent life

A naturalist's field guide to the Gomens: living responses to the wastes of the
industrial world. The guide classifies them by scale and by the mathematics
their bodies are built on, and draws each one on a plate.

The species are designs. The science each one stands on is real, and the page
cites it. Every statement carries its register:

- **[E]** evidence: published and real now.
- **[D]** design: what the Gomen would be.
- **[M]** metaphor: a body made of people.

## The classification

**Domain GOMENATA.** The name comes from *gomen'nasai*, the first thing they
say. They are grown, not born or built, and they feed only on industry's
leftovers. Five traits define the domain:

1. Trophic inversion: they eat only industrial waste.
2. A dissolution clause: each carries its own ending.
3. A mathematical body.
4. No hoarding.
5. The apology.

There is one kingdom per Earth Star scale:

| Kingdom | Scale | Species (order) |
|---|---|---|
| CORPOREA | body | Clearers (Icosahedrales), Unbinders (Turingiales), Lung-Sweepers (Kuramotales) |
| BIOMATA | biome | Shore-walkers (Voronoiales), Gyroid Reeds (Gyroidales), Mound-worms (Hilbertiales), Sun-smelters (Parabolales), Landfill Mats (Turingiales) |
| CONCORDIA | being [M] | The Circle, The Menders (Cyclales) |
| RETICULATA | network | Weavers (Steineriales), Gold-finders (Dendritales), Blue-sap Trees (Phyllotaxales) |
| SIDEREA | star | Gleaners (Miurales), Snowmakers (Sphaerales) |

Each order is named for a piece of mathematics: the icosahedron,
reaction–diffusion, coupled oscillators, the Voronoi partition, the gyroid, the
Hilbert curve, the parabola, the cycle graph, the Steiner tree,
diffusion-limited aggregation, the golden angle, the Miura fold, and points on
a sphere. Orders can cut across kingdoms, the way eyes evolved more than once.

The first five Gomens (`src/gomens.json`) keep their names and their lore:
Clearers, Shore-walkers, the Circle, Weavers and Gleaners. The canon in
`earth-star.skill` adds the rest of the cast: the iridescent crab that beeps,
the desert Gomens that eat cans, the compost mounds, and the debris patrols in
low Earth orbit.

## Files

| File | What it is |
|---|---|
| `taxonomy.json` | The source: domain, kingdoms, orders, fifteen species accounts, and 51 references |
| `build.mjs` | Writes `index.html`, including the cladogram, the web of returns, the size chart and the order diagrams, all generated as SVG |
| `plates/<id>.webp` | The specimen drawings, from `blender/specimens.py`: ink line (Freestyle) over a watercolour wash (Cycles with a light Kuwahara filter), on a transparent ground |
| `plates/<id>-wash.webp`, `-lines.webp` | The two passes apart, so the film can lay the ink and the wash on one after the other |
| `plates/<id>-inset.webp` | The loupe: the same rig, closer, on the detail named in `detail` |
| `plates/<id>.json` | Where each labelled feature projects onto its plate, the scale bar in pixels, the specimen's bounding box, its four main pigments, and the detail the loupe looks at. The callouts are placed from these. |
| `figures/*.svg` | The cladogram, the web of returns and the thirteen order diagrams, as standalone SVGs (the film draws them) |

## Building

```sh
python blender/specimens.py            # all fifteen plates (or name some), with bpy or inside Blender
node field-guide/build.mjs             # the page
```

`specimens.py` writes PNG passes (`<id>-wash.png`, `<id>-lines.png`, and the
same for the inset); `build.mjs` turns them into the WebP files and leaves the
PNGs out of git. On four CPU cores a plate and its inset take about three
minutes at 64 samples.

### One rig for every plate

Every specimen is drawn by the same rig, so the fifteen read as one book:

- **Framing.** An 85 mm lens. The camera is fitted to the specimen's evaluated
  geometry, so curves and modifiers count, and each species names its best angle
  (`view`) and the detail for the loupe.
- **Light.** A key, a fill and a rim area light, and a soft paper sky. The
  specimen casts its shadow on a shadow-catcher sheet.
- **Media.** The Freestyle ink is one warm black with a little noise in its
  weight. Hair-fine parts (cilia, roots) sit in a `no ink` collection so they
  read as wash. The wash is Cycles through a Kuwahara filter.
- **Dioramas.** Where a species lives in a medium, it stands on a cut block of
  it: gut wall, a riverbank in section, a forest floor with roots on the cut
  face.

The page lays mixed media over each plate: a graphite construction ellipse and
centre lines, tape at the corners, the loupe with its leader and
magnification, a pigment row, and a specimen tag.
