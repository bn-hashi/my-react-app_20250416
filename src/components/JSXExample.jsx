// src/JSXExample.js
import React from "react";

function JSXExample() {
  const items = ["alpha", "beta", "gamma"];
  return (
    <div>
      <p>{items.join(", ")}</p>
    </div>
  );
}

export default JSXExample;
