import React, { useState } from "react";
import { Divider, Select } from "antd";
import { getNationality } from "../redux/actions/usersAction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchUsersWithNationality } from "../Redux/Actions/usersAction";
const { Option } = Select;

function Settings() {
  const history = useHistory();
  const nationality = useSelector((state) => state.nationality);

  function handleChange(value) {
    getNationality(value);
    history.push("/");
  }

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <Divider orientation="center">
        <h1>Select Nationality</h1>
      </Divider>
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        value={nationality}
      >
        <Option value="">none</Option>
        <Option value="ES">ES</Option>
        <Option value="FR">FR</Option>
        <Option value="GB">GB</Option>
        <Option value="CH">CH</Option>
      </Select>
    </div>
  );
}

export default Settings;
