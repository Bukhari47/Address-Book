import "antd/dist/antd.css";
import React, { lazy, Suspense } from "react";

import AppHeader from "./components/common/Header";
// import HomePage from "./containers/HomePage";
// import Settings from "./containers/Settings";
// import User from "./containers/User";
// import Page404Error from "./containers/Page404Error";

const LazyHomePage = lazy(() => import("./containers/HomePage"));
const LazySettings = lazy(() => import("./containers/Settings"));
const LazyPage404Error = lazy(() => import("./containers/Page404Error"));
const LazyUser = lazy(() => import("./containers/User"));

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Router>
        <Header>
          <AppHeader />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Switch>
              <Suspense fallback="Loading...">
                <Route path="/" exact component={LazyHomePage} />
                <Route path="/settings" component={LazySettings} />
                <Route path="/user/:userId" component={LazyUser} />
              </Suspense>
              <Route component={LazyPage404Error} />
            </Switch>
          </div>
        </Content>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        Address book created by using React,Redux and ANTD
      </Footer>
    </Layout>
  );
}

export default App;
