import React from "react";
import { Typography, Col, Divider } from "antd";
const { Text } = Typography;

export default function UserDetailsRight({ userDetail }) {
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
        Street NO# {userDetail.location.street.number}{" "}
        {userDetail.location.street.name},{userDetail.location.city}
      </Text>
      <Divider />
      <Text strong>City : </Text>
      <Text italic>{userDetail.location.city}</Text>
      <Divider />
      <Text strong>State : </Text>
      <Text italic>{userDetail.location.state}</Text>
      <Divider />
      <Text strong>Country : </Text>
      <Text italic>{userDetail.location.country}</Text>
      <Divider />
      <Text strong>Nationality : </Text>
      <Text italic>{userDetail.nat}</Text>.
      <Divider />
      <Text strong>Phone : </Text>
      <Text italic>{userDetail.phone}</Text>
      <Divider />
    </Col>
  );
}
