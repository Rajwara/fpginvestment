import HeroBanner from "@/components/HeroBanner";
import MissionSection from "@/components/MissionSection";
import ServicesFlex from "@/components/ServicesFlex";
import HyattFeature from "@/components/HyattFeature";
import MissionStats from "@/components/MissionStats";
import BlogShowcase from "@/components/BlogShowcase";
import QuerySection from "@/components/QuerySection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <MissionSection />
      <ServicesFlex />
      <HyattFeature />
      <MissionStats />
      <BlogShowcase />
      <QuerySection />
    </>
  );
}
