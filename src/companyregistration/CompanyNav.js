import { useRef } from "react";
import React from "react";

import "./CompanyNav.css";
function CompanyNav() {
    const navRef = useRef();


    return (

        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/Company">Company Register</a>

                </nav>

            </div>
            <p ></p>
        </div>


    )
}
export default CompanyNav;