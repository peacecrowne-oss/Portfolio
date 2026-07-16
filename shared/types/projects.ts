export interface TechStackGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Overview text for the dedicated case-study page, if different from the
   *  grid card's `description`. Falls back to `description` when null. */
  caseStudyOverview: string | null;
  technologies: string[];
  /** Grouped tech-stack breakdown for the case-study page's Tech Stack
   *  section. Falls back to the flat `technologies` badge list when null. */
  techStackGroups: TechStackGroup[] | null;
  businessProblem: string | null;
  solution: string | null;
  architecture: string | null;
  features: string[] | null;
  challenges: string | null;
  outcome: string | null;
  screenshots: string[] | null;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
}
