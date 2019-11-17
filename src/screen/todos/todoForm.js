import React, { memo } from "react";

export default memo(function todoForm({ value, changeText, submit }) {
  return (
    <form onSubmit={submit}>
      <input type="text" name="todo" value={value} onChange={changeText} />
      <button type="submit">Submit</button>
    </form>
  );
});
