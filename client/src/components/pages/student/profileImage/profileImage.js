import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProfileImage(){
    const[profileImage,setImage]=useState("");
    const[studentData,setData]=useState("");
    const [file, setFile] = useState(
      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
    );
    console.log(studentData?._id);

    const handleFileChange=(event)=> {       // Perform any save operations here
        const file=event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
        setFile(URL.createObjectURL(event.target.files[0]))
      };

    function handleSubmit(event){
      event.preventDefault(); // prevent defult form submission behaviors, pause the refershing

    const formData = new FormData();
    formData.append("profileImage", profileImage);  //"profileImage" is the name goven to profileImage file
    console.log(formData);

        axios.post("http://localhost:1234/student/uploadImage/"+studentData?._id,formData,{
              headers:{
                "Content-Type": "multipart/form-data",   // encrypt the sending data type
              },
            } ).then(res=>{
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
            .catch(error=>
            console.error("Error: ",error));
          }
        fetchData();
    },[]);



    return(
        <>
        <div className="container"   >
       

        <div>
            <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img className="profile-photo" src={file} alt="" />
            </div>
              <input type="file" onChange={handleFileChange} />
              <div style={{ marginBottom: "1rem" }}></div>
              <div>
              <button type="Submit" class="btn btn-primary">Upload</button>
              </div>
            </form>
        </div>
        </div>
        </>
    )
}

