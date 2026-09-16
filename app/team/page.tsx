import type { Metadata } from "next";
import Button from "@/components/Button";
import DarkPageHero from "@/components/DarkPageHero";
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
      <DarkPageHero
        eyebrow="Our Team"
        title={
          <>
            Guidance backed by{" "}
            <span className="text-hero-accent">real people</span>
          </>
        }
        lede="Meet the people behind FP Global. Everyone who advises on a project has run one."
        image="/assets/images/fpginvestment_banner_img2.jpg"
      />

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
