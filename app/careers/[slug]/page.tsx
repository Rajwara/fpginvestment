import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hiringFaqs, jobs, site } from "@/lib/site";
import PhotoPageHero from "@/components/PhotoPageHero";
import ContactSidebar from "@/components/ContactSidebar";
import Button from "@/components/Button";
import CheckIcon from "@/components/CheckIcon";

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
      <PhotoPageHero
        title={job.title}
        crumb={job.title}
        image="/assets/images/ProfessionalGuidanceimg-03.jpg"
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div
          data-reveal
          className="grid items-start gap-12 lg:grid-cols-[1.55fr_0.95fr] lg:gap-16"
        >
          <article className="reveal">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src="/assets/images/ProfessionalGuidanceimg-05.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                preload
                className="object-cover"
              />
            </div>

            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 sm:grid-cols-3">
              {[
                ["Team", job.team],
                ["Location", job.location],
                ["Type", job.type],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface p-5">
                  <dt className="eyebrow text-subtle">{k}</dt>
                  <dd className="mt-2 text-sm text-fg">{v}</dd>
                </div>
              ))}
            </dl>

            <h2 className="mt-10 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight tracking-tight text-fg">
              {job.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {job.intro}
            </p>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              What the role covers
            </h3>
            <ul className="mt-6 space-y-4">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent-fg">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-fg-2">{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              What you bring
            </h3>
            <ul className="mt-6 space-y-4">
              {job.requirements.map((r) => (
                <li key={r} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent-fg">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-fg-2">{r}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              What we offer
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{job.offer}</p>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              Before you apply
            </h3>
            {/* Native details, so it opens with the keyboard and without JS. */}
            <ul className="mt-6 space-y-3">
              {hiringFaqs.map((item, i) => (
                <li key={item.q}>
                  <details
                    open={i === 0}
                    className="group overflow-hidden rounded-xl bg-surface-2 transition-colors open:bg-gradient-to-r open:from-accent open:to-accent-2"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-left font-medium text-fg marker:content-none group-open:text-on-accent">
                      <span className="flex gap-3">
                        <span className="text-accent-fg group-open:text-on-accent/70">
                          {i + 1}.
                        </span>
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-accent-fg transition-transform duration-300 group-open:rotate-180 group-open:text-on-accent"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="px-5 pb-5 pl-11 leading-relaxed text-muted group-open:text-on-accent/85">
                      {item.a}
                    </p>
                  </details>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl bg-surface-2 p-8">
              <h3 className="font-display text-2xl text-fg">
                Apply for this role
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Send your CV and a short note about why this role interests you.
              </p>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${job.title}`)}`}
                className="mt-6"
                arrow
              >
                Email your application
              </Button>
            </div>
          </article>

          <ContactSidebar />
        </div>
      </div>
    </>
  );
}
