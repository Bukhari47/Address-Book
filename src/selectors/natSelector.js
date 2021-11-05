import { createSelector } from "reselect";

export const usersNat = (state) => {
  console.log("Users List...-->", state.users);
  return state.users;
};

// export const natUserSelector = (state) => {
//   return usersNat(state).map((user) => {
//     return user.nat === state.nationality;
//   });
// };

// export const singleUserSelector = (state, props) => {
//   return usersList(state).filter((user) => {
//     return props.match.params.userId === user.login.uuid;
//   });
// };

export const filteredUserWithNat = createSelector(
  (state) => state.users,
  (state) => state.nationality,
  (users, nationality) => {
    return users.filter((user) => {
      return user.nat === nationality;
    });
  }
);
