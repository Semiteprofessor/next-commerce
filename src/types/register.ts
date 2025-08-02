export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: "male" | "female" | "other";
  phone: string;
  otp: string;
}

export interface RegisterResponse {
  message: string;
  userId: string;
}
