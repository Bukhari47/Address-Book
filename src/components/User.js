import React from "react";
import { connect } from "react-redux";
import { usersList, filteredSingleUser } from "../selectors/userSelector";
import { Row, Col, Divider, Typography } from "antd";
import { getUserId } from "../redux/actions/usersAction";
const { Text, Link } = Typography;
const selectedUser = (props) => {
  getUserId(props.match.params.userId);
  const user = props.singleUser;
  console.log(
    "User Details",
    user.map((user) => user.login.uuid)
  );
  return (
    <Row>
      <Divider orientation="center">
        <h1>User Details</h1>
      </Divider>
      <Col span={4}></Col>
      <Col span={16}>
        {user.map((user) => {
          return (
            <>
              {" "}
              <div style={{ textAlign: "center" }}>
                <img
                  src={user.picture.large}
                  alt={user.picture.large}
                  style={{ borderRadius: "50%" }}
                />
                <h1>
                  {user.name.title +
                    " " +
                    user.name.first +
                    " " +
                    user.name.last}
                </h1>
                <Row>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Username : </Text>
                    <code>{user.login.username}</code>
                    <br />
                    <Text strong>Date Of Birth : </Text>
                    <code>{user.dob.date}</code>
                    <br />
                    <Text strong>Current Age : </Text>
                    <code>{user.dob.age}</code>
                    <br />
                    <Text strong>Gender : </Text>
                    <code>{user.gender}</code>
                    <br />

                    <Text strong>Email : </Text>

                    <Link target="_blank">{user.email}</Link>
                    <br />
                    <Text strong>Cell : </Text>
                    <code>{user.cell}</code>
                    <br />
                    <Text strong>Phone : </Text>
                    <code>{user.phone}</code>
                  </Col>
                  <Col span={12} style={{ textAlign: "left" }}>
                    <Text strong>Address : </Text>
                    <code>
                      Street NO# {user.location.street.number}{" "}
                      {user.location.street.name},{user.location.city}
                    </code>
                    <br />
                    <Text strong>City : </Text>
                    <code>{user.location.city}</code>
                    <br />
                    <Text strong>State : </Text>
                    <code>{user.location.state}</code>
                    <br />
                    <Text strong>Country : </Text>
                    <code>{user.location.country}</code>
                    <br />
                    <Text strong>Nationality : </Text>
                    <code>{user.nat}</code>.
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

function mapStateToProps(state) {
  const user = filteredSingleUser(state);
  console.log(user);
  return {
    users: usersList(state),
    singleUser: filteredSingleUser(state),
  };
}
export default connect(mapStateToProps)(selectedUser);
