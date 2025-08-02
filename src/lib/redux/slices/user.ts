import { User, UserState } from "@/src/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  count: 0,
  isInitialized: false,
  followingShops: [],
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },

    setCount: (state) => {
      state.count += 1;
    },

    setInitialize: (state) => {
      state.isInitialized = true;
    },

    updateStatus: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.status = action.payload;
      }
    },

    verifyUser: (state) => {
      if (state.user) {
        state.user.isVerified = true;
      }
    },

    updateUserRole: (state, action: PayloadAction<User["role"]>) => {
      if (state.user) {
        state.user.role = action.payload;
      }
    },

    updateFollowShop: (state, action: PayloadAction<string>) => {
      const shopId = action.payload;
      if (state.followingShops.includes(shopId)) {
        state.followingShops = state.followingShops.filter(
          (id) => id !== shopId
        );
      } else {
        state.followingShops.push(shopId);
      }
    },
  },
});

export default slice.reducer;

export const {
  setLogin,
  setLogout,
  setCount,
  setInitialize,
  updateStatus,
  verifyUser,
  updateUserRole,
  updateFollowShop,
} = slice.actions;
