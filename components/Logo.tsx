import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Two lockups ship: the dark-ink one for light surfaces and the white-ink one
 * for dark surfaces (the footer panel, the header over a photo hero). Named
 * for the background it sits on.
 */
export default function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  /** Set on a dark surface, where the dark-ink lockup would disappear. */
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src={
          onDark
            ? "/assets/images/logo-on-dark.webp"
            : "/assets/images/logo-on-light.webp"
        }
        alt={site.name}
        width={151}
        height={38}
        preload
        className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
      />
    </Link>
  );
}
