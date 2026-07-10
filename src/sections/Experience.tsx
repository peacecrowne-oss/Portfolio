import { Section } from "@/components/Section";
import { EXPERIENCE } from "@/data/experience";

function isQuantifiedAchievement(text: string): boolean {
  return /\d+%/.test(text);
}

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Experience
      </h2>

      <ol className="relative mt-10 border-l-2 border-slate-200 dark:border-slate-800">
        {EXPERIENCE.map((entry) => (
          <li
            key={`${entry.company}-${entry.role}-${entry.startDate}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-900 ring-4 ring-white dark:bg-white dark:ring-slate-900" />

            <div className="-m-3 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.role}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {entry.startDate} – {entry.endDate}
                </p>
              </div>

              <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-400">
                {entry.company}
              </p>

              {entry.responsibilities.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {entry.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className={
                        isQuantifiedAchievement(responsibility)
                          ? "font-semibold text-slate-900 dark:text-white"
                          : undefined
                      }
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
