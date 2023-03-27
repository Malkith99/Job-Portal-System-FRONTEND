import { useRef } from "react";
import React from "react";

function CompanyHomeNav() {
    const navRef = useRef();


    return (

        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/Company">Company Home</a>

                </nav>

            </div>
            <p ></p>
        </div>


    )
}
export default CompanyHomeNav;