import React from "react";
import { Divider, Col, Typography } from "antd";

const { Text, Link } = Typography;

function UserDetailsLeft({ userDetail }) {
  const userRightLayout = {
    xxl: { span: 12 },
    xl: { span: 12 },
    lg: { span: 12 },
    md: { span: 24 },
    xs: { span: 24 },
    sm: { span: 24 },
  };
  return (
    <Col {...userRightLayout}>
      <Text strong>Username : </Text>
      <Text italic>{userDetail.login.username}</Text>
      <Divider />
      <Text strong>Date Of Birth : </Text>
      <Text italic>{userDetail.dob.date}</Text>
      <Divider />
      <Text strong>Current Age : </Text>
      <Text italic>{userDetail.dob.age}</Text>
      <Divider />
      <Text strong>Gender : </Text>
      <Text italic>{userDetail.gender}</Text>
      <Divider />

      <Text strong>Email : </Text>

      <Link target="_blank">{userDetail.email}</Link>
      <Divider />
      <Text strong>Cell : </Text>
      <Text italic>{userDetail.cell}</Text>
      <Divider />
    </Col>
  );
}

export default UserDetailsLeft;
