import React from "react";
import { Typography, Col, Divider } from "antd";
const { Text } = Typography;

export default function UserDetailsRight({ singleUser }) {
  const userLeftLayout = {
    xxl: { span: 12 },
    xl: { span: 12 },
    lg: { span: 12 },
    md: { span: 12 },
    xs: { span: 24 },
    sm: { span: 24 },
  };

  return (
    <Col {...userLeftLayout}>
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
      <Divider />
    </Col>
  );
}
