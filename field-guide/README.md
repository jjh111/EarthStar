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
| `plates/<id>.png` | The specimen drawings, from `blender/specimens.py`: ink line (Freestyle) over a watercolour wash (Cycles with a light Kuwahara filter), on a transparent ground |
| `plates/<id>.json` | Where each labelled feature projects onto its plate, and the scale bar in pixels. The callouts are placed from these. |

## Building

```sh
python blender/specimens.py            # all fifteen plates (or name some), with bpy or inside Blender
node field-guide/build.mjs             # the page
```

On four CPU cores, each plate takes about two minutes at 64 samples.
