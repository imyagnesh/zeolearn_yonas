import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      if (isAuthenticated) {
        return children;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
