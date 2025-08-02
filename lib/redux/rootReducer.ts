import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

// slices
import productReducer from "./slices/product";
import userReducer from "./slices/user";
import wishlistReducer from "./slices/wishlist";
import compareReducer from "./slices/compare";
import settingsReducer from "./slices/settings";
import categoriesReducer from "./slices/categories";
import brandsReducer from "./slices/brands";
import shopsReducer from "./slices/shops";

// ----------------------------------------------------------------------
// Define root state type
export interface RootState {
  product: ReturnType<typeof productReducer>;
  user: ReturnType<typeof userReducer>;
  settings: ReturnType<typeof settingsReducer>;
  wishlist: ReturnType<typeof wishlistReducer>;
  compare: ReturnType<typeof compareReducer>;
  categories: ReturnType<typeof categoriesReducer>;
  brands: ReturnType<typeof brandsReducer>;
  shops: ReturnType<typeof shopsReducer>;
}

// ----------------------------------------------------------------------
// Persist configs
const rootPersistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const productPersistConfig: PersistConfig<ReturnType<typeof productReducer>> = {
  key: "product",
  storage,
  keyPrefix: "redux-",
  whitelist: ["sortBy", "checkout"],
};

const wishlistPersistConfig: PersistConfig<ReturnType<typeof wishlistReducer>> =
  {
    key: "wishlist",
    storage,
    keyPrefix: "redux-",
    whitelist: ["wishlist"],
  };

const comparePersistConfig: PersistConfig<ReturnType<typeof compareReducer>> = {
  key: "compare",
  storage,
  keyPrefix: "redux-",
  whitelist: ["products"],
};

const settingsPersistConfig: PersistConfig<ReturnType<typeof settingsReducer>> =
  {
    key: "settings",
    storage,
    keyPrefix: "redux-",
    whitelist: ["themeMode", "themeColor", "rate", "currency"],
  };

const userPersistConfig: PersistConfig<ReturnType<typeof userReducer>> = {
  key: "user",
  storage,
  keyPrefix: "redux-",
  whitelist: ["user", "isAuthenticated"],
};

const reducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  user: persistReducer(userPersistConfig, userReducer),
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
  compare: persistReducer(comparePersistConfig, compareReducer),
  categories: categoriesReducer,
  brands: brandsReducer,
  shops: shopsReducer,
});

export { rootPersistConfig, reducer };
