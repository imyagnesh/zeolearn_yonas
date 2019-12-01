import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeContext from './context/themeContext';
import App from './app';
import './app.css';

ReactDOM.render(
  <ThemeContext>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeContext>,
  document.getElementById('root'),
);
