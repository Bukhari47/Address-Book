import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import AppHeader from "./components/Header";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./components/User";
import Page404Error from "./components/Page404Error";

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
              <Route path="/" exact component={HomePage} />
              <Route path="/settings" component={Settings} />
              <Route path="/user/:userId" component={User} />
              <Route component={Page404Error} />
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
