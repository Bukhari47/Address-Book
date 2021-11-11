import React from "react";
import { PageHeader } from "antd";

const PagesHeader = ({ title, subTitle }) => {
  console.log("title and subtitle", title, subTitle);
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={subTitle}
    />
  );
};

export default PagesHeader;
