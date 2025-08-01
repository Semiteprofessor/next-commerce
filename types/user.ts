export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female" | "other";
  cover?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  wishlist?: string[];
  orders?: string[];
  shop?: string;
  recentProducts?: string[];
  phone?: string;
  status?: string;
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
  state?: string;
  about?: string;
  isVerified: boolean;
  otp: string;
  lastOtpSentAt?: string;
  commission?: number;
  role: "super admin" | "admin" | "user" | "vendor";
}

export interface UserState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  count: number;
  user: User | null;
  followingShops: string[];
}
