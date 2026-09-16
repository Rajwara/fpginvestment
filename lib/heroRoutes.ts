/**
 * Routes whose hero is a full-bleed photograph. On these the floating header
 * switches to dark glass with light text, since it sits over the image rather
 * than over the page surface.
 */
export const photoHeroRoutes = ["/", "/about", "/team"];

/** Static export adds a trailing slash, so compare on a normalised path. */
export const isPhotoHeroRoute = (pathname: string) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return photoHeroRoutes.includes(path);
};
