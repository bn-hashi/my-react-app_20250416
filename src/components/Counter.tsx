// src/Counter.js
import React, { useState } from "react";

function Counter() {
  // カウントの state を定義
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={ ()=> setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
