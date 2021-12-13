import { createSelector } from "reselect";

export const filtertingUsers = createSelector(
  (state) => state.users.usersList,
  (state) => state.users.nationality,
  (state) => state.users.search,
  (users, nationality, search) => {
    let usersList = users.length <= 950 ? users.slice(0, -50) : users;
    let filteredUsers = usersList;
    if (search !== "") {
      console.log("search", search);
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
