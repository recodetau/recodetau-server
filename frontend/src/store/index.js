import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user.slice.js";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
