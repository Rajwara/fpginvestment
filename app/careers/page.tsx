import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/lib/site";
import DarkPageHero from "@/components/DarkPageHero";
import ContactSidebar from "@/components/ContactSidebar";
import Eyebrow from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at FP Global across development, operations, commercial and design.",
};

export default function CareersPage() {
  return (
    <>
      <DarkPageHero
        eyebrow="Careers"
        title={
          <>
            Build hotels people{" "}
            <span className="text-hero-accent">remember</span>
          </>
        }
        lede="We hire people who have stood behind a desk at 2am and still cared about the guest in front of them. If that is you, we would like to talk."
        image="/assets/images/fpginvestment_banner_img1.jpg"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div
          data-reveal
          className="grid gap-10 lg:grid-cols-[1.9fr_1fr] lg:items-start lg:gap-14"
        >
          {/* Open roles */}
          <div className="reveal">
            <Eyebrow>Success Journey</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.85rem,3.6vw,2.75rem)] leading-tight tracking-[-0.015em] text-fg">
              Grow with the properties you open
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              {jobs.length} open positions across development, operations and
              commercial.
            </p>

            <ul className="mt-8 space-y-4">
              {jobs.map((job) => (
                <li key={job.slug}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-fg-2/10 bg-surface-2 p-6 transition-colors hover:border-accent/40 lg:p-7"
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-xl text-fg transition-colors group-hover:text-accent-fg lg:text-2xl">
                        {job.title}
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                        <span className="flex items-center gap-1.5">
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-accent"
                          />
                          {job.team}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-accent"
                          />
                          {job.location} · {job.type}
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-fg-2/15 text-fg-2 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-2 group-hover:text-on-accent"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
