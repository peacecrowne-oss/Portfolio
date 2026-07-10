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
      "Developed a comprehensive Power BI dashboard providing sales performance insights and trend analysis.",
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
    description: "Created SSRS dashboards to track and analyze sales performance.",
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
    description: "Delivered SSIS ETL pipelines and SSRS reporting solutions.",
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
      "Designed an AI-driven lead generation system to improve customer acquisition.",
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
      "Built an admissions management platform to streamline the student application, review, and enrollment process.",
    technologies: [],
    businessProblem: null,
    solution: null,
    outcome: null,
    githubUrl: null,
    liveDemoUrl: null,
    imageUrl: null,
  },
];
