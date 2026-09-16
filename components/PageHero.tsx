export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-fg-2/10 pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full glow-warm blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="animate-fade eyebrow text-accent-fg">{eyebrow}</p>
        <h1 className="animate-rise mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.0] tracking-[-0.02em] text-fg">
          {title}
        </h1>
        <p
          className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "120ms" }}
        >
          {lede}
        </p>
      </div>
    </section>
  );
}
