# Earth Star in Blender

The Gomens, modelled from their lore in `src/gomens.json`, and a first scene.
Everything is built by Python scripts, the same way every time. Re-run a script
and you get the same models, so the scripts, not the `.blend` files, are the
source.

| File | What it is |
|---|---|
| `gomens.py` | The five Gomen types, one collection each under a movable empty, plus a studio lineup |
| `scene.py` | *The tide line at dusk*: all five scales in one landscape |
| `gomens.blend`, `tide-line.blend` | The built files, ready to open |
| `models/gomen-*.glb` | One glTF per Gomen, for the web (three.js can load these) |
| `renders/` | `gomens-lineup.png`, `tide-line.png` |

## The Gomens

| Gomen | Scale | How it is built |
|---|---|---|
| **Clearers** | body | A pearl-translucent seed body with gold veins and a lit seed inside. Six fronds open like hands, each ending in three gold fingers, cupping the plastic threads they have gathered. A seedling root trails below. |
| **Shore-walkers** | biome | A crystal dome: a convex hull of grown facets with a thin-film (oil-on-water) coat. A slow furnace glows underneath. Six root-legs split into rootlets where they hold the sand. Eyes on stalks, and gold pincers holding a bottle cap. |
| **The Circle** | being | Eight robed figures, shaped like the script's ankh, holding hands in an unbroken ring around a glowing heart. Its body is people. |
| **Weavers** | network | A knot of hyphae between roots, with branching threads carrying beads of light, and the star it answers to above. |
| **Gleaners** | star | A ribbed seed pod with solar-leaf wings (gold veins, thin film) and a silk net of gleaned debris below. |

All of them share one palette, in `palette()`: the site's dark green, tan and gold, with pearl, clay, root and crystal.

## The tide line at dusk

The scene stacks the five scales into one view:

- **Body:** Clearers glow under the shallows.
- **Biome:** Shore-walkers work the tide line of plastic the sea gave back.
- **Network:** a Weaver knots the roots of the dune's one tree. Its threads run
  down to the shore, carrying light.
- **Being:** the Circle stands on the crest around the heart.
- **Star:** Gleaners drift overhead, with the evening star over the sea.

Each Gomen is built once and placed as **collection instances**, so editing the
source collection, for example to re-pose the Shore-walker, updates every copy.

## Running

In Blender 4.2 or later (written against 5.0):

```sh
blender --background --python blender/gomens.py -- --render
blender --background --python blender/scene.py -- --render
```

You can also open a script in the Scripting workspace and press Run Script.
Without Blender, the `bpy` module from PyPI works too:

```sh
pip install bpy
python blender/scene.py --render
```

Renders use Cycles on the CPU at 128 samples with denoising. On four cores, the
1080p scene takes about 15 minutes.

The scripts are plain `bpy` code. A Blender MCP connected to a local Claude
session can import `gomens` and call its builders, such as `clearers(palette())`,
to add Gomens to any open scene.
