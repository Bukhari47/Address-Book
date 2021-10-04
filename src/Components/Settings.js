import React, { useState } from "react";
import { Divider, Select } from "antd";
import { getNationality } from "../Redux/Actions/usersAction";
import { useHistory } from "react-router-dom";
import { fetchUseresWithNationality } from "../Redux/Actions/usersAction";
const { Option } = Select;

function Settings() {
  const history = useHistory();
  const [userNationality, setUserNationality] = useState("");

  function handleChange(value) {
    console.log("<-- Nat -->", value);
    // Saving User Value
    setUserNationality(value);
    // Getting Value From Redux
    getNationality(value);
    fetchUseresWithNationality(value);
    // Redirecting...!!
    history.push("/");

    console.log("After Redirecting");
  }

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <Divider orientation="center">
        <h1>Select Nationality</h1>
      </Divider>
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
    </div>
  );
}

export default Settings;
