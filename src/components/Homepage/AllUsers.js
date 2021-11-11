import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "./UserCard";
import { fetchMoreUsers } from "../../redux/actions/usersAction";
import { useSelector } from "react-redux";
import { Typography, Row, Spin } from "antd";
const { Text } = Typography;

import {
  filteredUserWithNat,
  filteredUserWithName,
  filteringUserWithNameInNat,
} from "../../selectors/filteringUser";

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
      style={{ overflow: "none" }}
      next={loadMoreUsers}
      loader={<Spin />}
      endMessage={
        <Text strong style={{ textAlign: "center" }}>
          {usersState.scrollEndMessage}
        </Text>
      }
    >
      <Row gutter={[48, 8]}>
        {usersState.users.map((user) => {
          return (
            <>
              {" "}
              <UserCard user={user} key={user.login.uuid} />
            </>
          );
        })}
      </Row>
    </InfiniteScroll>
  );
}

export default AllUsers;
