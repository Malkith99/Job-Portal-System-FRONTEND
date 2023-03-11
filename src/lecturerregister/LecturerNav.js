import { useRef } from "react";
import React from "react";

import "./LecturerNav.css";
function LecturerNav()
{
    const navRef = useRef();

       
    return(
        
        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/lecturer">Lecturer Register</a>
                </nav>
                
            </div>
           <p ></p>
        </div>
        

    )
}
export default LecturerNav;