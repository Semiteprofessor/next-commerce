import { Shop } from "@/types/shop";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopsState {
  shops: Shop[];
  isLoading: boolean;
}

const initialState: ShopsState = {
  shops: [],
  isLoading: true,
};

const slice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    setShops(state, action: PayloadAction<Shop[]>) {
      state.shops = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

export const { setShops } = slice.actions;
