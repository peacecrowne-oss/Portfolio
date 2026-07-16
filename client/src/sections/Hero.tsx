import { useEffect, useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { withBasePath } from "@/lib/basePath";
import { PROFILE } from "@shared/data/profile";

const HERO_TOOLS = ["Power BI", "SQL", "DAX", "Power Query", "SSIS", "Python", "Claude"];

const HERO_STATS = [
  { value: "6+", label: "years in Data" },
  { value: "10+", label: "projects delivered" },
  // Customer Service, Accounting, Data Analytics, and Consulting.
  { value: "4", label: "industries served" },
  { value: String(HERO_TOOLS.length), label: "tools mastered" },
];

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

          <ul className="flex flex-wrap gap-2">
            {HERO_TOOLS.map((tool) => (
              <li key={tool}>
                <Badge>{tool}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-8">
          <div className="relative w-full max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute inset-[-20%] hidden rounded-full dark:block"
              style={{
                background:
                  "radial-gradient(closest-side, #050816 0%, #050816 55%, transparent 100%)",
              }}
            />
            <img
              src={withBasePath("/rolling-cube.webp")}
              alt="Rotating 3D cube animation representing AI-powered automation, connecting data in to AI to output"
              className="relative block w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10 dark:border-white/10 sm:grid-cols-4">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
