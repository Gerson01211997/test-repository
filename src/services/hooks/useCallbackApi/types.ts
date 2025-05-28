type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiOptions {
  method?: HttpMethod;
  body?: unknown;
  params?: Record<string, string | number>;
}

export interface ApiError extends Error {
  status?: number;
}
