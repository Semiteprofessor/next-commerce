export interface VerifyOTPPayload {
  email: string;
  otp: string;
}

export interface ResendOTPPayload {
  email: string;
}
