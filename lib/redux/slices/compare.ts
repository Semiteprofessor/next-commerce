import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompareProduct {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  brand?: string;
  [key: string]: unknown; // allows flexibility for extra product fields
}

export interface CompareState {
  products: CompareProduct[];
}

const initialState: CompareState = {
  products: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompareProduct(state, action: PayloadAction<CompareProduct>) {
      // Prevent duplicates
      const exists = state.products.some((p) => p._id === action.payload._id);
      if (!exists) {
        state.products.push(action.payload);
      }
    },
    removeCompareProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p._id !== action.payload);
    },
    resetCompareProducts(state) {
      state.products = [];
    },
  },
});

export default compareSlice.reducer;

export const { addCompareProduct, removeCompareProduct, resetCompareProducts } =
  compareSlice.actions;
