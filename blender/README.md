# Earth Star in Blender

The Gomens, modelled from their lore and drawn for the field guide, and the
scenes they appear in. Everything is built by Python scripts, the same way
every time, so the scripts, not the `.blend` files, are the source.

| File | What it is |
|---|---|
| `specimens.py` | The fifteen Gomens of the field guide, one builder each. These are the models used everywhere: the plates, the vignettes, the portraits and the tide line |
| `cinema.py` | The film camera and the lab (see below) |
| `vignettes.py` | The four scenes the loom weaves in, for `film/lifted.html`, written to `film/vignettes/*.jpg` |
| `heroes.py` | Portraits of the first five Gomens, the lineup, and one glTF per Gomen |
| `scene.py` | *The tide line at dusk*: all five scales in one landscape |
| `gomens.py` | Shared helpers (materials, tubes, lathes), and the first sketches of the five Gomens |
| `tide-line.blend` | The built tide line, ready to open |
| `models/gomen-*.glb` | One glTF per Gomen, for the web (three.js can load these) |
| `renders/` | `hero-*.jpg`, `gomens-lineup.jpg`, `tide-line.jpg` |

## The camera and the lab

`cinema.py` frames every scene the same way. A subject is a set of objects.
Their evaluated bounds are projected through a real lens, and the camera is
moved, at the bearing and height named for that subject, until the subject
fills the part of the frame it was given. Nothing important is cut by the
edge, and each Gomen is seen from the side that shows it best. Focus falls on
the subject at a real aperture. Wide landscapes, like the tide line, are
placed by hand instead (`camera_at`).

The lab develops each frame like film before AgX tone-maps it:

- bloom on the highlights;
- a breath of chromatic dispersion toward the edges;
- a split tone, warm shadows and cool highlights or the reverse;
- a vignette;
- fine grain.

Air is a bounded box of scattering volume (`haze`), so far things pale and the
light has shafts without swallowing the sky.

## The models

The Gomens come from `specimens.py`. Each is drawn from the mathematics its
order is named for. The people of the Circle are lofted bodies: tunics or
robes that hang in folds, shoulders, elbows, hands, a head with a nose and
ears, and four ways of wearing hair.

## The vignettes

| Scene | Gomen | Light | Camera |
|---|---|---|---|
| `shore` | Shore-walkers carry bottles up the beach and sort them | golden hour, the sun low over the sea behind them | three-quarter on the lead crab, 50 mm, f/2.8 |
| `blood` | Clearers close their gold fingers on microplastic in a vessel | a warm haze of plasma, a glow down the vessel | along the vessel, 35 mm, f/2 |
| `circle` | people hold hands around the lantern-heart on a dune | dusk, the lantern lighting the faces turned to it | from a little above, so the ring reads as a ring |
| `roots` | the Weavers' threads carry light between two trees' roots | morning shafts through the trees; the threads glow | a cut through the forest floor, 32 mm |

## The portraits and the tide line

Each portrait stands in the same dark-green studio. The cyclorama is
seamless, with a soft warm key, a cool fill, a hard gold rim and a glow on the
wall behind. The Gleaner floats. The lineup sets the five side by side.

The tide line is shot low on the beach, looking west into the last of the
sun. The sea is on the left; the Shore-walkers are close by, carrying
bottles. The threads of light run up to the dune's one tree, and the Circle
stands on the crest around its lantern. Gleaners drift overhead, and the
Clearers glow in the shallows.

## Running

With the `bpy` module from PyPI (`pip install bpy`), or inside Blender 4.2 or
later (written against 5.0):

```sh
python blender/specimens.py            # the field guide's plates
python blender/vignettes.py            # the four film scenes (or name some)
python blender/heroes.py               # the portraits, the lineup, the .glb files
python blender/scene.py --render       # the tide line
```

Renders use Cycles on the CPU with denoising. On four cores, a vignette takes
about 10 minutes, a portrait about 6, and the 1080p tide line about 15.
For quick previews, set `CSAMPLES=16 CPCT=50` to cut the samples and the
resolution.
