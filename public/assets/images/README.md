# public/assets/images/

Everything here is served under `/assets/images/`. Upload artwork to this
folder — a file named `logo.svg` here is available to the site at
`/assets/images/logo.svg`.

## Logo files

Use these exact names so the logo is picked up without renaming anything:

| File | Required? | Used for |
| --- | --- | --- |
| `logo.svg` | **yes** | Header and footer lockup (mark + wordmark) |
| `logo-light.svg` | only if needed | Light-theme variant — see below |
| `logo-mark.svg` | optional | Square mark alone, used for the favicon |

`.png` works too (`logo.png`), but SVG stays sharp at every size and on retina
screens. If you upload PNG, make it at least 3x the display size — the header
lockup renders at roughly 150x40, so 450x120 or larger.

## About the two themes

The site has a dark theme (default) and a light theme, so the logo sits on a
near-black background *and* a near-white one. Three ways to handle it, best
first:

1. **One SVG that adapts.** If the logo is a single colour, set its fills to
   `currentColor` in the SVG source and it will follow the theme
   automatically. Upload `logo.svg` only.
2. **Two files.** Upload `logo.svg` (for dark backgrounds) and
   `logo-light.svg` (for light backgrounds). The site swaps them with the
   theme.
3. **One fixed-colour file.** Upload `logo.svg` alone. It will be used on both
   themes — fine if the logo reads on both, but check it on white.

## Other artwork

Photography and other images go in this folder too. Useful ones to add:

| File | Used for |
| --- | --- |
| `mega-menu.jpg` | Feature image in the About Us mega menu (4:3, ~800x600) |
| `hyatt-lahore.jpg` | Hero image on the Hyatt Regency Lahore page (16:9) |
| `og-image.jpg` | Link preview card for social sharing (1200x630) |

Reference them in code through `next/image` so they are optimised and lazy
loaded.

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the file in → Commit to
`main`.
