import React, { useState, useEffect } from "react";
import AllUsers from "../components/homepage/AllUsers";
import PagesHeader from "../components/common/header/PageHeader";
import { useSelector } from "react-redux";
import {
  filteredUserWithNat,
  filteredUserWithName,
  filteringUserWithNameInNat,
} from "../selectors/filteringUser";
import { fetchMoreUsers } from "../redux/actions/usersAction";
import { Col, Row } from "antd";

export default function HomePage() {
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
      setUsersState({
        users: natAndName,
        scrollEndMessage: `No More Results Found According to the following keywords in following ${nationality} `,
      });
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
    if (usersState.users.length <= 949) {
      fetchMoreUsers();
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
          usersState={usersState}
          users={users}
          hasMore={hasMore}
          nationality={nationality}
          search={search}
        />
      </Col>
    </Row>
  );
}
