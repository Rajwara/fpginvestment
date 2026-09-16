import Link from "next/link";
import { services } from "@/lib/site";
import { Section, SectionHeading } from "./Section";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <Section id="services" className="border-t border-fg-2/10">
      <SectionHeading
        eyebrow="What we do"
        title="Six service lines, one continuous thread."
        lede="We can take a project from land acquisition to a fully operating hotel, or step in at any single stage. Each line is run by people who have done the job on property."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:mt-20 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="reveal group relative scroll-mt-28 bg-surface p-8 transition-colors duration-500 hover:bg-surface-2 lg:p-10"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-fg-2/12 text-accent-400 transition-colors group-hover:border-accent-400/50 group-hover:bg-accent-400/10">
              <ServiceIcon name={s.icon} className="h-5 w-5" />
            </span>

            <h3 className="mt-6 font-display text-2xl leading-snug tracking-tight text-fg lg:text-[1.65rem]">
              {s.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{s.summary}</p>

            <ul className="mt-6 space-y-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-fg-2">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent-400"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${s.id}`}
              className="mt-8 inline-flex items-center gap-2 text-sm text-fg-2 transition-colors hover:text-accent-300"
            >
              Learn more
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
