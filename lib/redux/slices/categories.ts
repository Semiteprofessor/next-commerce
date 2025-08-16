import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
  imageUrl?: string;
}

export interface CategoriesPayload {
  data: Category[];
  newCategories: Category[];
}

export interface CategoriesState {
  categories: Category[];
  newCategories: Category[];
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  newCategories: [],
  isLoading: true,
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<CategoriesPayload>) {
      state.categories = action.payload.data;
      state.newCategories = action.payload.newCategories;
      state.isLoading = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    resetCategories(state) {
      state.categories = [];
      state.newCategories = [];
      state.isLoading = true;
    },
  },
});

export default slice.reducer;

export const { setCategories, startLoading, stopLoading, resetCategories } =
  slice.actions;
