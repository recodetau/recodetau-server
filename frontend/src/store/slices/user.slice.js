import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { saveUser } = counterSlice.actions;

export default counterSlice.reducer;
