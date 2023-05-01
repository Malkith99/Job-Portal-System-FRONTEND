import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PersonalDetails() {

    const[token,setToken]=useState("");
    const[studentData,setData]=useState("");
  
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
                setData(res.data.data);
                //console.log(res.data);
              }else{
                window.alert(res.data.error);
                
              }
            })
            .catch(error=> console.error("Error: ",error));
          }
        fetchData();
  },[]);
    return (
      <>
      <div>
      <h1>Profile</h1>
      <div className="profile">
        <div className="box">
          <label htmlFor="textbox">Email: </label>
          <div>
            <input type="text" id="textbox" value={studentData?.email} />
          </div>
        </div>
      </div>
    </div>
      <div
        className="container progress-div"
        style={{ marginTop: "1px", padding: "50px" }}
      >
        <form action="/student/home">
          <h4 className="sub-headings">Personal info: </h4>
          <div className="flex-container1">
            <div
              className="container1-flex-item1 text-center"
              style={{ display: "flex", flexDirection: "column" }}
            >
               <img className="profile-photo" src={file} alt="Profile Photo" /> 
              <label className="label-title">Profile Photo
              <span>
                <button type="Submit" class="btn btn-primary">
                        Edit Pic
                      </button>
              </span>
              </label>
              <div style={{ padding: 10 }} />
  
            </div>
            <div className="container1-flex-item2" >
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">Name</label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      disabled={props.disabled}
                      required
                    ></input>
                  </div>
                  <div className="text-center">
                    <label className="hint-title">
                      First Name<span className="asterisk-mark">*</span>
                    </label>
                  </div>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Middle Name"
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
                  <div className="text-center">
                    <label className="hint-title">Middle Name</label>
                  </div>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      required
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
                  <div className="text-center">
                    <label className="hint-title">
                      Last Name<span className="asterisk-mark">*</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">
                    Index Number
                    <span className="asterisk-mark">*</span>
                  </label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Index Number"
                      required
                     /* disabled={props.disabled} */
                    ></input>
                  </div>
                </div>
                <div className="sub-flex-item2"></div>
                <div className="sub-flex-item2"></div>
              </div>
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">
                    Date of Birth
                    <span className="asterisk-mark">*</span>
                  </label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="DOB"
                      required
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
                </div>
                <div className="sub-flex-item2"></div>
                <div className="sub-flex-item2"></div>
              </div>
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">
                    Gender
                    <span className="asterisk-mark">*</span>
                  </label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <select
                      className="form-select"
                      name="gender"
                      id="gender"
                      /* disabled={props.disabled} */
                    >
                      <option selected disabled>
                        Select your Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="sub-flex-item2"></div>
                <div className="sub-flex-item2"></div>
              </div>
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">
                    Phone Number
                    <span className="asterisk-mark">*</span>
                  </label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number 1"
                      required
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
                  <div className="text-center">
                    <label className="hint-title">
                      Phone Number 1<span className="asterisk-mark">*</span>
                    </label>
                  </div>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number 2"
                      required
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
                  <div className="text-center">
                    <label className="hint-title">
                      Phone Number 2<span className="asterisk-mark">*</span>
                    </label>
                  </div>
                </div>
                <div className="sub-flex-item2"></div>
              </div>
              <div className="sub-flex-container">
                <div className="sub-flex-item1">
                  <label className="label-title">
                    References
                    <span className="asterisk-mark">*</span>
                  </label>
                </div>
                <div className="sub-flex-item2">
                  <div className="input-filed">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="References"
                      required
                      /* disabled={props.disabled} */
                    ></input>
                  </div>
  
                </div>
                <div className="sub-flex-item2"></div>
                <div className="sub-flex-item2"></div>
              </div>
            </div>
          </div>
      </form>
    </div>
    </>
  );
}