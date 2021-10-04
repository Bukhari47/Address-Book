import React, { useState } from "react";
import { Layout, Menu, Select } from "antd";
import { filterUser } from "../Redux/Actions/usersAction";
import { Link } from "react-router-dom";
import { getNationality } from "../Redux/Actions/usersAction";
import { fetchUseresWithNationality } from "../Redux/Actions/usersAction";
const { Option } = Select;
const { Header } = Layout;
function AppHeader() {
  const [userNationality, setUserNationality] = useState("");

  function handleChange(value) {
    console.log("<-- Nat -->", value);
    // Saving User Value
    setUserNationality(value);
    // Getting Value From Redux
    getNationality(value);
    fetchUseresWithNationality(value);
    // Redirecting...!!

    console.log("After Redirecting");
  }
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
          <Menu.Item key={"Country"} disabled="true">
            <Select
              defaultValue={userNationality}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="ES">ES</Option>
              <Option value="FR">FR</Option>
              <Option value="GB">GB</Option>
              <Option value="CH">CH</Option>
            </Select>
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
