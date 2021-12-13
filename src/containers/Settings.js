import React from "react";
import { Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setNationality } from "../redux/slice/userSlice";

import PagesHeader from "../components/common/header/PageHeader";
import SelectArea from "../components/settings/SelectArea";

function Settings() {
  const dispatch = useDispatch();
  const { nationality } = useSelector((state) => state.users);
  const handleNationalityChange = (value) => {
    dispatch(setNationality(value));
  };

  return (
    <Row>
      <Col span={24}>
        <PagesHeader
          title={"Settings"}
          subTitle={"You can Select nationality of users"}
        />
      </Col>
      <Col span={24} className="center">
        <SelectArea
          handleNationalityChange={handleNationalityChange}
          nationality={nationality}
        />
      </Col>
    </Row>
  );
}

export default Settings;
