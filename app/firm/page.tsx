import type { Metadata } from "next";
import { site, team, metrics, principles } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "The firm",
  description:
    "FPG Investment was founded in 2009 as a partnership. Meet the team and the structure behind the capital.",
};

const milestones = [
  { year: "2009", event: "Founded in New York with $180M of partner and seed capital." },
  { year: "2013", event: "Private credit strategy launched after four years of research." },
  { year: "2017", event: "London office opened; first European institutional mandates." },
  { year: "2021", event: "Real assets platform reaches $2B with in-house operating team." },
  { year: "2024", event: "Singapore office opened to serve Asia-Pacific partners." },
  { year: "2026", event: "$14.2B under management across 180+ institutional relationships." },
];

export default function FirmPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        title="A partnership, deliberately small."
        lede={`Founded in ${site.founded}, ${site.name} is owned entirely by the people who work here. We have never taken outside equity, and we have never needed to grow faster than our judgement could scale.`}
      />

      <Section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="reveal bg-ink-950 p-8">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl text-bone-50">
                  {m.value}
                </span>
                <span className="mt-3 block text-sm text-bone-200">{m.label}</span>
                <span className="mt-1 block text-xs text-bone-500">{m.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-bone-200/10 bg-ink-900">
        <SectionHeading
          eyebrow="Leadership"
          title="The people accountable for the capital."
          lede="Every partner listed here is personally invested in the funds they manage."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 sm:grid-cols-2">
          {team.map((person, i) => (
            <li
              key={person.name}
              className="reveal bg-ink-900 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400/30 font-display text-lg text-gold-300"
                >
                  {person.initials}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-bone-50">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-bone-400">{person.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-bone-500">{person.prior}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-bone-200/10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading
            eyebrow="History"
            title="Sixteen years, one direction."
            lede="Growth has been a consequence of results, never a target in itself."
          />
          <ol className="relative border-l border-bone-200/15 pl-8">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className="reveal relative pb-10 last:pb-0"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.25rem] top-2 h-2 w-2 rounded-full bg-gold-400"
                />
                <span className="font-display text-2xl text-gold-300">
                  {m.year}
                </span>
                <p className="mt-2 max-w-xl leading-relaxed text-bone-400">
                  {m.event}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-t border-bone-200/10 bg-ink-900">
        <SectionHeading eyebrow="Principles" title="What does not change." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 lg:grid-cols-2">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className="reveal bg-ink-900 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-2xl text-gold-400/70">
                {p.number}
              </span>
              <h3 className="mt-4 text-xl text-bone-50">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-bone-400">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
