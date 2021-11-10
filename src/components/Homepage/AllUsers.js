import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "./UserCard";
import { fetchMoreUsers } from "../../redux/actions/usersAction";
import { useSelector } from "react-redux";
import { Typography, Row, Spin } from "antd";
const { Text, Title } = Typography;

import {
  filteredUserWithNat,
  filteredUserWithName,
  filteringUserWithNameInNat,
} from "../../selectors/filteringUser";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackComponent from "../common/ErrorFallbackComponent";
import { fetchUser } from "../../redux/actions/usersAction";

function AllUsers() {
  const nationality = useSelector((state) => state.nationality);
  const users = useSelector((state) => state.users);
  const search = useSelector((state) => state.search);
  const natUsers = useSelector((state) => filteredUserWithNat(state));
  const nameFilter = useSelector((state) => filteredUserWithName(state));
  const natAndName = useSelector((state) => filteringUserWithNameInNat(state));
  const [usersState, setUsersState] = useState({
    users: [],
    scrollEndMessage: "You have seen all users.",
  });

  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (search !== "" && nationality !== "") {
      const users = natAndName;
      setUsersState({
        users: natAndName,
        scrollEndMessage: `No More Results Found According to the following keywords in following ${nationality} `,
      });
      return users;
    } else if (search !== "") {
      setUsersState({
        users: nameFilter,
        scrollEndMessage: `No more users found according to the following keywords`,
      });
    } else if (nationality !== "") {
      setUsersState({
        users: natUsers,
        scrollEndMessage: `No more users from ${nationality} nationality`,
      });
    } else {
      setUsersState({
        users: users,
        scrollEndMessage: "You have seen all users.",
      });
    }
  }, [nationality, search, users]);

  const loadMoreUsers = () => {
    if (usersState.users.length <= 999) {
      fetchMoreUsers();
    } else {
      setHasMore(false);
    }
  };
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
