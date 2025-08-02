export interface Order {
  _id: string;
  user: string;
  products: { product: string; quantity: number }[];
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}
