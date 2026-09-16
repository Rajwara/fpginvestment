import type { Metadata } from "next";
import { team } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The people behind FP Global — hospitality operators, developers and commercial leaders.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Operators first."
        lede="Everyone who advises on an FP Global project has run one. That is the whole hiring policy."
      />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="The people accountable for every project."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-3">
          {team.map((person, i) => (
            <li
              key={person.name}
              className="reveal bg-surface p-8 lg:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-fg/30 font-display text-xl text-accent-fg"
              >
                {person.initials}
              </span>
              <h3 className="mt-6 font-display text-2xl text-fg">
                {person.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{person.role}</p>
              <p className="mt-4 text-sm text-subtle">{person.prior}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTA />
    </>
  );
}
