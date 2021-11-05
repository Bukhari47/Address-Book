import { createSelector } from "reselect";

export const usersList = (state) => {
  // console.log("Users List...-->", state.users);
  return state.users;
};
// export const singleUserSelector = (state, props) => {
//   return usersList(state).filter((user) => {
//     return props.match.params.userId === user.login.uuid;
//   });
// };

export const filteredSingleUser = createSelector(
  (state) => state.users,
  (state) => state.userId,
  (users, userId) => {
    return users.filter((user) => {
      return userId === user.login.uuid;
    });
  }
);
