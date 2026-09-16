import type { ReactNode } from "react";

/**
 * Renders an article body from the Markdown in content/blogs/.
 *
 * Deliberately not a Markdown library. The articles use five constructs —
 * `## ` headings, paragraphs, `- ` bullets, `1. ` numbered lists and `**bold**`
 * — so a parser for exactly those is a few lines, carries no dependency, and
 * cannot render anything the articles do not contain. Anything beyond that
 * subset falls through as a paragraph rather than silently disappearing; if an
 * article ever needs more, widen this on purpose.
 */

/** `**bold**` inside a line. Everything else is text. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-fg">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

const BULLET = /^-\s+/;
const NUMBER = /^\d+\.\s+/;

export default function ArticleBody({ markdown }: { markdown: string }) {
  // Blank lines separate blocks; a block's own lines belong together.
  const blocks = markdown.trim().split(/\n{2,}/);

  return (
    <div className="mt-12 text-lg leading-relaxed text-muted">
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter(Boolean);

        if (lines[0].startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-14 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight tracking-tight text-fg first:mt-0"
            >
              {inline(lines[0].slice(3))}
            </h2>
          );
        }

        if (lines.every((l) => BULLET.test(l))) {
          return (
            <ul key={i} className="mt-6 space-y-3 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fg"
                  />
                  <span>{inline(l.replace(BULLET, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (lines.every((l) => NUMBER.test(l))) {
          return (
            <ol key={i} className="mt-6 space-y-3">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent-fg"
                  >
                    {j + 1}
                  </span>
                  <span>{inline(l.replace(NUMBER, ""))}</span>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={i} className="mt-6 first:mt-0">
            {inline(lines.join(" "))}
          </p>
        );
      })}
    </div>
  );
}
