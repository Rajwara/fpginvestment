"use client";

/**
 * Back-to-top control.
 *
 * Stays an <a href="#main"> so it still works with no JavaScript, and so the
 * footer around it can remain a server component. The click handler only adds
 * the smooth glide, which used to come from `scroll-behavior: smooth` on html
 * — that applied to the router's scroll reset as well and left every
 * link-driven navigation arriving part-scrolled.
 */
export default function BackToTop() {
  return (
    <a
      href="#main"
      aria-label="Back to top"
      onClick={(e) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Keep the anchor's other job: move focus to the main landmark.
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className="absolute right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent shadow-lg transition-transform hover:-translate-y-0.5 lg:right-8 lg:bottom-8"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
    </a>
  );
}
