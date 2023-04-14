import React,{useState,useEffect} from 'react';  //useEffect import fro reac hook and used in function based approach
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="container">

            
            <h1>Category</h1>
            <div className="student">
              <Link to="/student-register">
                <Button variant="contained">
                  STUDENT
                </Button>
              </Link>
            </div>
            
            <div className="company">
              <Link to="/student-profile">
                <Button variant="contained">
                  COMPANY
                </Button>
              </Link>
            </div>
            <div className="Lecturer">
              <Link to="/student-register">
                <Button variant="contained">
                  LECTURER
                </Button>
              </Link>
            </div>
        </div>
    )
}