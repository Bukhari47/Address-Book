import React, { lazy, Suspense, useEffect } from "react";
import { Layout, Row } from "antd";
import { fetchUser, loadInState } from "./redux/actions/usersAction";
import AppHeader from "./components/common/header/AppHeader";
const LazyHomePage = lazy(() => import("./containers/HomePage"));
const LazySettings = lazy(() => import("./containers/Settings"));
const LazyPage404Error = lazy(() => import("./containers/Page404Error"));
const LazyUser = lazy(() => import("./containers/User"));

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./containers/layout/MainLayout";

const { Header, Content } = Layout;

function App() {
  useEffect(() => {
    fetchUser();
    loadInState();
  });
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
