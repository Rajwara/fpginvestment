# public/assets/images/our-team/

Portraits of the team. Everything here is served under
`/assets/images/our-team/` — a file named `saeed-ahmed.webp` is available to
the site at `/assets/images/our-team/saeed-ahmed.webp`.

Used in two places: the cards in the About page's team section, and the
full-width rows on the Our Team page.

## The one thing worth getting right

The three current portraits do not match each other. Abid Yousaf's is a
location shot taken in an office; the other two are studio cutouts on a flat
purple background. The site handles both — a `photoBleed` flag in
`lib/site.ts` decides whether a portrait fills its panel or sits centred on
the accent colour — but the cards read as a set only when the portraits were
shot the same way.

If new portraits are coming, shoot or crop all three alike. Either treatment
works; consistency is what matters.

## File requirements

| | |
| --- | --- |
| Format | WebP or JPEG |
| Size | At least 1000px on the long edge — the team page runs a portrait up to 720px wide |
| Framing | Head and shoulders, subject centred, with room to crop to both 4:3 and a taller panel |
| Background | Either the brand purple (`#604a9f`) as a flat cutout, or a real setting — but the same choice for everyone |

The current cutouts are 385x365, which is why they cannot be used any larger
than they are today.

## Adding a portrait to the site

The team list lives in `lib/site.ts`. Each person carries a `photo` path and a
`photoBleed` flag; point the path at the new file and set `photoBleed: true`
for a location shot, `false` for a cutout on purple.

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the files in → Commit to
`main`.
