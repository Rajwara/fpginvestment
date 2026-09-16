# public/assets/images/brands/

Brand and operator logos. Everything here is served under
`/assets/images/brands/` — a file named `hyatt.png` is available to the site at
`/assets/images/brands/hyatt.png`.

## What goes here

The logos of the brands and operators FP Global works alongside — the ones
shown in the "Our Mission" partner slider on the homepage and in the
Our Partners strip of the About Us mega menu.

## File requirements

| | |
| --- | --- |
| Format | SVG first choice; PNG with a transparent background otherwise |
| Background | Transparent — the slider sits on the page surface, not on white |
| Padding | None. Trim to the mark itself; the layout adds its own spacing |
| Size | PNG at roughly 400–600px wide is plenty. Avoid whitespace-heavy exports |

Whitespace around a logo is the usual cause of a partner strip that looks
unevenly spaced: each mark ends up a different visual size even though the
files are the same width.

## Adding a logo to the site

Uploading a file here does not put it on the page on its own. The partner list
lives in `lib/site.ts`:

```ts
export const partners = [
  { name: "Hyatt", logo: "/assets/images/brands/hyatt.png" },
  ...
];
```

Add an entry with the brand's name and the path to its file, and it appears in
both the homepage slider and the mega menu.

## Uploading from GitHub

Open this folder → **Add file → Upload files** → drag the files in → Commit to
`main`.
