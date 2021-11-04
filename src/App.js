import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/Header";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./components/User";
import Page404Error from "./components/Page404Error";

const { Header } = Layout;

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/settings" component={Settings} />
          <Route path="/user/:userId" component={User} />
          <Route component={Page404Error} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
