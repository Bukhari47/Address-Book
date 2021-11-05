import React from "react";
import { Col, Card, Avatar } from "antd";
import { MoreOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteUserDetials } from "../redux/actions/usersAction";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
// import { usersNat, filteredUserWithNat } from "../selectors/natSelector";
const { Meta } = Card;

function UsersCard({ user }) {
  const nationality = useSelector((state) => state.nationality);
  // const user = props.natUsers;
  // console.log("props", user);

  if (nationality === "" || nationality === user.nat) {
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
  } else {
    return <></>;
  }
}

// function mapStateToProps(state) {
// console.log("State Nat -->" + state.nationality);
// const natUserSelector = (state) => {
//   return usersNat(state).map((user) => {
//     return user.nat === state.nationality;
//   });
// };

// console.log("object -->", natUserSelector(state));

//   return {
//     users: usersNat(state),
//     natUsers: filteredUserWithNat(state),
//   };
// }

export default UsersCard;
