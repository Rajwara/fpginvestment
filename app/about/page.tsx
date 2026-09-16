import type { Metadata } from "next";
import PhotoPageHero from "@/components/PhotoPageHero";
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
      <PhotoPageHero
        title="About Us"
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      <ServicesFlex />

      <MissionSection />

      <TeamGrid />

      <QuerySection />
    </>
  );
}
