import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersCard from "./UsersCard";
import { fetchMoreUsers } from "../redux/actions/usersAction";
import { useSelector } from "react-redux";
import { Row, Spin } from "antd";

export default function AllUsers() {
  const search = useSelector((state) => state.search);
  const nationality = useSelector((state) => state.nationality);
  const [hasMore, setHasMore] = useState(true);
  const users = useSelector((state) =>
    state.users.filter((user) => {
      if (search === "") {
        return {
          user,
        };
      } else if (
        user.name.first.toLowerCase().includes(search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase())
      ) {
        return user;
      } else {
        return;
      }
    })
  );
  const scrollEndMessage = search
    ? "No More Results Found According to this name"
    : nationality
    ? `No more users from ${nationality} nationality`
    : "You have seen all users.";

  const loadMoreUsers = () => {
    if (users.length <= 999) {
      fetchMoreUsers();
      console.log(
        "Fetching Users <-- Scroll End Message -->",
        scrollEndMessage
      );
    } else {
      setHasMore(false);
      console.log(
        "Has More False <-- Scroll End Message -->",
        scrollEndMessage
      );
    }
  };
  console.log("ALL Users Page...");
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
