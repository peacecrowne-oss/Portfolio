import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { HeroIllustration } from "@/components/HeroIllustration";
import { withBasePath } from "@/lib/basePath";
import { PROFILE } from "@shared/data/profile";

const ROLE_ROTATE_MS = 2800;

/** Short display labels, derived from PROFILE.title (not new copy). */
const ROLES = PROFILE.title
  .split("|")
  .map((role) => role.trim().replace(/^Microsoft Certified\s+/, ""));

/** Hero-only display name: first + last, middle name(s) dropped. */
const HERO_NAME_PARTS = PROFILE.name.trim().split(/\s+/);
const HERO_DISPLAY_NAME =
  HERO_NAME_PARTS.length > 2
    ? `${HERO_NAME_PARTS[0]} ${HERO_NAME_PARTS[HERO_NAME_PARTS.length - 1]}`
    : PROFILE.name;

function usePrefersReducedMotion(): boolean {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  return reduced;
}

function useRotatingRoleIndex(length: number, reducedMotion: boolean): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion || length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, ROLE_ROTATE_MS);
    return () => clearInterval(id);
  }, [length, reducedMotion]);

  return index;
}

function RoleFrameIcon({ index }: { index: number }) {
  switch (index % 3) {
    case 0:
      // bar chart / data analyst
      return (
        <>
          <line x1="4" y1="20" x2="4" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="20" y1="20" x2="20" y2="14" />
        </>
      );
    case 1:
      // layout / developer
      return (
        <>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </>
      );
    default:
      // database / SQL & ETL
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      );
  }
}

function parseHighlight(highlight: string): { value: string; label: string } {
  const match = highlight.match(/\d+%/);
  const value = match ? match[0] : highlight;
  const label = highlight
    .replace(/\d+%/, "")
    .replace(/\bby\b/i, "")
    .replace(/\s+/g, " ")
    .trim();
  return { value, label };
}

function HighlightIcon({ index }: { index: number }) {
  if (index === 0) {
    // gauge / efficiency
    return (
      <path d="M12 20a8 8 0 1 0-8-8M12 12l3-3M4.93 4.93l1.41 1.41M2 12h2M12 2v2M19.07 4.93l-1.41 1.41" />
    );
  }
  if (index === 1) {
    // clock / automation
    return (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    );
  }
  // trending up / adoption
  return (
    <>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </>
  );
}

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
};

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const roleIndex = useRotatingRoleIndex(ROLES.length, reducedMotion);
  const displayedRole = reducedMotion ? PROFILE.title : ROLES[roleIndex];

  return (
    <Section
      id="home"
      className="relative z-0 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden dark:bg-brand-bg"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        aria-hidden="true"
      >
        <div className="hero-glow-primary absolute left-1/2 top-[-15%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 sm:h-[44rem] sm:w-[44rem]" />
        <div className="hero-glow-secondary absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full opacity-[0.18] sm:h-[38rem] sm:w-[38rem]" />
        <div className="hero-grid-overlay absolute inset-0 opacity-[0.035]" />
        <div className="hero-noise-overlay absolute inset-0" />
        <div className="hero-light-streaks absolute inset-0 opacity-60" />
        <div className="hero-blob absolute bottom-[8%] right-[8%] h-64 w-64 rounded-full sm:h-80 sm:w-80" />
      </div>

      <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-6 text-left">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[64px] xl:text-[80px] dark:text-white">
            {HERO_DISPLAY_NAME}
          </h1>

          <div className="relative">
            <span className="sr-only">{PROFILE.title}</span>
            <p
              key={reducedMotion ? "static" : roleIndex}
              aria-hidden="true"
              className="animate-fade-slide-up text-2xl font-semibold text-slate-700 sm:text-3xl dark:text-slate-300"
            >
              {displayedRole}
            </p>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {PROFILE.valueProposition}
          </p>

          <div className="grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {PROFILE.highlights.map((highlight, index) => {
              const { value, label } = parseHighlight(highlight);
              return (
                <div
                  key={highlight}
                  className="hover-lift group rounded-xl border border-slate-200 bg-slate-50 p-3 text-center shadow-sm sm:p-4 dark:border-white/[0.08] dark:bg-white/[0.04] dark:backdrop-blur-[12px] dark:hover:shadow-lg dark:hover:shadow-brand-primary/10"
                >
                  <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary">
                    <svg {...iconProps}>
                      <HighlightIcon index={index} />
                    </svg>
                  </span>
                  <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs dark:text-slate-400">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            {PROFILE.resumeUrl ? (
              <Button href={withBasePath(PROFILE.resumeUrl)} variant="secondary">
                Download Resume
              </Button>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Resume available upon request"
                className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 opacity-50 dark:border-slate-700 dark:text-white"
              >
                Resume Available Upon Request
              </button>
            )}
          </div>

          <SocialLinks
            github={PROFILE.social.github}
            linkedin={PROFILE.social.linkedin}
            email={PROFILE.social.email}
            className="pt-2"
          />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8">
          <div
            key={reducedMotion ? "static-frame" : roleIndex}
            aria-hidden="true"
            className="animate-fade-slide-up flex w-60 flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-900/10 dark:glass-card dark:shadow-black/30 dark:backdrop-blur-xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/30">
              <svg {...iconProps} className="h-7 w-7">
                <RoleFrameIcon index={reducedMotion ? 0 : roleIndex} />
              </svg>
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {reducedMotion ? ROLES[0] : ROLES[roleIndex]}
            </p>
          </div>

          <HeroIllustration />
        </div>
      </div>
    </Section>
  );
}
