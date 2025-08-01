import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Brand {
  id: string;
  name: string;
  logoUrl?: string;
}

export interface BrandsState {
  brands: Brand[];
  isLoading: boolean;
}

const initialState: BrandsState = {
  brands: [],
  isLoading: true,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrands(state, action: PayloadAction<Brand[]>) {
      state.brands = action.payload;
      state.isLoading = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export default brandsSlice.reducer;

export const { setBrands, startLoading, stopLoading } = brandsSlice.actions;
