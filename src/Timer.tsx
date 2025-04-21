import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // コンポーネントがアンマウントされるときにクリーンアップ
    return () => clearInterval(interval);
  }, []);

  return <div>経過時間: {seconds}秒</div>;
}

export default Timer;