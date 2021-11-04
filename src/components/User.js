import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const selectedUser = createSelector(
  (state) => state.users
  // (users) => users.filter((user) => user.login.uuid === userID)
);
export default function User(props) {
  // const userID = props.location.state.user.login.uuid;
  console.log("Selected User...", selectedUser);
  return <div></div>;
}
