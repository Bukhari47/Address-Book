import React, { useEffect } from "react";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
<<<<<<< HEAD
import { ErrorBoundary } from "react-error-boundary";

import { Row, Col, Divider, Typography, Image } from "antd";
import ErrorFallbackComponent from "../components/common/ErrorFallbackComponent";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserHeading from "../components/user/UserHeading";
const { Text, Link, Title } = Typography;
=======
import { Row, Col } from "antd";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserTop from "../components/user/UserTop";
>>>>>>> feature/feature_branch

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
<<<<<<< HEAD
      <ErrorBoundary
        FallbackComponent={ErrorFallbackComponent}
        onReset={() => {
          setError("");
        }}
      >
        <Text id="ForTesting">{error}</Text>
      </ErrorBoundary>
      <Divider>
        <Title level={2}>User Details</Title>
      </Divider>
      <Col span={24}>
        {singleUser?.map((singleUser) => {
          return (
            <Row key={singleUser.login.uuid} style={{ textAlign: "center" }}>
              <Col span={24}>
                <UserHeading singleUser={singleUser} />
              </Col>
              <Row>
                <Col span={12}>
                  <UserDetailsLeft singleUser={singleUser} />
                </Col>
                <Col span={12}>
                  <UserDetailsRight singleUser={singleUser} />
                </Col>
              </Row>
            </Row>
=======
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
>>>>>>> feature/feature_branch
          );
        })}
      </Col>
    </Row>
  );
};

export default selectedUser;
