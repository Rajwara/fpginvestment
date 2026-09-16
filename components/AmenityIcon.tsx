import type { ReactNode } from "react";

/**
 * Line icons for the amenity cards. Drawn on the same 24px grid and stroke
 * weight as ServiceIcon so the two sets sit together without looking mixed.
 */
const paths: Record<string, ReactNode> = {
  track: (
    <>
      <rect x="2.5" y="7" width="19" height="10" rx="5" />
      <rect x="7" y="10.5" width="10" height="3" rx="1.5" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M3 9v6M6 7.5v9M18 7.5v9M21 9v6" />
      <path d="M6 12h12" />
    </>
  ),
  yoga: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 8v5M12 13l-4 5M12 13l4 5M7 10h10" />
    </>
  ),
  gate: (
    <>
      <path d="M4 21V10a8 8 0 0 1 16 0v11" />
      <path d="M4 21h16M9.5 21v-7a2.5 2.5 0 0 1 5 0v7" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c0 9-5.5 13-11 13a5 5 0 0 1-5-5C4 7.5 11 4 20 4Z" />
      <path d="M4 20c3-6 7.5-9.5 12-11" />
    </>
  ),
  cigar: (
    <>
      <rect x="2.5" y="12" width="15" height="5" rx="2.5" />
      <path d="M13 12v5M20 5c1 1.2 1 2.3 0 3.5s-1 2.3 0 3.5" />
    </>
  ),
  cup: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3v2M12 3v2" />
    </>
  ),
  billiard: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M8 11.5V15M21 3l-8.5 8.5" />
      <path d="m11 10 2.5 2.5" />
    </>
  ),
  dice: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01M12 12h.01" />
    </>
  ),
  stopwatch: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 10v3.5l2.5 1.5M9.5 2.5h5M12 2.5V6M18.5 7.5 20 6" />
    </>
  ),
  racket: (
    <>
      <ellipse cx="14" cy="9" rx="6" ry="7" transform="rotate(35 14 9)" />
      <path d="m9 14-5 6M8.5 5.5 19 12.5" />
    </>
  ),
};

export default function AmenityIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}
