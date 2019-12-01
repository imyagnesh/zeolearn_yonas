import React from 'react';
import { ThemeConsumer } from '../../context/themeContext';

const About = () => (
  <div>
    <h1>About page</h1>
    <ThemeConsumer>{value => <h1>{`Theme: ${value.theme}`}</h1>}</ThemeConsumer>
  </div>
);

export default About;
