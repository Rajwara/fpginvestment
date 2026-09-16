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

The site ships two themes. **Dark is the default** and is what renders before
any JavaScript runs; a visitor's choice is stored in `localStorage` and applied
by an inline script in `<head>` so there is no flash on load.

Both themes share one set of semantic tokens, declared with Tailwind v4's
`@theme` block in `app/globals.css` and re-declared under
`:root[data-theme="light"]`. No component knows which theme is active.

| Token | Role |
| --- | --- |
| `surface`, `surface-2` | Page background and alternating sections |
| `fg`, `fg-2` | Headings and body text (`fg-2` also bases the hairlines) |
| `muted`, `subtle` | Secondary prose and captions |
| `accent-200` … `accent-600` | Gold ramp — fills, borders, eyebrows |
| `font-display` / `font-sans` | Instrument Serif headlines / Inter body |

The accent ramp inverts between themes: on a light surface the pale golds are
unreadable as text, so `accent-200`–`accent-400` darken to carry contrast. Gold
fills use `--color-surface` as their text colour, which is near-white in light
mode, so buttons stay legible in both without a second class.

Sections animate in on scroll: mark a container `data-reveal` and its children
`reveal`. `components/Reveal.tsx` sets `data-shown` via `IntersectionObserver`,
and the whole effect is disabled under `prefers-reduced-motion`.

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
