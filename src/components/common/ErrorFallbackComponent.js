import React from "react";
import { Typography, Row, Button, Col } from "antd";
const { Title, Text } = Typography;

export default function ErrorFallbackComponent({ error, resetErrorBoundary }) {
  console.log("object");
  return (
    <Row>
      <Col>
        <Title level={4}>Something went wrong</Title>
        <Button onClick={resetErrorBoundary}>Click To Try Again... </Button>
      </Col>
    </Row>
  );
}
