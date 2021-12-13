import React from "react";
import { Col, Select, Form, Row } from "antd";
const { Option } = Select;
function SelectArea({ handleNationalityChange, nationality }) {
  return (
    <Row justify="center">
      <Col span={4}>
        <Form.Item
          name={["Nationality", "Nationality"]}
          label="Select  Nationality"
          rules={[{ required: true }]}
          value={nationality}
        >
          <Select onChange={handleNationalityChange}>
            <Option value="">none</Option>
            <Option value="ES">ES</Option>
            <Option value="FR">FR</Option>
            <Option value="GB">GB</Option>
            <Option value="CH">CH</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default SelectArea;
