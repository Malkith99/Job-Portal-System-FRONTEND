import React,{useState,useEffect} from 'react';  //useEffect import from react hook and used in function based approach
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MainHeader from "../../../mainHeader/mainHeader";
import Footer from "../../../footer/footer";
import Feeds from "./studentHome/feeds";

export default function StudentHome({ isLogedIn, onLogout }){
  const content = (
    <>
      <Link to="/student-profile/"> Profile</Link>
      <Link to="/student-applications">My Applications</Link>
    </>
  );
  const[token,setToken]=useState("");
  useEffect(()=>{
    setToken(window.localStorage.getItem("token")); 
  },[]);
  useEffect(() => {
    console.log(token);
  }, [token]);
  

    return(
      <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div>
      <Feeds/>
     
       </div>
       <Footer />
     </div> 
/*         <div>            
            <h1>Student Home</h1>
            <div className="student">
              <Link to="/student-profile">
                <Button variant="contained">
                  profile
                </Button>
              </Link>
              <Link to="/student-application">
                <Button variant="contained">
                  My Applications
                </Button>
              </Link>
            </div>
        </div> */
    )
}