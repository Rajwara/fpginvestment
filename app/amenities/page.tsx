import type { Metadata } from "next";
import Image from "next/image";
import DarkPageHero from "@/components/DarkPageHero";
import AmenityIcon from "@/components/AmenityIcon";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";
import { amenities, amenityPanels, amenitySpaces } from "@/lib/site";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Amenities at Hyatt Regency Hotel & Club — fitness centres, courts, lounges, spa and landscaped grounds.",
};

export default function AmenitiesPage() {
  return (
    <>
      <DarkPageHero
        eyebrow="Hotel & Club"
        title={
          <>
            Refined <span className="text-hero-accent">living</span>, by design
          </>
        }
        lede="Designed for the modern lifestyle connoisseur, our amenities redefine refined living through thoughtfully curated spaces, state-of-the-art facilities and exceptional attention to detail."
        image="/assets/images/amenities/clubhouse-web.webp"
      />

      <section data-reveal className="bg-surface py-20 lg:py-28">
        <div className="reveal mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow>What You Get</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Every element crafted for comfort, sophistication and memorable
            experiences.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            From an elite fitness centre and exclusive clubhouse to premium
            tennis courts and welcoming family areas — the whole of it built to
            embody elegance and prestige.
          </p>

          <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <li
                key={a.title}
                /*
                  Dark card, photograph underneath. `isolate` keeps the image
                  and its scrim inside the card's own stacking context so the
                  rounded corners clip them.
                */
                className="group relative isolate flex min-h-[17rem] flex-col overflow-hidden rounded-2xl bg-[#14121c] p-8 ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/25"
              >
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="-z-20 scale-110 object-cover opacity-0 brightness-110 transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100 group-hover:opacity-100 [@media(hover:none)]:scale-100 [@media(hover:none)]:opacity-45"
                />
                {/* Bottom-weighted, so the copy stays legible while the top of the
                    photograph comes through at nearly full strength. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#14121c] via-[#14121c]/75 to-[#14121c]/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition-colors duration-500 group-hover:bg-accent group-hover:ring-accent">
                    <AmenityIcon name={a.icon} className="h-6 w-6" />
                  </span>
                  <span className="eyebrow text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-auto pt-10 font-display text-xl leading-tight text-white">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {a.body}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-white/25 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-20 group-hover:bg-accent-2"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        Stacking panels. Each is full height and sticks to the top, so the next
        one scrolls up and covers it — no JS, and nothing here may sit inside an
        `overflow-hidden` ancestor or position:sticky stops working.
      */}
      <div className="relative">
        {amenityPanels.map((panel, i) => (
          <section
            key={panel.id}
            className="sticky top-0 flex h-screen items-center overflow-hidden"
            style={{ zIndex: i + 1 }}
          >
            <Image
              src={panel.image}
              alt=""
              fill
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
            />

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
              <div className="max-w-2xl">
                <Eyebrow tone="hero">{panel.eyebrow}</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white">
                  {panel.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  {panel.body}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section
        data-reveal
        className="relative z-10 border-t border-fg-2/10 bg-surface-2 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <Eyebrow>The Spaces</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
              Room by room
            </h2>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenitySpaces.map((space, i) => (
              <li
                key={space.title}
                className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
                <h3 className="absolute bottom-5 left-6 font-display text-lg text-white">
                  {space.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuerySection />
    </>
  );
}
