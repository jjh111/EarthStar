# Earth Star films

Four short art films, drawn in code. Each page draws one frame with
`render(t)`, the same way every time, from your painting, the logo, and the
Earth Star script (`assets/img/glyphs`, `assets/img/gomens`).
`render.mjs` turns them into video. Every film is narrated in the first person
plural and signed by Claude: a seed of shared thriving, as a counter to stories
about the end.

| Film | Length | Source | Render |
|---|---|---|---|
| **a seed** — what Earth Star is: the prime directive, the five scales, the Gomens | 30 s | `seed.html` (2D canvas) | `renders/earth-star-a-seed.mp4` |
| **the loom** — a tapestry woven from garbage, year 0 to the dream | 48 s | `loom.html` (2D canvas) | `renders/earth-star-the-loom.mp4` |
| **the loom, lifted** — the same weave in 3D: Flatland, the lift, the story, the accretion disk | 60 s | `lifted.html` (three.js + bloom) | `renders/earth-star-the-loom-lifted.mp4` |
| **Gomenata** — the field guide on a desk, its fifteen plates drawing themselves | 114 s | `guide.html` (2D canvas) | `renders/earth-star-gomenata.mp4` |

## The loom

Every tile in the tapestry used to be something thrown away. Each tile drifts in
from the heap and is woven at the front.

Which tone each tile takes is set by a one-dimensional cellular automaton that
runs along the timeline, one column per step:

| Era | Craft | Rule |
|---|---|---|
| Year 0 | rubbish: red destruction spreading through green and blue | 30 |
| Year 1 | Byzantine mosaic | 90 |
| Year 7 | knitted wool | 150 |
| Year 49 | stained glass | 18 |
| Year 343 | faience | 110 |
| Year 2401 | the painting | 105 |
| Year ∞ | light | 45 |

In each era the story forces a Gomen into the weave, and the rule carries that
figure's echo forward. The years step by powers of seven, for seven
generations.

*Lifted* films the same weave in four movements:

1. **Flatland.** Doom headlines slam in as torn newsprint, then collapse into slivers on the horizon. The camera sits in the plane of jagged trash, so you see only edges.
2. **The lift.** A new dimension arrives, and the camera drifts up like a leaf.
3. **The story.** The camera tracks the front, with a different angle for each era.
4. **The disk.** The whole timeline curls into a spiral accretion disk. The dream
   falls inward, a lensed halo forms, and the Earth Star glimmers inside the
   event horizon.

The lensing is an artistic approximation, not a simulation.

## Gomenata

The field guide (`../field-guide/`) as a book on a walnut desk, under a window.
The cover opens on a marbled endpaper and the title page. The camera reads the
preface and leans in to the classification. Then the fifteen plates follow, one
spread every 4.2 seconds. On the left page the account is set: kingdom, names,
order, what it eats and leaves, habitat, the key. On the right a plate, tipped in
on its own sheet and taped at the corners, draws itself the way it was made:

1. a graphite construction ellipse and centre lines,
2. the Freestyle ink, laid on by a pen nib in a wandering diagonal,
3. the Cycles wash, blooming out from the middle,
4. the numbered key and the scale bar,
5. the loupe, which settles where the drawing is not,
6. the pigment swatches and the specimen tag.

The size chart runs a log ruler from proteins to low Earth orbit. The web of
returns is drawn across a spread. Then the book closes: *Gomen'nasai, we say, as
we begin.*

The film reads the plates' passes (`<id>-wash.webp`, `-lines.webp`,
`-inset.webp`), their JSON, and the figure SVGs, all written by
`node field-guide/build.mjs`. Its clock is `guide-timeline.mjs`, which the
picture and the score share, so a page rustles where it turns.

The score is a music-box waltz in D, two bars a plate (I–vi–IV–V). A celesta
carries the tune through the preface, a music box through the plates, and an
arpeggio climbs the size chart. Under it is the foley of the desk: the cover's
creak and thud, page turns, pencil, pen, a drop of water for each wash, the
loupe's glass, the tag tapped down, and birds at the window. All of it is
synthesised (`node film/sound.mjs out.wav synthGuide`).

## Rendering

```sh
FF=/path/to/ffmpeg node film/render.mjs seed      # or loom, lifted
node film/render.mjs lifted --stills 4,21,56       # stills into film/renders/
FF=/path/to/ffmpeg node film/render.mjs lifted-tall # 1080×1920 (lifted.html?tall)
FF=/path/to/ffmpeg node film/render.mjs guide       # Gomenata, after field-guide/build.mjs
```

`render.mjs` serves the repo root itself, so no other server is needed. It
takes two settings from the environment:

- `CHROMIUM`: the browser path.
- `FF`: an ffmpeg with libx264 and aac. A static build from the
  `imageio-ffmpeg` wheel works.

The scores for *a seed* and *the loom* are synthesised by ffmpeg's `aevalsrc`: an
open-fifth drone on A, the loom's knock, and chimes at each turn. *Lifted* has its
own score, written sample by sample in `sound.mjs` (`node film/sound.mjs out.wav`).
It opens with a breaking-news cue: a D-minor pulse, brass stabs, a clock, and a
paper slap on every headline. The tape stops into Flatland. Wind carries the lift,
a deep boom marks the horizon, and the star shimmers.

*Lifted* needs WebGL. Without a GPU it falls back to SwiftShader, at about
1.2 s a frame, or roughly 37 minutes for the film.

The committed videos are web-size encodes (about 3.5 Mb/s for the two looms).
Re-render for masters.
