import type { Metadata } from "next";
import Image from "next/image";
import DarkPageHero from "@/components/DarkPageHero";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";
import { luxuryPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium & Luxury",
  description:
    "FP Global's Luxury Division — managing upscale, luxury and lifestyle hotels with precision and passion.",
};

export default function PremiumLuxuryPage() {
  return (
    <>
      <DarkPageHero
        eyebrow="Luxury Division"
        title={
          <>
            Premium &amp; <span className="text-hero-accent">Luxury</span>
          </>
        }
        lede="At FP Global we specialise in the art of managing upscale, luxury and lifestyle hotels with precision and passion. Our Luxury Division is committed to crafting exceptional experiences that redefine guest expectations at every stage of their journey."
        image="/assets/images/premium-luxury/banner-web.webp"
      />

      {/* Each quality gets a full row, the image and copy swapping sides as
          you move down the page. */}
      {luxuryPillars.map((pillar, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            data-reveal
            className={`scroll-mt-28 py-20 lg:py-28 ${
              flipped ? "bg-surface-2" : "bg-surface"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div
                  className={`reveal-zoom relative aspect-[4/3] overflow-hidden rounded-3xl ${
                    flipped
                      ? "bg-surface lg:order-2"
                      : "bg-surface-2 lg:order-1"
                  }`}
                >
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`${flipped ? "reveal-right lg:order-1" : "reveal-left lg:order-2"}`}
                  style={{ transitionDelay: "90ms" }}
                >
                  <Eyebrow>{`0${i + 1}`}</Eyebrow>
                  <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
                    {pillar.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                  <span
                    aria-hidden="true"
                    className="draw-line mt-9 block h-px w-28 bg-accent"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <QuerySection />
    </>
  );
}
