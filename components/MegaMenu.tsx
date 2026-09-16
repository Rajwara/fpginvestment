"use client";

import Link from "next/link";
import { megaFeature, partners, services, site } from "@/lib/site";
import ServiceIcon from "./ServiceIcon";
import SocialIcon from "./SocialIcon";

/**
 * About Us mega menu. Three zones, per the layout doc:
 *   left   — "Who We Are" over a feature image
 *   middle — the six service lines, three per column
 *   right  — contact panel on a contrasting surface
 * with a partners strip across the bottom.
 */
export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.75fr)]">
      {/* Left — who we are */}
      <div className="border-fg-2/10 p-8 lg:border-r lg:p-10">
        <p className="eyebrow flex items-center gap-2.5 text-accent-400">
          <span aria-hidden="true" className="h-px w-6 bg-accent-400/50" />
          {megaFeature.eyebrow}
        </p>

        <div className="mt-5 aspect-[4/3] overflow-hidden rounded-lg border border-fg-2/10 bg-surface-2">
          {/* Placeholder scene — swap for a real property photograph. */}
          <svg
            viewBox="0 0 400 300"
            className="h-full w-full"
            role="img"
            aria-label="FP Global property"
          >
            <defs>
              <linearGradient id="mm-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent-400)" stopOpacity="0.20" />
                <stop offset="100%" stopColor="var(--color-accent-600)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#mm-sky)" />
            <g fill="var(--color-fg)" opacity="0.10">
              <rect x="40" y="110" width="70" height="190" />
              <rect x="128" y="60" width="96" height="240" />
              <rect x="242" y="140" width="58" height="160" />
              <rect x="316" y="96" width="46" height="204" />
            </g>
            <g fill="var(--color-accent-300)" opacity="0.45">
              {Array.from({ length: 7 }).map((_, row) =>
                Array.from({ length: 4 }).map((__, col) => (
                  <rect
                    key={`${row}-${col}`}
                    x={140 + col * 22}
                    y={78 + row * 30}
                    width="10"
                    height="14"
                  />
                ))
              )}
            </g>
          </svg>
        </div>

        <h3 className="mt-6 font-display text-2xl leading-snug text-fg">
          {megaFeature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {megaFeature.body}
        </p>
        <Link
          href={megaFeature.href}
          onClick={onNavigate}
          className="group mt-5 inline-flex items-center gap-2 text-sm text-fg-2 transition-colors hover:text-accent-300"
        >
          {megaFeature.cta}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      {/* Middle — the six services, three per column */}
      <div className="border-fg-2/10 p-8 lg:border-r lg:p-10">
        <p className="eyebrow text-subtle">What We Do</p>
        <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.id}>
              <Link
                href={`/services/${s.id}`}
                onClick={onNavigate}
                className="group flex items-start gap-3.5 rounded-lg px-3 py-3 transition-colors hover:bg-fg-2/5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-fg-2/12 text-accent-400 transition-colors group-hover:border-accent-400/50 group-hover:bg-accent-400/10">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm leading-snug text-fg transition-colors group-hover:text-accent-300">
                    {s.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-subtle">
                    {s.points[0]}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Partners strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-fg-2/10 pt-6">
          <span className="eyebrow text-subtle">Our Partners</span>
          {partners.map((p) => (
            <span
              key={p}
              className="font-display text-lg text-fg-2/55 transition-colors hover:text-fg-2/80"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Right — contact panel */}
      <div className="bg-surface-2 p-8 lg:p-10">
        <p className="eyebrow text-subtle">Get In Touch</p>

        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-400/12 text-accent-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4.5 5.5c0 7.5 6.5 14 14 14l2-3.5-4-2-2 2a14 14 0 0 1-6.5-6.5l2-2-2-4-3.5 2Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm text-fg">Talk To Us</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={onNavigate}
                className="mt-1 block text-sm text-muted transition-colors hover:text-accent-300"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-400/12 text-accent-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="5.5" width="18" height="13" rx="2" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-sm text-fg">Email Us</p>
              <a
                href={`mailto:${site.email}`}
                onClick={onNavigate}
                className="mt-1 block truncate text-sm text-muted transition-colors hover:text-accent-300"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-400/12 text-accent-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <div>
              <p className="text-sm text-fg">Visit Us</p>
              <p className="mt-1 text-sm text-muted">{site.address.line1}</p>
              <p className="text-sm text-muted">{site.address.line2}</p>
            </div>
          </div>
        </div>

        <p className="eyebrow mt-8 text-subtle">Follow Us</p>
        <div className="mt-4 flex gap-2.5">
          {site.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-fg-2/15 text-fg-2 transition-colors hover:border-accent-400 hover:bg-accent-400 hover:text-surface"
            >
              <SocialIcon name={s.label} />
            </a>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-accent-300"
        >
          Start a Conversation <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
