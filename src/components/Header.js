import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { filterUser } from "../redux/actions/usersAction";
import { Link } from "react-router-dom";
// import { getNationality } from "../Redux/Actions/usersAction";
// import { fetchUser } from "../Redux/Actions/usersAction";
import { useSelector } from "react-redux";
// const { Option } = Select;
const { Header } = Layout;
function AppHeader() {
  const nationality = useSelector((state) => state.nationality);
  // const [userNationality, setUserNationality] = useState("");

  // useEffect(() => {
  //   fetchUser();
  // });  useEffect(() => {
  // fetchUser();
  // });

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key={"Home"}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={"Country"}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>

          <Menu.Item disabled="true">
            <input
              type="text"
              placeholder="Search"
              style={{
                height: "40px",
                marginTop: "10px",
                borderRadius: "20px",
                border: "0xp solid",
                color: "black",
              }}
              onChange={(e) => {
                filterUser(e.target.value);
              }}
            />
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default AppHeader;
