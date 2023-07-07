import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import loaderReducer from "./loader";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
  },
});
