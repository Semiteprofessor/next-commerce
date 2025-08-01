import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

// Define the state type
export interface SettingsState {
  themeMode: "light" | "dark";
  openSidebar: boolean;
  currency: string;
  rate: number;
}

// Initial state
const initialState: SettingsState = {
  themeMode: "light",
  openSidebar: false,
  currency: process.env.BASE_CURRENCY || "USD",
  rate: 1,
};

const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
    },
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.openSidebar = action.payload;
    },
    handleChangeCurrency(
      state,
      action: PayloadAction<{ currency: string; rate: number }>
    ) {
      state.currency = action.payload.currency;
      state.rate = action.payload.rate;
    },
  },
});

export default slice.reducer;

export const { setThemeMode, toggleSidebar, handleChangeCurrency } =
  slice.actions;
