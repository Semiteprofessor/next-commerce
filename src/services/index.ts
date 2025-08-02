import http from "./http";


// Typed function
export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await http.post<RegisterResponse>("/auth/register", payload);
  return data;
};

// Another example: login
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await http.post<LoginResponse>("/auth/login", payload);
  return data;
};

// Generic GET function with query parameters
export const getProducts = async <T = any>(
  query = "",
  category?: string,
  rate?: number
): Promise<T> => {
  const { data } = await http.get<T>(`/products${query || "?"}&rate=${rate}`);
  return data;
};
