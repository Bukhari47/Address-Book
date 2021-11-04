import React from "react";
import { PageHeader } from "antd";

import AllUsers from "./AllUsers";

const PageTitle = () => {
  return (
    <PageHeader
      className="site-page-header"
      title="Address Book"
      subTitle="All Users"
    />
  );
};

export default function HomePage() {
  return (
    <>
      <PageTitle />
      <AllUsers />
    </>
  );
}
