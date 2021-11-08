import React from "react";
import { Typography, Row, Col } from "antd";

const { Text } = Typography;

function Page404Error() {
  return (
    <Row>
      <Col>
        <Text strong>Opps...!!! Page not found...!!!</Text>
      </Col>
    </Row>
  );
}

export default Page404Error;
