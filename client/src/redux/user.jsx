import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("anonymous")
    ? JSON.parse(localStorage.getItem("anonymous"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { authUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
