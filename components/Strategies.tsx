import Link from "next/link";
import { strategies } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export default function Strategies() {
  return (
    <Section id="strategies" className="border-t border-bone-200/10">
      <SectionHeading
        eyebrow="Where capital goes"
        title="Four strategies, one underwriting standard."
        lede="Each mandate is run by a small team with real ownership. Allocations move slowly and deliberately — the target weights below have shifted twice in five years."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 lg:mt-20 lg:grid-cols-2">
        {strategies.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="reveal group relative scroll-mt-28 bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900 lg:p-12"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-bone-500">{s.horizon}</p>
                <h3 className="mt-3 font-display text-3xl tracking-tight text-bone-50 lg:text-4xl">
                  {s.name}
                </h3>
              </div>
              <div className="shrink-0 text-right">
                <span className="block font-display text-3xl text-gold-300">
                  {s.allocation}
                </span>
                <span className="eyebrow mt-1 block text-bone-500">
                  Target weight
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-lg leading-relaxed text-bone-400">
              {s.summary}
            </p>

            <ul className="mt-8 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-bone-200">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold-400"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href={`/strategies#${s.id}`}
              className="mt-10 inline-flex items-center gap-2 text-sm text-bone-200 transition-colors hover:text-gold-300"
            >
              Strategy detail
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
