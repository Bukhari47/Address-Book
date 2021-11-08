import React from "react";
import { PageHeader } from "antd";

import AllUsers from "../components/AllUsers";

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
