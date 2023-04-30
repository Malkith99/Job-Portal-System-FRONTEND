import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
//import Popup from "./popup1";
//import CompanyRegister from '../../company/companyRegistration/companyRegister/CompanyRegister';
//import "./CompanyRegister.css"

export default function Profile() {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const[token,setToken]=useState("");
  const[studentData,setData]=useState("");
  const [firstname,setName]=useState("");
  const [disabled, setDisabled] = useState(true);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleEdit() {
    setDisabled(false);
  }

  function handleSave() {
    setDisabled(true);
    sendData();

    // Perform any save operations here
  }
  function sendData(){     // function that execute when pressing submit button"
   // e.preventDefault();                 
    //alert("Insert");

    // Connection of backend and frontend using axios //
  const newStudent={
        firstname,
    }
  axios.put("http://localhost:1234/student/update/"+studentData?._id,newStudent ).then(res=>{
    console.log(res.data);
    //alert("Student Added");
  }).catch(error=>console.error('Error: ',error));
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
          <input type="text" id="textbox" value={studentData?._id} />
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
            <label className="label-title">Profile Photo</label>
            <div style={{ padding: 10 }} />
            <div className="file-input-div">
              <input
                type="file"
                className="file-input-field form-control"
                onChange={handleChange}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="container1-flex-item2" style={{padding:10}}>
            <div className="sub-flex-container">
              <div className="sub-flex-item1">
                <label className="label-title">Name</label>
              </div>
              <div className="sub-flex-item2">
                <div className="input-filed">
                  <input
                    type="text"
                    className="form-control"
                    value={studentData?.firstName}
                    placeholder="First Name"
                   // value={studentData?.firstName}
                   onChange={(e)=>{
                    setName(e.target.value);
                }}
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
                  ></input>
                </div>
              </div>
              <div className="sub-flex-item2"></div>
              <div className="sub-flex-item2"></div>
            </div>
          </div>
        </div>

        <h4 className="sub-headings">Academic Details: </h4>
        <div className="">
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Faculty
                  <span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select
                    className="form-select"
                    name="faculty"
                    id="faculty"
                    disabled={disabled}
                  >
                    <option selected disabled>
                      Select your Faculty
                    </option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Allied Health Science">
                      Allied Health Science
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Fisheries and Marine Sciences & Technology">
                      Fisheries and Marine Sciences & Technology
                    </option>
                    <option value="Graduate Studies">Graduate Studies</option>
                    <option value="Humanities and Social Sciences">
                      Humanities and Social Sciences
                    </option>
                    <option value="Management & Finance">
                      Management & Finance
                    </option>
                    <option value="Medicine">Medicine</option>
                    <option value="Science">Science</option>
                    <option value="Technology">Technology</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Date of Graduating
                  <span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Graduating Year"
                    required
                    disabled={disabled}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Field
                  <span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select
                    className="form-select"
                    name="field"
                    id="field"
                    disabled={disabled}
                  >
                    <option selected disabled>
                      Select Your Field
                    </option>
                    <option value="Field1">Electrical Engineer</option>
                    <option value="Field2">Civil Engineer</option>
                    <option value="Field3">Software Engineer</option>
                    <option value="Field4">Accounting</option>
                    <option value="Field4">Doctor</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item"></div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item1">
                <label className="label-title">
                  Sub Speciality
                  <span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="container2-flex-item-sub-item2">
                <div className="input-filed input-filed-cls">
                  <select
                    className="form-select"
                    name="subSpeciality"
                    id="subSpeciality"
                    disabled={disabled}
                  >
                    <option selected disabled>
                      Select your Sub Speciality
                    </option>
                    <option value="SubSpeciality1">Sub Speciality 1</option>
                    <option value="SubSpeciality2">Sub Speciality 2</option>
                    <option value="SubSpeciality3">Sub Speciality 3</option>
                    <option value="SubSpeciality4">Sub Speciality 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="container2-flex-item"></div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item3">
                <label className="label-title">Projects</label>
              </div>
              <div className="container2-flex-item-sub-item4">
                <div className="input-filed input-filed-cls">
                  <textarea
                    class="form-control"
                    rows="3"
                    disabled={disabled}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="sub-headings">Extracurricular Activities: </h4>
        <div className="">
          <div className="flex-container2">
            <div className="container2-flex-item">
              <div className="container2-flex-item-sub-item3">
                <label className="label-title">References</label>
              </div>
              <div className="container2-flex-item-sub-item4">
                <div className="input-filed input-filed-cls">
                  <textarea
                    class="form-control"
                    rows="3"
                    disabled={disabled}
                  ></textarea>
                </div>
                </div>
                <div>
            {disabled ? (
              <button type="button" className="btn btn-primary" onClick={handleEdit}>
                Edit
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            )}
          </div>
        </div>
</div>
</div>
       
    </form>
    </div>
    </>
  );
}
