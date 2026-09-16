# public/

Static files served from the site root. A file here at `public/logo.svg` is
served at `/logo.svg`.

## Logo files to upload

Drop the logo in this folder using these exact names so it gets picked up
without renaming anything:

| File | Required? | Used for |
| --- | --- | --- |
| `logo.svg` | **yes** | Header and footer lockup (mark + wordmark) |
| `logo-light.svg` | only if needed | Light-theme variant — see below |
| `logo-mark.svg` | optional | Square mark alone, used for the favicon |

`.png` works too (`logo.png`), but SVG stays sharp at every size and on
retina screens. If you upload PNG, please make it at least 3x the display
size — the header lockup renders at roughly 150x40, so 450x120 or larger.

## About the two themes

The site has a dark theme (default) and a light theme, so the logo sits on a
near-black background *and* a near-white one. Three ways to handle it, best
first:

1. **One SVG that adapts.** If the logo is a single colour, set its fills to
   `currentColor` in the SVG source and it will follow the theme
   automatically. Upload `logo.svg` only.
2. **Two files.** Upload `logo.svg` (the version for dark backgrounds) and
   `logo-light.svg` (for light backgrounds). The site will swap them with the
   theme.
3. **One fixed-colour file.** Upload `logo.svg` alone. It will be used on both
   themes — fine if the logo reads on both, but check it on white.

## Uploading from GitHub

Open the repo → `public/` → **Add file → Upload files** → drag the file in →
Commit to `claude/gallant-dijkstra-eqjoyy`.

Tell me once it is pushed and I will wire it into the header, the footer and
the favicon, then republish the preview.
