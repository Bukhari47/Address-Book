import { Row, Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserId } from "../redux/actions/usersAction";
import { filteredSingleUser } from "../redux/selectors/userSelector";
import UserDetailsLeft from "../components/user/UserDetailsLeft";
import UserDetailsRight from "../components/user/UserDetailsRight";
import UserHeader from "../components/user/UserHeader";

const selectedUser = (props) => {
  const dispatch = useDispatch();
  const userId = props.match.params.userId;
  const userDetails = useSelector((state) => filteredSingleUser(state));
  useEffect(() => {
    dispatch(setUserId(userId));
  }, []);

  return (
    <Row justify="center" className="center SingelUserPage">
      <Col span={8}>
        {userDetails?.map((userDetail) => {
          return (
            <>
              <UserHeader userDetail={userDetail} />
              <Row>
                <UserDetailsLeft userDetail={userDetail} />
                <UserDetailsRight userDetail={userDetail} />
              </Row>
            </>
          );
        })}
      </Col>
    </Row>
  );
};

export default selectedUser;
