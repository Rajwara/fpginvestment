import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section
      data-reveal
      className="relative overflow-hidden border-t border-bone-200/10 py-24 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(207,174,87,0.11),transparent_68%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="reveal eyebrow text-gold-400">Investor relations</p>
        <h2 className="reveal mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-bone-50">
          Capital deserves a longer conversation.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-bone-400">
          We open capacity selectively and work with a deliberately small number
          of partners. If your horizon looks like ours, start here.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-300"
          >
            Request an introduction
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-bone-200/20 px-8 py-4 text-sm text-bone-200 transition-all duration-300 hover:border-bone-200/50 hover:text-bone-50"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
