import React, { useEffect } from "react";
import { getUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../selectors/userSelector";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Row, Col, Divider, Typography } from "antd";
const { Text, Link, Title } = Typography;

const selectedUser = (props) => {
  const users = useSelector((state) => state.users);
  const singleUser = useSelector((state) => filteredSingleUser(state));
  let history = useHistory();
  const userId = props.match.params.userId;
  getUserId(userId);
  useEffect(() => {
    if (users.length === 0) {
      history.push("/");
    }
  });
  return (
    <Row>
      <Divider orientation="center">
        <Title>User Details</Title>
      </Divider>
      <Col span={4}></Col>
      <Col span={16}>
        {singleUser.map((singleUser) => {
          return (
            <>
              {" "}
              <div style={{ textAlign: "center" }}>
                <img
                  src={singleUser.picture.large}
                  alt={singleUser.picture.large}
                  style={{ borderRadius: "50%" }}
                />
                <h1>
                  {singleUser.name.title +
                    " " +
                    singleUser.name.first +
                    " " +
                    singleUser.name.last}
                </h1>
                <Row>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Username : </Text>
                    <code>{singleUser.login.username}</code>
                    <br />
                    <Text strong>Date Of Birth : </Text>
                    <code>{singleUser.dob.date}</code>
                    <br />
                    <Text strong>Current Age : </Text>
                    <code>{singleUser.dob.age}</code>
                    <br />
                    <Text strong>Gender : </Text>
                    <code>{singleUser.gender}</code>
                    <br />

                    <Text strong>Email : </Text>

                    <Link target="_blank">{singleUser.email}</Link>
                    <br />
                    <Text strong>Cell : </Text>
                    <code>{singleUser.cell}</code>
                    <br />
                    <Text strong>Phone : </Text>
                    <code>{singleUser.phone}</code>
                  </Col>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Address : </Text>
                    <code>
                      Street NO# {singleUser.location.street.number}{" "}
                      {singleUser.location.street.name},
                      {singleUser.location.city}
                    </code>
                    <br />
                    <Text strong>City : </Text>
                    <code>{singleUser.location.city}</code>
                    <br />
                    <Text strong>State : </Text>
                    <code>{singleUser.location.state}</code>
                    <br />
                    <Text strong>Country : </Text>
                    <code>{singleUser.location.country}</code>
                    <br />
                    <Text strong>Nationality : </Text>
                    <code>{singleUser.nat}</code>.
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
