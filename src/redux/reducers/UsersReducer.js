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

const fetchUserData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return fetchUsersRequest(state, action);
    case actionTypes.FETCH_USERS_SUCCESS:
      return fetchUsersSuccess(state, action);
    case actionTypes.FETCH_USERS_FAILURE:
      return fetchUsersFailure(state, action);
    case actionTypes.FETCH_MORE_USERS:
      return fetchMoreUsers(state, action);
    case actionTypes.FETCH_MORE_USERS_REQUEST:
      return fetchMoreUsersRequest(state, action);
    case actionTypes.FETCH_MORE_USERS_SUCCESS:
      return fetchMoreUsersSucces(state, action);
    case actionTypes.FETCH_MORE_USERS_FAILURE:
      return fetchMoreUsersFailure(state, action);
    case actionTypes.GET_NATIONALITY:
      return fetchWithNationality(state, action);
    case actionTypes.DELETE_USER:
      return deleteUser(state, action);
    case actionTypes.SEARCH_USER:
      return searchUsers(state, action);
    case actionTypes.SINGLE_USER_PAGE:
      return singleUserPage(state, action);
    case actionTypes.LOAD_IN_STATE_REQUEST:
      return loadingInStateRequest(state, action);
    case actionTypes.LOAD_IN_STATE_SUCCESS:
      return loadingInStateSuccess(state, action);
    case actionTypes.LOAD_IN_STATE_FAILURE:
      return loadingInStateFailure(state, action);
    default:
      return state;
  }
};
export default fetchUserData;

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
    users: action.payload,
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
const fetchMoreUsers = (state, action) => {
  return {
    ...state,
    users: [...state.users, ...action.payload],
    loading: false,
  };
};
const fetchWithNationality = (state, action) => {
  return {
    ...state,
    nationality: action.payload,
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

const fetchMoreUsersRequest = (state) => {
  return {
    ...state,
  };
};
const fetchMoreUsersSucces = (state, action) => {
  return {
    ...state,
    users: [...state.users, ...action.payload],
    error: "",
  };
};
const fetchMoreUsersFailure = (state, action) => {
  return { ...state, loading: false, error: action.payload };
};

const singleUserPage = (state, action) => {
  return {
    ...state,
    userId: action.payload,
  };
};

const loadingInStateRequest = (state) => {
  return {
    ...state,
  };
};
const loadingInStateSuccess = (state, action) => {
  console.log("Loaded IN State");
  return {
    ...state,
    preLoadUsers: action.payload,
  };
};
const loadingInStateFailure = (state, action) => {
  return {
    ...state,
    error: action.payload,
  };
};
