import React from "react";
import { PageHeader } from "antd";

const PagesHeader = ({ title, subTitle }) => {
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={subTitle}
    />
  );
};

export default PagesHeader;
