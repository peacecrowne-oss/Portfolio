export * from "../../../shared/types";

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiFailure {
  success: false;
  error: string;
  details?: unknown;
}

export interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}
