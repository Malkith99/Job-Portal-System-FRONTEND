import React from "react";
import "./HeaderTop.css";

function HeaderTop(props) {
  return (
    <div className="header-top">
      <div>
        <p className="notloggin">
          {props.isLogedIn ? "" : "You are not logged in."}
        </p>
      </div>
    </div>
  );
}
export default HeaderTop;
