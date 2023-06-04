import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileImage(){
    const[profileImage,setImage]=useState("");
    const[studentData,setData]=useState("");

    function handleSave() {       // Perform any save operations here
        sendImage();
      }

    function sendImage(){
        const newStudent={
            profileImage,
        }
        axios.put("http://localhost:1234/student/uploadImage/"+studentData?._id,newStudent ).then(res=>{
            alert("Update Profile Image Successfully!");
        }).catch(error=>console.error('Error:',error));
    }

    useEffect(()=>{
        const fetchData =async()=>{
            const token = await  window.localStorage.getItem("token");
            axios.post("http://localhost:1234/student/studentData",{},{
              headers:{
                Authorization: `Bearer ${token}`,
              },
            })
            .then(res=>{ 
               
              if (res.data.status=="ok"){
                setImage(res.data.profileImage);
                setData(res.data.data);  
              }else{
                window.alert(res.data.error);
              }
            })
            .catch(error=> console.error("Error: ",error));
          }
        fetchData();
    },[]);



    return(
        <>
        <div className="container">
        <p>Profile Image Upload</p>
        <button type="submit" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
        </div>
        </>
    )
}

