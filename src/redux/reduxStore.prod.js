import { createStore } from "redux";
import reducer from "./reducers/usersReducer";
const store = createStore(reducer);
export default store;
