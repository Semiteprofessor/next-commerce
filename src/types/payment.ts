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

export interface PaymentIntentPayload {
  amount: number;
  currency: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  payment?: Payment;
  [key: string]: any;
}
