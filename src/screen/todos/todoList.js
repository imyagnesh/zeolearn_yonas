import React, { memo } from "react";

export default memo(function todoList({
  todos,
  displayType,
  editTodo,
  deleteTodo
}) {
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      {todos
        .filter(x => {
          switch (displayType) {
            case "pending":
              return x.done === false;
            case "completed":
              return x.done === true;
            default:
              return true;
          }
        })
        .map((x, i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={x.done}
              onChange={() => editTodo(x)}
            />
            <p style={{ textDecoration: x.done ? "line-through" : "none" }}>
              {x.text}
            </p>
            <button onClick={() => deleteTodo(x.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
});
