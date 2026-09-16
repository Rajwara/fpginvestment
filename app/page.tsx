import HeroBanner from "@/components/HeroBanner";
import MissionSection from "@/components/MissionSection";
import ServicesFlex from "@/components/ServicesFlex";
import HyattFeature from "@/components/HyattFeature";
import MissionStats from "@/components/MissionStats";
import BlogShowcase from "@/components/BlogShowcase";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <ServicesFlex />
      <HyattFeature />
      <MissionStats />
      <BlogShowcase />
      <Approach />
      <CTA />
    </>
  );
}
