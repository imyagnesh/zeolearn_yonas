import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./app";

ReactDOM.render(
  <ErrorBoundary>
    <App test="hello" />
  </ErrorBoundary>,
  document.getElementById("root")
);
