import React,{useState,useEffect} from 'react';  //useEffect import from react hook and used in function based approach
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function StudentHome(){
  const[token,setToken]=useState("");
  useEffect(()=>{
    setToken(window.localStorage.getItem("token")); 
  },[]);
  useEffect(() => {
    console.log(token);
  }, [token]);
  

    return(
        <div>            
            <h1>Student Home</h1>
            <div className="student">
              <Link to="/student-profile">
                <Button variant="contained">
                  profile
                </Button>
              </Link>
            </div>
        </div>
    )
}