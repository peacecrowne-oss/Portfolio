import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { PROJECTS } from "@shared/data/projects";
import type { Project } from "@shared/types/projects";

const placeholderBarHeights = [55, 80, 40, 70, 50];

function ProjectPreviewPlaceholder() {
  return (
    <div
      className="flex aspect-video w-full items-end gap-2 rounded-lg border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]"
      aria-hidden="true"
    >
      {placeholderBarHeights.map((height, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-primary/40 to-brand-secondary/40 dark:from-brand-primary/50 dark:to-brand-secondary/50"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function ProjectLinkButton({
  label,
  href,
  variant,
}: {
  label: string;
  href: string | null;
  variant: "primary" | "secondary";
}) {
  if (href) {
    return (
      <Button href={href} variant={variant} target="_blank" rel="noreferrer noopener">
        {label}
      </Button>
    );
  }

  return (
    <span
      className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-dashed border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-400 dark:border-white/15 dark:text-slate-500"
      title={`${label} coming soon`}
    >
      {label} · Coming Soon
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="hover-lift flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:glass-card dark:shadow-black/20 dark:backdrop-blur-xl">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          className="aspect-video w-full rounded-lg object-cover"
        />
      ) : (
        <ProjectPreviewPlaceholder />
      )}

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>

      {project.technologies.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
      )}

      {project.businessProblem && (
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Business Problem
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.businessProblem}
          </p>
        </div>
      )}

      {project.solution && (
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Solution
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.solution}
          </p>
        </div>
      )}

      {project.outcome && (
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Business Impact
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.outcome}
          </p>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        <ProjectLinkButton label="GitHub" href={project.githubUrl} variant="secondary" />
        <ProjectLinkButton label="Live Demo" href={project.liveDemoUrl} variant="primary" />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="dark:bg-brand-bg">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Projects
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
