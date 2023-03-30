import React from "react";
import "./NumberInComplete.css";

function NumberInComplete(props) {
  return (
    <div className="full-component">
      <div className="circleComplete">
        <span className="digit">{props.digit}</span>
      </div>
      <div className="progress-status text-center">{props.status}</div>
    </div>
  );
}

export default NumberInComplete;
