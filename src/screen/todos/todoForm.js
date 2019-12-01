import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ value, changeText, submit }) => (
  <form onSubmit={submit}>
    <input type="text" name="todo" value={value} onChange={changeText} />
    <button type="submit">Submit</button>
  </form>
);

TodoForm.propTypes = {
  value: PropTypes.string,
  changeText: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  value: 'yagnesh',
};

export default memo(TodoForm);
