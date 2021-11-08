import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersCard from "./UsersCard";
import { fetchMoreUsers } from "../redux/actions/usersAction";
import { connect, useSelector } from "react-redux";
import { Row, Spin } from "antd";

import { usersNat, filteredUserWithNat } from "../selectors/natSelector";
import { usersName, filteredUserWithName } from "../selectors/nameSelector";

function AllUsers(props) {
  const nationality = useSelector((state) => state.nationality);
  const search = useSelector((state) => state.search);

  const users = nationality
    ? props.natUsers
    : props.natUsersList
    ? props.nameFiltered
    : props.usersNameList;
  const [hasMore, setHasMore] = useState(true);

  const scrollEndMessage = search
    ? "No More Results Found According to this name"
    : nationality
    ? `No more users from ${nationality} nationality`
    : "You have seen all users.";

  const loadMoreUsers = () => {
    if (users.length <= 999) {
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
      loader={
        <p style={{ textAlign: "center" }}>
          <Spin />
        </p>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>{scrollEndMessage}</b>
        </p>
      }
    >
      <Row gutter={16}>
        {users.map((user) => {
          return <UsersCard user={user} key={user.login.uuid} />;
        })}
      </Row>
    </InfiniteScroll>
  );
}

function mapStateToProps(state) {
  return {
    natUsersList: usersNat(state),
    natUsers: filteredUserWithNat(state),
    usersNameList: usersName(state),
    nameFiltered: filteredUserWithName(state),
  };
}
export default connect(mapStateToProps)(AllUsers);
