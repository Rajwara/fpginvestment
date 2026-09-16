import { milestones } from "@/lib/site";
import Eyebrow from "./Eyebrow";
import { Section } from "./Section";

/** Rotated square that points a card back at the rail. */
function Notch({ above }: { above: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-surface-2 ${
        above
          ? "-bottom-1.5 border-r border-b border-fg-2/12"
          : "-top-1.5 border-t border-l border-fg-2/12"
      }`}
    />
  );
}

function Card({
  milestone,
  above,
}: {
  milestone: (typeof milestones)[number];
  above: boolean;
}) {
  return (
    <div
      className={`absolute inset-x-2 rounded-2xl border border-fg-2/12 bg-surface-2 px-4 py-5 text-center shadow-sm shadow-fg/5 ${
        above ? "bottom-[calc(50%+1.6rem)]" : "top-[calc(50%+1.6rem)]"
      }`}
    >
      <Notch above={above} />
      <p className="font-display text-2xl leading-none text-fg">
        {milestone.year}
      </p>
      <p className="mt-2 text-sm font-medium text-accent-fg">
        {milestone.label}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        {milestone.event}
      </p>
    </div>
  );
}

export default function Journey() {
  return (
    <Section className="border-t border-fg-2/10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div className="reveal">
          <Eyebrow>History</Eyebrow>
          <h2 className="mt-6 max-w-xl font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-fg">
            Seventeen years, one direction.
          </h2>
        </div>
        <p
          className="reveal max-w-sm leading-relaxed text-muted"
          style={{ transitionDelay: "90ms" }}
        >
          Each capability was added because a project needed it, not because a
          plan called for it.
        </p>
      </div>

      {/* Desktop: cards alternate above and below a single rail */}
      <div className="mt-24 hidden lg:block">
        <ol className="relative grid h-[22rem] grid-cols-6">
          <li
            aria-hidden="true"
            className="draw-line absolute inset-x-0 top-1/2 -mt-px h-px bg-fg-2/20"
          />
          {milestones.map((m, i) => {
            // Odd entries sit above the rail, so the row reads as a zigzag.
            const above = i % 2 === 1;
            return (
              <li key={m.year} className="relative">
                <span
                  aria-hidden="true"
                  className="reveal absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-surface"
                  style={{ transitionDelay: `${300 + i * 110}ms` }}
                />
                <div
                  className="reveal"
                  style={{ transitionDelay: `${380 + i * 110}ms` }}
                >
                  <Card milestone={m} above={above} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile: the same milestones down a left rail */}
      <ol className="relative mt-14 border-l border-fg-2/15 pl-8 lg:hidden">
        {milestones.map((m, i) => (
          <li
            key={m.year}
            className="reveal relative pb-10 last:pb-0"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface"
            />
            <p className="font-display text-2xl leading-none text-fg">
              {m.year}
            </p>
            <p className="mt-2 text-sm font-medium text-accent-fg">{m.label}</p>
            <p className="mt-2 max-w-xl leading-relaxed text-muted">{m.event}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
