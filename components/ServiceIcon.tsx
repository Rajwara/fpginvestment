const paths: Record<string, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" />
    </>
  ),
  blueprint: (
    <>
      <path d="M3 5.5 12 3l9 2.5v13L12 21l-9-2.5v-13Z" />
      <path d="M12 3v18M3 9.5h18" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="m11 11 8 8M16.5 16.5 19 14M14 14l2 2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v4.5h-4.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a2 2 0 0 0 2 2h1l9 4V4L7 8H6a2 2 0 0 0-2 2Z" />
      <path d="M19 9a3 3 0 0 1 0 6" />
    </>
  ),
  concierge: (
    <>
      <path d="M3 18h18M4.5 18a7.5 7.5 0 0 1 15 0" />
      <path d="M12 7.5V6M10.5 6h3" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = "h-5 w-5",
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
      {paths[name] ?? paths.compass}
    </svg>
  );
}
