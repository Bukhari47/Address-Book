import React, { useEffect, useState } from "react";
import { Row, Col, PageHeader, Spin, Card, Avatar } from "antd";
import { MoreOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  deleteUserDetials,
  fetchMoreUsers,
  fetchUser,
  fetchUseresWithNationality,
  fetchMoreUseresWithNationality,
} from "../Redux/Actions/usersAction";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function HomePage() {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const search = useSelector((state) => state.search);
  const nationlity = useSelector((state) => state.nationlity);
  const [hasMore, setHasMore] = useState(true);
  const [message, setMessage] = useState();
  useEffect(() => {
    if (nationlity) {
      fetchUseresWithNationality(nationlity);
    } else {
      fetchUser();
    }
  }, [nationlity]);
  const loadMoreUsers = () => {
    if (users.length <= 999) {
      if (nationlity !== "") {
        console.log("Load More user...", nationlity);
        fetchMoreUseresWithNationality(nationlity);
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
                    <Col span={8} style={{ marginTop: "10px" }}>
                      <Card
                        style={{ width: 400 }}
                        actions={[
                          <DeleteOutlined
                            key="delete"
                            onClick={() => {
                              deleteUserDetials(user.login.uuid);
                            }}
                          />,
                          <Link
                            key={user.login.uuid}
                            to={{
                              pathname: "user/" + user.login.uuid,
                              state: { user },
                            }}
                          >
                            {" "}
                            <MoreOutlined key="edit" />
                          </Link>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src={user.picture.thumbnail} />}
                          title={
                            user.name.title +
                            " " +
                            user.name.first +
                            " " +
                            user.name.last
                          }
                          description={
                            <>
                              <div>
                                <b>Email </b> <code>{user.email}</code>
                              </div>
                              <div>
                                <b>Nationality </b> <span>{user.nat}</span>
                              </div>
                            </>
                          }
                        />
                      </Card>
                    </Col>
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
