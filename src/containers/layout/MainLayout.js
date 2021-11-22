import { Layout } from "antd";
import React from "react";
import AppHeader from "../../components/common/header/AppHeader";
import AppFooter from "../../components/common/footer/AppFooter";
import MainContent from "../../containers/layout/MainContent";
function MainLayout() {
  return (
    <Layout className="mainLayout">
      <AppHeader />
      <MainContent />
      <AppFooter />
    </Layout>
  );
}

export default MainLayout;
