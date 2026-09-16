import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import PhotoPageHero from "@/components/PhotoPageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import QuerySection from "@/components/QuerySection";
import CheckIcon from "@/components/CheckIcon";

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

  return (
    <>
      <PhotoPageHero
        title={service.name}
        crumb={service.short}
        image={service.image}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div
          data-reveal
          className="grid items-start gap-12 lg:grid-cols-[1.55fr_0.95fr] lg:gap-16"
        >
          <article className="reveal">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                preload
                className="object-cover"
              />
            </div>

            <h2 className="mt-10 font-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight tracking-tight text-fg">
              {service.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {service.summary}
            </p>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              What this covers
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Every engagement is scoped to the asset. These are the components
              that appear in most of them.
            </p>

            <ul className="mt-8 space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent-fg">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-fg-2">{p}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl leading-tight text-fg">
              How we work on it
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              One accountable team from first study to daily operations. We take
              the whole line or a single stage of it, and either way the people
              advising on your project have run one themselves.
            </p>
          </article>

          <ServiceSidebar currentId={service.id} />
        </div>
      </div>

      <QuerySection />
    </>
  );
}
