import React from "react";
import { Image, Divider, Row, Col } from "antd";
import PagesHeader from "../common/header/PageHeader";

function UserHeader({ userDetail }) {
  const userTitleLayout = {
    xxl: { span: 12 },
    xl: { span: 12 },
    lg: { span: 12 },
    md: { span: 24 },
    xs: { span: 24 },
    sm: { span: 24 },
  };

  return (
    <Row>
      <Col {...userTitleLayout}>
        <PagesHeader
          title={
            userDetail.name.title +
            " " +
            userDetail.name.first +
            " " +
            userDetail.name.last
          }
        />
      </Col>
      <Col {...userTitleLayout}>
        <Image
          src={userDetail.picture.large}
          alt={userDetail.picture.large}
          className="ImageStyle"
          style={{ borderRadius: "50%" }}
        />
      </Col>
      <Divider />
    </Row>
  );
}

export default UserHeader;
