import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileImage(){
    const[profileImage,setImage]=useState("");

    useEffect(()=>{
        const fetchData =async()=>{
            const token = await  window.localStorage.getItem("token");
            axios.post("http://localhost:1234/student/uplodImage",{},{
              headers:{
                Authorization: `Bearer ${token}`,
              },
            })
            .then(res=>{ 
                setImage(res.data.data.profileImage);
            //   if (res.data.status=="ok"){
            //     // setData(res.data.data);  
            //   }else{
            //     window.alert(res.data.error);
            //   }
            })
            .catch(error=> console.error("Error: ",error));
          }
        fetchData();
    },[]);



    return(
        <>
        <div className="container">
        <h1>Profile Image</h1>
        <h1>Profile</h1>
        </div>
        </>
    )
}

