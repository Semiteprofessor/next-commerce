import { Address } from "../types/address";
import {
  AddBrandPayload,
  AddCategoryPayload,
  AddSubCategoryPayload,
  AdminDashboardAnalytics,
  SubCategory,
  UpdateBrandPayload,
  UpdateCategoryPayload,
  UpdateSubCategoryPayload,
} from "../types/admin";
import { AuthResponse } from "../types/auth";
import { Brand } from "../types/brand";
import { Category } from "../types/category";
import { Compaign } from "../types/compaign";
import { CouponCode } from "../types/coupon-code";
import { Currency } from "../types/currency";
import { ForgetPasswordPayload } from "../types/forgot-password";
import { LoginPayload } from "../types/login";
import { NewsletterPayload } from "../types/newsletter";
import { Order } from "../types/order";
import { ResendOTPPayload, VerifyOTPPayload } from "../types/otp";
import { Payment } from "../types/payment";
import { Product, ProductQueryParams } from "../types/product";
import { RegisterPayload, RegisterResponse } from "../types/register";
import {
  ResetPasswordPayload,
  ResetPasswordResponse,
} from "../types/reset-password";
import { Review, ReviewPayload } from "../types/review";
import { SearchPayload } from "../types/search";
import { Shop } from "../types/shop";
import { User, UserProfile } from "../types/user";
import { VendorProduct } from "../types/vendor";
import http from "./http";

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await http.post<RegisterResponse>("/auth/register", payload);
  return data;
};

export const verifyOTP = async (
  payload: VerifyOTPPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/verify-otp", payload);
  return data;
};

export const resendOTP = async (
  payload: ResendOTPPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/resend-otp", payload);
  return data;
};

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>("/auth/login", payload);
  return data;
};

export const forgetPassword = async (
  payload: ForgetPasswordPayload
): Promise<AuthResponse> => {
  const { data } = await http.post<AuthResponse>(
    "/auth/forget-password",
    payload
  );
  return data;
};

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  const { data } = await http.post<ResetPasswordResponse>(
    "/auth/reset-password",
    payload
  );
  return data;
};

export const adminDashboardAnalytics =
  async (): Promise<AdminDashboardAnalytics> => {
    const { data } = await http.get<AdminDashboardAnalytics>(
      "/admin/dashboard-analytics"
    );
    return data;
  };

export const getNotifications = async (
  page: number
): Promise<Notification[]> => {
  const { data } = await http.get<Notification[]>(
    `/admin/notifications?limit=${page}`
  );
  return data;
};

export const getBrandsByAdmin = async (
  page: number,
  search?: string
): Promise<Brand[]> => {
  const { data } = await http.get<Brand[]>(
    `/admin/brands?search=${search || ""}&page=${page}`
  );
  return data;
};

export const getBrandByAdmin = async (id: string): Promise<Brand> => {
  const { data } = await http.get<Brand>(`/admin/brands/${id}`);
  return data;
};

export const getAllBrandsByAdmin = async (): Promise<Brand[]> => {
  const { data } = await http.get<Brand[]>(`/admin/all-brands`);
  return data;
};

export const addBrandByAdmin = async (
  payload: AddBrandPayload
): Promise<Brand> => {
  const { data } = await http.post<Brand>(`/admin/brands`, payload);
  return data;
};

export const updateBrandByAdmin = async (
  payload: UpdateBrandPayload
): Promise<Brand> => {
  const { currentSlug, ...others } = payload;
  const { data } = await http.put<Brand>(
    `/admin/brands/${currentSlug}`,
    others
  );
  return data;
};

export const deleteBrandByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/brands/${slug}`
  );
  return data;
};

export const getCategoriesByAdmin = async (
  page: number,
  search?: string
): Promise<Category[]> => {
  const { data } = await http.get<Category[]>(
    `/admin/categories?search=${search || ""}&page=${page}`
  );
  return data;
};

export const getCategoryByAdmin = async (slug: string): Promise<Category> => {
  const { data } = await http.get<Category>(`/admin/categories/${slug}`);
  return data;
};

export const deleteCategoryByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/categories/${slug}`
  );
  return data;
};

export const addCategoryByAdmin = async (
  payload: AddCategoryPayload
): Promise<Category> => {
  const { data } = await http.post<Category>(`/admin/categories`, payload);
  return data;
};

