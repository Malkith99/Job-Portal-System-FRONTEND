import React,{useState} from "react";  //useState for handling states  which come from react hook
import axios from "axios";

export default function AddStudent(){

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");

    function sendData(e){     // function that execute when pressing submit button"
        e.preventDefault();                 
        //alert("Insert");

        // Connection of backend and frontend using axios //
       const newStudent={
            name,
            age,
            gender
        }
       axios.post("http://localhost:1234/student/add",newStudent ).then(res=>{
        console.log(res.data);
        alert("Student Added");
       }).catch(error=>console.error('Error: ',error));

      /* fetch("http://localhost:1234/student/add",{
        method: "POST",
        crossDomain: true,
        headers:{
            "Content-Type": "application/json",
           // Accept: "application/json",
           // "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            name,
            age,
            gender,
        }),
       }).then(res=>res.json()).then(data=>{
        console.log(data);
        alert("Student Added");
       }).catch(error=>console.error('Error: ',error));*/
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>     {/* method that calling when pressing submit button*/}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}></input>
                  { /*<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>

                <div className="form-group">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{
                    setGender(e.target.value);
                    }}></input>
                </div>
            

                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
        </div>

    )
}