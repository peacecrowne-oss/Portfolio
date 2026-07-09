export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Business Intelligence",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Dashboard Development",
      "KPI Reporting",
      "Data Visualization",
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      "SQL",
      "SQL Server",
      "ETL",
      "SSIS",
      "SSRS",
      "SSAS",
      "Data Warehousing",
    ],
  },
  {
    category: "Cloud",
    skills: ["Azure SQL", "Azure Data Services"],
  },
  {
    category: "Programming",
    skills: ["Python", "SQL"],
  },
  {
    category: "AI",
    skills: [
      "Claude",
      "OpenAI",
      "Prompt Engineering",
      "AI Solutions Development",
    ],
  },
  {
    category: "Professional",
    skills: [
      "Stakeholder Engagement",
      "Performance Optimization",
      "Business Analysis",
      "Problem Solving",
    ],
  },
];
