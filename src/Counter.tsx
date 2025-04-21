Counter.tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // 状態を宣言

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
}

export default Counter;