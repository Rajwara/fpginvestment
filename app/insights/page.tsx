import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/site";
import PageHero from "@/components/PageHero";
import { formatDate } from "@/components/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research notes, strategy commentary and market views from the FPG Investment team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Written when there is something to say."
        lede="No weekly newsletter, no market-open hot takes. We publish research we have already acted on, and we show the working."
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
        <ul data-reveal className="border-b border-bone-200/10">
          {insights.map((post, i) => (
            <li
              key={post.slug}
              className="reveal border-t border-bone-200/10 first:border-t-0"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Link
                href={`/insights/${post.slug}`}
                className="group grid gap-4 py-10 lg:grid-cols-[14rem_1fr_auto] lg:items-baseline lg:gap-10"
              >
                <div className="flex flex-col gap-2">
                  <span className="eyebrow text-gold-400">{post.category}</span>
                  <span className="text-xs text-bone-500">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-snug tracking-tight text-bone-50 transition-colors group-hover:text-gold-200 lg:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-bone-400">
                    {post.excerpt}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-bone-200/15 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950 lg:flex"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
