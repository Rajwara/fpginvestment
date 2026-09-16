import Link from "next/link";
import { footerColumns, site } from "@/lib/site";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import MaskButton from "@/components/MaskButton";

export default function SiteFooter() {
  return (
    <footer className="border-t border-fg-2/10 bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        {/* Business-focused CTA in place of a newsletter sign-up */}
        <div className="grid gap-8 border-b border-fg-2/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight text-fg">
              Let&rsquo;s Create Something Exceptional
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              Have a hospitality project, development opportunity or partnership
              in mind?
            </p>
          </div>
          <MaskButton href="/contact" size="lg" className="w-fit" arrow>
            Start a Conversation
          </MaskButton>
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Column 1 — FP Global */}
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2.5">
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
          </div>

          {/* Columns 2 and 3 — What We Do, Company */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow text-subtle">{col.heading}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-2 transition-colors hover:text-accent-fg"
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
            <h2 className="eyebrow text-subtle">Get In Touch</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-muted">
                {site.address.line1}
                <br />
                {site.address.line2}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-fg-2 transition-colors hover:text-accent-fg"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-fg-2 transition-colors hover:text-accent-fg"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.social[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-fg-2 transition-colors hover:text-accent-fg"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-fg-2/10 pt-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-3">
            <Link href="/privacy" className="transition-colors hover:text-accent-fg">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms" className="transition-colors hover:text-accent-fg">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
