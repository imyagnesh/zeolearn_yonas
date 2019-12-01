import React from 'react';
import { ThemeConsumer } from '../../context/themeContext';

const Users = () => (
  <div>
    <h1>Users Page</h1>
    <ThemeConsumer>{value => <h1>{`Theme: ${value.theme}`}</h1>}</ThemeConsumer>
  </div>
);

export default Users;
