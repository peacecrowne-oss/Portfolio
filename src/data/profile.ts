export interface CoreStrength {
  title: string;
  description: string;
}

export interface AboutContent {
  intro: string;
  background: {
    journey: string;
    currentFocus: string;
  };
  technicalInterests: string[];
  workingStyle: string[];
  coreStrengths: CoreStrength[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  valueProposition: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  resumeUrl: string | null;
  highlights: string[];
  about: AboutContent;
}

export const PROFILE: Profile = {
  name: "Omolola Peace Makinde",
  title:
    "Microsoft Certified Power BI Data Analyst | Power BI Developer | SQL & ETL Specialist",
  location: "Houston, Texas",
  phone: "832-277-7883",
  valueProposition:
    "Microsoft Certified Power BI Data Analyst specializing in Business Intelligence, Power BI, SQL, DAX, and ETL development on Azure. I build interactive dashboards and AI-powered analytics solutions that turn complex data into clear, actionable business decisions.",
  social: {
    github: "https://github.com/peacecrowne-oss",
    linkedin: "https://www.linkedin.com/in/omolola-makinde-14bbb440",
    email: "peacecrowne@gmail.com",
  },
  resumeUrl: "/resume.pdf",
  highlights: [
    "Improved operational efficiency by 25%",
    "Reduced manual reporting by 40%",
    "Increased dashboard adoption by 15%",
  ],
  about: {
    intro:
      "I'm a Microsoft Certified Power BI Data Analyst, Azure Database Fundamentals professional, and AI Architect who turns raw data into clear, actionable insights that drive smarter business decisions. My path into data analytics began in an unexpected place — a background in communication — and that perspective still shapes how I turn complex data into stories people can act on.",
    background: {
      journey:
        "I transitioned from a communication-focused background into the world of data analytics, discovering a passion for transforming raw data into meaningful stories that drive business decisions and innovation. Along the way, I've built experience across diverse industries — including Customer Service, Accounting, Data Analytics, and Consulting — working extensively with Microsoft data tools such as SQL Server, SSIS, and Power BI, across versions ranging from 2016 to 2022.",
      currentFocus:
        "Currently a Power BI Developer and AI Architect at Colaberry Inc., contributing to data-driven and AI-powered solutions across multiple projects. Recent work includes an interactive Power BI dashboard with KPI-driven analysis that identified revenue optimization opportunities in retail environments, and a Lead Generation AI System that automates lead search, filtering, scoring, and campaign generation.",
    },
    technicalInterests: [
      "Data Visualization & Dashboarding",
      "Data Engineering & ETL Pipelines",
      "SQL & Database Design",
      "Business Intelligence & Analytics",
    ],
    workingStyle: [
      "Problem Solving & Analytical Thinking",
      "Attention to Detail & Data Accuracy",
      "Collaboration & Stakeholder Communication",
      "Continuous Learning & Certification-Driven Growth",
    ],
    coreStrengths: [
      {
        title: "Advanced SQL",
        description:
          "Data extraction, analysis, and optimization using joins, temp tables, CTEs, system functions, stored procedures, and views.",
      },
      {
        title: "ETL Pipeline Design",
        description:
          "Designing SSIS pipelines for data transformation, validation, and performance tuning.",
      },
      {
        title: "Power BI & DAX",
        description:
          "Data modeling, DAX, and Power Query to build intuitive dashboards that turn complex data into actionable insights.",
      },
      {
        title: "AI-Powered Solutions",
        description:
          "Building AI systems such as automated lead search, filtering, scoring, and campaign generation.",
      },
      {
        title: "Cross-Industry Experience",
        description:
          "Applying data analytics across Customer Service, Accounting, Data Analytics, and Consulting.",
      },
      {
        title: "Microsoft Certified Expertise",
        description:
          "Certified Power BI Data Analyst, Azure Database Fundamentals, and AI Architect.",
      },
    ],
  },
};
