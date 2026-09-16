"use client";

import Image from "next/image";
import Link from "next/link";
import { megaFeature, partners, services, site } from "@/lib/site";
import ServiceIcon from "./ServiceIcon";
import SocialIcon from "./SocialIcon";
import Button from "@/components/Button";

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
        <p className="eyebrow flex items-center gap-2.5 text-accent-fg">
          <span aria-hidden="true" className="h-px w-6 bg-accent-fg/50" />
          {megaFeature.eyebrow}
        </p>

        <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-lg border border-fg-2/10 bg-surface-2">
          <Image
            src={megaFeature.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 24rem, 90vw"
            className="object-cover"
          />
        </div>

        <h3 className="mt-6 font-display text-2xl leading-snug text-fg">
          {megaFeature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {megaFeature.body}
        </p>
        <Button
          href={megaFeature.href}
          variant="secondary"
          onClick={onNavigate}
          className="mt-6 inline-flex"
          arrow
        >
          {megaFeature.cta}
        </Button>
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
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-fg-2/12 text-accent-fg transition-colors group-hover:border-accent-fg/50 group-hover:bg-accent-fg/10">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm leading-snug text-fg transition-colors group-hover:text-accent-fg">
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

        {/* Partners strip — the same logo slider as the Our Mission band */}
        <div className="mt-8 border-t border-fg-2/10 pt-6">
          <p className="eyebrow text-subtle">Our Partners</p>
          <p className="mt-2 text-sm text-muted">
            Working alongside the brands and operators our owners already trust.
          </p>

          <div className="marquee mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden="true"
                  className="marquee-track flex shrink-0 gap-4 pr-4"
                >
                  {[0, 1].map((set) =>
                    partners.map((partner) => (
                      <div
                        key={`${copy}-${set}-${partner.name}`}
                        // Sized so three tiles fill the strip: any smaller and
                        // the wordmarks stop being readable.
                        className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-white px-5 ring-1 ring-fg-2/10"
                      >
                        <Image
                          src={partner.logo}
                          alt=""
                          width={180}
                          height={80}
                          className="h-14 w-full object-contain"
                        />
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="sr-only">
            Partners: {partners.map((p) => p.name).join(", ")}.
          </p>
        </div>
      </div>

      {/* Right — contact panel */}
      <div className="bg-surface-2 p-8 lg:p-10">
        <p className="eyebrow text-subtle">Get In Touch</p>

        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-fg/12 text-accent-fg">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4.5 5.5c0 7.5 6.5 14 14 14l2-3.5-4-2-2 2a14 14 0 0 1-6.5-6.5l2-2-2-4-3.5 2Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm text-fg">Talk To Us</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={onNavigate}
                className="mt-1 block text-sm text-muted transition-colors hover:text-accent-fg"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-fg/12 text-accent-fg">
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
                className="mt-1 block truncate text-sm text-muted transition-colors hover:text-accent-fg"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-fg/12 text-accent-fg">
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-fg-2/15 text-fg-2 transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              <SocialIcon name={s.label} />
            </a>
          ))}
        </div>

        <Button href="/contact" onClick={onNavigate} className="mt-8 flex w-full" arrow>
          Start a Conversation
        </Button>
      </div>
    </div>
  );
}
