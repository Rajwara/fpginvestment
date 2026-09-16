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

export default function BlogTeaser() {
  return (
    <Section id="blogs" className="border-t border-fg-2/10 bg-surface-2">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="News & Insights"
          title="From the operating floor."
          lede="Notes on development, openings and operations — written by the people doing the work."
        />
        <Link
          href="/blogs"
          className="reveal group inline-flex items-center gap-2 text-sm text-fg-2 transition-colors hover:text-accent-fg"
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

      <ul className="mt-14 border-t border-fg-2/10">
        {insights.map((post, i) => (
          <li
            key={post.slug}
            className="reveal border-b border-fg-2/10"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="group grid gap-4 py-8 transition-colors lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-10 lg:py-10"
            >
              <div className="flex items-center gap-4 lg:w-52 lg:flex-col lg:items-start lg:gap-2">
                <span className="eyebrow text-accent-fg">{post.category}</span>
                <span className="text-xs text-subtle">
                  {formatDate(post.date)} · {post.readTime}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg lg:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-fg-2/15 text-fg-2 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent lg:flex"
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
