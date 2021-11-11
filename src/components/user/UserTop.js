import React from "react";
import { Image, Divider, Typography, Row, Col } from "antd";

const { Title } = Typography;

function UserTop({ singleUser }) {
  return (
    <Row>
      <Col span={24} style={{ textAlign: "center" }}>
        <Image
          src={singleUser.picture.large}
          alt={singleUser.picture.large}
          style={{ borderRadius: "50%" }}
        />
        <Divider>
          <Title level={2}>
            {singleUser.name.title +
              " " +
              singleUser.name.first +
              " " +
              singleUser.name.last}
          </Title>
        </Divider>
      </Col>
    </Row>
  );
}

export default UserTop;
