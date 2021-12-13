import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Row, Spin, Col } from "antd";
import UserCard from "./UserCard";

const { Text } = Typography;

function AllUsers({ loadMoreUsers, users, search, hasMore, nationality }) {
  const userCardLayout = {
    xxl: { span: 20 },
    xl: { span: 20 },
    lg: { span: 20 },
    md: { span: 20 },
    xs: { span: 22 },
    sm: { span: 22 },
  };
  return (
    <Row justify="center">
      <Col {...userCardLayout}>
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
    </Row>
  );
}

export default AllUsers;
