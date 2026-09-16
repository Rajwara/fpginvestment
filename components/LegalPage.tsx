import DarkPageHero from "@/components/DarkPageHero";

/**
 * A section is one heading plus one or more paragraphs, optionally followed by
 * a bulleted list. Policy copy needs both, and a single `body` string forced
 * every clause into one block.
 */
export type LegalSection = {
  heading: string;
  body: string[];
  list?: string[];
};

/** Shared layout for Privacy Policy and Terms & Conditions. */
export default function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  intro,
  sections,
  image,
  footnote,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  image: string;
  footnote: string;
}) {
  return (
    <>
      <DarkPageHero eyebrow={eyebrow} title={title} lede={lede} image={image} />

      <article className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow text-subtle">Last updated {updated}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-fg-2">
          {intro}
        </p>

        {/* In-page contents. The policies run long enough that jumping to a
            clause is faster than scrolling for it. */}
        <nav
          aria-label="On this page"
          className="mt-10 rounded-2xl border border-fg-2/10 bg-surface-2 p-6 lg:p-8"
        >
          <p className="eyebrow text-subtle">On This Page</p>
          <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <li key={s.heading} className="flex gap-3 text-sm">
                <span
                  aria-hidden="true"
                  className="tabular-nums text-accent-fg/70"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${slug(s.heading)}`}
                  className="text-fg-2 transition-colors hover:text-accent-fg"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-12">
          {sections.map((s, i) => (
            <section
              key={s.heading}
              id={slug(s.heading)}
              className="scroll-mt-32 lg:grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-12"
            >
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow text-accent-fg">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-snug text-fg">
                  {s.heading}
                </h2>
              </div>
              <div>
              <div className="mt-4 space-y-4 lg:mt-0">
                {s.body.map((para) => (
                  <p key={para} className="leading-relaxed text-muted">
                    {para}
                  </p>
                ))}
              </div>
              {s.list ? (
                <ul className="mt-5 space-y-3">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3.5 leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fg"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 max-w-3xl border-t border-fg-2/10 pt-8 text-sm leading-relaxed text-subtle">
          {footnote}
        </p>
      </article>
    </>
  );
}

function slug(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
