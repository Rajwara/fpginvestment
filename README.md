# FP Global

Marketing site for FP Global, a hospitality development and management company.
Built with Next.js (App Router), TypeScript and Tailwind CSS v4, and deployable
to Vercel with zero configuration.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve the production build
```

## Deploying to Vercel

The project needs no `vercel.json` and no environment variables. Import the
repository at [vercel.com/new](https://vercel.com/new) — Vercel detects Next.js,
runs `npm run build`, and every push to the branch gets a preview URL.

## Structure

```
app/
  layout.tsx            Root layout: fonts, metadata, theme script, header/footer
  page.tsx              Home — hero, services, approach, insights, CTA
  about/                Who we are, six services, history, principles
  services/[id]/        Service detail (6 pages)
  team/                 Leadership
  blogs/ + [slug]/      News & insights index and articles
  careers/ + [slug]/    Open roles and job detail
  hyatt-lahore/         Flagship property
  faq/ privacy/ terms/  FAQs and legal pages
  contact/              Enquiry form and office
  globals.css           Design tokens for both themes, base styles, animations
components/             Header (+ mega menu), footer, sections, form, icons
lib/site.ts             All copy: services, team, blogs, jobs, FAQs, nav, footer
lib/theme.ts            Theme constants and the no-flash init script
```

All content lives in `lib/site.ts`. Editing that one file updates the homepage,
the mega menu, the service pages, the footer and the blog list together.

## Design system

Brand colours are **#604A9F** (purple) and **#000000** (black). The site ships
two themes. **Light is the default** and is what renders before any JavaScript
runs; a visitor's choice is stored in `localStorage` and applied by an inline
script in `<head>` so there is no flash on load.

Both themes share one set of role-based tokens, declared with Tailwind v4's
`@theme` block in `app/globals.css` and re-declared under
`:root[data-theme="dark"]`. No component knows which theme is active.

| Token | Role |
| --- | --- |
| `surface`, `surface-2` | Page background and alternating sections (`surface-2` is a pale tint of the brand purple in light, a purple-black in dark) |
| `fg`, `fg-2` | Headings and body text (`fg-2` also bases the hairlines) |
| `muted`, `subtle` | Secondary prose and captions |
| `accent`, `accent-2` | Filled surfaces — the two ends of the button gradient |
| `on-accent` | Text sitting on an accent fill |
| `accent-fg` | Accent-coloured text and icons on the page surface |
| `font-display` / `font-sans` | Plus Jakarta Sans headings / DM Sans body |

The accent is split by role rather than into a numeric ramp because purple
needs opposite lightness depending on the job. On black, #604A9F only reaches
3:1 as text, so `accent-fg` lightens to #A896D0 (7.9:1) in the dark theme
while `accent` lightens just enough to clear 3:1 against the background.
Every pairing above meets WCAG AA.

Sections animate in on scroll: mark a container `data-reveal` and its children
`reveal`. `components/Reveal.tsx` sets `data-shown` via `IntersectionObserver`,
and the whole effect is disabled under `prefers-reduced-motion`.

## Buttons

`components/MaskButton.tsx` renders the CSS-mask sweep used for every call to
action. Buttons are rounded rectangles (12px), filled with a left-to-right
brand gradient from `accent` to `accent-2`; the mask sweeps a deeper gradient
over it. White text clears 4.5:1 against both ends of both themes' gradients.
The `onAccent` variant exists for buttons sitting on an accent-filled surface,
where a purple fill would vanish. `public/assets/images/mask-sprite.svg` is a filmstrip of 23 alpha
frames; the fill layer is scaled to 2300% and its mask position is stepped
across the strip, so the colour arrives as an organic wipe rather than a fade.

Two details that matter if you edit it:

- The sweep is a stepped **transition**, not a pair of keyframe animations. It
  reverses by itself on pointer-out and nothing plays on page load.
- The sprite carries `preserveAspectRatio="none"`. Without it the browser
  scales the 2300x40 artwork uniformly inside the 2300%-wide mask box and
  centres it, leaving the outer thirds empty — the fill then vanishes past
  roughly 75% of the sweep.

The label is rendered twice, once in the resting colour and once inside the
masked layer, so the text is revealed along with the fill. The masked copy is
`aria-hidden` so the accessible name is not duplicated.

## Header

`components/SiteHeader.tsx` floats as an inset glass pill at the top of the
page and docks to a full-width bar once the page scrolls past 24px, animating
max-width, radius, padding and background together. Opening the mega menu or
the mobile menu docks it too, so the panels always have full width to lay out
in.

## Office locations

`/contact` renders `offices` from `lib/site.ts`. Entries with `status: "open"`
get a full card; `status: "planned"` entries render as dashed empty slots that
carry no city or address, so the page never announces an office that does not
exist yet.

To open a location: flip `status` to `"open"`, fill in `city`, `lines`,
`phone` and `mapUrl`, and give it a real `tag`. To drop a slot, delete the
entry — the grid and the "N open / N in planning" count both follow the data.

## Logo

`public/assets/images/` holds both lockups, named for the background they sit
on: `logo-on-light.webp` (dark ink) and `logo-on-dark.webp` (white ink).
`components/Logo.tsx` ships both and swaps them with CSS rather than
JavaScript, so the right one is painted on the first frame.


## Navigation

`components/MegaMenu.tsx` renders the About Us mega menu in three zones — Who We
Are over a feature image, the six service lines three per column, and a contact
panel — with a partners strip beneath. It opens on hover or click, closes on
Escape or navigation, and collapses to an accordion inside the mobile menu.


## Known placeholders

- **Contact form** is front-end only. `components/ContactForm.tsx` handles
  submit in the browser; wire it to an API route or CRM before going live.
- **Figures are illustrative.** Metrics, team, partners and office details in
  `lib/site.ts` are placeholder content.
- **Blog and job pages** use stand-in body copy; only titles, excerpts and
  metadata come from `lib/site.ts`.
- **Privacy Policy and Terms** are section scaffolds, not reviewed wording.
- **Imagery** is drawn as SVG placeholders — the mega menu feature panel expects
  a real property photograph.
