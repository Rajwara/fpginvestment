import HeroBanner from "@/components/HeroBanner";
import MissionSection from "@/components/MissionSection";
import ServicesFlex from "@/components/ServicesFlex";
import HyattFeature from "@/components/HyattFeature";
import Approach from "@/components/Approach";
import BlogTeaser from "@/components/BlogTeaser";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <ServicesFlex />
      <HyattFeature />
      <Approach />
      <BlogTeaser />
      <CTA />
    </>
  );
}
