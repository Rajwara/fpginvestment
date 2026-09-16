# public/assets/images/premium-luxury/

Everything here is served under `/assets/images/premium-luxury/` — a file named
`suite.jpg` is available to the site at
`/assets/images/premium-luxury/suite.jpg`.

Named with a hyphen rather than a space, like the other folders here. A space
in a path has to be percent-encoded everywhere it is referenced
(`premium%20luxury`), which is easy to get wrong and hard to read in a diff.

## Where this is used

`banner-web.webp` is the page banner on /premium-luxury, and also the banner
on /concept-and-design. Leave it in place.

The six quality sections below it each carry a mood board, wired up in
`luxuryPillars` in `lib/site.ts`:

| Section | Upload | Served copy |
| --- | --- | --- |
| 01 Exclusive | `Exclusive.webp` | `exclusive-web.webp` |
| 02 World-Class | `World-Class.webp` | `world-class-web.webp` |
| 03 Opulent | `Opulent.webp` | `opulent-web.webp` |
| 04 Refined | `Refined.webp` | `refined-web.webp` |
| 05 Scenic | `Scenic.webp` | `scenic-web.webp` |
| 06 Intricate artistry | `Intricate artistry.webp` | `intricate-artistry-web.webp` |

The page reads the `-web` copy. Replacing a section's artwork means dropping
the new file in and re-encoding it to that name — the upload itself is never
referenced, so its own name does not matter.

## Format

| | |
| --- | --- |
| Format | WebP or JPEG; WebP is usually half the size at the same quality |
| Size | At least 1600px on the long edge for anything full-width; 1200px for a half-column image |
| Weight | Under about 400KB each — say so if a hero needs more |
| Naming | If each image belongs to a particular card or section, name it after that, the way the service banners are |

Naming files after the thing they illustrate is what made the last two
batches quick to place: the six service images mapped straight onto their
cards without anyone having to say which was which.

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the files in → Commit to
`claude/gallant-dijkstra-eqjoyy`.
