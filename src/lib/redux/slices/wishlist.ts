import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationState {
  wishlist: string[];
}

const initialState: NotificationState = {
  wishlist: [],
};

const slice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setWishlist: (state, action: PayloadAction<string[]>) => {
      state.wishlist = action.payload;
    },
    resetWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export default slice.reducer;

export const { setWishlist, resetWishlist } = slice.actions;
