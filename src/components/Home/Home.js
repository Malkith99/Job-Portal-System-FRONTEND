import React,{useState,useEffect} from 'react';  //useEffect import fro reac hook and used in function based approach
import axios from "axios";
import Button from "@mui/material/Button";


export default function Home(){
    //<Route path="/student-register" element={<StudentRegistrationBasicPage isLogedIn={isLogedIn} onLogout={handlLogOut}/>} />
    return(
        <div className="container">

            
            <h1>Category</h1>
            <div className="student">
              <Link to="/student-register">
                <Button variant="contained">
                  STUDENT<ArrowForwardIosIcon />
                </Button>
              </Link>
            </div>
        </div>
    )
}