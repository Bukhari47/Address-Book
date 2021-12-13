import React from "react";
import { Col, Card, Avatar, Divider, Typography } from "antd";
import { MoreOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteUser } from "../../redux/slice/userSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const { Meta } = Card;
const { Text } = Typography;

function UserCard({ user }) {
  const usersCard = {
    xxl: { span: 8 },
    xl: { span: 8 },
    lg: { span: 12 },
    md: { span: 12 },
    xs: { span: 24 },
    sm: { span: 24 },
  };

  const dispatch = useDispatch();
  return (
    <>
      <Col {...usersCard}>
        <Card
          className="UserCardStyle"
          actions={[
            <DeleteOutlined
              key="delete"
              onClick={() => {
                dispatch(deleteUser(user.login.uuid));
              }}
            />,
            <Link
              key={user.login.uuid}
              to={{
                pathname: "user/" + user.login.uuid,
              }}
            >
              <MoreOutlined key="edit" />
            </Link>,
          ]}
        >
          <Meta
            avatar={<Avatar src={user.picture.thumbnail} />}
            title={
              user.name.title + " " + user.name.first + " " + user.name.last
            }
            description={
              <>
                <Divider />
                <Text strong>Email : </Text>
                <Text italic>{user.email}</Text>
                <Divider />
                <Text strong>Nationality : </Text>
                <Text italic>{user.nat}</Text>
              </>
            }
          />
        </Card>
      </Col>
    </>
  );
}

export default UserCard;
