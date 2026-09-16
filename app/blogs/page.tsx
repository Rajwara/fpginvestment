import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/format";
import DarkPageHero from "@/components/DarkPageHero";
import Eyebrow from "@/components/Eyebrow";
import QuerySection from "@/components/QuerySection";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "News, development notes and operating insight from the FP Global team.",
};

/** Category · date · read time, in place of a byline we do not have. */
function Meta({
  post,
  tone = "default",
}: {
  post: (typeof insights)[number];
  tone?: "default" | "compact";
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle ${
        tone === "compact" ? "" : "text-sm"
      }`}
    >
      <span className="inline-flex items-center gap-1.5 text-accent-fg">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
        {post.category}
      </span>
      <span aria-hidden="true" className="text-fg-2/30">
        /
      </span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true" className="text-fg-2/30">
        /
      </span>
      <span>{post.readTime}</span>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="reveal grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-lg font-display text-[clamp(1.85rem,3.6vw,2.75rem)] leading-tight tracking-[-0.015em] text-fg">
          {title}
        </h2>
      </div>
      <p className="max-w-md leading-relaxed text-muted">{lede}</p>
    </div>
  );
}

export default function BlogsPage() {
  const featured = insights.slice(0, 2);
  const rest = insights.slice(2);

  return (
    <>
      <DarkPageHero
        eyebrow="News & Insights"
        title={
          <>
            Notes from the{" "}
            <span className="text-hero-accent">projects</span>
          </>
        }
        lede="What we learned developing, opening and running hotels — written up while it is still fresh."
        image="/assets/images/fpginvestment_banner_img2.jpg"
      />

      {/* Featured pair */}
      <section data-reveal className="bg-surface-2 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead
            eyebrow="Featured insights"
            title="What we are thinking about now"
            lede="The pieces we point owners at most often, on the decisions that move an asset's first year the most."
          />

          <div className="stagger mt-12 grid gap-10 sm:grid-cols-2">
            {featured.map((post, i) => (
              <article
                key={post.slug}
                className="reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Link href={`/blogs/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <Meta post={post} />
                    <h3 className="mt-3 font-display text-xl leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg lg:text-2xl">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Everything else */}
      <section data-reveal className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHead
            eyebrow="Latest"
            title="Development and operating notes"
            lede="Written by the people doing the work, on live projects rather than in theory."
          />

          <div className="stagger mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <article
                key={post.slug}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Link href={`/blogs/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-2">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <Meta post={post} tone="compact" />
                    <h3 className="mt-3 font-display text-lg leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuerySection />
    </>
  );
}
