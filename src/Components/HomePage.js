import React, { useState } from "react";
import { Row, PageHeader, Spin } from "antd";
import {
  fetchMoreUsers,
  fetchMoreUsersWithNationality,
} from "../Redux/Actions/usersAction";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersCard from "./UsersCard";

export default function HomePage() {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const search = useSelector((state) => state.search);
  const nationality = useSelector((state) => state.nationality);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreUsers = () => {
    if (users.length <= 999) {
      if (nationality) {
        console.log("Load More user...", nationality);
        fetchMoreUsersWithNationality(nationality);
      } else {
        console.log("Load More user...");
        fetchMoreUsers();
      }
    } else {
      setHasMore(false);
    }
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Address Book"
        subTitle="All Users"
      />
      {loading ? (
        <InfiniteScroll
          dataLength={users.length}
          hasMore={hasMore}
          next={loadMoreUsers}
          loader={<Spin />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row gutter={16}>
            {users
              .filter((user) => {
                if (search === "") {
                  return {
                    user,
                  };
                } else if (
                  user.name.first
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  user.name.last.toLowerCase().includes(search.toLowerCase())
                ) {
                  return user;
                } else {
                  return;
                }
              })
              .map((user) => {
                return (
                  <>
                    <UsersCard user={user} key={user.login.uuid} />
                  </>
                );
              })}
          </Row>
          <b style={{ textAlign: "center" }}>ALL Results Found</b>
        </InfiniteScroll>
      ) : (
        <Spin />
      )}
    </>
  );
}
