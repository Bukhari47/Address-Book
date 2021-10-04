import { createStore } from "redux";
import reducer from "../Redux/Reducers/UsersReducer";
const store = createStore(reducer);
export default store;
