import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about working with FP Global.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions we get asked."
        lede="If yours is not here, ask us directly — we answer every enquiry ourselves."
      />

      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <ul data-reveal className="space-y-4">
          {faqs.map((item, i) => (
            <li
              key={item.q}
              className="reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <details className="group rounded-xl border border-fg-2/10 bg-surface-2 p-6 transition-colors open:border-accent-fg/30">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg text-fg marker:content-none">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-accent-fg transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <CTA />
    </>
  );
}
