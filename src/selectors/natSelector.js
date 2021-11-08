import { createSelector } from "reselect";

export const usersNat = (state) => {
  return state.users;
};

export const filteredUserWithNat = createSelector(
  (state) => state.users,
  (state) => state.nationality,
  (users, nationality) => {
    return users.filter((user) => {
      return user.nat === nationality;
    });
  }
);
