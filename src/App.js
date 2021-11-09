// import "antd/dist/antd.css";
import React from "react";

import AppHeader from "./components/Header";
import HomePage from "./containers/HomePage";
import Settings from "./containers/Settings";
import User from "./containers/User";
import Page404Error from "./containers/Page404Error";

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
