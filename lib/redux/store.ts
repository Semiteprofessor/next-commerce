/* Core */
import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import { persistStore } from "redux-persist";

/* Instruments */
import { reducer } from "./rootReducer";
import { middleware } from "./middleware";

// Create store
export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable because redux-persist stores non-serializable values
    }).concat(middleware),
});

// Persistor for redux-persist
export const persistor = persistStore(reduxStore);

/* ✅ Strong Typings */
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

/* ✅ Typed Hooks */
export const useDispatch: () => AppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
