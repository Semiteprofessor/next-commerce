export interface CategoryImage {
  _id: string;
  url: string;
  blurDataURL: string;
}

export interface Category {
  _id: string;
  cover: CategoryImage;
  name: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  slug: string;
  status: string;
  subCategories: string[];
  createdAt?: string;
  updatedAt?: string;
}
