import React from "react";
import { Select } from "antd";
const { Option } = Select;
function SelectArea({ handleChange, nationality }) {
  return (
    <Select style={{ width: 120 }} onChange={handleChange} value={nationality}>
      <Option value="">none</Option>
      <Option value="ES">ES</Option>
      <Option value="FR">FR</Option>
      <Option value="GB">GB</Option>
      <Option value="CH">CH</Option>
    </Select>
  );
}

export default SelectArea;
