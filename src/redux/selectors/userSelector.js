import { createSelector } from "reselect";

export const filteredSingleUser = createSelector(
  (state) => state.users.usersList,
  (state) => state.users.userId,
  (users, userId) => {
    console.log(users, userId);
    return users.filter((user) => {
      return userId === user.login.uuid;
    });
  }
);
