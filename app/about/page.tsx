import type { Metadata } from "next";
import { site, metrics, principles, services } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/Section";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FP Global develops, opens and operates hotels — six service lines under one accountable team.",
};

const milestones = [
  { year: "2009", event: "Founded in Lahore as a hospitality development advisory." },
  { year: "2013", event: "First full pre-opening mandate delivered on programme." },
  { year: "2017", event: "Technical services and construction management brought in-house." },
  { year: "2021", event: "Hotel management division launched under international brand standards." },
  { year: "2024", event: "Hyatt Regency Lahore opens — developed and operated by FP Global." },
  { year: "2026", event: "Six service lines covering concept through daily operations." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A hospitality company built by operators."
        lede={`Founded in ${site.founded}, ${site.name} develops, opens and runs hotels. We work across six service lines so an owner can hand over a site and take back an operating asset — or bring us in for one stage of it.`}
      />

      <Section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="reveal bg-surface p-8">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl text-fg">
                  {m.value}
                </span>
                <span className="mt-3 block text-sm text-fg-2">{m.label}</span>
                <span className="mt-1 block text-xs text-subtle">{m.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-fg-2/10 bg-surface-2">
        <SectionHeading
          eyebrow="What we do"
          title="Six service lines."
          lede="Engaged together or one at a time, depending on where a project needs help."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <li
              key={service.id}
              className="reveal bg-surface-2 p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-fg-2/12 text-accent-fg">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl text-fg">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.summary}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-fg-2/10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading
            eyebrow="History"
            title="Seventeen years, one direction."
            lede="Each capability was added because a project needed it, not because a plan called for it."
          />
          <ol className="relative border-l border-fg-2/15 pl-8">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className="reveal relative pb-10 last:pb-0"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.25rem] top-2 h-2 w-2 rounded-full bg-accent"
                />
                <span className="font-display text-2xl text-accent-fg">
                  {m.year}
                </span>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">
                  {m.event}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-fg-2/10 bg-surface-2">
        <SectionHeading eyebrow="Principles" title="What does not change." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-2">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className="reveal bg-surface-2 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-2xl text-accent-fg/70">
                {p.number}
              </span>
              <h3 className="mt-4 text-xl text-fg">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
