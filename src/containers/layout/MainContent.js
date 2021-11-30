import { Row, Layout } from "antd";
import React, { lazy, Suspense } from "react";
const LazyHomePage = lazy(() => import("../HomePage"));
const LazySettings = lazy(() => import("../Settings"));
const LazyPage404Error = lazy(() => import("../Page404Error"));
const LazyUser = lazy(() => import("../User"));
const { Content } = Layout;

import { BrowserRouter as Switch, Route } from "react-router-dom";

function MyContent() {
  return (
    <Content className="site-layout">
      <Row className="site-layout-background">
        <Switch>
          <Suspense fallback="Loading...">
            <Route path="/" exact component={LazyHomePage} />
            <Route path="/settings" component={LazySettings} />
            <Route path="/user/:userId" component={LazyUser} />
          </Suspense>
          <Route component={LazyPage404Error} />
        </Switch>
      </Row>
    </Content>
  );
}

export default MyContent;