export const updateCategoryByAdmin = async (
  payload: UpdateCategoryPayload
): Promise<Category> => {
  const { currentSlug, ...others } = payload;
  const { data } = await http.put<Category>(
    `/admin/categories/${currentSlug}`,
    others
  );
  return data;
};

export const getAllCategoriesByAdmin = async (): Promise<Category[]> => {
  const { data } = await http.get<Category[]>(`/admin/all-categories`);
  return data;
};

// ------------------- Subcategories -------------------

export const getSubCategoryByAdmin = async (
  slug: string
): Promise<SubCategory> => {
  const { data } = await http.get<SubCategory>(`/admin/subcategories/${slug}`);
  return data;
};

export const getSubCategoriesByAdmin = async (
  params: string
): Promise<SubCategory[]> => {
  const { data } = await http.get<SubCategory[]>(
    `/admin/subcategories?${params}`
  );
  return data;
};

export const deleteSubCategoryByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/subcategories/${slug}`
  );
  return data;
};

export const addSubCategoryByAdmin = async (
  payload: AddSubCategoryPayload
): Promise<SubCategory> => {
  const { data } = await http.post<SubCategory>(
    `/admin/subcategories`,
    payload
  );
  return data;
};

export const updateSubCategoryByAdmin = async (
  payload: UpdateSubCategoryPayload
): Promise<SubCategory> => {
  const { currentSlug, ...others } = payload;
  const { data } = await http.put<SubCategory>(
    `/admin/subcategories/${currentSlug}`,
    others
  );
  return data;
};

export const getProductsByAdmin = async (
  params: string
): Promise<Product[]> => {
  const { data: response } = await http.get<Product[]>(
    `/admin/products?${params}`
  );
  return response;
};

export const createProductByAdmin = async (
  payload: Product
): Promise<Product> => {
  const { data: response } = await http.post<Product>(
    `/admin/products`,
    payload
  );
  return response;
};

export const updateProductByAdmin = async ({
  currentSlug,
  ...payload
}: Product & { currentSlug: string }): Promise<Product> => {
  const { data: response } = await http.put<Product>(
    `/admin/products/${currentSlug}`,
    payload
  );
  return response;
};

export const deleteProductByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data: response } = await http.delete<{ message: string }>(
    `/admin/products/${slug}`
  );
  return response;
};

// ------------------- Orders -------------------

export const getOrdersByAdmin = async (params: string): Promise<Order[]> => {
  const { data } = await http.get<Order[]>(`/admin/orders?${params}`);
  return data;
};

export const getOrderByAdmin = async (id: string): Promise<Order> => {
  const { data } = await http.get<Order>(`/admin/orders/${id}`);
  return data;
};

export const deleteOrderByAdmin = async (
  id: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/orders/${id}`
  );
  return data;
};

export const updateOrderStatus = async (
  id: string,
  payload: Partial<Order>
): Promise<Order> => {
  const { data } = await http.put<Order>(`/admin/orders/${id}`, payload);
  return data;
};

// ------------------- Users -------------------

export const getUsersByAdmin = async (
  page: number,
  search?: string
): Promise<User[]> => {
  const { data: response } = await http.get<User[]>(
    `/admin/users?search=${search || ""}&page=${page}`
  );
  return response;
};

export const getUserByAdmin = async (id: string): Promise<User> => {
  const { data: response } = await http.get<User>(`/admin/users/${id}`);
  return response;
};

export const updateUserRoleByAdmin = async (
  id: string,
  role: string
): Promise<User> => {
  const { data: response } = await http.post<User>(`/admin/users/role/${id}`, {
    role,
  });
  return response;
};

// ------------------- Coupon Codes -------------------

export const getCouponCodesByAdmin = async (
  page: number,
  search?: string
): Promise<CouponCode[]> => {
  const { data: response } = await http.get<CouponCode[]>(
    `/admin/coupon-codes?search=${search || ""}&page=${page}`
  );
  return response;
};

export const getCouponCodeByAdmin = async (id: string): Promise<CouponCode> => {
  const { data: response } = await http.get<CouponCode>(
    `/admin/coupon-codes/${id}`
  );
  return response;
};

export const addCouponCodeByAdmin = async (
  payload: CouponCode
): Promise<CouponCode> => {
  const { data: response } = await http.post<CouponCode>(
    `/admin/coupon-codes`,
    payload
  );
  return response;
};

