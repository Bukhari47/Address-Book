import { createSelector } from "reselect";

export const usersName = (state) => {
  return state.users;
};

export const filteredUserWithName = createSelector(
  (state) => state.users,
  (state) => state.search,
  (users, name) => {
    return users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(name.toLowerCase()) ||
        user.name.last.toLowerCase().includes(name.toLowerCase())
      );
    });
  }
);
