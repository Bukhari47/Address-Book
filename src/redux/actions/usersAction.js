import * as actionTypes from "./actionTypes";
import store from "../reduxStore";

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
  return {
    type: actionTypes.SEARCH_USER,
    search: username,
  };
};

const fetchMoreUsersRequest = () => {
  return {
    type: actionTypes.FETCH_MORE_USERS_REQUEST,
  };
};

const fetchMoreUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_MORE_USERS_SUCCESS,
    payload: users,
  };
};

const fetchMoreUsersFailure = (error) => {
  return {
    type: actionTypes.FETCH_MORE_USERS_FAILURE,
    payload: error,
  };
};

export async function fetchUser() {
  try {
    store.dispatch(fetchUsersRequest());
    const response = await fetch(`${API}/?results=100`);
    const UsersDetails = await response.json();
    store.dispatch(fetchUsersSuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchUsersFailure(e.message));
  }
}

export async function fetchMoreUsers() {
  try {
    store.dispatch(fetchMoreUsersRequest());
    const response = await fetch(`${API}/?results=50`);
    const UsersDetails = await response.json();
    store.dispatch(fetchMoreUsersSuccess(UsersDetails.results));
  } catch (e) {
    store.dispatch(fetchMoreUsersFailure(e.message));
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

export function getUserId(UUID) {
  store.dispatch(userId(UUID));
}

const userId = (UUID) => {
  return {
    type: actionTypes.SINGLE_USER_PAGE,
    payload: UUID,
  };
};

export function getNationality(nationality) {
  store.dispatch(userNationality(nationality));
}

export function filterUser(users) {
  console.log("Seacrh", users);
  store.dispatch(searchUser(users));
}

fetchUser();