export const updateCouponCodeByAdmin = async ({
  currentId,
  ...others
}: CouponCode & { currentId: string }): Promise<CouponCode> => {
  const { data: response } = await http.put<CouponCode>(
    `/admin/coupon-codes/${currentId}`,
    others
  );
  return response;
};

export const deleteCouponCodeByAdmin = async (
  id: string
): Promise<{ message: string }> => {
  const { data: response } = await http.delete<{ message: string }>(
    `/admin/coupon-codes/${id}`
  );
  return response;
};

// ------------------- Newsletter -------------------

export const getNewsletter = async (page: number): Promise<any> => {
  const { data } = await http.get(`/admin/newsletter?page=${page}`);
  return data;
};

// ------------------- Shops -------------------

export const getShopDetailsByAdmin = async (slug: string): Promise<Shop> => {
  const { data } = await http.get<Shop>(`/admin/shops/${slug}`);
  return data;
};

export const addAdminShopByAdmin = async (payload: Shop): Promise<Shop> => {
  const { data } = await http.post<Shop>(`/admin/shops`, payload);
  return data;
};

export const updateAdminShopByAdmin = async ({
  currentSlug,
  ...payload
}: Shop & { currentSlug: string }): Promise<Shop> => {
  const { data } = await http.put<Shop>(`/admin/shops/${currentSlug}`, payload);
  return data;
};

export const deleteShop = async (
  slug: string
): Promise<{ message: string }> => {
  const { data: response } = await http.delete<{ message: string }>(
    `/admin/shops/${slug}`
  );
  return response;
};

export const getLowStockProductsByAdmin = async (
  page: number
): Promise<any[]> => {
  const { data: response } = await http.get<any[]>(
    `/admin/low-stock-products?page=${page}`
  );
  return response;
};

export const getShopsByAdmin = async (
  page: number,
  search?: string
): Promise<Shop[]> => {
  const { data: response } = await http.get<Shop[]>(
    `/admin/shops?search=${search || ""}&page=${page}`
  );
  return response;
};

export const getShopIncomeByAdmin = async (
  slug: string,
  page?: number
): Promise<any> => {
  const { data } = await http.get(
    `/admin/shops/${slug}/income?page=${page || 1}`
  );
  return data;
};

// ------------------- Payments -------------------

export const getIncomeDetailsByAdmin = async (
  pid: string,
  page?: number
): Promise<Payment[]> => {
  const { data } = await http.get<Payment[]>(
    `/admin/payments/${pid}?page=${page || 1}`
  );
  return data;
};

export const editPaymentByAdmin = async (
  payload: Payment & { pid: string }
): Promise<Payment> => {
  const { pid, ...rest } = payload;
  const { data } = await http.put<Payment>(`/admin/payments/${pid}`, rest);
  return data;
};

export const createPaymentByAdmin = async (
  payload: Partial<Payment>
): Promise<Payment> => {
  const { data } = await http.post<Payment>(`/admin/payments`, payload);
  return data;
};

export const getPayoutsByAdmin = async (params: string): Promise<any[]> => {
  const { data } = await http.get<any[]>(`/admin/payouts?${params}`);
  return data;
};

// ------------------- Currencies -------------------

export const getAllShopsByAdmin = async (): Promise<Shop[]> => {
  const { data } = await http.get<Shop[]>(`/admin/all-shops`);
  return data;
};

export const getCurrenciesByAdmin = async (
  page?: number,
  search?: string
): Promise<Currency[]> => {
  const { data } = await http.get<Currency[]>(
    `/admin/currencies?page=${page || 1}&search=${search || ""}`
  );
  return data;
};

export const addCurrencyByAdmin = async (
  payload: Currency
): Promise<Currency> => {
  const { data } = await http.post<Currency>(`/admin/currencies`, payload);
  return data;
};

export const updateCurrencyByAdmin = async ({
  _id,
  ...others
}: Currency): Promise<Currency> => {
  const { data } = await http.put<Currency>(`/admin/currencies/${_id}`, others);
  return data;
};

export const getCurrencyByAdmin = async (cid: string): Promise<Currency> => {
  const { data } = await http.get<Currency>(`/admin/currencies/${cid}`);
  return data;
};

export const getCompaignsByAdmin = async (
  page: number,
  search?: string
): Promise<Compaign[]> => {
  const { data } = await http.get<Compaign[]>(
    `/admin/compaigns?page=${page || 1}&search=${search || ""}`
  );
  return data;
};

