import { createSelector } from "reselect";

export const filteredUserWithNat = createSelector(
  (state) => state.users,
  (state) => state.nationality,
  (users, nationality) => {
    return users.filter((user) => {
      return user.nat === nationality;
    });
  }
);
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

export const filteringUserWithNameInNat = createSelector(
  (state) => state.users,
  (state) => state.nationality,
  (state) => state.search,
  (users, nationality, search) => {
    return users.filter((user) => {
      return (
        user.nat === nationality &&
        (user.name.first.toLowerCase().includes(search.toLowerCase()) ||
          user.name.last.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }
);
