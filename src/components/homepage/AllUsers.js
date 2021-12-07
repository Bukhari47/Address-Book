import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Row, Spin, Col } from "antd";
import UserCard from "./UserCard";

const { Text } = Typography;

function AllUsers({ loadMoreUsers, users, search, hasMore, nationality }) {
  const spacesOnLeftRight = {
    xxl: { span: 4 },
    xl: { span: 4 },
    lg: { span: 3 },
    md: { span: 2 },
    xs: { span: 1 },
    sm: { span: 1 },
  };

  const formLayout = {
    xxl: { span: 16 },
    xl: { span: 16 },
    lg: { span: 18 },
    md: { span: 20 },
    xs: { span: 22 },
    sm: { span: 22 },
  };
  return (
    <Row>
      <Col {...spacesOnLeftRight}></Col>
      <Col {...formLayout}>
        <InfiniteScroll
          dataLength={users.length}
          hasMore={search ? false : nationality ? false : hasMore}
          className="InfiniteScrollStyle"
          next={loadMoreUsers}
          loader={<Spin />}
          endMessage={<Text strong>You have seen all users</Text>}
        >
          <Row gutter={[8, 8]}>
            {users.map((user) => {
              return <UserCard user={user} key={user.login.uuid} />;
            })}
          </Row>
        </InfiniteScroll>
      </Col>
      <Col {...spacesOnLeftRight}></Col>
    </Row>
  );
}

export default AllUsers;
