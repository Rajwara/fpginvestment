import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/site";
import { formatDate } from "@/lib/format";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

/** Category · date line shared by both card shapes. */
function Meta({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
      <span className="inline-flex items-center gap-1.5 text-accent-fg">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
        {category}
      </span>
      <span aria-hidden="true" className="text-fg-2/30">
        /
      </span>
      <time dateTime={date}>{formatDate(date)}</time>
    </div>
  );
}

function ReadMore() {
  return (
    <span className="mt-4 inline-block text-sm text-fg-2 underline decoration-fg-2/30 underline-offset-[6px] transition-colors group-hover:text-accent-fg group-hover:decoration-accent-fg">
      Continue Reading
    </span>
  );
}

export default function BlogShowcase() {
  const [featured, ...rest] = insights;

  return (
    <section
      id="blogs"
      data-reveal
      className="scroll-mt-24 bg-surface py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>Our Blogs</Eyebrow>
            <h2 className="mt-6 max-w-lg font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] text-fg">
              Latest Business Insights
            </h2>
          </div>
          <Button href="/blogs" arrow>
            View All Blogs
          </Button>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Featured post — sticks alongside the scrolling list on desktop. */}
          <article className="reveal lg:sticky lg:top-28 lg:self-start">
            <Link href={`/blogs/${featured.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <Meta category={featured.category} date={featured.date} />
                <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg lg:text-[1.75rem]">
                  {featured.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <ReadMore />
              </div>
            </Link>
          </article>

          <div className="flex flex-col gap-10 lg:justify-between">
            {rest.map((post, i) => (
              <article
                key={post.slug}
                className="reveal"
                style={{ transitionDelay: `${(i + 1) * 90}ms` }}
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group grid gap-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:items-center"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[16/11]">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 240px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <Meta category={post.category} date={post.date} />
                    <h3 className="mt-3 font-display text-xl leading-snug tracking-tight text-fg transition-colors group-hover:text-accent-fg lg:text-[1.375rem]">
                      {post.title}
                    </h3>
                    <ReadMore />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
