import Link from "next/link";
import { metrics } from "@/lib/site";
import MaskButton from "@/components/MaskButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40">
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full glow-warm blur-2xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full glow-cool blur-2xl" />
        <div className="absolute inset-0 grid-lines [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow animate-fade text-accent-fg">
          Hospitality development &amp; management · Lahore
        </p>

        <h1 className="animate-rise mt-8 max-w-4xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-fg">
          Redefining
          <br />
          <span className="text-accent-fg italic">hospitality</span>, end to end.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <p
            className="animate-rise max-w-xl text-lg leading-relaxed text-muted lg:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            From feasibility and design through pre-opening and daily
            operations, FP Global develops and manages hotels that perform for
            owners and are remembered by guests. Including Hyatt Regency
            Lahore.
          </p>

          <div
            className="animate-rise flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <MaskButton href="/about" arrow>
              Explore our services
            </MaskButton>
            <MaskButton href="/hyatt-lahore" variant="secondary">
              Hyatt Regency Lahore
            </MaskButton>
          </div>
        </div>

        {/* Metric bar */}
        <dl
          className="animate-rise mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-fg-2/10 bg-fg-2/10 lg:mt-28 lg:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface px-6 py-8 lg:px-8 lg:py-10">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl tracking-tight text-fg lg:text-5xl">
                  {m.value}
                </span>
                <span className="mt-3 block text-sm text-fg-2">
                  {m.label}
                </span>
                <span className="mt-1 block text-xs text-subtle">
                  {m.note}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
