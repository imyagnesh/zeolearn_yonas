import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import App from './app';
import './app.css';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
