import type { Metadata } from "next";
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

      <QuerySection />
    </>
  );
}
