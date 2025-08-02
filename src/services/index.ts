import { AuthResponse } from "../types/auth";
import { ForgetPasswordPayload } from "../types/forgot-password";
import { LoginPayload } from "../types/login";
import { ResendOTPPayload, VerifyOTPPayload } from "../types/otp";
import { RegisterPayload, RegisterResponse } from "../types/register";
import { ResetPasswordPayload, ResetPasswordResponse } from "../types/reset-password";
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
export const getProducts = async <T = any>(
  query = "",
  category?: string,
  rate?: number
): Promise<T> => {
  const { data } = await http.get<T>(`/products${query || "?"}&rate=${rate}`);
  return data;
};
