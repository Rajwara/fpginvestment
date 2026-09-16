import HeroBanner from "@/components/HeroBanner";
import MissionSection from "@/components/MissionSection";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import BlogTeaser from "@/components/BlogTeaser";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <Services />
      <Approach />
      <BlogTeaser />
      <CTA />
    </>
  );
}
