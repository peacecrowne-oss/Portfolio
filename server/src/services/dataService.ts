import { PROFILE } from "../../../shared/data/profile";
import { EXPERIENCE } from "../../../shared/data/experience";
import { PROJECTS } from "../../../shared/data/projects";
import { SKILLS } from "../../../shared/data/skills";
import { CERTIFICATIONS } from "../../../shared/data/certifications";
import { EDUCATION } from "../../../shared/data/education";

export const dataService = {
  getProfile: () => PROFILE,
  getExperience: () => EXPERIENCE,
  getProjects: () => PROJECTS,
  getSkills: () => SKILLS,
  getCertifications: () => CERTIFICATIONS,
  getEducation: () => EDUCATION,
};
