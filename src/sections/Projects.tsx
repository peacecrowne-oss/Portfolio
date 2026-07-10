import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { PROJECTS } from "@/data/projects";
import type { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const hasActions = Boolean(project.githubUrl || project.liveDemoUrl);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/40">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          className="aspect-video w-full rounded-md object-cover"
        />
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
            Outcome
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.outcome}
          </p>
        </div>
      )}

      {hasActions && (
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button
              href={project.liveDemoUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
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
