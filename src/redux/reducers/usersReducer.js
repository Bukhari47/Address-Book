import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  users: [],
  preLoadUsers: [],
  error: "",
  nationality: "",
  search: "",
  userId: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return fetchUsersRequest(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case actionTypes.FETCH_USERS_FAILURE:
      return fetchUsersFailure(state, action);
    case actionTypes.SET_NATIONALITY:
      return setNationality(state, action);
    case actionTypes.DELETE_USER:
      return deleteUser(state, action);
    case actionTypes.SEARCH_USER:
      return searchUsers(state, action);
    case actionTypes.USER_DETAILS:
      return UserDetails(state, action);
    default:
      return state;
  }
};

const fetchUsersRequest = (state) => {
  return {
    ...state,
    loading: false,
  };
};
const fetchUsersSuccess = (state, action) => {
  return {
    ...state,
    loading: true,
    users: [...state.users, ...action.payload.users],
    error: "",
  };
};
const fetchUsersFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

const setNationality = (state, action) => {
  return {
    ...state,
    nationality: action.payload,
    search: "",
  };
};

const deleteUser = (state, action) => {
  return {
    ...state,
    users: state.users.filter(
      (deleteUser) => deleteUser.login.uuid !== action.payload
    ),
  };
};

const searchUsers = (state, action) => {
  return {
    ...state,
    search: action.search,
  };
};

const UserDetails = (state, action) => {
  return {
    ...state,
    userId: action.payload,
  };
};

export default usersReducer;
