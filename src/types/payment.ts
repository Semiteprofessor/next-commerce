export interface Payment {
  _id: string;
  amount: number;
  currency: string;
  status: string;
  user?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}
