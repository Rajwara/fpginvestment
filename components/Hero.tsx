import Link from "next/link";
import { metrics } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40">
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(207,174,87,0.13),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(40,70,110,0.28),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,210,200,0.045)_1px,transparent_1px)] bg-[size:88px_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow animate-fade text-gold-400">
          Multi-strategy asset management · Est. 2009
        </p>

        <h1 className="animate-rise mt-8 max-w-4xl font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-bone-50">
          Disciplined capital,
          <br />
          <span className="text-gold-300 italic">compounded</span> patiently.
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <p
            className="animate-rise max-w-xl text-lg leading-relaxed text-bone-400 lg:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            We invest across public and private markets for institutions,
            endowments and families who measure results in decades. No
            benchmarks to hug, no quarters to defend — only capital placed
            where the arithmetic works.
          </p>

          <div
            className="animate-rise flex flex-wrap items-center gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <Link
              href="/strategies"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-300"
            >
              Explore strategies
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/#approach"
              className="inline-flex items-center gap-2.5 rounded-full border border-bone-200/20 px-7 py-3.5 text-sm text-bone-200 transition-all duration-300 hover:border-bone-200/50 hover:text-bone-50"
            >
              How we invest
            </Link>
          </div>
        </div>

        {/* Metric bar */}
        <dl
          className="animate-rise mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-bone-200/10 bg-bone-200/10 lg:mt-28 lg:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-ink-950 px-6 py-8 lg:px-8 lg:py-10">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-4xl tracking-tight text-bone-50 lg:text-5xl">
                  {m.value}
                </span>
                <span className="mt-3 block text-sm text-bone-200">
                  {m.label}
                </span>
                <span className="mt-1 block text-xs text-bone-500">
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
