import React, { useEffect } from "react";
import User from "./User";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useHistory } from "react-router-dom";
import { useSelector, Provider } from "react-redux";
import renderer from "react-test-renderer";
import store from "../redux/reduxStore";
it("Should Display the user details", (props) => {
  const users = useSelector((state) => state.users);
  const singleUser = useSelector((state) => filteredSingleUser(state));
  let history = useHistory();
  console.log(props);
  const userId = props.match.params.userId;
  getUserId(userId);
  const tree = renderer.create(
    <Provider store={store}>
      <User />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
