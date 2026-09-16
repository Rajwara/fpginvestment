export default function CheckIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="10" className="fill-accent" />
      <path
        d="M5.8 10.3l2.6 2.6 5.8-5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-on-accent"
      />
    </svg>
  );
}
