import { useEffect } from "react";

/**
 * Scrolls to the element matching the current URL hash on mount.
 *
 * The browser's native hash-scroll-on-load only works when the target
 * element already exists in the DOM at load time. On this SPA, navigating
 * here from another route (e.g. a "Back to Projects" link pointing at
 * `/#projects`) triggers a full page load whose initial HTML is just an
 * empty root div — the target section doesn't exist until React renders
 * it, by which point the browser has already given up on scrolling.
 */
export function useScrollToHash(): void {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    target?.scrollIntoView();
  }, []);
}
