import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Hyatt Regency Lahore",
  description:
    "Hyatt Regency Lahore — FP Global's flagship development and management mandate.",
};

const facts = [
  { label: "Keys", value: "284" },
  { label: "Opened", value: "2024" },
  { label: "Brand", value: "Hyatt Regency" },
  { label: "Role", value: "Developer & Operator" },
];

const highlights = [
  {
    title: "Development",
    body: "Site assembly, feasibility and brand negotiation through to technical services and handover — delivered as a single mandate rather than a chain of consultants.",
  },
  {
    title: "Pre-opening",
    body: "Eighteen months of recruitment, systems implementation and training, sequenced against a critical path that protected the opening date without compressing readiness.",
  },
  {
    title: "Operations",
    body: "Full operating management under Hyatt brand standards, with commercial strategy, revenue management and owner reporting run in-house.",
  },
];

export default function HyattLahorePage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship property"
        title="Hyatt Regency Lahore"
        lede="Our flagship mandate and the clearest expression of what FP Global does — a property we developed, opened and operate."
      />

      <Section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="reveal bg-surface p-8">
              <dt className="eyebrow text-subtle">{f.label}</dt>
              <dd className="mt-3 font-display text-3xl text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-fg-2/10 bg-surface-2">
        <SectionHeading
          eyebrow="Our role"
          title="Concept to operating asset."
          lede="Hyatt Regency Lahore ran through every one of our six service lines — which is exactly why we point to it."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal bg-surface-2 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="font-display text-2xl text-fg">{h.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm text-fg-2 transition-colors hover:text-accent-fg"
          >
            Discuss a similar project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Section>

      <CTA />
    </>
  );
}
