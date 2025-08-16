/* Core */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store"; // adjust import paths

/**
 * ? A utility function to create typed Async Thunk Actions.
 */
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string; // customize this (e.g., ApiError, ValidationError, etc.)
  extra?: unknown; // for extraArgument if you configured one
}>();
