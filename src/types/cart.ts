import { Product } from "./product";

export interface CartPayload {
  products: string[];
}

export interface CartResponse {
  items: Product[];
  total: number;
}
