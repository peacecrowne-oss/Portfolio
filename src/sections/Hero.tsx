import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { PROFILE } from "@/data/profile";
import { EXPERIENCE } from "@/data/experience";

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
    <Section id="home" className="flex min-h-[calc(100vh-4rem)] items-center">
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
                className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center shadow-sm sm:p-4 dark:border-slate-800 dark:bg-slate-800/50"
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
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
          {PROFILE.resumeUrl ? (
            <Button href={PROFILE.resumeUrl} variant="secondary">
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
