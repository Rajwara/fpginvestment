/**
 * Routes whose hero is a full-bleed photograph or a dark band. On these the
 * floating header switches to dark glass with light text, since it sits over
 * the image rather than over the page surface.
 */
export const photoHeroRoutes = [
  "/",
  "/about",
  "/team",
  "/faq",
  "/privacy",
  "/terms",
  "/blogs",
  "/hyatt-lahore",
];

/** Section roots whose children all use a dark hero. */
const photoHeroPrefixes = ["/services/", "/careers"];

/** Static export adds a trailing slash, so compare on a normalised path. */
export const isPhotoHeroRoute = (pathname: string) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return (
    photoHeroRoutes.includes(path) ||
    photoHeroPrefixes.some((prefix) => path.startsWith(prefix))
  );
};
