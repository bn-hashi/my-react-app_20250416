// src/Greeting.js
import React from "react";

export default function Greeting(props) {
  return (
    <h1>
      {props.isLoggedIn  ? "Welcome Back!": "Please Sign Up"}
    </h1>  
  );
}
