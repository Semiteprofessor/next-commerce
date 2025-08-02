import { CompareProduct, CompareState } from "@/src/types/compare";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CompareState = {
  products: [],
};

const slice = createSlice({
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

export default slice.reducer;

export const { addCompareProduct, removeCompareProduct, resetCompareProducts } =
  slice.actions;
