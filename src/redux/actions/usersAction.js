import * as actionTypes from "./actionTypes";
import axios from "axios";

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
      users,
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

const userId = (UUID) => {
  return {
    type: actionTypes.USER_DETAILS,
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
