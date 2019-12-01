import React, { Suspense } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';

import route from './route';
import history from './history';

export default function app() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            {route.map(x => (
              <Link key={x.path} to={x.path}>
                {x.title}
              </Link>
            ))}
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {route.map(x => (
              <Route key={x.path} {...x} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
