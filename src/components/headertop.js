import React, { useState } from "react";

import "./headertop.css";
function Headertop(props){  
    return(
        
        <div class="header-top" >
            <div>
                <p className="notloggin">{props.isLogedIn?'':'You are not logged in.'}</p>
            </div>
           <p ></p>
        </div>
        

    )
}
export default Headertop;