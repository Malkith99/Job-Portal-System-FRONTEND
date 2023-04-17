import './profile.css';
import React,{useState,useEffect} from 'react';  //useEffect import from react hook and used in function based approach
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function Profile(){

    const [text, setText] = useState("");

    function handleChange(event) {
      setText(event.target.value);
    }
    return (
    <div>
    <h1>Profile</h1>
        <div className='container'>
      <div className="box">
        <label htmlFor="textbox">Email: </label>
        <div>
        <input type="text" id="textbox" value={text} onChange={handleChange} />
        </div>
        
      </div>
        </div>
        </div>
      );
}