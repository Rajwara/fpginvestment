import type { Metadata } from "next";
import Link from "next/link";
import { strategies } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Strategies",
  description:
    "Four strategies across public equities, private credit, real assets and opportunistic capital — run to a single underwriting standard.",
};

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategies"
        title="Four mandates. One standard."
        lede="We run a deliberately narrow set of strategies. Each is capacity-constrained, each is managed by a team with personal capital at risk, and none of them is permitted to drift."
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {strategies.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            data-reveal
            className="scroll-mt-28 border-b border-bone-200/10 py-16 lg:py-24"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="reveal">
                <p className="eyebrow text-bone-500">
                  {String(i + 1).padStart(2, "0")} · {s.horizon}
                </p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight text-bone-50">
                  {s.name}
                </h2>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-bone-200/10 pt-6">
                  <div>
                    <dt className="eyebrow text-bone-500">Target weight</dt>
                    <dd className="mt-2 font-display text-3xl text-gold-300">
                      {s.allocation}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-bone-500">Horizon</dt>
                    <dd className="mt-2 text-base text-bone-200">{s.horizon}</dd>
                  </div>
                </dl>
              </div>

              <div className="reveal" style={{ transitionDelay: "100ms" }}>
                <p className="text-xl leading-relaxed text-bone-200 lg:text-2xl">
                  {s.summary}
                </p>
                <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 sm:grid-cols-3">
                  {s.points.map((p) => (
                    <li key={p} className="bg-ink-950 p-6">
                      <span
                        aria-hidden="true"
                        className="block h-1 w-1 rounded-full bg-gold-400"
                      />
                      <p className="mt-4 text-sm leading-relaxed text-bone-200">
                        {p}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 text-sm text-bone-200 transition-colors hover:text-gold-300"
                >
                  Request the strategy deck
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTA />
    </>
  );
}
