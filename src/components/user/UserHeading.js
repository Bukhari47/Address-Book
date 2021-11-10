import React from "react";
import { Row, Divider, Image, Typography, Col } from "antd";
const { Title } = Typography;
function UserHeading({ singleUser }) {
  return (
    <Row>
      <Col span={24}>
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

export default UserHeading;
