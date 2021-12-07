import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/usersReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
