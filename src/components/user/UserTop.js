import React from "react";
import { Image, Divider, Row, Col } from "antd";
import PagesHeader from "../common/PageHeader";

function UserTop({ singleUser }) {
  return (
    <Row>
      <Col span={12}>
        <PagesHeader
          title={
            singleUser.name.title +
            " " +
            singleUser.name.first +
            " " +
            singleUser.name.last
          }
        />
      </Col>
      <Col span={12}>
        <Image
          src={singleUser.picture.large}
          alt={singleUser.picture.large}
          style={{ borderRadius: "50%" }}
        />
      </Col>
      <Divider />
    </Row>
  );
}

export default UserTop;
