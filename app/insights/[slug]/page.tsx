import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/site";
import { formatDate } from "@/components/Insights";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-24 lg:pt-44 lg:pb-36">
      <Link
        href="/insights"
        className="eyebrow inline-flex items-center gap-2 text-bone-500 transition-colors hover:text-gold-300"
      >
        <span aria-hidden="true">←</span> All insights
      </Link>

      <p className="eyebrow mt-10 text-gold-400">{post.category}</p>
      <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-bone-50">
        {post.title}
      </h1>
      <p className="mt-6 text-sm text-bone-500">
        {formatDate(post.date)} · {post.readTime} read
      </p>

      <div className="mt-12 space-y-6 border-t border-bone-200/10 pt-12 text-lg leading-relaxed text-bone-400">
        <p className="text-xl text-bone-200">{post.excerpt}</p>
        <p>
          This is placeholder body copy standing in for the full note. The
          published version runs the underlying data, the positions we took as a
          result, and the conditions under which we would reverse them.
        </p>
        <p>
          Our research is written for the investment committee first and
          published second. That ordering is deliberate: it keeps the argument
          honest, because the firm has already put capital behind it before
          anyone outside reads a word.
        </p>
        <p>
          Institutional partners receive the full note, the underlying dataset
          and a recorded walkthrough with the analyst who wrote it.
        </p>
      </div>

      <div className="mt-16 rounded-xl border border-bone-200/10 bg-ink-900 p-8 lg:p-10">
        <h2 className="font-display text-2xl text-bone-50">
          Request the full note
        </h2>
        <p className="mt-3 leading-relaxed text-bone-400">
          Complete research, including data appendices, is available to
          qualified institutional investors.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
        >
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
