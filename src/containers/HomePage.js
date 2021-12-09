import React, { useState, useEffect } from "react";
import AllUsers from "../components/homepage/AllUsers";
import PagesHeader from "../components/common/header/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/usersAction";
import { filtertingUsers } from "../redux/selectors/filteringUser";
import { Col, Row } from "antd";

export default function HomePage() {
  const { nationality, search } = useSelector((state) => state);
  const users = useSelector((state) => filtertingUsers(state));
  const dispatch = useDispatch();
  const usersLimit = {
    initialFetch: 100,
    after: 50,
    totalUsers: 999,
  };
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchUsers(usersLimit.initialFetch));
  }, []);

  const loadMoreUsers = () => {
    if (users?.length <= usersLimit.totalUsers) {
      dispatch(fetchUsers(usersLimit.after));
    } else {
      setHasMore(false);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <PagesHeader title={"Address book"} subTitle={"Users List"} />
      </Col>
      <Col span={24}>
        <AllUsers
          loadMoreUsers={loadMoreUsers}
          users={users}
          hasMore={hasMore}
          nationality={nationality}
          search={search}
        />
      </Col>
    </Row>
  );
}
