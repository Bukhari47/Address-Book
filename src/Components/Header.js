import React from "react";
import { Layout, Menu } from "antd";
import { filterUser } from "../Redux/Actions/usersAction";
import { Link } from "react-router-dom";
const { Header } = Layout;
function AppHeader() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
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
