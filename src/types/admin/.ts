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
