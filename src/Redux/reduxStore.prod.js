import { createStore } from "redux";
import reducer from "./Reducers/UsersReducer";
const store = createStore(reducer);
export default store;
