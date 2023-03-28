import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

import "./CompanyNav.css";
function CompanyNav() {
    const navRef = useRef();


    return (

        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <Link to="/#">Home</Link>
                    <Link to="/Company">Company Register</Link>

                </nav>

            </div>
            <p ></p>
        </div>


    )
}
export default CompanyNav;