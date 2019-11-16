import React from "react";

export default function test() {
  return (
    <div>
      <button
        onClick={() => {
          throw new Error("Error from test");
        }}
      >
        Generate error
      </button>
    </div>
  );
}
