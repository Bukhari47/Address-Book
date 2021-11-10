import React, { useEffect, useState } from "react";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import { Row, Col, Divider, Typography, Image } from "antd";
import ErrorFallbackComponent from "../components/common/ErrorFallbackComponent";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserHeading from "../components/user/UserHeading";
const { Text, Link, Title } = Typography;

const selectedUser = (props) => {
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const userId = props.match.params.userId;
  const singleUser = useSelector((state) => filteredSingleUser(state));
  useEffect(() => {
    if (users.length === 0) {
      history.push("/");
    }
    console.log("object", error);
  }, [error]);
  const [error, setError] = useState({});
  getUserId(userId);

  return (
    <Row>
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
          );
        })}
      </Col>
    </Row>
  );
};

export default selectedUser;
