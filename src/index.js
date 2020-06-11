import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./App";

import { AppContextProvider } from "./context/App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <AppContextProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <App />
  </AppContextProvider>,
  rootElement
);
