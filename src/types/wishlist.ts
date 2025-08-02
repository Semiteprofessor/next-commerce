import { Product } from "./product";

export interface WishlistResponse {
  success: boolean;
  wishlist: Product[];
}
