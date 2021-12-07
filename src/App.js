import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainLayout from "./containers/layout/MainLayout";

const LazyHomePage = lazy(() => import("./containers/HomePage"));
const LazySettings = lazy(() => import("./containers/Settings"));
const LazyPage404Error = lazy(() => import("./containers/Page404Error"));
const LazyUser = lazy(() => import("./containers/User"));

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Suspense fallback="Loading...">
            <Route path="/" exact component={LazyHomePage} />
            <Route path="/settings" component={LazySettings} />
            <Route path="/user/:userId" component={LazyUser} />
          </Suspense>
          <Route path="*" component={LazyPage404Error} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
