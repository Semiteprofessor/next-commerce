export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  gender: "male" | "female" | "other";
  role?: "user" | "vendor";
  otp?: string;
}

export interface RegisterResponse {
  message: string;
  userId: string;
}
