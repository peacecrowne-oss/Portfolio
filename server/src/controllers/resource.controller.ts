import type { Request, Response } from "express";
import { dataService } from "../services/dataService";

export function getProfile(_req: Request, res: Response) {
  res.status(200).json({ success: true, data: dataService.getProfile() });
}

export function getExperience(_req: Request, res: Response) {
  res.status(200).json({ success: true, data: dataService.getExperience() });
}

export function getProjects(_req: Request, res: Response) {
  res.status(200).json({ success: true, data: dataService.getProjects() });
}

export function getSkills(_req: Request, res: Response) {
  res.status(200).json({ success: true, data: dataService.getSkills() });
}

export function getCertifications(_req: Request, res: Response) {
  res.status(200).json({ success: true, data: dataService.getCertifications() });
}
