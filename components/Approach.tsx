import { principles } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export default function Approach() {
  return (
    <Section id="approach" className="border-t border-bone-200/10 bg-ink-900">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Our approach"
            title="Four principles we have not revised since 2009."
            lede="Markets change constantly. The discipline used to underwrite them should not."
          />
          <figure className="reveal mt-12 border-l border-gold-400/40 pl-6">
            <blockquote className="font-display text-2xl leading-snug text-bone-50">
              “We are not paid to be interesting. We are paid to be right, and
              to still be here when being right finally matters.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-bone-500">
              Eleanor Vance — Managing Partner &amp; CIO
            </figcaption>
          </figure>
        </div>

        <ol className="space-y-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10">
          {principles.map((p, i) => (
            <li
              key={p.number}
              className="reveal bg-ink-900 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-6 lg:gap-8">
                <span className="font-display text-2xl text-gold-400/70">
                  {p.number}
                </span>
                <div>
                  <h3 className="text-xl text-bone-50 lg:text-2xl">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-bone-400">{p.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
