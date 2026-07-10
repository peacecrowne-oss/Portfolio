export interface Project {
  title: string;
  description: string;
  technologies: string[];
  businessProblem: string | null;
  solution: string | null;
  outcome: string | null;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  imageUrl: string | null;
}
