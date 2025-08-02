import { LoginPayload, LoginResponse } from "../types/login";
import { RegisterPayload, RegisterResponse } from "../types/register";
import http from "./http";

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await http.post<RegisterResponse>("/auth/register", payload);
  return data;
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await http.post<LoginResponse>("/auth/login", payload);
  return data;
};

export const getProducts = async <T = any>(
  query = "",
  category?: string,
  rate?: number
): Promise<T> => {
  const { data } = await http.get<T>(`/products${query || "?"}&rate=${rate}`);
  return data;
};
