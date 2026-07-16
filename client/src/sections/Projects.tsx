import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { ProjectLinkButton } from "@/components/ProjectLinkButton";
import { ProjectPreviewPlaceholder } from "@/components/ProjectPreviewPlaceholder";
import { LeadForgePreview } from "@/components/project-preview/LeadForgePreview";
import { withBasePath } from "@/lib/basePath";
import { PROJECTS } from "@shared/data/projects";
import type { Project } from "@shared/types/projects";

function ProjectPreview({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <img
        src={withBasePath(project.imageUrl)}
        alt={`${project.title} preview`}
        className="aspect-video w-full rounded-lg object-cover"
        loading="lazy"
      />
    );
  }

  if (project.slug === "leadforge-ai-system") {
    return <LeadForgePreview />;
  }

  return <ProjectPreviewPlaceholder />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="hover-lift relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:glass-card dark:shadow-black/20 dark:backdrop-blur-xl">
      <ProjectPreview project={project} />

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

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
        {project.githubUrl && (
          <ProjectLinkButton label="GitHub" href={project.githubUrl} variant="secondary" />
        )}
        <ProjectLinkButton label="Live Demo" href={project.liveDemoUrl} variant="primary" />
        {project.featured && (
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-sm text-sm font-semibold text-brand-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-brand-secondary dark:focus-visible:ring-white"
          >
            View Case Study →
          </Link>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const orderedProjects = [...PROJECTS].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <Section id="projects" className="dark:bg-[#08111F]">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        Featured Projects
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
