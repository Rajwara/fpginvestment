import { performance } from "@/lib/site";
import { Section, SectionHeading } from "./Section";

const values = performance.flatMap((p) => [p.fund, p.bench]);
const max = Math.max(...values, 0);
const min = Math.min(...values, 0);
const range = max - min;

/** Share of the plot area above and below the zero line. */
const upperShare = (max / range) * 100;
const lowerShare = 100 - upperShare;

/** Bar height as a % of its own half of the plot, floored so tiny bars show. */
const barHeight = (v: number) =>
  v >= 0
    ? `${Math.max((v / max) * 100, 2)}%`
    : `${Math.max((Math.abs(v) / Math.abs(min)) * 100, 2)}%`;

const format = (v: number) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;

function Bar({
  value,
  tone,
}: {
  value: number;
  tone: "fund" | "bench";
}) {
  const positive = value >= 0;
  const fill =
    tone === "fund"
      ? positive
        ? "bg-gradient-to-t from-gold-600 to-gold-400"
        : "bg-gradient-to-b from-gold-600 to-gold-500/60"
      : positive
        ? "bg-bone-200/20"
        : "bg-bone-200/12";
  const label = tone === "fund" ? "text-gold-300" : "text-bone-500";
  // Benchmark values are too tight to read on narrow screens; the legend and
  // the figure caption still carry them.
  const labelVisibility = tone === "bench" ? "hidden sm:inline" : "";

  return (
    <div className="flex h-full min-w-0 flex-1 flex-col">
      {/* Upper half — positive bars grow up toward the zero line */}
      <div
        className="relative flex flex-col justify-end"
        style={{ height: `${upperShare}%` }}
      >
        {positive ? (
          <>
            <span
              className={`pointer-events-none absolute left-1/2 mb-1.5 -translate-x-1/2 text-[0.625rem] tabular-nums lg:text-[0.6875rem] ${label} ${labelVisibility}`}
              style={{ bottom: barHeight(value) }}
            >
              {format(value)}
            </span>
            <div
              className={`w-full rounded-t-sm ${fill}`}
              style={{ height: barHeight(value) }}
            />
          </>
        ) : null}
      </div>

      {/* Lower half — negative bars grow down from the zero line */}
      <div className="relative" style={{ height: `${lowerShare}%` }}>
        {!positive ? (
          <>
            <div
              className={`w-full rounded-b-sm ${fill}`}
              style={{ height: barHeight(value) }}
            />
            <span
              className={`pointer-events-none absolute left-1/2 mt-1.5 -translate-x-1/2 text-[0.625rem] tabular-nums lg:text-[0.6875rem] ${label} ${labelVisibility}`}
              style={{ top: barHeight(value) }}
            >
              {format(value)}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <Section className="border-t border-bone-200/10">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-20">
        <SectionHeading
          eyebrow="Track record"
          title="The years that matter are the bad ones."
          lede="Flagship multi-strategy composite, net of all fees, against a 60/40 global blended benchmark. Our outperformance is made almost entirely in drawdowns."
        />

        <div className="reveal min-w-0">
          <div className="flex items-center gap-6 pb-6">
            <span className="flex items-center gap-2 text-xs text-bone-400">
              <span className="h-2.5 w-2.5 rounded-sm bg-gold-400" />
              FPG Flagship
            </span>
            <span className="flex items-center gap-2 text-xs text-bone-400">
              <span className="h-2.5 w-2.5 rounded-sm bg-bone-200/25" />
              Benchmark
            </span>
          </div>

          <figure className="rounded-xl border border-bone-200/10 bg-ink-900/60 p-6 lg:p-8">
            <div className="relative h-72 lg:h-80">
              {/* Zero line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 border-t border-dashed border-bone-200/20"
                style={{ top: `${upperShare}%` }}
              />
              <div className="flex h-full gap-2 sm:gap-3 lg:gap-6">
                {performance.map((p) => (
                  <div key={p.year} className="flex h-full min-w-0 flex-1 gap-1 lg:gap-1.5">
                    <Bar value={p.fund} tone="fund" />
                    <Bar value={p.bench} tone="bench" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-2 border-t border-bone-200/10 pt-4 sm:gap-3 lg:gap-6">
              {performance.map((p) => (
                <span
                  key={p.year}
                  className="min-w-0 flex-1 text-center text-xs tabular-nums text-bone-500"
                >
                  {p.year}
                </span>
              ))}
            </div>

            <figcaption className="sr-only">
              Annual net returns, FPG Flagship versus benchmark:{" "}
              {performance
                .map(
                  (p) =>
                    `${p.year}, fund ${format(p.fund)}, benchmark ${format(p.bench)}`
                )
                .join("; ")}
              .
            </figcaption>
          </figure>

          <p className="mt-4 text-xs leading-relaxed text-bone-500">
            Illustrative figures. Past performance is not indicative of future
            results.
          </p>
        </div>
      </div>
    </Section>
  );
}
