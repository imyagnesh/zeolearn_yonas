import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, displayType, editTodo, deleteTodo }) => (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    {todos
      .filter(x => {
        switch (displayType) {
          case 'pending':
            return x.done === false;
          case 'completed':
            return x.done === true;
          default:
            return true;
        }
      })
      .map(x => (
        <div key={x.id}>
          <input type="checkbox" checked={x.done} onChange={() => editTodo(x)} />
          <p style={{ textDecoration: x.done ? 'line-through' : 'none' }}>{x.text}</p>
          <button type="button" onClick={() => deleteTodo(x.id)}>
            Delete
          </button>
        </div>
      ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  displayType: PropTypes.string.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
