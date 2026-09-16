const glyphs: Record<string, React.ReactNode> = {
  LinkedIn: (
    <path d="M4.6 6.5h2.3v8.9H4.6V6.5Zm1.15-3.4a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66ZM8.6 6.5h2.2v1.22h.03c.31-.58 1.06-1.2 2.19-1.2 2.34 0 2.77 1.5 2.77 3.46v5.42h-2.3v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.85 1.24-1.85 2.53v4.89H8.6V6.5Z" />
  ),
  Instagram: (
    <>
      <rect x="3.2" y="3.2" width="13.6" height="13.6" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.1" cy="5.9" r="1" />
    </>
  ),
  Facebook: (
    <path d="M11.6 17.5v-6.4h2.15l.32-2.5H11.6V7c0-.72.2-1.21 1.24-1.21h1.32V3.55c-.23-.03-1.01-.1-1.92-.1-1.9 0-3.2 1.16-3.2 3.29V8.6H6.88v2.5h2.16v6.4h2.56Z" />
  ),
};

export default function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
      {glyphs[name] ?? <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />}
    </svg>
  );
}
