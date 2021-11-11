import React, { useEffect } from "react";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Row, Col } from "antd";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserTop from "../components/user/UserTop";

const selectedUser = (props) => {
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const userId = props.match.params.userId;
  const singleUser = useSelector((state) => filteredSingleUser(state));
  useEffect(() => {
    if (users.length === 0) {
      history.push("/");
    }
  });
  getUserId(userId);

  return (
    <Row>
      <Col span={24}>
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
    </Row>
  );
};

export default selectedUser;
