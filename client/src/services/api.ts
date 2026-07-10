import type {
  Profile,
  ExperienceEntry,
  Project,
  SkillCategory,
  Certification,
} from "@shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api";

interface ApiSuccess<T> {
  success: true;
  data: T;
}

interface ApiFailure {
  success: false;
  error: string;
  details?: unknown;
}

type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  const body = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !body.success) {
    throw new Error(!body.success ? body.error : `Request failed: ${response.status}`);
  }

  return body.data;
}

export interface HealthStatus {
  status: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export const api = {
  getHealth: (): Promise<HealthStatus> =>
    fetch(`${API_BASE_URL}/health`).then((res) => res.json() as Promise<HealthStatus>),
  getProfile: (): Promise<Profile> => request<Profile>("/profile"),
  getExperience: (): Promise<ExperienceEntry[]> => request<ExperienceEntry[]>("/experience"),
  getProjects: (): Promise<Project[]> => request<Project[]>("/projects"),
  getSkills: (): Promise<SkillCategory[]> => request<SkillCategory[]>("/skills"),
  getCertifications: (): Promise<Certification[]> =>
    request<Certification[]>("/certifications"),
  submitContact: (payload: ContactSubmission): Promise<{ message: string }> =>
    request<{ message: string }>("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
