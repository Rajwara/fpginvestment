import type { Metadata } from "next";
import Image from "next/image";
import DarkPageHero from "@/components/DarkPageHero";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Hyatt Regency Lahore",
  description:
    "Hyatt Regency Hotel & Club, Lahore — FP Global's flagship mandate. Banqueting, six dining venues, sport and wellness, under one accountable team.",
};

const tags = ["Hotel & Club", "Hyatt Regency", "Lahore"];

const facts = [
  { label: "Keys", value: "284" },
  { label: "Opened", value: "2024" },
  { label: "Brand", value: "Hyatt Regency" },
  { label: "Role", value: "Developer & Operator" },
];

/** The property's own offer, drawn from the club brochure. */
const amenities = [
  {
    icon: "concierge",
    title: "Spaces that make a statement",
    body: "A grand banquet hall, a captivating main atrium and an auditorium seating up to 200 — the club sets the stage for the occasions worth marking.",
  },
  {
    icon: "megaphone",
    title: "Six places to eat",
    body: "All-day dining venues, specialty restaurants, a cosy lobby lounge, the exclusive Regency Club, and The Market — a café-style gem for whenever a snack calls.",
  },
  {
    icon: "refresh",
    title: "Room to recharge",
    body: "Separate fitness centres and swimming pools for gentlemen and ladies, designed around comfort rather than around what would fit.",
  },
];

const vacation = [
  {
    icon: "key",
    title: "Play",
    body: "An indoor gaming arena for friendly competition, plus tennis and badminton courts, squash courts and the swimming pool when you would rather show off a back-hand.",
  },
  {
    icon: "concierge",
    title: "Celebrate",
    body: "Flexible spaces and a grand banquet hall that turn a wedding or a school reunion into a house-full party, with a BBQ area for the smaller gatherings.",
  },
  {
    icon: "compass",
    title: "Park without a thought",
    body: "A loading deck for 550 vehicles, so neither residents nor guests spend the first ten minutes of an evening circling for a space.",
  },
];

type Item = { icon: string; title: string; body: string };

function Cards({ items }: { items: Item[] }) {
  return (
    <div className="stagger mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
      {items.map((item) => (
        <div
          key={item.title}
          className="reveal rounded-2xl bg-surface p-8 shadow-lg shadow-fg/5 ring-1 ring-fg-2/5"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-on-accent">
            <ServiceIcon name={item.icon} className="h-7 w-7" />
          </span>
          <h4 className="mt-6 font-display text-xl text-fg">{item.title}</h4>
          <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * The brochure spreads carry their own headline and the brand arc, so they run
 * full bleed and the section headings alongside them are written not to repeat
 * what the artwork already says.
 */
function Spread({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="reveal-wipe relative aspect-[16/6] overflow-hidden rounded-3xl bg-surface-2">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 1216px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

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
        lede="A premier hotel and club, developed and operated by FP Global — where culture meets comfort in the most spectacular way."
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      <section data-reveal className="bg-surface pt-16 lg:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Spread
            src="/assets/images/hyatt-lahore/hyatt-project-01-1.jpg"
            alt="The hotel grounds at Hyatt Regency Hotel & Club, Lahore"
          />
        </div>
      </section>

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
            Crafted for the discerning traveller
          </h2>
          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-muted">
            Hyatt Regency Hotel &amp; Club redefines luxury through opulent
            design, exclusive experiences, refined service and world-class
            hospitality. Every detail is curated to offer a stay that reflects
            elegance and prestige.
          </p>
          <p className="mt-5 max-w-5xl leading-relaxed text-muted">
            It is also the clearest expression of what FP Global does. We
            assembled the site, built the feasibility case, negotiated the brand
            agreement, held the line on programme and cost through construction,
            recruited and trained the team — and we run the hotel today. One
            accountable party from the first site visit to this
            morning&rsquo;s occupancy report.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-surface pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="reveal-zoom relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface-2">
              <Image
                src="/assets/images/hyatt-terrace.jpg"
                alt="The pool terrace at Hyatt Regency Hotel & Club"
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
        </div>
      </section>

      <section
        data-reveal
        className="border-t border-fg-2/10 bg-surface-2 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Spread
            src="/assets/images/hyatt-lahore/family-rendezvous-web.jpg"
            alt="A family arriving at their room at Hyatt Regency Hotel & Club"
          />

          <div className="reveal mt-14 max-w-3xl">
            <Eyebrow>The Club</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
              Create lasting memories every day
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The club sets an amazing stage for everything that celebrates
              life — and a hotel is only as good as the reasons people have to
              be in it.
            </p>
          </div>

          <Cards items={amenities} />
        </div>
      </section>

      <section data-reveal className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Spread
            src="/assets/images/hyatt-lahore/active-living-web.jpg"
            alt="The tennis courts at Hyatt Regency Hotel & Club"
          />

          <div className="reveal mt-14 max-w-3xl">
            <Eyebrow>An Ideal Vacation</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
              Unmatched convenience meets endless adventures
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A hospitality experience that redefines comfort and community.
              Every amenity here was specified to surpass what a guest expects
              to find, not to meet a minimum.
            </p>
          </div>

          <Cards items={vacation} />
        </div>
      </section>

      <section data-reveal className="bg-surface pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Spread
            src="/assets/images/hyatt-lahore/cultural-capital-web.jpg"
            alt="Mughal architecture in Lahore"
          />
        </div>
      </section>

      <QuerySection />
    </>
  );
}
