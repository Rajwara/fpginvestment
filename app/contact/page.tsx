import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with the FPG Investment investor relations team about mandates, capacity and research access.",
};

const offices = [
  { city: "New York", line1: site.address.line1, line2: site.address.line2 },
  { city: "London", line1: "12 Bevis Marks", line2: "London EC3A 7BA" },
  { city: "Singapore", line1: "8 Marina Boulevard, #32-01", line2: "Singapore 018981" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation."
        lede="Capacity is limited and opened selectively. Tell us about your mandate and we will tell you honestly whether we are a fit."
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div data-reveal className="reveal">
            <ContactForm />
          </div>

          <aside data-reveal className="reveal space-y-10">
            <div>
              <h2 className="eyebrow text-gold-400">Direct</h2>
              <div className="mt-4 space-y-2">
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg text-bone-50 underline decoration-gold-400/40 underline-offset-4 transition-colors hover:text-gold-300"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="text-bone-400">{site.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="eyebrow text-gold-400">Offices</h2>
              <ul className="mt-4 space-y-5">
                {offices.map((o) => (
                  <li key={o.city} className="border-l border-bone-200/15 pl-4">
                    <p className="text-bone-50">{o.city}</p>
                    <p className="mt-1 text-sm text-bone-400">{o.line1}</p>
                    <p className="text-sm text-bone-400">{o.line2}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-bone-200/10 bg-ink-900 p-6">
              <h2 className="text-bone-50">A note on eligibility</h2>
              <p className="mt-3 text-sm leading-relaxed text-bone-400">
                Our funds are available only to qualified institutional and
                accredited investors in permitted jurisdictions. Nothing on this
                site is an offer to sell or a solicitation to buy.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
