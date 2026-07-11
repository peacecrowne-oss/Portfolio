import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

const linkBaseClasses =
  "rounded-sm border-b-2 border-transparent pb-0.5 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-white";

const linkActiveClasses =
  "border-slate-900 font-semibold text-slate-900 dark:border-white dark:text-white";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.href.replace("#", "")),
    [],
  );
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-900/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="rounded-sm text-lg font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-white dark:focus-visible:ring-white"
          >
            Portfolio
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href.replace("#", "") === activeId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`${linkBaseClasses} ${isActive ? linkActiveClasses : ""}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 md:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:focus-visible:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {isMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 md:hidden dark:border-slate-800 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/90"
        >
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.href.replace("#", "") === activeId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 ${linkBaseClasses} ${isActive ? linkActiveClasses : ""}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
