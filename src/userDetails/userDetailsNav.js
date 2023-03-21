import { useRef } from "react";
import React from "react";

import "./userDetailsNav.css";
function userDetailsNav() {
    // const navRef = useRef();
    return (
        <div class="header-bottom" >
            <div className="nav">
                <nav>
                    <a href="/#">Home</a>
                    <a href="/user">User Details</a>
                </nav>
            </div>
            <p ></p>
        </div>
    )
}
export default userDetailsNav;