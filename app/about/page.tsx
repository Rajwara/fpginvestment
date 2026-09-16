import type { Metadata } from "next";
import DarkPageHero from "@/components/DarkPageHero";
import ServicesFlex from "@/components/ServicesFlex";
import MissionSection from "@/components/MissionSection";
import TeamGrid from "@/components/TeamGrid";
import QuerySection from "@/components/QuerySection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FP Global develops, opens and operates hotels — six service lines under one accountable team.",
};

export default function AboutPage() {
  return (
    <>
      <DarkPageHero
        eyebrow="About Us"
        title={
          <>
            Hotels, from first drawing to{" "}
            <span className="text-hero-accent">daily service</span>
          </>
        }
        lede="Six service lines under one accountable team, from site assembly and brand negotiation through to the operating year."
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      <ServicesFlex />

      <MissionSection />

      <TeamGrid />

      <QuerySection />
    </>
  );
}
