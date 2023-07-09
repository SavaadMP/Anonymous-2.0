import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import loaderReducer from "./loader";
import messageReducer from "./messages";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loader: loaderReducer,
    messages: messageReducer,
  },
});
