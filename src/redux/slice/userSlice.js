import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://randomuser.me/api";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (usersLimit) => {
    return axios.get(`${API}/?results=${usersLimit}`).then((response) => {
      return response.data.results;
    });
  }
);

const initialStateValue = {
  loading: false,
  usersList: [],
  preLoadUsers: [],
  error: "",
  nationality: "",
  search: "",
  userId: "",
};

const userDetails = createSlice({
  name: "userDetails",
  initialState: initialStateValue,
  reducers: {
    mergeLoadedUser: (state) => {
      state.usersList = [...state.usersList, ...state.preLoadUsers];
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.usersList = action.payload.slice(0, 50);
      state.preLoadUsers = action.payload.slice(50, 100);
      state.loading = false;
    },
    [getUsers.rejected]: (state, action) => {
      console.log("actuin", action);
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { mergeLoadedUser } = userDetails.actions;

export default userDetails.reducer;
