import './profile.css';
import React,{useState,useEffect} from 'react';  //useEffect import from react hook and used in function based approach
/* import axios from "axios";
import Button from "@mui/material/Button"; */
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import { Profile } from "./profile";
//import Sidebar from "../../../sideBar/sideBar";


export default function StudentProfile(){

/*     const [text, setText] = useState("");

    function handleChange(event) {
      setText(event.target.value);
    } */
    return (
      <>
      <strong>
        <MainHeader
          content={"My Profile"}
/*           isLogedIn={isLogedIn}
          onLogout={onLogout} */
        />
       
      </strong>
      <div style={{ display: "flex"}}>
        {/* <Sidebar isLogedIn={isLogedIn} onLogout={onLogout} /> */}
          <div style={{ borderBottomWidth: 10 }} />
          <Profile disabled={true} data ={null}/>
          <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
        </div> <Footer />
   
    </>
      );
}