import { createSelector } from "reselect";

export const filtertingUsers = createSelector(
  (state) => state.users,
  (state) => state.nationality,
  (state) => state.search,
  (users, nationality, search) => {
    let usersList = users.length <= 950 ? users.slice(0, -50) : users;
    let filteredUsers = usersList;
    if (search !== "") {
      filteredUsers = usersList.filter((user) => {
        return (
          user.name.first.toLowerCase().includes(search.toLowerCase()) ||
          user.name.last.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    if (nationality !== "") {
      filteredUsers = filteredUsers.filter((user) => {
        return user.nat === nationality;
      });
    }
    return filteredUsers;
  }
);
