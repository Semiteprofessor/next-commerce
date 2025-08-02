// types/product.ts
export interface ProductImage {
  _id: string;
  url: string;
  blurDataURL: string;
}

export interface Product {
  _id: string;
  name: string;
  code?: string;
  status?: string;
  isFeatured?: boolean;
  brand?: string;
  likes?: number;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  category: string;
  subCategory: string;
  gender?: string;
  tags?: string[];
  sku: string;
  price: number;
  priceSale: number;
  oldPriceSale?: number;
  available: number;
  quantity: number;
  size: number;
  sold?: number;
  reviews?: string[];
  shop: string;
  images: ProductImage[];
  colors?: string[];
  sizes?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductQueryParams {
  query?: string;
  category?: string;
  subcategory?: string;
  shop?: string;
  rate?: number;
}
