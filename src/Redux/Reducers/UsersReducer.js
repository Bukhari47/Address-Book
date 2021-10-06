import * as actionTypes from "../Actions/actionTypes";
const initialState = {
  loading: false,
  users: [],
  error: "",
  nationality: "",
  search: "",
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
      return fetchMoresrsRequest(state, action);
    case actionTypes.FETCH_MORE_USERS_SUCCESS:
      return fetchMoreUsersSucces(state, action);
    case actionTypes.FETCH_MORE_USERS_FAILURE:
      return fetchMoresrsFailure(state, action);
    case actionTypes.GET_NATIONALITY:
      return fetchWithNationality(state, action);
    case actionTypes.FETCH_WITH_NATIONALITY_REQUEST:
      return fetchUsersWithNationalityRequest(state, action);
    case actionTypes.FETCH_WITH_NATIONALITY_SUCCESS:
      return fetchUsersWithNationalitySuccess(state, action);
    case actionTypes.FETCH_WITH_NATIONALITY_FAILURE:
      return fetchUsersWithNationalityFailure(state, action);
    case actionTypes.FETCH_MORE_WITH_NATIONALITY_REQUEST:
      return fetchMoresrsWithNationalityRequest(state, action);
    case actionTypes.FETCH_MORE_WITH_NATIONALITY_SUCCESS:
      return fetchMoreUsersWithNationalitySucces(state, action);
    case actionTypes.FETCH_MORE_WITH_NATIONALITY_FAILURE:
      return fetchMoresrsWithNationalityFailure(state, action);
    case actionTypes.DELETE_USER:
      return deleteUser(state, action);
    case actionTypes.SEARCH_USER:
      return searchUsers(state, action);
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

const fetchMoresrsRequest = (state) => {
  return {
    ...state,
    // loading: false,
  };
};
const fetchMoreUsersSucces = (state, action) => {
  return {
    ...state,
    // loading: true,
    users: [...state.users, ...action.payload],
    error: "",
  };
};
const fetchMoresrsFailure = (state, action) => {
  return { ...state, loading: false, error: action.payload };
};

const fetchUsersWithNationalityRequest = (state) => {
  return {
    ...state,
    // loading: false,
  };
};
const fetchUsersWithNationalitySuccess = (state, action) => {
  return {
    ...state,
    // loading: true,
    users: action.payload,
    error: "",
  };
};
const fetchUsersWithNationalityFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};
const fetchMoresrsWithNationalityRequest = (state) => {
  return {
    ...state,
    // loading: false,
  };
};
const fetchMoreUsersWithNationalitySucces = (state, action) => {
  console.log("Nat Users Reponse", action.payload);
  return {
    ...state,
    // loading: true,
    users: [...state.users, ...action.payload],
    error: "",
  };
};
const fetchMoresrsWithNationalityFailure = (state, action) => {
  return { ...state, loading: false, error: action.payload };
};
