import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="FP Global — home"
      className={`group flex items-center gap-3 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <rect
            x="1"
            y="1"
            width="34"
            height="34"
            rx="3"
            className="fill-none stroke-accent-400/60 transition-colors duration-500 group-hover:stroke-accent-300"
            strokeWidth="1"
          />
          <path
            d="M11 25V11h13M11 18h9"
            className="stroke-fg"
            strokeWidth="1.6"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-tight text-fg">
          FP Global
        </span>
        <span className="eyebrow mt-1 text-[0.5625rem] text-subtle">
          Hospitality
        </span>
      </span>
    </Link>
  );
}
