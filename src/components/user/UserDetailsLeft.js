import React from "react";
import { Divider, Col, Typography } from "antd";

const { Text, Link } = Typography;

function UserDetailsLeft({ singleUser }) {
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
      <Divider />
    </Col>
  );
}

export default UserDetailsLeft;
