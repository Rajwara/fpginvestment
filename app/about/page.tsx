import type { Metadata } from "next";
import { metrics } from "@/lib/site";
import PhotoPageHero from "@/components/PhotoPageHero";
import ServicesFlex from "@/components/ServicesFlex";
import MissionSection from "@/components/MissionSection";
import TeamGrid from "@/components/TeamGrid";
import Journey from "@/components/Journey";
import { Section } from "@/components/Section";

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

      <Section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="reveal bg-surface p-8">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl text-fg">
                  {m.value}
                </span>
                <span className="mt-3 block text-sm text-fg-2">{m.label}</span>
                <span className="mt-1 block text-xs text-subtle">{m.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Journey />
    </>
  );
}
