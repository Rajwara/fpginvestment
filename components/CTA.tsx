import { site } from "@/lib/site";
import MaskButton from "@/components/MaskButton";
import Eyebrow from "@/components/Eyebrow";

export default function CTA() {
  return (
    <section
      data-reveal
      className="relative overflow-hidden border-t border-fg-2/10 py-24 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-cta blur-2xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Eyebrow className="reveal">Work with us</Eyebrow>
        <h2 className="reveal mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-fg">
          Let&rsquo;s create something exceptional.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Have a hospitality project, development opportunity or partnership in
          mind? Tell us about it and we will tell you honestly what it needs.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <MaskButton href="/contact" size="lg" arrow>
            Start a Conversation
          </MaskButton>
          <MaskButton
            href={`mailto:${site.email}`}
            variant="secondary"
            size="lg"
          >
            {site.email}
          </MaskButton>
        </div>
      </div>
    </section>
  );
}
