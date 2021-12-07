import { Layout } from "antd";
import React from "react";
import AppHeader from "../../components/common/header/AppHeader";
import AppFooter from "../../components/common/footer/AppFooter";

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <Layout className="mainLayout">
      <AppHeader />
      <Content>{children}</Content>
      <AppFooter />
    </Layout>
  );
}

export default MainLayout;
