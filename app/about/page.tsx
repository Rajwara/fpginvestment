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
            Building Hospitality from{" "}
            <span className="text-hero-accent">Concept to Operation</span>
          </>
        }
        lede="FP Global is a full-service hospitality development and management company, partnering with owners and investors across every stage of the hotel lifecycle — from development strategy and design through pre-opening, commercial management and day-to-day operations."
        image="/assets/images/fpginvestment_banner_img1-web.webp"
      />

      <ServicesFlex />

      <MissionSection />

      <TeamGrid />

      <QuerySection />
    </>
  );
}
