import React from "react";
import { Router } from "@reach/router";

import GlobalStyles from "./styles/GlobalStyles";

import Base from "./components/Base";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

const Routes = () => {
  return (
    <Base>
      <GlobalStyles />
      <Router>
        <Login path="/login" default />
        <MainPage path="/main" />
      </Router>
    </Base>
  );
};

export default Routes;
