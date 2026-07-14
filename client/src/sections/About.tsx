import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { withBasePath } from "@/lib/basePath";
import { PROFILE } from "@shared/data/profile";
import { EDUCATION } from "@shared/data/education";

const groupLabelClasses =
  "text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400";

const featureCardClasses =
  "hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:glass-card dark:shadow-black/20 dark:backdrop-blur-xl";

const iconWrapperClasses =
  "flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:from-brand-primary/20 dark:to-brand-secondary/20 dark:text-brand-secondary";

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

function StrengthIcon({ index }: { index: number }) {
  switch (index % 6) {
    case 0:
      // database
      return (
        <>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      );
    case 1:
      // workflow / pipeline
      return (
        <>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
          <path d="M9 6h6a3 3 0 0 1 3 3v6" />
        </>
      );
    case 2:
      // bar chart
      return (
        <>
          <line x1="4" y1="20" x2="4" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="20" y1="20" x2="20" y2="14" />
        </>
      );
    case 3:
      // sparkles / AI
      return (
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      );
    case 4:
      // globe
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
        </>
      );
    default:
      // award / certified
      return (
        <>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
        </>
      );
  }
}

export function About() {
  const { about } = PROFILE;

  return (
    <Section id="about" className="dark:bg-[#08111F]">
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:text-left">
        <div className="flex-none rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-1 shadow-lg shadow-brand-primary/20 dark:shadow-brand-primary/30">
          <img
            src={withBasePath("/profile-photo.jpeg")}
            alt={PROFILE.name}
            className="h-36 w-36 rounded-full border-4 border-white object-cover sm:h-40 sm:w-40 dark:border-[#08111F]"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {about.intro}
          </p>
        </div>
      </div>

      <div className={`mt-10 ${featureCardClasses}`}>
        <div className="flex items-center gap-3">
          <span className={iconWrapperClasses} aria-hidden="true">
            <svg {...iconProps}>
              <path d="M12 20V10M18 20V4M6 20v-6" />
            </svg>
          </span>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Career Journey
          </h3>
        </div>
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
          {about.coreStrengths.map((strength, index) => (
            <div key={strength.title} className={featureCardClasses}>
              <span className={iconWrapperClasses} aria-hidden="true">
                <svg {...iconProps}>
                  <StrengthIcon index={index} />
                </svg>
              </span>
              <h4 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
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
