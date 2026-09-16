import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ServiceIcon from "@/components/ServiceIcon";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) return { title: "Not found" };
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  if (!service) notFound();

  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={service.name}
        lede={service.summary}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div data-reveal className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div className="reveal">
            <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent-400/30 text-accent-400">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-3xl leading-tight text-fg">
              What this covers
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Every engagement is scoped to the asset. These are the components
              that appear in most of them.
            </p>
          </div>

          <div className="reveal">
            <ul className="grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10">
              {service.points.map((p, i) => (
                <li key={p} className="bg-surface p-8">
                  <span className="font-display text-xl text-accent-400/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-lg text-fg">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="mt-24 border-t border-fg-2/10 pt-16">
          <h2 className="reveal eyebrow text-subtle">Other service lines</h2>
          <ul className="reveal mt-8 grid gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  className="group flex h-full flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <span className="text-accent-400">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm leading-snug text-fg transition-colors group-hover:text-accent-300">
                    {s.short}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA />
    </>
  );
}
