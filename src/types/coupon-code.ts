export interface CouponCode {
  _id: string;
  code: string;
  discount: number;
  expiresAt: string;
  status?: string;
  [key: string]: any;
}
