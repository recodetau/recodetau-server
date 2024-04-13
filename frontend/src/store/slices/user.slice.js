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
    saveUser: (state, action) => {
      state.user = action.payload;
      state.token = state.user.token;

      sessionStorage.setItem(USER_TOKEN_LOCALSTOTAGE_KEY, state.token);
    },
  },
});

export const { saveUser } = counterSlice.actions;

export default counterSlice.reducer;
