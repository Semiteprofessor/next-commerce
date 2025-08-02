export interface VendorProduct {
  _id: string;
  name: string;
  slug: string;
  stock?: number;
  price?: number;
  shop?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}
