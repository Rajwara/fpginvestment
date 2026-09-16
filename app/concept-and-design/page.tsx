import type { Metadata } from "next";
import Image from "next/image";
import DarkPageHero from "@/components/DarkPageHero";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";
import {
  conceptBoards,
  conceptGallery,
  designPrinciples,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Concept & Design",
  description:
    "The Concept Gallery for Hyatt Regency Lahore — architectural mood, interior textures and the lifestyle aesthetics that define the property.",
};

export default function ConceptAndDesignPage() {
  return (
    <>
      <DarkPageHero
        eyebrow="Hyatt Lahore"
        title={
          <>
            Where vision comes to{" "}
            <span className="text-hero-accent">life</span>
          </>
        }
        lede="At Hyatt Lahore it is not just about properties — it is about possibilities. The Concept Gallery is where a building takes shape before the foundation is ever laid."
        image="/assets/images/premium-luxury/banner-web.webp"
      />

      {/* Opening statement */}
      <section data-reveal className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className="reveal">
              <Eyebrow>The Concept Gallery</Eyebrow>
              <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
                A curated collection, before a single foundation.
              </h2>
            </div>
            <div className="reveal-left space-y-6 text-lg leading-relaxed text-muted lg:pt-4">
              <p>
                The Concept Gallery is a curated collection of architectural
                mood, interior textures and lifestyle aesthetics — the material
                that defines a property&rsquo;s essence long before it is built.
              </p>
              <p>
                Our design and branding revolve around modern elegance: clean
                lines, refined aesthetics and an intuitive experience, grounded
                in the timeless values of trust, transparency and local
                expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating boards */}
      {conceptBoards.map((board, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={board.id}
            data-reveal
            className={`scroll-mt-28 py-20 lg:py-28 ${
              flipped ? "bg-surface-2" : "bg-surface"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div
                  className={`reveal-zoom relative aspect-[4/3] overflow-hidden rounded-3xl ${
                    flipped ? "bg-surface lg:order-2" : "bg-surface-2 lg:order-1"
                  }`}
                >
                  <Image
                    src={board.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={
                    flipped
                      ? "reveal-right lg:order-1"
                      : "reveal-left lg:order-2"
                  }
                >
                  <Eyebrow>{board.eyebrow}</Eyebrow>
                  <h2 className="mt-6 font-display text-[clamp(1.85rem,3.6vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-fg">
                    {board.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                    {board.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Design principles */}
      <section data-reveal className="bg-surface-2 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <Eyebrow>What Guides It</Eyebrow>
            <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
              Modern elegance, timeless values.
            </h2>
          </div>

          <ul className="stagger mt-14 grid gap-px overflow-hidden rounded-2xl bg-fg-2/10 sm:grid-cols-2 lg:grid-cols-3">
            {designPrinciples.map((principle, i) => (
              <li
                key={principle.id}
                className="reveal group bg-surface-2 p-8 transition-colors hover:bg-surface"
              >
                <span className="eyebrow text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight text-fg">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-accent/30 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:w-20 group-hover:bg-accent"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section data-reveal className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-3xl">
            <Eyebrow>The Boards</Eyebrow>
            <h2 className="reveal-line mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
              Studies from the gallery
            </h2>
          </div>

          <ul className="stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conceptGallery.map((item) => (
              <li
                key={item.title}
                className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                />
                <h3 className="absolute bottom-5 left-6 font-display text-lg text-white">
                  {item.title}
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
