import * as actionTypes from "./actionTypes";
import axios from "axios";

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
    payload: {
      users: users.slice(0, 50),
      preLoadUsers: users.slice(50, 100),
    },
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

const mergePreLoadedUsers = (users) => {
  return {
    type: actionTypes.FETCH_MORE_USERS_SUCCESS,
    payload: users,
  };
};

const preLoadUsersRequest = () => {
  return {
    type: actionTypes.LOAD_IN_STATE_REQUEST,
  };
};

const preLoadUsersSuccess = (preLoadUsers) => {
  return {
    type: actionTypes.LOAD_IN_STATE_SUCCESS,
    payload: preLoadUsers,
  };
};
const preLoadUsersFailure = (error) => {
  return {
    type: actionTypes.LOAD_IN_STATE_FAILURE,
    payload: error,
  };
};
const userId = (UUID) => {
  return {
    type: actionTypes.SINGLE_USER_PAGE,
    payload: UUID,
  };
};

const userNationality = (nationality) => {
  return {
    type: actionTypes.SET_NATIONALITY,
    payload: nationality,
  };
};

export const fetchUsers = (usersList) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(`${API}/?results=${usersList}`)
      .then((response) => {
        const users = response.data.results;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};

export const loadInState = (nextUsers) => {
  return (dispatch) => {
    dispatch(preLoadUsersRequest());
    axios
      .get(`${API}/?results=${nextUsers}`)
      .then((response) => {
        const users = response.data.results;
        dispatch(preLoadUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(preLoadUsersFailure(error.message));
      });
  };
};

export const fetchMoreUsers = (nextUsers) => {
  return (dispatch) => {
    dispatch(mergePreLoadedUsers(store.getState().preLoadUsers));
    dispatch(loadInState(nextUsers));
  };
};

export const deleteUserDetials = (userID) => {
  return (dispatch) => {
    dispatch(deleteUser(userID));
  };
};

export const setUserId = (UUID) => {
  return (dispatch) => {
    dispatch(userId(UUID));
  };
};

export const setNationality = (nationality) => {
  return (dispatch) => {
    dispatch(userNationality(nationality));
  };
};

export const filterUser = (users) => {
  return (dispatch) => {
    dispatch(searchUser(users));
  };
};
