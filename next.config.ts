import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    /*
     * Serve every picture as the static file it already is.
     *
     * next/image otherwise routes each one through /_next/image, which on
     * Vercel is a metered transform run on demand. Every image on the site
     * broke at once after a deploy while the files themselves were fine and
     * served correctly — a failure only that hop can produce, and one no
     * amount of correct code prevents.
     *
     * We do not need the hop. Every image in public/assets is already a
     * hand-sized WebP: 121 files, ~9MB in total, the largest under 300KB.
     * Static files are served from the CDN, cost nothing to transform and
     * cannot run out.
     *
     * The trade is that a phone downloads the desktop file rather than a
     * narrower crop. At these weights that is worth paying for pictures that
     * are always there. Art-directed banners already ship a portrait crop of
     * their own via <picture> — see components/BackdropImage.
     */
    unoptimized: true,
  },
  /*
   * The About page moved from /about to /about-us. Anyone holding the old
   * link — a client, a bookmark, a search result — lands on the new one
   * instead of a 404. Permanent, so crawlers transfer the old URL's standing
   * rather than treating the two as rival pages.
   */
  async redirects() {
    return [{ source: "/about", destination: "/about-us", permanent: true }];
  },
};

export default nextConfig;
