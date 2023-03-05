import { useRef } from "react";
import React from "react";

import "./headerbottom.css";
function Headerbottom()
{
    const navRef = useRef();

       
    return(
        
        <div class="header-bottom" >
            <div className="nav">
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#">Register</a>
                    
                </nav>
                
            </div>
           <p ></p>
        </div>
        

    )
}
export default Headerbottom;