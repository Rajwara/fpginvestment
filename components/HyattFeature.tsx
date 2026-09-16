import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

/** Flagship property feature: image left, copy right. */
export default function HyattFeature() {
  return (
    <section
      data-reveal
      className="scroll-mt-24 border-b border-fg-2/10 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="reveal-zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
          <Image
            src="/assets/images/home/developed-opened-operated-web.webp"
            alt="The landscaped water feature and forecourt at Hyatt Regency Lahore"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="reveal-right">
          <Eyebrow>Developed. Opened. Operated.</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Hyatt Regency Lahore &mdash; From Concept to Operation
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Hyatt Regency Lahore reflects FP Global&rsquo;s end-to-end approach
            to hospitality development and management. From project
            development, brand coordination and technical oversight to
            pre-opening readiness and ongoing hotel operations, the project
            brings our full-service capabilities together under one integrated
            mandate.
          </p>

          <Button href="/hyatt-lahore" size="lg" className="mt-8" arrow>
            Explore Hyatt Regency Lahore
          </Button>
        </div>
      </div>
    </section>
  );
}
