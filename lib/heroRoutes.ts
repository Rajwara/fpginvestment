/**
 * Routes whose hero is a full-bleed photograph. On these the floating header
 * switches to dark glass with light text, since it sits over the image rather
 * than over the page surface.
 */
export const photoHeroRoutes = ["/"];

export const isPhotoHeroRoute = (pathname: string) =>
  photoHeroRoutes.includes(pathname);
