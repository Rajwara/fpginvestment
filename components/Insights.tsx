import Link from "next/link";
import { insights } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Insights() {
  return (
    <Section id="insights" className="border-t border-bone-200/10 bg-ink-900">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Insights"
          title="What we are thinking about."
          lede="We publish rarely, and only when we have something we would act on ourselves."
        />
        <Link
          href="/insights"
          className="reveal group inline-flex items-center gap-2 text-sm text-bone-200 transition-colors hover:text-gold-300"
        >
          All insights
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <ul className="mt-14 border-t border-bone-200/10">
        {insights.map((post, i) => (
          <li
            key={post.slug}
            className="reveal border-b border-bone-200/10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Link
              href={`/insights/${post.slug}`}
              className="group grid gap-4 py-8 transition-colors lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-10 lg:py-10"
            >
              <div className="flex items-center gap-4 lg:w-52 lg:flex-col lg:items-start lg:gap-2">
                <span className="eyebrow text-gold-400">{post.category}</span>
                <span className="text-xs text-bone-500">
                  {formatDate(post.date)} · {post.readTime}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-snug tracking-tight text-bone-50 transition-colors group-hover:text-gold-200 lg:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-bone-400">
                  {post.excerpt}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bone-200/15 text-bone-200 transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-ink-950 lg:flex"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
