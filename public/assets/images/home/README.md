# public/assets/images/home/

Imagery for the homepage. Everything here is served under
`/assets/images/home/` — a file named `hero-1.jpg` is available to the site at
`/assets/images/home/hero-1.jpg`.

## What the homepage uses today

| Slot | Where | Shape | Currently |
| --- | --- | --- | --- |
| Hero slides | The banner at the top | 1900x1000 or wider | `fpginvestment_banner_img1.jpg`, `..._img2.jpg` |
| Mission inline | The three small circles set into the Our Mission headline | Square, 400x400 | Three reused service photos |
| Mission collage | The Mission and Goals band | 600x600 | `MissionAndGoals-*` |
| Service cards | Professional Guidance | 600x340 | `ProfessionalGuidanceimg-*` |
| Hyatt feature | The Hyatt Regency band | 850x550 or wider | `home-hayyat-regency.jpg` |
| Blog thumbnails | News & Insights | 600x340 | Reused service photos |

## Two things worth knowing

**The hero needs real width.** It is full-bleed, so anything under about
1800px will look soft on a large screen. Only the two banner files clear that
today, and one of them is a composite with a decorative arc through it.

**`home-hayyat-regency.jpg` is not the Hyatt.** Despite the filename it is
generic office stock — two people with a tablet. If you have a photograph of
the property it belongs here.

Several photos are used in more than one place because the library is small.
Anything you add here reduces that.

## Format

JPEG for photography at roughly 80–85% quality. Keep files under about 400KB;
a 1600px JPEG at that quality is usually 150–250KB. The hero may run larger.

## Adding an image to the site

Homepage imagery is referenced from `lib/site.ts` (`missionCollage`,
`missionInline`, `services`, `insights`) and from the components in
`components/` for the hero and the Hyatt band.

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the files in → Commit to
`claude/gallant-dijkstra-eqjoyy`.
