import Link from "next/link";
import { site, strategies } from "@/lib/site";
import Logo from "./Logo";

const columns = [
  {
    heading: "Strategies",
    links: strategies.map((s) => ({
      label: s.name,
      href: `/strategies#${s.id}`,
    })),
  },
  {
    heading: "Firm",
    links: [
      { label: "Our approach", href: "/#approach" },
      { label: "Leadership", href: "/firm" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Form ADV", href: "/contact" },
      { label: "Privacy notice", href: "/contact" },
      { label: "Terms of use", href: "/contact" },
      { label: "Regulatory disclosures", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-bone-200/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone-400">
              {site.description}
            </p>
            <div className="mt-6 space-y-1 text-sm text-bone-400">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p className="pt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone-200 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-gold-300"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow text-bone-500">{col.heading}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone-200 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-bone-200/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-bone-500">
            This website is for informational purposes only and does not
            constitute an offer to sell or a solicitation of an offer to buy any
            security. Past performance is not indicative of future results. All
            figures shown are illustrative. Investing involves risk, including
            the possible loss of principal.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-xs text-bone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p>Registered investment adviser · New York · London · Singapore</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
