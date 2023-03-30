import React from "react";
import ProfileLogo from "../profileLogo/ProfileLogo";

import "./HeaderBottom.css";
function HeaderBottom(props) {
  return (
    <div class="header-bottom">
      <div className="nav" style={{ height: "50px" }}>
        <nav style={{ width: "100%" }}>
          <div className="nav-bar-content" style={{ alignItems: "center" }}>
            <div className="nav-bar-left">{props.content}</div>
            <div className="nav-bar-right">
              {props.isLogedIn ? (
                <span className="ml-auto">
                  <ProfileLogo onLogout={props.onLogout} />
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
      <p></p>
    </div>
  );
}
export default HeaderBottom;
