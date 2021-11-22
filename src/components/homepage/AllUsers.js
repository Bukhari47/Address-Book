import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography, Row, Spin } from "antd";
import UserCard from "./UserCard";

const { Text } = Typography;

function AllUsers({
  loadMoreUsers,
  users,
  usersState,
  search,
  hasMore,
  nationality,
}) {
  return (
    <InfiniteScroll
      dataLength={users.length}
      hasMore={search ? false : nationality ? false : hasMore}
      className="InfiniteScrollStyle"
      next={loadMoreUsers}
      loader={<Spin />}
      endMessage={<Text strong>{usersState.scrollEndMessage}</Text>}
    >
      <Row gutter={[8, 8]}>
        {usersState.users.map((user) => {
          return <UserCard user={user} key={user.login.uuid} />;
        })}
      </Row>
    </InfiniteScroll>
  );
}

export default AllUsers;
