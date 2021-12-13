import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://randomuser.me/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (usersLimit) => {
    return axios.get(`${API}/?results=${usersLimit}`).then((response) => {
      return response.data.results;
    });
  }
);

const initialStateValue = {
  loading: false,
  usersList: [],
  error: "",
  nationality: "",
  search: "",
  userId: "",
};

const userDetails = createSlice({
  name: "userDetails",
  initialState: initialStateValue,
  reducers: {
    searchUsers: (state, action) => {
      state.search = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(
        (deleteUser) => deleteUser.login.uuid !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersList = [...state.usersList, ...action.payload];
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { searchUsers, setNationality, setUserId, deleteUser } =
  userDetails.actions;

export default userDetails.reducer;
