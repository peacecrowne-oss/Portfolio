import { useEffect, useState } from "react";

const FALLBACK_NAVBAR_HEIGHT = 64;
const BAND_HEIGHT = 150;

function getNavbarHeight(): number {
  return document.querySelector("header")?.getBoundingClientRect().height ?? FALLBACK_NAVBAR_HEIGHT;
}

/**
 * Tracks which of the given section ids is currently active — the last one
 * (in document order) whose top edge has scrolled up past the activation
 * line just below the (sticky) navbar.
 *
 * The navbar's height is read live rather than hardcoded, because opening
 * the mobile menu inserts it into the sticky header's document flow,
 * growing the header well past its closed-state height and pushing every
 * section down. Comparing against a stale fixed height would make opening
 * or closing the menu appear to change the active section on its own.
 *
 * The manual comparison and the observer's own trigger band test the same
 * boundary (navbar height + BAND_HEIGHT) so a section can't register as
 * "intersecting" at a point the manual check doesn't also agree with —
 * otherwise the callback fires once too early and never fires again as the
 * element continues toward the real line, silently freezing the active
 * section one step behind.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    function updateActive() {
      const activationLine = getNavbarHeight() + BAND_HEIGHT;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= activationLine) {
          current = el.id;
        }
      }
      setActiveId(current);
    }

    const navbarHeight = getNavbarHeight();
    const bottomMargin = Math.max(0, window.innerHeight - navbarHeight - BAND_HEIGHT);

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: `-${navbarHeight}px 0px -${bottomMargin}px 0px`,
      threshold: 0,
    });

    elements.forEach((el) => observer.observe(el));
    updateActive();

    // The mobile menu opening/closing resizes the sticky header without
    // necessarily shifting any observed section across the (fixed) observer
    // band boundaries, so it may not trigger a fresh IntersectionObserver
    // callback on its own. ResizeObserver on the header re-runs the same
    // manual recomputation whenever its height actually changes.
    const header = document.querySelector("header");
    const resizeObserver = header ? new ResizeObserver(updateActive) : null;
    if (header && resizeObserver) {
      resizeObserver.observe(header);
    }

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
