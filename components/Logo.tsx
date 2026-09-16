import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Both logo files are shipped and swapped with CSS rather than JS, so the
 * correct one is painted on first frame with no flash and no hydration gap.
 * Named for the background they sit on: the white-ink lockup goes on dark.
 */
export default function Logo({
  className = "",
  forceOnDark = false,
}: {
  className?: string;
  /** Over a photo hero the lockup must be the white-ink one whatever the theme. */
  forceOnDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center ${className}`}
    >
      <Image
        src="/assets/images/logo-on-light.webp"
        alt={site.name}
        width={151}
        height={38}
        priority
        className={`h-9 w-auto transition-opacity duration-300 group-hover:opacity-80 ${forceOnDark ? "hidden" : "dark-hidden"}`}
      />
      <Image
        src="/assets/images/logo-on-dark.webp"
        alt=""
        aria-hidden="true"
        width={151}
        height={38}
        priority
        className={`h-9 w-auto transition-opacity duration-300 group-hover:opacity-80 ${forceOnDark ? "" : "light-hidden"}`}
      />
    </Link>
  );
}
