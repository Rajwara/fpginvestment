# FPG Investment

Marketing site for FPG Investment, a multi-strategy asset manager. Built with
Next.js (App Router), TypeScript and Tailwind CSS v4, and deployable to Vercel
with zero configuration.

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
  layout.tsx            Root layout: fonts, metadata, header/footer, reveal observer
  page.tsx              Home — hero, strategies, approach, track record, insights, CTA
  strategies/           Strategy detail page
  insights/             Insights index and [slug] article pages
  firm/                 Firm, leadership, history, principles
  contact/              Contact form and offices
  globals.css           Design tokens (@theme), base styles, animations
  icon.svg              Favicon
components/             Section components, header, footer, chart, form
lib/site.ts             All copy, metrics, strategies, team and insights data
```

All content lives in `lib/site.ts`. Editing that one file updates the
homepage, the strategy pages, the footer and the insights list together.

## Design system

Tokens are defined with Tailwind v4's `@theme` block in `app/globals.css`:

| Token group | Purpose |
| --- | --- |
| `ink-950` → `ink-600` | Surfaces, darkest to lightest |
| `bone-50` → `bone-500` | Text, warm off-white to muted |
| `gold-200` → `gold-600` | Accent for eyebrows, CTAs and data |
| `font-display` | Instrument Serif — headlines only |
| `font-sans` | Inter — everything else |

Sections animate in on scroll: mark a container `data-reveal` and its children
`reveal`. `components/Reveal.tsx` sets `data-shown` via `IntersectionObserver`,
and the whole effect is disabled under `prefers-reduced-motion`.

## Known placeholders

- **Contact form** is front-end only. `components/ContactForm.tsx` handles
  submit in the browser; wire it to an API route or CRM before going live.
- **Figures are illustrative.** AUM, returns, team and office details in
  `lib/site.ts` are placeholder content.
- **Insight articles** use stand-in body copy; only titles and excerpts are real
  data in `lib/site.ts`.
