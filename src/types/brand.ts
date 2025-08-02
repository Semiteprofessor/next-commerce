export interface BrandImage {
  _id: string;
  url: string;
  blurDataURL: string;
}

export interface Brand {
  _id: string;
  logo: BrandImage;
  name: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  slug: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}
