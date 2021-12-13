import userDetails from "./slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: userDetails,
  },
});

export default store;
