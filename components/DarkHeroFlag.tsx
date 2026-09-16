"use client";

import { useEffect } from "react";

export const DARK_HERO_EVENT = "fpg:darkhero";

/**
 * Tells the header it is sitting on a dark band. The header normally works
 * this out from the pathname, but not-found.tsx renders at whatever URL was
 * requested, so there is no path to match on — it raises this flag instead.
 */
export default function DarkHeroFlag() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.darkHero = "true";
    window.dispatchEvent(new Event(DARK_HERO_EVENT));
    return () => {
      delete root.dataset.darkHero;
      window.dispatchEvent(new Event(DARK_HERO_EVENT));
    };
  }, []);

  return null;
}
