import React, { memo } from "react";

export default memo(function todoBottomBar({ changeDisplayType }) {
  return (
    <div>
      <button onClick={() => changeDisplayType("all")}>All</button>
      <button onClick={() => changeDisplayType("pending")}>Pending</button>
      <button onClick={() => changeDisplayType("completed")}>Completed</button>
    </div>
  );
});
