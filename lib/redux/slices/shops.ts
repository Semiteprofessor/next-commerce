import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Shop {
  _id: string;
  name: string;
  location?: string;
  // add other fields as needed
}

// Define slice state type
interface ShopsState {
  shops: Shop[];
  isLoading: boolean;
}

// Initial state
const initialState: ShopsState = {
  shops: [],
  isLoading: true,
};

// Slice
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

// Reducer
export default slice.reducer;

// Actions
export const { setShops } = slice.actions;

// ----------------------------------------------------------------------
