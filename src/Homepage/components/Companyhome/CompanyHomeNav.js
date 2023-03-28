import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

function CompanyHomeNav() {
    const navRef = useRef();


    return (

        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <Link to="/#">Home</Link>
                    <Link to="/Company">Company Home</Link>
                </nav>

            </div>
            <p ></p>
        </div>


    )
}
export default CompanyHomeNav;