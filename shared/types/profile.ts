export interface CoreStrength {
  name: string;
  level: "Advanced" | "Intermediate";
  percent: number;
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
