import React from "react";
import { Divider, Select, Typography } from "antd";
import { filterUser, getNationality } from "../redux/actions/usersAction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const { Option } = Select;
const { Text, Title } = Typography;
function Settings() {
  const history = useHistory();
  const nationality = useSelector((state) => state.nationality);

  function handleChange(value) {
    getNationality(value);
    filterUser("");
    history.push("/");
  }

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <Divider orientation="center">
        <Title>Select Nationality</Title>
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
