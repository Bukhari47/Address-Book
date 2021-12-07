import React from "react";
import { Layout, Input, Menu } from "antd";
import { filterUser } from "../../../redux/actions/usersAction";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

function AppHeader() {
  const dispatch = useDispatch();
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

        <Menu.Item key={"Seacrh"} disabled>
          <Input
            size="large"
            placeholder="search"
            value={search}
            onChange={(e) => {
              dispatch(filterUser(e.target.value));
            }}
            prefix={<UserOutlined />}
          />
        </Menu.Item>
      </Menu>
    </Header>
  );
}
export default AppHeader;
