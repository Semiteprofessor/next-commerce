export interface ImageData {
  _id: string;
  url: string;
  blurDataURL: string;
}

export interface PaymentInfo {
  holderName: string;
  holderEmail: string;
  bankName: string;
  AccountNo: number;
}

export interface Address {
  country: string;
  city: string;
  state: string;
  streetAddress: string;
}

export type ShopStatus =
  | "approved"
  | "pending"
  | "in review"
  | "action required"
  | "blocked"
  | "rejected";

export interface Shop {
  _id: string;
  vendor: string;
  logo: ImageData;
  cover: ImageData;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  slug: string;
  followers: string[];
  phone: string;
  approved: boolean;
  approvedAt?: string;
  website?: string;
  status: ShopStatus;
  message?: string;
  products: string[];
  paymentInfo: PaymentInfo;
  address: Address;
  createdAt: string;
  updatedAt: string;
}
