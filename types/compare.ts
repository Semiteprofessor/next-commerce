export interface CompareProduct {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  brand?: string;
  [key: string]: unknown;
}

export interface CompareState {
  products: CompareProduct[];
}
