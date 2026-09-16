# Blog images

Cover images for the posts listed under `insights` in `lib/site.ts`.

Each post uses one image in two places: the card on `/blogs` and the header of
`/blogs/<slug>`. Name the file after the post slug so the two stay in step.

## Slots

| File | Used by |
| --- | --- |
| `<slug>.jpg` / `.png` / `.webp` | the post card and its page header |

Current slugs: `brand-or-independent`, `designing-for-operators`,
`pre-opening-critical-path`, `reading-a-hotel-pl`, `turnaround-first-90-days`.

## Shape

Landscape, 16:9 or wider, at least 1600px on the long edge. Cards crop to
16:9; the page header crops wider, so keep the subject away from the edges.

## Before use

Upload the original here, then add an optimised `-web.webp` copy beside it and
point `lib/site.ts` at that. Originals stay in the repo but are left out of the
preview build.
