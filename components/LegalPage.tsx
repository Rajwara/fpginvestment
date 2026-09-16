import PageHero from "@/components/PageHero";

/** Shared layout for Privacy Policy and Terms & Conditions. */
export default function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />

      <article className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <p className="eyebrow text-subtle">Last updated {updated}</p>
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl text-fg">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-14 border-t border-fg-2/10 pt-8 text-xs leading-relaxed text-subtle">
          Placeholder text. Replace with policy wording reviewed by your legal
          adviser before publishing.
        </p>
      </article>
    </>
  );
}
