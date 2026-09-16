import type { Metadata } from "next";
import ConceptGallery from "@/components/ConceptGallery";
import DarkPageHero from "@/components/DarkPageHero";
import Eyebrow from "@/components/Eyebrow";

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

      {/* The design principles and the enquiry band came off this page; the
          gallery below carries the studies themselves. */}
      <section data-reveal className="bg-surface pb-16 pt-20 lg:pb-20 lg:pt-28">
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

      <ConceptGallery />
    </>
  );
}
