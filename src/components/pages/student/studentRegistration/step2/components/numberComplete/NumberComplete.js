import React from "react";
import "./NumberComplete.css";

function NumberComplete(props) {
  return (
    <div className="full-component">
      <div className="circle">
        <span className="digit">{props.digit}</span>
      </div>
      <div className="progress-status text-center">{props.status}</div>
    </div>
  );
}

export default NumberComplete;
