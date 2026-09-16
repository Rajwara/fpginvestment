import type { Metadata } from "next";
import Button from "@/components/Button";
import Eyebrow from "@/components/Eyebrow";
import TeamProfiles from "@/components/TeamProfiles";
import QuerySection from "@/components/QuerySection";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The people behind FP Global — hospitality operators, developers and commercial leaders.",
};

export default function TeamPage() {
  return (
    <>
      {/* Dark opener, so the header sits on it as light-on-dark glass */}
      <section className="relative isolate overflow-hidden bg-black pt-36 pb-20 text-center lg:pt-44 lg:pb-24">
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="flex justify-center">
            <Eyebrow tone="hero">Our Team</Eyebrow>
          </div>
          <h1 className="animate-rise mt-6 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Guidance backed by{" "}
            <span className="text-hero-accent">real people</span>
          </h1>
          <p
            className="animate-rise mx-auto mt-5 max-w-xl leading-relaxed text-white/65"
            style={{ animationDelay: "120ms" }}
          >
            Meet the people behind FP Global. Everyone who advises on a project
            has run one.
          </p>
        </div>
      </section>

      <TeamProfiles />

      {/* Closing band, as in the reference */}
      <section className="bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="eyebrow text-white/50">Ready to work with us?</p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight text-white">
              Let&rsquo;s build something exceptional{" "}
              <span className="text-hero-accent">together</span>.
            </h2>
          </div>
          <Button href="/contact" size="lg" className="w-fit" arrow>
            Contact Our Team
          </Button>
        </div>
      </section>

      <QuerySection />
    </>
  );
}
