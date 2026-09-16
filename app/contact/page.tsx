import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to FP Global about a hospitality project, development opportunity or partnership.",
};

const offices = [
  { city: "Lahore", line1: site.address.line1, line2: site.address.line2 },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start a conversation."
        lede="Tell us about the project — a site, an operating asset or an idea — and we will tell you honestly what it needs and whether we are the right people for it."
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div data-reveal className="reveal">
            <ContactForm />
          </div>

          <aside data-reveal className="reveal space-y-10">
            <div>
              <h2 className="eyebrow text-accent-400">Direct</h2>
              <div className="mt-4 space-y-2">
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-fg underline decoration-accent-400/40 underline-offset-4 transition-colors hover:text-accent-300"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="text-muted">{site.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="eyebrow text-accent-400">Office</h2>
              <ul className="mt-4 space-y-5">
                {offices.map((o) => (
                  <li key={o.city} className="border-l border-fg-2/15 pl-4">
                    <p className="text-fg">{o.city}</p>
                    <p className="mt-1 text-sm text-muted">{o.line1}</p>
                    <p className="text-sm text-muted">{o.line2}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-fg-2/10 bg-surface-2 p-6">
              <h2 className="text-fg">Looking for a role instead?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Open positions are listed on our careers page — applications go
                straight to the team that hires for them.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
