import React from "react";
<<<<<<< HEAD
import { Typography, Col, Divider, Row } from "antd";
const { Text, Link } = Typography;

export default function UserDetailsRight({ singleUser }) {
  return (
    <Row>
=======
import { Divider, Col, Typography } from "antd";

const { Text } = Typography;

function UserDetailsRight({ singleUser }) {
  return (
    <Col span={12} style={{ textAlign: "left" }}>
>>>>>>> feature/feature_branch
      <Text strong>Address : </Text>
      <Text italic>
        Street NO# {singleUser.location.street.number}{" "}
        {singleUser.location.street.name},{singleUser.location.city}
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
<<<<<<< HEAD
    </Row>
  );
}
=======
    </Col>
  );
}

export default UserDetailsRight;
>>>>>>> feature/feature_branch
