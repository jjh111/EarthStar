# Earth Star — data branch (stage B)

Byte-for-byte copies of the NOAA SWPC payloads The Viewer reads,
refreshed by `.github/workflows/data-mirror.yml` — nominally every
half hour, in practice every 2-5 hours, because GitHub delays
scheduled workflows on public repositories.
Long fast-moving arrays are cut to their newest rows; archives are
copied whole. Every record keeps upstream's own timestamps.

The Viewer reads this **only** when NOAA itself is unreachable. It is
not a cache in front of upstream and must not be used as one.

Generated. Force-pushed. Do not commit here by hand.
