import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/site";
import PageHero from "@/components/PageHero";
import { formatDate } from "@/components/BlogTeaser";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "News, development notes and operating insight from the FP Global team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Notes from the projects."
        lede="What we learned developing, opening and running hotels — written up while it is still fresh."
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
        <ul data-reveal className="border-b border-fg-2/10">
          {insights.map((post, i) => (
            <li
              key={post.slug}
              className="reveal border-t border-fg-2/10 first:border-t-0"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="group grid gap-4 py-10 lg:grid-cols-[14rem_1fr_auto] lg:items-baseline lg:gap-10"
              >
                <div className="flex flex-col gap-2">
                  <span className="eyebrow text-accent-fg">{post.category}</span>
                  <span className="text-xs text-subtle">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg lg:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-fg-2/15 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent lg:flex"
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
