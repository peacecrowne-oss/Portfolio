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

export const PROJECTS: Project[] = [
  {
    title: "BigMart Sales Dashboard",
    description:
      "Power BI sales dashboard providing sales performance insights and trend analysis.",
    technologies: ["Power BI", "DAX", "SQL"],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
  {
    title: "Sales Reporting Dashboard",
    description: "SSRS dashboard for tracking and analyzing sales performance.",
    technologies: ["SSRS", "SQL Server"],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
  {
    title: "Revolution Mortgage Group (RMG)",
    description: "Developed SSIS ETL pipelines and SSRS reporting solutions.",
    technologies: ["SSIS", "SSRS", "SQL Server"],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
  {
    title: "LeadForge AI System",
    description:
      "AI-powered lead generation system designed to improve customer acquisition.",
    technologies: ["AI", "Python", "Claude", "OpenAI"],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
  {
    title: "LeadInbox",
    description:
      "Admissions management platform for student application, review, and enrollment.",
    technologies: [],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
];
