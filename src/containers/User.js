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
import UserTop from "../components/user/UserTop";
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
