import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/usersReducer";
import userDetails from "./slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(userReducer, composeEnhancer(applyMiddleware(thunk)));

export const store = configureStore({
  reducer: {
    users: userDetails,
  },
});

export default store;
