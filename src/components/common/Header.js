import React from "react";
import { Layout, Menu } from "antd";
import { filterUser } from "../../redux/actions/usersAction";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header } = Layout;
function AppHeader() {
  const search = useSelector((state) => state.search);

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key={"Home"}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={"Country"}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>

        <Menu.Item key={"Seacrh"} disabled="true">
          <input
            type="text"
            value={search}
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
  );
}
export default AppHeader;
