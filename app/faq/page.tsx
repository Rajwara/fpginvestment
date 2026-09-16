import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import PhotoPageHero from "@/components/PhotoPageHero";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Common questions about working with FP Global.",
};

export default function FaqPage() {
  return (
    <>
      <PhotoPageHero
        title="FAQ"
        crumb="FAQ"
        image="/assets/images/MissionAndGoals-03.jpg"
      />

      <section data-reveal className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="reveal flex flex-col items-center text-center">
            <Eyebrow>Our FAQ</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
              Answers to your questions
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              The things owners ask us most often. If yours is not here, ask
              directly — we answer every enquiry ourselves.
            </p>
          </div>

          {/* Native details, so it opens with the keyboard and without JS. */}
          <ul className="mt-14 space-y-3">
            {faqs.map((item, i) => (
              <li
                key={item.q}
                className="reveal"
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <details
                  open={i === 0}
                  className="group overflow-hidden rounded-xl bg-surface-2 transition-colors open:bg-gradient-to-r open:from-accent open:to-accent-2"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-medium text-fg marker:content-none group-open:text-on-accent">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-accent-fg transition-transform duration-300 group-open:rotate-180 group-open:text-on-accent"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 leading-relaxed text-muted group-open:text-on-accent/85">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuerySection />
    </>
  );
}
