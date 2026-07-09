import { Section } from "@/components/Section";
import { PROFILE } from "@/data/profile";
import { EDUCATION } from "@/data/education";

const pillClasses =
  "rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300";

export function About() {
  const { about } = PROFILE;

  return (
    <Section id="about">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        About Me
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
        {about.intro}
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Background
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

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Technical Interests
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.technicalInterests.map((interest) => (
                <li key={interest} className={pillClasses}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Working Style
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.workingStyle.map((trait) => (
                <li key={trait} className={pillClasses}>
                  {trait}
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
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/50"
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
