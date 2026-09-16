import Image from "next/image";
import Eyebrow from "./Eyebrow";
import MaskButton from "./MaskButton";

/** Flagship property feature: image left, copy right. */
export default function HyattFeature() {
  return (
    <section
      data-reveal
      className="scroll-mt-24 border-b border-fg-2/10 py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
          <Image
            src="/assets/images/home-hayyat-regency.jpg"
            alt="The FP Global team at Hyatt Regency Lahore"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="reveal">
          <Eyebrow>Developed. Opened. Operated.</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Hyatt Regency Lahore, concept to operating asset.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Our flagship mandate ran through every one of our six service lines
            — site assembly and brand negotiation, technical services and
            handover, eighteen months of pre-opening, and the daily operation
            that followed. It is the clearest answer to what FP Global does.
          </p>

          <MaskButton href="/hyatt-lahore" size="lg" className="mt-8" arrow>
            Explore the Property
          </MaskButton>
        </div>
      </div>
    </section>
  );
}
