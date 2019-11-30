import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AsyncTodos = lazy(() => import("./screen/todos"));
const AsyncAbout = lazy(() => import("./screen/about/About"));
const AsyncUsers = lazy(() => import("./screen/users/Users"));

export default function app() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <AsyncTodos />
            </Route>
            <Route path="/about">
              <AsyncAbout />
            </Route>
            <Route path="/users">
              <AsyncUsers />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
