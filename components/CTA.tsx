import Link from "next/link";
import { site } from "@/lib/site";

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
        <p className="reveal eyebrow text-accent-fg">Work with us</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-fg">
          Let&rsquo;s create something exceptional.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Have a hospitality project, development opportunity or partnership in
          mind? Tell us about it and we will tell you honestly what it needs.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-medium text-on-accent transition-all duration-300 hover:bg-accent-hover"
          >
            Start a Conversation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-fg-2/20 px-8 py-4 text-sm text-fg-2 transition-all duration-300 hover:border-fg-2/50 hover:text-fg"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
