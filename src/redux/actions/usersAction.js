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
  // console.log("--> Users Action", username);
  return {
    type: actionTypes.SEARCH_USER,
    search: username,
  };
};

const fetchMoreUsersRequest = () => {
  // console.log("More Users Request");
  return {
    type: actionTypes.FETCH_MORE_USERS_REQUEST,
  };
};

const fetchMoreUsersSuccess = (users) => {
  // console.log("More Users Success", users);
  return {
    type: actionTypes.FETCH_MORE_USERS_SUCCESS,
    payload: users,
  };
};

const fetchMoreUsersFailure = (error) => {
  // console.log("More Users");
  return {
    type: actionTypes.FETCH_MORE_USERS_FAILURE,
    payload: error,
  };
};

// const fetchUsersWithNationalityRequest = () => {
//   return {
//     type: actionTypes.FETCH_WITH_NATIONALITY_REQUEST,
//   };
// };
// const fetchUsersWithNationalitySuccess = (users) => {
//   console.log("Nationality -->", users);
//   return {
//     type: actionTypes.FETCH_WITH_NATIONALITY_SUCCESS,
//     payload: users,
//   };
// };
// const fetchUsersWithNationalityFailure = () => {
//   return {
//     type: actionTypes.FETCH_WITH_NATIONALITY_FAILURE,
//   };
// };
// const fetchMoreUsersWithNationalityRequest = () => {
//   return {
//     type: actionTypes.FETCH_MORE_WITH_NATIONALITY_REQUEST,
//   };
// };
// const fetchMoreUsersWithNationalitySuccess = (users) => {
//   console.log("Nationality -->", users);
//   return {
//     type: actionTypes.FETCH_MORE_WITH_NATIONALITY_SUCCESS,
//     payload: users,
//   };
// };
// const fetchMoreUsersWithNationalityFailure = () => {
//   return {
//     type: actionTypes.FETCH_MORE_WITH_NATIONALITY_FAILURE,
//   };
// };

export async function fetchUser() {
  try {
    store.dispatch(fetchUsersRequest());
    const response = await fetch(`${API}/?results=50`);
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

// export async function fetchUsersWithNationality(nationality) {
// try {
// console.log("Fetch Users With...", nationality);
// store.dispatch(fetchUsersWithNationalityRequest());
//   const response = await fetch(`${API}/?results=50&nat=${nationality}`);
//   const UsersDetails = await response.json();
//   store.dispatch(fetchUsersWithNationalitySuccess(UsersDetails.results));
// } catch (e) {
//   store.dispatch(fetchUsersWithNationalityFailure(e.message));
// }
// }

// export async function fetchMoreUsersWithNationality(nationality) {
//   try {
//     console.log("Nat --", nationality);
//     store.dispatch(fetchMoreUsersWithNationalityRequest());
//     const response = await fetch(`${API}/?results=50&nat=${nationality}`);
//     const UsersDetails = await response.json();
//     store.dispatch(fetchMoreUsersWithNationalitySuccess(UsersDetails.results));
//   } catch (e) {
//     store.dispatch(fetchMoreUsersWithNationalityFailure(e.message));
//   }
// }

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
  // console.log("State and Actions... ", userId);
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
