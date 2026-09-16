import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/format";
import Button from "@/components/Button";

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

export default async function BlogPage({
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
        href="/blogs"
        className="eyebrow inline-flex items-center gap-2 text-subtle transition-colors hover:text-accent-fg"
      >
        <span aria-hidden="true">←</span> All posts
      </Link>

      <p className="eyebrow mt-10 text-accent-fg">{post.category}</p>
      <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-fg">
        {post.title}
      </h1>
      <p className="mt-6 text-sm text-subtle">
        {formatDate(post.date)} · {post.readTime} read
      </p>

      <div className="mt-12 space-y-6 border-t border-fg-2/10 pt-12 text-lg leading-relaxed text-muted">
        <p className="text-xl text-fg-2">{post.excerpt}</p>
        <p>
          This is placeholder body copy standing in for the full article. The
          published version works through the project detail, the decisions
          taken and what we would do differently next time.
        </p>
        <p>
          Everything we publish comes out of a live project. That is the only
          filter — if we have not done it ourselves on an operating asset, we
          do not write about it.
        </p>
      </div>

      <div className="mt-16 rounded-xl border border-fg-2/10 bg-surface-2 p-8 lg:p-10">
        <h2 className="font-display text-2xl text-fg">
          Talk to us about your project
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          If something here is relevant to a development or an operating asset
          you are working on, we are happy to go deeper.
        </p>
        <Button href="/contact" className="mt-6" arrow>
          Get in touch
        </Button>
      </div>
    </article>
  );
}
