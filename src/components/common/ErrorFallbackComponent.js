import React from "react";
import { Typography, Row, Button, Col } from "antd";
const { Title } = Typography;

export default function ErrorFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <Row>
      <Col>
        <Title level={4}>Something went wrong</Title>
        {error}
        <Button onClick={resetErrorBoundary}>Click To Try Again...</Button>
      </Col>
    </Row>
  );
}
