import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { HeroIllustration } from "@/components/HeroIllustration";
import { PROFILE } from "@shared/data/profile";

const ROLE_ROTATE_MS = 2800;

const ROLES = [
  "Power BI Data Analyst",
  "Power BI Developer",
  "SQL & DAX Expert",
  "ETL & ELT Specialist",
  "AI Automation Builder",
  "Microsoft Fabric Data Engineer",
];

/** Full role list joined for screen readers and the reduced-motion fallback. */
const ROLES_FULL_TEXT = ROLES.join(" | ");

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
  switch (index % 6) {
    case 0:
      // dashboard: bars + trend ring / Power BI Data Analyst
      return (
        <>
          <line x1="4" y1="20" x2="4" y2="13" />
          <line x1="9" y1="20" x2="9" y2="8" />
          <line x1="14" y1="20" x2="14" y2="11" />
          <circle cx="19" cy="7" r="3.2" />
        </>
      );
    case 1:
      // hub & spoke data model / Power BI Developer
      return (
        <>
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="12" cy="4" r="1.6" />
          <circle cx="4" cy="16" r="1.6" />
          <circle cx="20" cy="16" r="1.6" />
          <line x1="12" y1="9.5" x2="12" y2="5.6" />
          <line x1="10" y1="13.8" x2="5.3" y2="15.3" />
          <line x1="14" y1="13.8" x2="18.7" y2="15.3" />
        </>
      );
    case 2:
      // database / SQL & DAX Expert
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      );
    case 3:
      // extract-transform-load pipeline / ETL & ELT Specialist
      return (
        <>
          <circle cx="4" cy="12" r="2.3" />
          <circle cx="12" cy="12" r="2.3" />
          <circle cx="20" cy="12" r="2.3" />
          <line x1="6.3" y1="12" x2="9.7" y2="12" />
          <line x1="14.3" y1="12" x2="17.7" y2="12" />
        </>
      );
    case 4:
      // robot / AI Automation Builder
      return (
        <>
          <rect x="5" y="9" width="14" height="11" rx="3" />
          <circle cx="9.5" cy="14.5" r="1.3" />
          <circle cx="14.5" cy="14.5" r="1.3" />
          <path d="M9 18h6" />
          <line x1="12" y1="9" x2="12" y2="5" />
          <circle cx="12" cy="3.5" r="1.3" />
        </>
      );
    default:
      // layers / Microsoft Fabric Data Engineer
      return (
        <>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </>
      );
  }
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
  const displayedRole = reducedMotion ? ROLES_FULL_TEXT : ROLES[roleIndex];

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

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:whitespace-nowrap sm:text-5xl lg:text-[64px] xl:text-[80px] dark:text-white">
            {HERO_DISPLAY_NAME}
          </h1>

          <div className="relative">
            <span className="sr-only">{ROLES_FULL_TEXT}</span>
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

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
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
