import React from "react";
import "./headerTop.css";

function HeaderTop(props) {
  return (
    <div class="header-top">
      <div>
        <p className="notloggin">
          {props.isLogedIn ? "" : "You are not logged in."}
        </p>
      </div>
    </div>
  );
}
export default HeaderTop;
