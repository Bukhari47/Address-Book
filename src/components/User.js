import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { useLocation } from "react-router-dom";
import singleUser from "../selectors/userSelector";

const selectedUser = (props) => {
  console.log(props);
  return <div></div>;
};

// const selectedUser = createSelector(users, (users) =>
//   users.filter((user) => user === location.state.user.login.user)
// );

// function User({ users }) {
//   const location = useLocation();
//   console.log("users...!", selectedUser, users);
//   return <div></div>;
// }
function mapStateToProps(state) {
  // console.log("object", state.users);
  return { users: singleUser(state.users) };
}
export default connect(mapStateToProps)(selectedUser);
