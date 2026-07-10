import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { PROFILE } from "@/data/profile";
import { EDUCATION } from "@/data/education";

const groupLabelClasses =
  "text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400";

export function About() {
  const { about } = PROFILE;

  return (
    <Section id="about">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        About Me
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Professional Summary
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {about.intro}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Career Journey
          </h3>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            <p>{about.background.journey}</p>
            <p>{about.background.currentFocus}</p>
            {EDUCATION.map((entry) => (
              <p key={entry.institution}>
                <span className="font-semibold text-slate-900 dark:text-white">
                  Education:
                </span>{" "}
                {entry.degree}, {entry.institution}, {entry.location} (
                {entry.year})
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Technical Focus
        </h3>
        <div className="mt-4 space-y-6">
          <div>
            <p className={groupLabelClasses}>Technical Interests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.technicalInterests.map((interest) => (
                <li key={interest}>
                  <Badge>{interest}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={groupLabelClasses}>Working Style</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {about.workingStyle.map((trait) => (
                <li key={trait}>
                  <Badge>{trait}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Core Strengths
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.coreStrengths.map((strength) => (
            <div
              key={strength.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800"
            >
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                {strength.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
