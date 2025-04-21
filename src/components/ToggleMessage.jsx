// src/ToggleMessage.js
import React, { useState } from "react";

function ToggleMessage() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>Secret Message</p>}
    </div>
  );
}

export default ToggleMessage;
