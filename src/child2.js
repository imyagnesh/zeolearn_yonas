import React, { memo } from "react";

export default memo(function child2({ user }) {
  return (
    <div>
      {/* {user.name} */}
      <h1>Hello From Child 2</h1>
    </div>
  );
});
