import React from "react";
//import ProfileLogo from "../profileLogo/ProfileLogo";
import "./HeaderBottom.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function HeaderBottom(props) {
  // const navItems = ["Home", "About", "Contact"];

  return (
    <div class="header-bottom">
      <div className="nav" style={{ height: "50px" }}>
        <nav style={{ width: "100%" }}>
          <div className="nav-bar-content" style={{ alignItems: "center" }}>
            <div className="nav-bar-left">{props.content}</div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))} */}
            </Box>
            <div className="nav-bar-right">
              {props.isLogedIn ? (
                <span className="ml-auto">
                  {/* <ProfileLogo onLogout={props.onLogout} /> */}
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
