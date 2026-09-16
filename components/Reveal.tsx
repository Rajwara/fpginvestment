"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds data-shown="true" to any [data-reveal] container once it scrolls into
 * view, which drives the .reveal transition defined in globals.css.
 *
 * This is mounted once in the root layout, and the layout is not remounted
 * when the App Router changes route — so an effect keyed on [] would scan the
 * DOM of whichever page happened to load first and never look again. Every
 * section of every page reached by a link would then sit at opacity 0 for
 * good, because nothing would ever mark it shown; a manual refresh made it
 * work only because that rebuilt the layout along with the page.
 *
 * So the scan is keyed on the pathname, and a MutationObserver picks up
 * anything that arrives after the route commits — a streamed segment, a lazy
 * section, a client component that renders on a state change. Between them,
 * "has this container been marked shown" stops depending on when the node
 * appeared.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const UNSEEN = "[data-reveal]:not([data-shown])";
    const show = (el: Element) => el.setAttribute("data-shown", "true");

    // Without the animation there is nothing to trigger: mark everything shown
    // as it appears, so no content depends on an observer that never fires.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      const showAll = () => document.querySelectorAll(UNSEEN).forEach(show);
      showAll();
      const mutations = new MutationObserver(showAll);
      mutations.observe(document.body, { childList: true, subtree: true });
      return () => mutations.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    const scan = () =>
      document.querySelectorAll(UNSEEN).forEach((n) => observer.observe(n));

    scan();

    /*
      One scan per frame at most. Observing a node twice is a no-op, so the
      cost of a redundant scan is small, but a counter animating at 60fps or a
      carousel advancing would otherwise call it on every mutation it makes.
    */
    let queued = false;
    const mutations = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
