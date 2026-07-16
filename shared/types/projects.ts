export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
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
