import { AddBrandPayload, AdminDashboardAnalytics, UpdateBrandPayload } from "../types/admin";
import { AuthResponse } from "../types/auth";
import { Brand } from "../types/brand";
import { ForgetPasswordPayload } from "../types/forgot-password";
import { LoginPayload } from "../types/login";
import { ResendOTPPayload, VerifyOTPPayload } from "../types/otp";
import { RegisterPayload, RegisterResponse } from "../types/register";
import {
  ResetPasswordPayload,
  ResetPasswordResponse,
} from "../types/reset-password";
import http from "./http";

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await http.post<RegisterResponse>("/auth/register", payload);
  return data;
};

export const verifyOTP = async (
  payload: VerifyOTPPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/verify-otp", payload);
  return data;
};

export const resendOTP = async (
  payload: ResendOTPPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/resend-otp", payload);
  return data;
};

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/login", payload);
  return data;
};

export const forgetPassword = async (
  payload: ForgetPasswordPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>(
    "/auth/forget-password",
    payload
  );
  return data;
};

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  const { data } = await http.post<ResetPasswordResponse>(
    "/auth/reset-password",
    payload
  );
  return data;
};

export const adminDashboardAnalytics =
  async (): Promise<AdminDashboardAnalytics> => {
    const { data } = await http.get<AdminDashboardAnalytics>(
      "/admin/dashboard-analytics"
    );
    return data;
  };

export const getNotifications = async (
  page: number
): Promise<Notification[]> => {
  const { data } = await http.get<Notification[]>(
    `/admin/notifications?limit=${page}`
  );
  return data;
};


export const getBrandsByAdmin = async (
  page: number,
  search?: string
): Promise<Brand[]> => {
  const { data } = await http.get<Brand[]>(
    `/admin/brands?search=${search || ""}&page=${page}`
  );
  return data;
};

export const getBrandByAdmin = async (id: string): Promise<Brand> => {
  const { data } = await http.get<Brand>(`/admin/brands/${id}`);
  return data;
};

export const getAllBrandsByAdmin = async (): Promise<Brand[]> => {
  const { data } = await http.get<Brand[]>(`/admin/all-brands`);
  return data;
};

export const addBrandByAdmin = async (
  payload: AddBrandPayload
): Promise<Brand> => {
  const { data } = await http.post<Brand>(`/admin/brands`, payload);
  return data;
};

export const updateBrandByAdmin = async (
  payload: UpdateBrandPayload
): Promise<Brand> => {
  const { currentSlug, ...others } = payload;
  const { data } = await http.put<Brand>(
    `/admin/brands/${currentSlug}`,
    others
  );
  return data;
};

export const deleteBrandByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/brands/${slug}`
  );
  return data;
};

// export const getProducts = async <T = any>(
//   query = "",
//   category?: string,
//   rate?: number
// ): Promise<T> => {
//   const { data } = await http.get<T>(`/products${query || "?"}&rate=${rate}`);
//   return data;
// };
