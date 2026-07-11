import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { PROFILE } from "@shared/data/profile";
import { EXPERIENCE } from "@shared/data/experience";

function getYearsOfExperience(): number {
  const startYears = EXPERIENCE.map((entry) => {
    const match = entry.startDate.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : new Date().getFullYear();
  });
  const earliestYear = Math.min(...startYears);
  return new Date().getFullYear() - earliestYear;
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

export function Hero() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <Section
      id="home"
      className="relative z-0 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden dark:bg-[#050816]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
        aria-hidden="true"
      >
        <div className="hero-glow-primary absolute left-1/2 top-[-15%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-25 sm:h-[44rem] sm:w-[44rem]" />
        <div className="hero-glow-secondary absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full opacity-[0.18] sm:h-[38rem] sm:w-[38rem]" />
        <div className="hero-grid-overlay absolute inset-0 opacity-[0.035]" />
        <div className="hero-noise-overlay absolute inset-0" />
        <div className="hero-blob absolute bottom-[8%] right-[8%] h-64 w-64 rounded-full sm:h-80 sm:w-80" />
      </div>

      <div className="flex flex-col items-start gap-6 text-left">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Hello, I'm
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          {PROFILE.name}
        </h1>

        <p className="text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-300">
          {PROFILE.title}
        </p>

        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {PROFILE.location} · {PROFILE.social.email} · {PROFILE.phone} ·{" "}
          {yearsOfExperience}+ Years of Professional Experience
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          {PROFILE.valueProposition}
        </p>

        <div className="grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-4">
          {PROFILE.highlights.map((highlight) => {
            const { value, label } = parseHighlight(highlight);
            return (
              <div
                key={highlight}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center shadow-sm sm:p-4 dark:border-white/[0.08] dark:bg-white/[0.04] dark:backdrop-blur-[12px]"
              >
                <p className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
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
          <Button
            href="#projects"
            variant="primary"
            className="dark:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            className="dark:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)]"
          >
            Contact Me
          </Button>
          {PROFILE.resumeUrl ? (
            <Button
              href={PROFILE.resumeUrl}
              variant="secondary"
              className="dark:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)]"
            >
              Download Resume
            </Button>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Resume available upon request"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 opacity-50 dark:border-slate-700 dark:text-white"
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
    </Section>
  );
}