export const addCompaignByAdmin = async (
  payload: Compaign
): Promise<Compaign> => {
  const { data } = await http.post<Compaign>(`/admin/compaigns`, payload);
  return data;
};

export const updateCompaignByAdmin = async ({
  currentSlug,
  ...payload
}: Compaign & { currentSlug: string }): Promise<Compaign> => {
  const { data } = await http.put<Compaign>(
    `/admin/compaigns/${currentSlug}`,
    payload
  );
  return data;
};

export const getCompaignByAdmin = async (slug: string): Promise<Compaign> => {
  const { data } = await http.get<Compaign>(`/admin/compaigns/${slug}`);
  return data;
};

export const deleteCompaignByAdmin = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/admin/compaigns/${slug}`
  );
  return data;
};

// ------------------- Vendor -------------------

export const getVendorProductBySlug = async (
  slug: string
): Promise<VendorProduct> => {
  const { data } = await http.get<VendorProduct>(`/vendor/products/${slug}`);
  return data;
};

export const getVendorShop = async (): Promise<any> => {
  const { data } = await http.get(`/vendor/shop`);
  return data;
};

export const vendorDashboardAnalytics = async (): Promise<any> => {
  const { data } = await http.get(`/vendor/dashboard-analytics`);
  return data;
};

export const getVendorLowStockProducts = async (
  page: number
): Promise<VendorProduct[]> => {
  const { data } = await http.get<VendorProduct[]>(
    `/vendor/low-stock-products?page=${page}`
  );
  return data;
};

export const getVendorProducts = async (
  page: number,
  search?: string
): Promise<VendorProduct[]> => {
  const { data } = await http.get<VendorProduct[]>(
    `/vendor/products?search=${search || ""}&page=${page}`
  );
  return data;
};

export const deleteVendorProduct = async (
  slug: string
): Promise<{ message: string }> => {
  const { data } = await http.delete<{ message: string }>(
    `/vendor/products/${slug}`
  );
  return data;
};

export const createVendorProduct = async (
  payload: VendorProduct
): Promise<VendorProduct> => {
  const { data } = await http.post<VendorProduct>(`/vendor/products`, payload);
  return data;
};

export const updateVendorProduct = async ({
  currentSlug,
  ...payload
}: VendorProduct & { currentSlug: string }): Promise<VendorProduct> => {
  const { data } = await http.put<VendorProduct>(
    `/vendor/products/${currentSlug}`,
    payload
  );
  return data;
};

export const getOrdersByVendor = async (params: string): Promise<any[]> => {
  const { data } = await http.get<any[]>(`/vendor/orders?${params}`);
  return data;
};

export const addShopByVendor = async (payload: any): Promise<any> => {
  const { data } = await http.post(`/vendor/shops`, payload);
  return data;
};

export const updateShopByVendor = async ({
  currentSlug,
  ...payload
}: { currentSlug: string } & any): Promise<any> => {
  const { data } = await http.put(`/vendor/shops/${currentSlug}`, payload);
  return data;
};

export const getShopDetailsByVendor = async (): Promise<any> => {
  const { data } = await http.get(`/vendor/shop/stats`);
  return data;
};

export const getIncomeByVendor = async (
  slug?: string,
  page?: number
): Promise<any> => {
  const { data } = await http.get(`/vendor/shops/income?page=${page || 1}`);
  return data;
};

// export const getProducts = async (
//   query = "",
//   category?: string,
//   rate?: number
// ): Promise<T> => {
//   const { data } = await http.get<T>(`/products${query || "?"}&rate=${rate}`);
//   return data;
// };

// ------------------- Products -------------------

export const getProducts = async ({
  query = "",
  rate,
}: ProductQueryParams = {}): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(
    `/products${query || "?"}&rate=${rate ?? ""}`
  );
  return data;
};

export const getProductDetails = async (pid: string): Promise<any> => {
  const { data } = await http.get(`/products/${pid}`);
  return data;
};

export const getProductsByCategory = async ({
  category,
  query = "",
  rate,
}: ProductQueryParams): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(
    `/category/products/${category}${query || "?"}&rate=${rate ?? ""}`
  );
  return data;
};

export const getProductsBySubCategory = async ({
  subcategory,
  query = "",
  rate,
}: ProductQueryParams): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(
    `/subcategory/products/${subcategory}${query || "?"}&rate=${rate ?? ""}`
  );
  return data;
};

export const getProductsByShop = async ({
  shop,
  query = "",
  rate,
}: ProductQueryParams): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(
    `/shop/products/${shop}${query || "?"}&rate=${rate ?? ""}`
  );
  return data;
};

export const getProductsByCompaign = async ({
  query = "",
  slug,
  rate,
}: ProductQueryParams & { slug: string }): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(
    `/compaign/products/${slug}${query || "?"}&rate=${rate ?? ""}`
  );
  return data;
};

export const getProductSlugs = async (): Promise<string[]> => {
  const { data } = await http.get<string[]>(`/products-slugs`);
  return data;
};

export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(`/products/all`);
  return data;
};

export const getAllFilters = async (): Promise<any> => {
  const { data } = await http.get(`/products/filters`);
  return data;
};

export const getNewProducts = async (): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(`/products/new`);
  return data;
};

export const getFiltersByShop = async (shop: string): Promise<any> => {
  const { data } = await http.get(`/filters/${shop}`);
  return data;
};

export const getNewArrivals = async (): Promise<Product[]> => {
  const { data } = await http.get("/new-arrivals");
  return data;
};

export const getRelatedProducts = async (pid: string): Promise<Product[]> => {
  const { data } = await http.get<Product[]>(`/related-products/${pid}`);
  return data;
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
  const { data } = await http.get<Product>(`/products/${slug}`);
  return data;
};

// ------------------- Reviews -------------------

export const getProductReviews = async (pid: string): Promise<Review[]> => {
  const { data } = await http.get<Review[]>(`/reviews/${pid}`);
  return data;
};

export const addReview = async (payload: ReviewPayload): Promise<Review> => {
  const { data } = await http.post<Review>(`/reviews`, payload);
  return data;
};

export const getUserInvoice = async (page: number): Promise<Invoice[]> => {
  const { data } = await http.get<Invoice[]>(`/users/invoice?page=${page}`);
  return data;
};

export const updateProfile = async (
  payload: Partial<UserProfile>
): Promise<UserProfile> => {
  const { data } = await http.put<UserProfile>("/users/profile", payload);
  return data;
};

export const changePassword = async (payload: {
  oldPassword: string;
  newPassword: string;
}): Promise<{ success: boolean }> => {
  const { data } = await http.put<{ success: boolean }>(
    "/users/change-password",
    payload
  );
  return data;
};

// Address API
export const getAddress = async (userId: string): Promise<Address[]> => {
  const { data } = await http.get<Address[]>(`/users/addresses?id=${userId}`);
  return data;
};

export const updateAddress = async (payload: Address): Promise<Address> => {
  const { _id, ...rest } = payload;
  const { data } = await http.put<Address>(`/users/addresses/${_id}`, rest);
  return data;
};

export const createAddress = async (
  payload: Omit<Address, "_id">
): Promise<Address> => {
  const { data } = await http.post<Address>("/users/addresses", payload);
  return data;
};

export const deleteAddress = async (
  _id: string
): Promise<{ success: boolean }> => {
  const { data } = await http.delete<{ success: boolean }>(
    `/users/addresses/${_id}`
  );
  return data;
};

// Search API
export const search = async (payload: SearchPayload): Promise<any[]> => {
  const { data } = await http.post<any[]>("/search", payload);
  return data;
};

export const getSearchFilters = async (): Promise<Record<string, any>> => {
  const { data } = await http.get<Record<string, any>>("/search-filters");
  return data;
};

// Orders and Layout
export const getInvoices = async (): Promise<Invoice[]> => {
  const { data } = await http.get<Invoice[]>("/users/invoice");
  return data;
};

export const placeOrder = async (payload: any): Promise<any> => {
  const { data } = await http.post<any>("/orders", payload);
  return data;
};

export const getLayout = async (): Promise<any> => {
  const { data } = await http.get<any>("/layout");
  return data;
};

// File and Newsletter
export const singleDeleteFile = async (
  id: string
): Promise<{ success: boolean }> => {
  const { data } = await http.delete<{ success: boolean }>(
    `/delete-file/${id}`
  );
  return data;
};

export const sendNewsletter = async (
  payload: NewsletterPayload
): Promise<{ success: boolean }> => {
  const { data } = await http.post<{ success: boolean }>(
    "/newsletter",
    payload
  );
  return data;
};
