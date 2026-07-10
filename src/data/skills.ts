export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Business Intelligence & Analytics",
    skills: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Dashboard Development",
      "KPI Reporting",
      "Data Visualization",
    ],
  },
  {
    category: "Data Engineering & Architecture",
    skills: ["SQL", "T-SQL", "Data Warehousing", "Data Architecture", "ETL Development"],
  },
  {
    category: "Microsoft BI Stack",
    skills: ["SSIS", "SSRS", "SSAS"],
  },
  {
    category: "Cloud & Platforms",
    skills: ["Microsoft Azure", "Azure SQL", "Data Services"],
  },
  {
    category: "AI & Emerging Technologies",
    skills: [
      "AI-Powered Solutions Development",
      "Prompt Engineering",
      "Generative AI",
      "Claude",
      "OpenAI",
      "Python",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "Advanced Analytics",
      "Performance Optimization",
      "Stakeholder Engagement",
      "Problem Solving",
    ],
  },
];
