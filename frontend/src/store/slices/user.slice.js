import { createSlice } from "@reduxjs/toolkit";

import { USER_TOKEN_LOCALSTOTAGE_KEY } from "../../constants/users.js";

const initialState = {
  user: null,
  token: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem(USER_TOKEN_LOCALSTOTAGE_KEY, state.token);
    },
    saveUser: (state, action) => {
      state.user = action.payload;
      state.token = state.user.token;
    },
  },
});

export const { saveToken, saveUser } = counterSlice.actions;

export default counterSlice.reducer;
