import { principles } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export default function Approach() {
  return (
    <Section id="approach" className="border-t border-fg-2/10 bg-surface-2">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Our approach"
            title="Four principles we have not revised since 2009."
            lede="Brands, budgets and markets change constantly. The way we work does not."
          />
          <figure className="reveal mt-12 border-l border-accent-400/40 pl-6">
            <blockquote className="font-display text-2xl leading-snug text-fg">
              “A hotel is judged every single night, by people who did not
              read the brochure. That is the only standard that matters.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-subtle">
              Faisal Pervaiz — Chairman
            </figcaption>
          </figure>
        </div>

        <ol className="space-y-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10">
          {principles.map((p, i) => (
            <li
              key={p.number}
              className="reveal bg-surface-2 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-6 lg:gap-8">
                <span className="font-display text-2xl text-accent-400/70">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-xl text-fg lg:text-2xl">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
