import { useRef, useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
import ProfileLogo from "./MainHeader/ProfileLogo";

import "./headerbottom.css";
function Headerbottom(props) {
  const navRef = useRef();

  // const [pathname, setPathname] = useState(window.location.pathname);

  // const [content, setContent] = useState(<nav><Link to="/">Login</Link></nav>);

  // useEffect(()=>{
  //   const timer = setTimeout(() => {
  //     setPathname(window.location.pathname)
  //     console.log(pathname)
  //     if (pathname==='/student-register'){
  //       setContent(<><Link to="/student-register">Student Registration</Link><Link to="/student-register">Step 1</Link></>);
  //     }else if (pathname==='/student-register-final'){
  //       setContent(<><Link to="/student-register">Student Registration</Link><Link to="/student-register">Step 1</Link><Link to="/student-register-final">Step 2</Link></>);
  //     }else if (pathname==='/student/home'){
  //       setContent(<><Link to="/student/home">Student Home</Link></>);
  //     }else if (pathname==='/lecturer'){
  //       setContent(<><Link to="/lecturer">Lecturer Registration</Link></>);
  //     }else if (pathname==='/lecture/home'){
  //       setContent(<><Link to="/lecture/home">Lecturer Home</Link></>);
  //     }else if (pathname==='/company'){
  //       setContent(<><Link to="/company">Company Registration</Link></>);
  //     }else if (pathname==='/company/home'){
  //       setContent(<><Link to="/company/home">Company Home</Link></>);
  //     }
  //   }, 0);

  //   return () => {
  //     clearTimeout(timer)
  //   }
    
	// }, [content])

  return (
    <div class="header-bottom">
      <div className="nav" style={{height:"50px"}}>
        <nav style={{width:"100%"}}>
          <div className="nav-bar-content" style={{alignItems:'center'}}>
            <div className="nav-bar-left">
              {props.content}
            </div>
            <div className="nav-bar-right">
              {props.isLogedIn? (
                <span className="ml-auto">
                  <ProfileLogo onLogout={props.onLogout}/>
                </span>
            ):''}
            </div>
          </div>
          
        </nav>
      </div>
      <p></p>
    </div>
  );
}
export default Headerbottom;
