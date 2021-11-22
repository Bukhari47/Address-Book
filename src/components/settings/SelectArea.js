import React from "react";
import { Select } from "antd";
const { Option } = Select;
function SelectArea({ handleNationalityChange, nationality }) {
  return (
    <Select onChange={handleNationalityChange} value={nationality}>
      <Option value="">none</Option>
      <Option value="ES">ES</Option>
      <Option value="FR">FR</Option>
      <Option value="GB">GB</Option>
      <Option value="CH">CH</Option>
    </Select>
  );
}

export default SelectArea;
