import React, { useEffect } from "react";
import { fetchUser, loadInState } from "./redux/actions/usersAction";

import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./containers/layout/MainLayout";

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
