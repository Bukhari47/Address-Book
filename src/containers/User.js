import { Row, Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../redux/selectors/userSelector";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserTop from "../components/user/UserTop";

const selectedUser = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userId = props.match.params.userId;
  const singleUser = useSelector((state) => filteredSingleUser(state));
  useEffect(() => {
    if (users.length === 0) {
      window.location.replace("/");
    }
  });
  dispatch(setUserId(userId));

  return (
    <Row className="center SingelUserPage">
      <Col span={4}></Col>
      <Col span={16}>
        {singleUser?.map((singleUser) => {
          return (
            <>
              <UserTop singleUser={singleUser} />
              <Row>
                <UserDetailsLeft singleUser={singleUser} />
                <UserDetailsRight singleUser={singleUser} />
              </Row>
            </>
          );
        })}
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default selectedUser;
