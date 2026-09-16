import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow text-gold-400">Error 404</p>
      <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-tight text-bone-50">
        This position was closed.
      </h1>
      <p className="mt-6 text-lg text-bone-400">
        The page you were looking for is no longer part of the portfolio.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
      >
        Back to the homepage <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
