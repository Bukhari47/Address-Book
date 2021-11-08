import { createSelector } from "reselect";

export const usersName = (state) => {
  //   console.log("Users List...-->", state.users);
  return state.users;
};

// export const natUserSelector = (state) => {
//   return usersNat(state).map((user) => {
//     return user.nat === state.nationality;
//   });
// };

// export const filteredUserWithName = (state) => {
//   console.log("State -->", state);
//   return usersName(state).filter((user) => {
//     return user.name.first.toLowerCase().includes(state.search.toLowerCase());
//   });
// };

export const filteredUserWithName = createSelector(
  (state) => state.users,
  (state) => state.search,
  (users, name) => {
    console.log("List", users, name);
    return users.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(name.toLowerCase()) ||
        user.name.last.toLowerCase().includes(name.toLowerCase())
      );
    });
  }
);
