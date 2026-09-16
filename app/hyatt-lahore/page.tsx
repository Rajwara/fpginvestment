import type { Metadata } from "next";
import Image from "next/image";
import DarkPageHero from "@/components/DarkPageHero";
import QuerySection from "@/components/QuerySection";
import ServiceIcon from "@/components/ServiceIcon";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Hyatt Regency Lahore",
  description:
    "Hyatt Regency Lahore — FP Global's flagship development and management mandate, from site to operating asset.",
};

/** Reads as the listing's taxonomy in the reference: which lines the project ran through. */
const tags = ["Development", "Pre-Opening", "Operations"];

const facts = [
  { label: "Keys", value: "284" },
  { label: "Opened", value: "2024" },
  { label: "Brand", value: "Hyatt Regency" },
  { label: "Role", value: "Developer & Operator" },
];

const highlights = [
  {
    icon: "compass",
    title: "Development",
    body: "Site assembly, feasibility and brand negotiation through to technical services and handover — delivered as a single mandate rather than a chain of consultants.",
  },
  {
    icon: "key",
    title: "Pre-opening",
    body: "Eighteen months of recruitment, systems implementation and training, sequenced against a critical path that protected the opening date without compressing readiness.",
  },
  {
    icon: "concierge",
    title: "Operations",
    body: "Full operating management under Hyatt brand standards, with commercial strategy, revenue management and owner reporting run in-house.",
  },
];

export default function HyattLahorePage() {
  return (
    <>
      <DarkPageHero
        eyebrow="Flagship Property"
        title={
          <>
            Hyatt Regency <span className="text-hero-accent">Lahore</span>
          </>
        }
        lede="Our flagship mandate and the clearest expression of what FP Global does — a property we developed, opened and operate."
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      {/* Featured image, edge to edge under the banner. */}
      <section data-reveal className="bg-surface pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal relative aspect-[16/7] overflow-hidden rounded-3xl bg-surface-2">
            <Image
              src="/assets/images/hyatt-pool.jpg"
              alt="The indoor pool and lobby lounge at Hyatt Regency Lahore"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Opening: tags, headline, the long-form introduction. */}
      <section data-reveal className="bg-surface py-16 lg:py-20">
        <div className="reveal mx-auto max-w-7xl px-6 lg:px-10">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2.5 text-sm font-medium text-fg"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent-fg"
                />
                {tag}
              </li>
            ))}
          </ul>

          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
            Concept to operating asset
          </h2>
          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-muted">
            Hyatt Regency Lahore is the project we point to when someone asks
            what FP Global actually does, because it ran through every one of
            our six service lines. We assembled the site, built the feasibility
            case, negotiated the brand agreement, held the line on programme and
            cost through construction, recruited and trained the team, and we
            run the hotel today. One accountable party from the first site visit
            to this morning&rsquo;s occupancy report.
          </p>

          <h3 className="mt-14 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight tracking-tight text-fg">
            Why a single mandate mattered here
          </h3>
          <p className="mt-5 max-w-5xl leading-relaxed text-muted">
            On most developments the people who model the returns, the people
            who sign the drawings and the people who eventually staff the
            building never meet. Assumptions get made in the feasibility study
            that nobody is left to defend, back-of-house circulation gets
            value-engineered by someone who will never walk it at 6am, and the
            operator inherits a building they have to work around. Holding all
            of it under one roof meant the decisions taken in year one were
            still being argued for in year four, by the same people who would
            have to live with them.
          </p>
        </div>
      </section>

      {/* Image and the project's facts, as the reference pairs an image with counters. */}
      <section data-reveal className="bg-surface pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface-2">
              <Image
                src="/assets/images/hyatt-terrace.jpg"
                alt="The pool terrace at Hyatt Regency Lahore"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="reveal">
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight tracking-tight text-fg">
                The shape of the asset
              </h3>
              <p className="mt-5 leading-relaxed text-muted">
                A 284-key upper-upscale hotel carrying the Hyatt Regency flag,
                developed and now operated by FP Global on behalf of its owners.
                Room mix, food and beverage count and back-of-house were all
                sized against the demand case rather than against the site
                boundary.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-fg-2/10 pt-8 sm:grid-cols-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dd
                      className={`font-display leading-tight tracking-tight text-fg ${
                        f.value.length > 6
                          ? "text-[clamp(1.05rem,1.5vw,1.25rem)]"
                          : "text-[clamp(1.75rem,2.6vw,2.25rem)]"
                      }`}
                    >
                      {f.value}
                    </dd>
                    <dt className="mt-2.5 text-sm text-muted">{f.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="reveal mt-16 max-w-5xl leading-relaxed text-muted">
            The brand agreement was negotiated on the understanding that we
            would be the operator, which changes what you argue for at the
            table. Technical services, pre-opening support and the fee structure
            were all weighed against what they would cost to live with over the
            term, not against what they looked like on signing day.
          </p>
        </div>
      </section>

      {/* The three lines the project ran through, against a second image. */}
      <section
        data-reveal
        className="border-t border-fg-2/10 bg-surface-2 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="reveal">
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight tracking-tight text-fg">
                What the mandate covered
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                Three phases, run by one team, with the handover between them
                happening inside the company rather than across a contract.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {highlights.map((h, i) => (
                  <div key={h.title} style={{ transitionDelay: `${i * 70}ms` }}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface shadow-lg shadow-fg/5 ring-1 ring-fg-2/5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-on-accent">
                        <ServiceIcon name={h.icon} className="h-4.5 w-4.5" />
                      </span>
                    </span>
                    <h4 className="mt-5 font-display text-lg text-fg">
                      {h.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
              <Image
                src="/assets/images/ProfessionalGuidanceimg-03.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing wide image and note. */}
      <section data-reveal className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="reveal max-w-5xl leading-relaxed text-muted">
            The hotel opened in 2024 and is trading. What we take from it is not
            a case study so much as a working method: decide the hard things
            early, keep the people who decided them on the project, and measure
            the result against the case that justified the spend. That is the
            way we would like to work on the next one.
          </p>

          <div className="reveal mt-12 flex flex-wrap gap-4">
            <Button href="/about#services" arrow>
              See what we do
            </Button>
            <Button href="/contact" variant="secondary" arrow>
              Discuss a similar project
            </Button>
          </div>
        </div>
      </section>

      <QuerySection />
    </>
  );
}
