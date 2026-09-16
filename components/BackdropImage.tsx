import Image from "next/image";

/**
 * A full-bleed background photograph, optionally art-directed.
 *
 * Pass a string for one picture at every width. Pass { desktop, mobile } when
 * a page supplies a separate portrait crop — a landscape hero cropped to a
 * phone keeps only its middle, which is usually not where the subject is.
 *
 * The two-crop form renders a <picture> rather than two next/image elements
 * toggled with `hidden`: a hidden element is still fetched, so that would cost
 * the viewer both files. <source media> fetches exactly one.
 */
export type Backdrop = string | { desktop: string; mobile: string };

/** Below this width the portrait crop is used. Matches Tailwind's `sm`. */
const MOBILE_UP_TO = 639;

export default function BackdropImage({
  image,
  className,
  preload,
}: {
  image: Backdrop;
  className: string;
  preload?: boolean;
}) {
  if (typeof image === "string") {
    return (
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        preload={preload}
        className={className}
      />
    );
  }

  return (
    <picture>
      <source
        media={`(max-width: ${MOBILE_UP_TO}px)`}
        srcSet={image.mobile}
      />
      <source srcSet={image.desktop} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.desktop}
        alt=""
        loading={preload ? "eager" : "lazy"}
        fetchPriority={preload ? "high" : undefined}
        decoding="async"
        className={`absolute inset-0 h-full w-full ${className}`}
      />
    </picture>
  );
}
