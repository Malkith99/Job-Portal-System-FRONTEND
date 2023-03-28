import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

import "./userDetailsNav.css";
function userDetailsNav() {
    // const navRef = useRef();
    return (
        <div class="header-bottom" >
            <div className="nav">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/user">User Details</Link>
                </nav>
            </div>
            <p ></p>
        </div>
    )
}
export default userDetailsNav;