export interface AdminDashboardAnalytics {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  logo?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
}

export interface AddBrandPayload {
  name: string;
  slug: string;
  logo: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
}

export interface UpdateBrandPayload extends Partial<AddBrandPayload> {
  currentSlug: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  cover?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string; // category id
  cover?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
}

export interface AddCategoryPayload {
  name: string;
  slug: string;
  cover?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
}

export interface UpdateCategoryPayload extends Partial<AddCategoryPayload> {
  currentSlug: string;
}

export interface AddSubCategoryPayload {
  name: string;
  slug: string;
  category: string;
  cover?: {
    _id: string;
    url: string;
    blurDataURL: string;
  };
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  status?: string;
}

export interface UpdateSubCategoryPayload
  extends Partial<AddSubCategoryPayload> {
  currentSlug: string;
}
