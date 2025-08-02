export interface ResetPasswordPayload {
  newPassword: string;
  token: string;
}

export interface ResetPasswordResponse {
  message: string;
}
