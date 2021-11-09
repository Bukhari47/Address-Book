import React, { useEffect } from "react";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Row, Col, Divider, Typography, Image } from "antd";
// import ErrorBoundary from "../components/ErrorBoundary";
const { Text, Link, Title } = Typography;

const selectedUser = (props) => {
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const singleUser = useSelector((state) => filteredSingleUser(state));
  const userId = props.match.params.userId;
  getUserId(userId);
  useEffect(() => {
    if (users.length === 0) {
      history.push("/");
    }
  });
  return (
    <Row>
      <Divider>
        <Title level={2}>User Details</Title>
      </Divider>
      <Col span={4}></Col>
      <Col span={16}>
        {singleUser.map((singleUser) => {
          return (
            <>
              {" "}
              <div style={{ textAlign: "center" }}>
                <Image
                  src={singleUser.picture.large}
                  alt={singleUser.picture.large}
                  style={{ borderRadius: "50%" }}
                />
                <Divider>
                  <Title level={2}>
                    {singleUser.name.title +
                      " " +
                      singleUser.name.first +
                      " " +
                      singleUser.name.last}
                  </Title>
                </Divider>
                <Row>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Username : </Text>
                    <Text italic>{singleUser.login.username}</Text>
                    <Divider />
                    <Text strong>Date Of Birth : </Text>
                    <Text italic>{singleUser.dob.date}</Text>
                    <Divider />
                    <Text strong>Current Age : </Text>
                    <Text italic>{singleUser.dob.age}</Text>
                    <Divider />
                    <Text strong>Gender : </Text>
                    <Text italic>{singleUser.gender}</Text>
                    <Divider />

                    <Text strong>Email : </Text>

                    <Link target="_blank">{singleUser.email}</Link>
                    <Divider />
                    <Text strong>Cell : </Text>
                    <Text italic>{singleUser.cell}</Text>
                  </Col>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Address : </Text>
                    <Text italic>
                      Street NO# {singleUser.location.street.number}{" "}
                      {singleUser.location.street.name},
                      {singleUser.location.city}
                    </Text>
                    <Divider />
                    <Text strong>City : </Text>
                    <Text italic>{singleUser.location.city}</Text>
                    <Divider />
                    <Text strong>State : </Text>
                    <Text italic>{singleUser.location.state}</Text>
                    <Divider />
                    <Text strong>Country : </Text>
                    <Text italic>{singleUser.location.country}</Text>
                    <Divider />
                    <Text strong>Nationality : </Text>
                    <Text italic>{singleUser.nat}</Text>.
                    <Divider />
                    <Text strong>Phone : </Text>
                    <Text italic>{singleUser.phone}</Text>
                  </Col>
                </Row>
              </div>
            </>
          );
        })}
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default selectedUser;
