import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

class ThemeContext extends PureComponent {
  state = {
    theme: 'dark',
    changeTheme: theme => {
      this.setState({ theme });
    },
  };

  render() {
    const { children } = this.props;
    const { theme, changeTheme } = this.state;
    return <ThemeProvider value={{ theme, changeTheme }}>{children}</ThemeProvider>;
  }
}

ThemeContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeContext;
