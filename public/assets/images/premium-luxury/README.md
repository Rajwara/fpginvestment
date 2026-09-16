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

The six quality sections below it are waiting on a new set. Each one wants a
single landscape image; drop them in here named after the quality and I will
wire them up:

| Section | File to upload |
| --- | --- |
| 01 Exclusive | `exclusive.jpg` |
| 02 World-Class | `world-class.jpg` |
| 03 Opulent | `opulent.jpg` |
| 04 Refined | `refined.jpg` |
| 05 Scenic | `scenic.jpg` |
| 06 Intricate artistry | `intricate-artistry.jpg` |

Until they land the page draws a brand tile in each slot, so it still reads
end to end.

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
