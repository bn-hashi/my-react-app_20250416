// src/Timer.js
import React, { useEffect } from "react";

function Timer() {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);
  
  return <div>Timer Active</div>;
}

export default Timer;