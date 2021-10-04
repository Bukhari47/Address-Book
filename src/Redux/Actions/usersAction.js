import * as actionTypes from "./actionTypes";
import store from "../reduxStore";
// import fetchUserData from "../Reducers/UsersReducer";

const API = "https://randomuser.me/api";

export const fetchUsersRequest = () => {
  return {
    type: actionTypes.FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: actionTypes.FETCH_USERS_FAILURE,
    payload: error,
  };
};

const deleteUser = (userID) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: userID,
  };
};

const searchUser = (username) => {
  console.log("--> Users Action", username);
  return {
    type: actionTypes.SEARCH_USER,
    search: username,
  };
};

const fetchMoreUsersRequest = () => {
  console.log("More Users Request");
  return {
    type: actionTypes.FETCH_MORE_USERS_REQUEST,
  };
};

const fetchMoreUsersSuccess = (users) => {
  console.log("More Users Success", users);
  return {
    type: actionTypes.FETCH_MORE_USERS_SUCCESS,
    payload: users,
  };
};

const fetchMoreUsersFailure = (error) => {
  console.log("More Users");
  return {
    type: actionTypes.FETCH_MORE_USERS_FAILURE,
    payload: error,
  };
};

const fetchUseresWithNationalityRequest = () => {
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_REQUEST,
  };
};
const fetchUseresWithNationalitySuccess = (users) => {
  console.log("Nationality -->", users);
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_SUCCESS,
    payload: users,
  };
};
const fetchUseresWithNationalityFailure = () => {
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_FAILURE,
  };
};
const fetchMoreUseresWithNationalityRequest = () => {
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_REQUEST,
  };
};
const fetchMoreUseresWithNationalitySuccess = (users) => {
  console.log("Nationality -->", users);
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_SUCCESS,
    payload: users,
  };
};
const fetchMoreUseresWithNationalityFailure = () => {
  return {
    type: actionTypes.FETCH_WITH_NATIONALITY_FAILURE,
  };
};

export async function fetchUser(nationality) {
  try {
    console.log("Fetch Users...", nationality);
    store.dispatch(fetchUsersRequest());
    const response = await fetch(`${API}/?results=50`);
    const UsersDetails = await response.json();
    store.dispatch(fetchUsersSuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchUsersFailure(e.message));
  }
}

export async function fetchMoreUsers(nationality) {
  try {
    console.log(nationality);
    store.dispatch(fetchMoreUsersRequest());
    const response = await fetch(`${API}/?results=50`);
    const UsersDetails = await response.json();
    store.dispatch(fetchMoreUsersSuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchMoreUsersFailure(e.message));
  }
}

export async function fetchUseresWithNationality(nationality) {
  try {
    console.log("Fetch Users With...", nationality);
    store.dispatch(fetchUseresWithNationalityRequest());
    const response = await fetch(`${API}/?results=50&nat=${nationality}`);
    const UsersDetails = await response.json();
    store.dispatch(fetchUseresWithNationalitySuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchUseresWithNationalityFailure(e.message));
  }
}

export async function fetchMoreUseresWithNationality(nationality) {
  try {
    console.log("Nat --", nationality);
    store.dispatch(fetchMoreUseresWithNationalityRequest());
    const response = await fetch(`${API}/?results=50&nat=${nationality}`);
    const UsersDetails = await response.json();
    store.dispatch(fetchMoreUseresWithNationalitySuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchMoreUseresWithNationalityFailure(e.message));
  }
}

export function deleteUserDetials(userID) {
  store.dispatch(deleteUser(userID));
}

const userNationality = (nationality) => {
  return {
    type: actionTypes.GET_NATIONALITY,
    payload: nationality,
  };
};

export function getNationality(nationality) {
  console.log("Getting Nationality ", nationality);
  store.dispatch(userNationality(nationality));
}

export function filterUser(users) {
  console.log("--> User Filter ", users);
  store.dispatch(searchUser(users));
}
