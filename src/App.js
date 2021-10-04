import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./Components/Header";
import HomePage from "./Components/HomePage";
import Settings from "./Components/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./Components/User";
import Page404Error from "./Components/Page404Error";

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
