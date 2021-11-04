import _ from "lodash";
import { createSelector } from "reselect";
import { useLocation } from "react-router";

const allUser = (state) => state.users;
const singleUser = (state) => state.singleUser;

const filteredUser = (allUser, singleUser) => {
  const selectedUser = _.map(allUser, (user) =>
    _.filter(singleUser === user.login.uuid)
  );
  return selectedUser;
};

export default createSelector(allUser, singleUser, filteredUser);
