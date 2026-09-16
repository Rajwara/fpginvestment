import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs, site } from "@/lib/site";
import PageHero from "@/components/PageHero";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Not found" };
  return {
    title: job.title,
    description: `${job.title} — ${job.team}, ${job.location}. Open role at ${site.name}.`,
  };
}

const sections = [
  {
    heading: "The role",
    body: "Placeholder description. Replace with the responsibilities, reporting line and day-to-day scope for this position.",
  },
  {
    heading: "What you bring",
    body: "Placeholder requirements. Replace with the experience, qualifications and attributes that matter for this role.",
  },
  {
    heading: "What we offer",
    body: "Placeholder benefits. Replace with compensation band, benefits and the development path attached to this position.",
  },
];

export default async function JobPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${job.team} · ${job.type}`}
        title={job.title}
        lede={`${job.location} — reporting into the ${job.team} team.`}
      />

      <article className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <Link
          href="/careers"
          className="eyebrow inline-flex items-center gap-2 text-subtle transition-colors hover:text-accent-300"
        >
          <span aria-hidden="true">←</span> All open roles
        </Link>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 sm:grid-cols-3">
          {[
            ["Team", job.team],
            ["Location", job.location],
            ["Type", job.type],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-6">
              <dt className="eyebrow text-subtle">{k}</dt>
              <dd className="mt-2 text-fg">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl text-fg">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-fg-2/10 bg-surface-2 p-8">
          <h2 className="font-display text-2xl text-fg">Apply for this role</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Send your CV and a short note about why this role interests you.
          </p>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${job.title}`)}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-medium text-surface transition-colors hover:bg-accent-300"
          >
            Email your application <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </>
  );
}
