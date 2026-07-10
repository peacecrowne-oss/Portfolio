import { Router } from "express";
import {
  getProfile,
  getExperience,
  getProjects,
  getSkills,
  getCertifications,
} from "../controllers/resource.controller";

export const resourceRouter = Router();

resourceRouter.get("/profile", getProfile);
resourceRouter.get("/experience", getExperience);
resourceRouter.get("/projects", getProjects);
resourceRouter.get("/skills", getSkills);
resourceRouter.get("/certifications", getCertifications);
