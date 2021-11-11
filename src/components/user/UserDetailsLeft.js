import React from "react";
<<<<<<< HEAD
import { Typography, Col, Divider, Row } from "antd";
const { Text, Link } = Typography;

export default function UserDetailsLeft({ singleUser }) {
  return (
    <Row>
=======
import { Divider, Col, Typography } from "antd";

const { Text, Link } = Typography;

function UserDetailsLeft({ singleUser }) {
  return (
    <Col span={12} style={{ textAlign: "left" }}>
>>>>>>> feature/feature_branch
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
<<<<<<< HEAD
    </Row>
  );
}
=======
    </Col>
  );
}

export default UserDetailsLeft;
>>>>>>> feature/feature_branch
