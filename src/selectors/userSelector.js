import { createSelector } from "reselect";

export const filteredSingleUser = createSelector(
  (state) => state.users,
  (state) => state.userId,
  (users, userId) => {
    return users.filter((user) => {
      return userId === user.login.uuid;
    });
  }
);
