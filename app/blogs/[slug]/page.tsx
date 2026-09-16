import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/format";
import ArticleBody from "@/components/ArticleBody";
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

  /* Read at build time — every one of these pages is prerendered through
     generateStaticParams, so nothing here runs on a request. */
  const markdown = await readFile(
    path.join(process.cwd(), "content", "blogs", `${post.slug}.md`),
    "utf8"
  );

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

      {/*
        Pulled wider than the 3xl prose column so the banner reads as artwork
        rather than an inline figure, and clamped back at small widths.
      */}
      <div
        data-reveal
        className="mt-12 lg:-mx-16 xl:-mx-24"
      >
        <div className="reveal-wipe relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[3/1]">
          <Image
            src={post.banner}
            alt=""
            fill
            sizes="(min-width: 1280px) 56rem, (min-width: 1024px) 50rem, 100vw"
            className="object-cover"
            preload
          />
        </div>
      </div>

      <p className="mt-12 border-l-2 border-accent/40 pl-6 text-xl leading-relaxed text-fg-2">
        {post.excerpt}
      </p>

      <ArticleBody markdown={markdown} />

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
