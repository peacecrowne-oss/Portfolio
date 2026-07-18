import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { ProjectLinkButton } from "@/components/ProjectLinkButton";
import { ProjectPreviewPlaceholder } from "@/components/ProjectPreviewPlaceholder";
import { LeadForgeArchitectureDiagram } from "@/components/case-study/LeadForgeArchitectureDiagram";
import { LeadForgeTechStack } from "@/components/case-study/LeadForgeTechStack";
import { withBasePath } from "@/lib/basePath";
import { PROJECTS } from "@shared/data/projects";
import type { CaseStudySection } from "@shared/types/projects";
import { NotFound } from "@/pages/NotFound";

function CaseStudyBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-slate-200 py-10 first:border-t-0 first:pt-0 dark:border-white/10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function ContentPlaceholder({ label }: { label: string }) {
  return (
    <p
      className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-sm leading-relaxed text-slate-500 dark:border-white/15 dark:bg-white/[0.02] dark:text-slate-500"
      role="note"
    >
      {label} content coming soon.
    </p>
  );
}

function ParagraphBlock({ label, paragraphs }: { label: string; paragraphs: string[] | null }) {
  if (!paragraphs || paragraphs.length === 0) {
    return <ContentPlaceholder label={label} />;
  }

  return (
    <div className="max-w-3xl space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function FlexibleCaseStudySection({ section }: { section: CaseStudySection }) {
  return (
    <CaseStudyBlock title={section.heading}>
      <div className="max-w-3xl space-y-4">
        {section.blocks.map((block, index) =>
          block.type === "list" ? (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-base leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p
              key={index}
              className={
                block.emphasis
                  ? "text-lg font-semibold leading-relaxed text-slate-900 dark:text-white"
                  : "text-base leading-relaxed text-slate-600 dark:text-slate-400"
              }
            >
              {block.text}
            </p>
          ),
        )}
      </div>
    </CaseStudyBlock>
  );
}

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((candidate) => candidate.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Section className="!pb-0 dark:bg-[#08111F]">
        <a
          href="/#projects"
          className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:text-slate-400 dark:hover:text-white dark:focus-visible:ring-white"
        >
          ← Back to Projects
        </a>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            {project.featured && (
              <span className="inline-flex rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm shadow-brand-primary/30">
                Featured Project
              </span>
            )}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {project.title}
            </h1>

            {project.technologies.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <Badge>{technology}</Badge>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl && (
                <ProjectLinkButton label="GitHub" href={project.githubUrl} variant="secondary" icon="github" />
              )}
              <ProjectLinkButton label="View Demo" href={project.liveDemoUrl} variant="primary" />
            </div>
          </div>

          <div className="w-full lg:max-w-md">
            {project.imageUrl ? (
              <img
                src={withBasePath(project.imageUrl)}
                alt={`${project.title} preview`}
                className="aspect-video w-full rounded-xl object-cover"
                loading="lazy"
              />
            ) : (
              <ProjectPreviewPlaceholder />
            )}
          </div>
        </div>
      </Section>

      <Section className="dark:bg-[#08111F]">
        {project.caseStudySections && project.caseStudySections.length > 0 ? (
          project.caseStudySections.map((section) => (
            <FlexibleCaseStudySection key={section.heading} section={section} />
          ))
        ) : (
          <>
            <CaseStudyBlock title="Overview">
              <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {project.caseStudyOverview ?? project.description}
              </p>
            </CaseStudyBlock>

            <CaseStudyBlock title="Business Problem">
              <ParagraphBlock label="Business Problem" paragraphs={project.businessProblem} />
            </CaseStudyBlock>

            <CaseStudyBlock title="Solution">
              <ParagraphBlock label="Solution" paragraphs={project.solution} />
            </CaseStudyBlock>

            <CaseStudyBlock title="Architecture">
              {project.slug === "leadforge-ai-system" ? (
                <LeadForgeArchitectureDiagram />
              ) : (
                <ParagraphBlock label="Architecture" paragraphs={project.architecture} />
              )}
            </CaseStudyBlock>
          </>
        )}

        <CaseStudyBlock title="Tech Stack">
          {project.slug === "leadforge-ai-system" ? (
            <LeadForgeTechStack />
          ) : project.techStackGroups && project.techStackGroups.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-3">
              {project.techStackGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge variant="accent">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : project.technologies.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <Badge variant="accent">{technology}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <ContentPlaceholder label="Tech Stack" />
          )}
        </CaseStudyBlock>

        <CaseStudyBlock title="Features">
          {project.features && project.features.length > 0 ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <ContentPlaceholder label="Features" />
          )}
        </CaseStudyBlock>

        {project.showScreenshotsSection && (
          <CaseStudyBlock title="Screenshots">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <img
                    key={screenshot}
                    src={withBasePath(screenshot)}
                    alt={`${project.title} screenshot`}
                    className="aspect-video w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <ProjectPreviewPlaceholder />
                <ProjectPreviewPlaceholder />
              </div>
            )}
          </CaseStudyBlock>
        )}

        {!project.caseStudySections && (
          <>
            <CaseStudyBlock title="Challenges">
              <ParagraphBlock label="Challenges" paragraphs={project.challenges} />
            </CaseStudyBlock>

            <CaseStudyBlock title="Results">
              <ParagraphBlock label="Results" paragraphs={project.outcome} />
            </CaseStudyBlock>
          </>
        )}

        <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-10 dark:border-white/10">
          {project.githubUrl && (
            <ProjectLinkButton label="GitHub" href={project.githubUrl} variant="secondary" icon="github" />
          )}
          <ProjectLinkButton label="View Demo" href={project.liveDemoUrl} variant="primary" />
        </div>
      </Section>
    </>
  );
}
