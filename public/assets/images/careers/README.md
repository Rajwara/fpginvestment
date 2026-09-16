# public/assets/images/careers/

Photography for the Careers pages, served under `/assets/images/careers/`.

These are wired up and live. Where each one appears:

| Where it appears | File |
| --- | --- |
| Banner on `/careers` and on every job listing | `01-careers-page-hero-2400x960.webp` |
| Acquisition Advisor listing | `02-acquisition-advisor-1920x1080.webp` |
| Financial Accountant listing | `03-financial-accountant-1920x1080.webp` |

Each role's own image sits in this folder rather than in `jobs/` — the path is
set per role in `lib/site.ts`, so the filename does not have to match the slug.

**Adding a role:** upload its image here and tell me which role it belongs to.
16:9, at least 1600px on the long edge. Upload the best version you have rather
than compressing it first.

Uploading from GitHub: open this folder → **Add file → Upload files** → drag the
files in → commit to `main`.
