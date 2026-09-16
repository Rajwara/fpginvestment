export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "fpg-theme";
export const DEFAULT_THEME: Theme = "dark";

/**
 * Runs before first paint, inlined in <head>, so the stored theme is applied
 * without a flash of the default. Kept dependency-free and self-contained —
 * it is stringified into a <script>, not bundled.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
      return;
    }
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", ${JSON.stringify(DEFAULT_THEME)});
})();
`.trim();
