export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewPayload {
  productId: string;
  rating: number;
  comment: string;
}
