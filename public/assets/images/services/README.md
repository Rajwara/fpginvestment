# public/assets/images/services/

Everything here is served under `/assets/images/services/` — a file named
`pre-opening.jpg` is available to the site at
`/assets/images/services/pre-opening.jpg`.

## Where this is used

All six service lines now carry their own photography, wired up through
`services` in `lib/site.ts`. Each folder holds one set:

| Slot | Where it appears |
| --- | --- |
| `banner` | the full-bleed page banner |
| `image` | the 16:9 frame at the top of the article |
| `gallery` | the two studies above "What this covers" |
| `wide` | the wide image above "How we work on it" |
| `enquiry` | the background of the enquiry band at the foot of the page |

`banner` and `enquiry` also accept `{ desktop, mobile }` when a set ships a
separate portrait crop for phones — a landscape banner cropped to a phone keeps
only its middle, which is rarely where the subject is. See
`components/BackdropImage`.

To replace a picture, drop the new file in the service's folder and say which
slot it belongs to, or name it after that slot and it places itself.

## Format

| | |
| --- | --- |
| Format | WebP or JPEG; WebP is usually half the size at the same quality |
| Size | At least 1600px on the long edge for anything full-width; 1200px for a half-column image |
| Weight | Whatever the original is — I re-encode a `-web` copy for the site, so upload the best version you have |
| Naming | Name it after the service or section it illustrates, the way the current banners are |

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the files in → Commit to
`main`.
