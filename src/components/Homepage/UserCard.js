import React from "react";
import { Col, Card, Avatar, Divider, Typography } from "antd";
import { MoreOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteUserDetials } from "../../redux/actions/usersAction";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Text } = Typography;

function UsersCard({ user }) {
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

export default UsersCard;
