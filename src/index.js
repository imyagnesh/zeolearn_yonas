import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeContext from './context/themeContext';
import App from './app';
import './app.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContext>
  </Provider>,
  document.getElementById('root'),
);
