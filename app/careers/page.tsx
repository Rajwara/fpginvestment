import type { Metadata } from "next";
import Link from "next/link";
import { jobs } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at FP Global across development, operations, commercial and design.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build hotels people remember."
        lede="We hire people who have stood behind a desk at 2am and still cared about the guest in front of them. If that is you, we would like to talk."
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div data-reveal>
          <h2 className="reveal eyebrow text-subtle">
            {jobs.length} open positions
          </h2>
          <ul className="reveal mt-8 border-t border-fg-2/10">
            {jobs.map((job) => (
              <li key={job.slug} className="border-b border-fg-2/10">
                <Link
                  href={`/careers/${job.slug}`}
                  className="group grid gap-3 py-8 lg:grid-cols-[1.5fr_1fr_1fr_auto] lg:items-center lg:gap-8"
                >
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-fg transition-colors group-hover:text-accent-300">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-subtle lg:hidden">
                      {job.team} · {job.location} · {job.type}
                    </p>
                  </div>
                  <p className="hidden text-sm text-muted lg:block">{job.team}</p>
                  <p className="hidden text-sm text-muted lg:block">
                    {job.location}
                  </p>
                  <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fg-2/15 text-fg-2 transition-all duration-300 group-hover:border-accent-400 group-hover:bg-accent-400 group-hover:text-surface lg:flex">
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA />
    </>
  );
}
