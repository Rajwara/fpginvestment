import type { Metadata } from "next";
import { site, metrics, principles } from "@/lib/site";
import PhotoPageHero from "@/components/PhotoPageHero";
import ServicesFlex from "@/components/ServicesFlex";
import MissionSection from "@/components/MissionSection";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/Section";

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
      <PhotoPageHero
        title="About Us"
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      <ServicesFlex />

      <MissionSection />

      <Section>
        <p className="reveal mb-14 max-w-3xl font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.45] tracking-[-0.01em] text-fg">
          Founded in {site.founded}, {site.name} develops, opens and runs
          hotels. We work across six service lines so an owner can hand over a
          site and take back an operating asset — or bring us in for one stage
          of it.
        </p>

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
