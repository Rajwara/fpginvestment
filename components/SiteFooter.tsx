import Link from "next/link";
import { footerColumns, site } from "@/lib/site";
import BackToTop from "./BackToTop";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import Button from "./Button";

/** Flowing line-art backdrop, drawn rather than shipped as an image. */
function WaveField() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-accent-2"
    >
      {Array.from({ length: 22 }).map((_, i) => (
        <path
          key={i}
          d={`M-120 ${90 + i * 24} C 260 ${-10 + i * 30}, 520 ${330 + i * 16}, 880 ${170 + i * 25} S 1360 ${40 + i * 29}, 1620 ${240 + i * 18}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.3 - Math.abs(i - 11) * 0.018}
        />
      ))}
    </svg>
  );
}

export default function SiteFooter() {
  return (
    // Always dark, whichever theme is active — the panel is the brand's
    // closing statement, so its colours are fixed rather than tokenised.
    <footer className="relative isolate overflow-hidden rounded-t-[2.5rem] bg-black text-white lg:rounded-t-[3.5rem]">
      <WaveField />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Business-focused close in place of a newsletter sign-up */}
        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <h2 className="max-w-xl font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight text-white">
              Let&rsquo;s Create Something Exceptional
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/60">
              Have a hospitality project, development opportunity or partnership
              in mind?
            </p>
          </div>
          <Button href="/contact" size="lg" className="w-fit" arrow>
            Start a Conversation
          </Button>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
          {/* Column 1 — FP Global */}
          <div>
            <Logo onDark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>

            <h3 className="mt-8 font-display text-lg text-white">Stay Tuned</h3>
            <div className="mt-4 flex gap-2.5">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white"
                >
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2 and 3 — What We Do, Company */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-display text-lg text-white">{col.heading}</h3>
              {/* inline-block with vertical padding: a 14px link is an 18px
                  line box, under the 24px a thumb needs. */}
              <ul className="mt-4 space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4 — Get In Touch */}
          <div>
            <h3 className="font-display text-lg text-white">Get In Touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-white/60">
                {site.address.line1}
                <br />
                {site.address.line2}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block py-1 text-white/60 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-block py-1 text-white/60 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.social[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block py-1 text-white/60 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="inline-block py-1.5 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <Link
              href="/terms"
              className="inline-block py-1.5 transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
