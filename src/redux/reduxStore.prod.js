import { createStore } from "redux";
import reducer from "./reducers/UsersReducer";
const store = createStore(reducer);
export default store;
