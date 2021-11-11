import React from "react";
import { Col, Row } from "antd";
import { filterUser, getNationality } from "../redux/actions/usersAction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PagesHeader from "../components/common/PageHeader";
import SelectArea from "../components/settings/SelectArea";
function Settings() {
  const history = useHistory();
  const nationality = useSelector((state) => state.nationality);

  function handleNationalityChange(value) {
    getNationality(value);
    filterUser("");
    history.push("/");
  }

  return (
    <Row style={{ marginBottom: "20px", textAlign: "center" }}>
      <Col span={24}>
        <PagesHeader
          title={"Settings"}
          subTitle={"You can Select nationality of users"}
        />
      </Col>
      <Col>
        <SelectArea
          handleNationalityChange={handleNationalityChange}
          nationality={nationality}
        />
      </Col>
    </Row>
  );
}

export default Settings;
