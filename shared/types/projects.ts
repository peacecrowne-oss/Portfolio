export interface TechStackGroup {
  label: string;
  items: string[];
}

export type CaseStudyBlock =
  | { type: "paragraph"; text: string; emphasis?: boolean }
  | { type: "list"; items: string[] };

export interface CaseStudySection {
  heading: string;
  blocks: CaseStudyBlock[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Overview text for the dedicated case-study page, if different from the
   *  grid card's `description`. Falls back to `description` when null.
   *  Unused when `caseStudySections` is set (its first section covers this). */
  caseStudyOverview: string | null;
  technologies: string[];
  /** Grouped tech-stack breakdown for the case-study page's Tech Stack
   *  section. Falls back to the flat `technologies` badge list when null. */
  techStackGroups: TechStackGroup[] | null;
  /** One or more paragraphs, rendered as separate <p> blocks. */
  businessProblem: string[] | null;
  solution: string[] | null;
  architecture: string[] | null;
  features: string[] | null;
  challenges: string[] | null;
  outcome: string[] | null;
  /** Free-form, arbitrarily-ordered case-study sections (paragraphs and/or
   *  bullet lists in any combination) for content that doesn't fit the fixed
   *  Business Problem / Solution / Architecture / Results shape above. When
   *  set, the case-study page renders these instead of the fixed fields
   *  above (Tech Stack, Features, and Screenshots still render separately,
   *  after these sections). */
  caseStudySections: CaseStudySection[] | null;
  /** Whether the case-study page shows a Screenshots section at all (with
   *  either real `screenshots` or a placeholder when none are set yet). */
  showScreenshotsSection: boolean;
  screenshots: string[] | null;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
  /** Whether this project has a dedicated case-study page reachable from the
   *  grid card, independent of `featured` (which just controls the badge and
   *  card ordering). */
  hasCaseStudy: boolean;
  /** Text for the grid card's case-study link (before the trailing " →").
   *  Falls back to "View Case Study" when null. */
  caseStudyLinkLabel: string | null;
}
