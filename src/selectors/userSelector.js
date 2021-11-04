import _ from "lodash";
import { createSelector } from "reselect";
import { filterUser } from "../redux/actions/usersAction";

const allUser = (state) => state.users;
const singleUser = (state) => state.singleUser;

const filteredUser = (allUser, singleUser) => {
  const selectedUser = _.filter(allUser, (user) =>
    _.contains(user.login.uuid, allUser.login.uuid)
  );
  return selectedUser;
};

export default createSelector(allUser, singleUser, filterUser);
