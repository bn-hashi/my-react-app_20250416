import React from "react";

export default function UserCard(props) {
  return (
    <div>
      Name: {props.name}, Age: {props.age} 
    </div>
  );
}