import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Popup from "../../../popup/popup";
import Button from "@mui/material/Button";
import ProfileImage from "../profileImage/profileImage";
import Card from "@mui/material/Card";
import PersonalInfo from "./Person_popup";
import AcademicDetails from "./Academic_Popup";
import ExtraC_popup from "./Extracuricular_popup";

import {URL} from "../../../../env";
export default function Profile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [token, setToken] = useState("");
  const [studentData, setData] = useState("");
  const [firstName, setFName] = useState("");
  const [middleName, setMName] = useState("");
  const [lastName, setLName] = useState("");
  const [indexNumber, setIndex] = useState("");
  const [DOB, setDOB] = useState("");
  const [DOG, setDOG] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber1, setPNumber1] = useState("");
  const [phoneNumber2, setPNumber2] = useState("");
  const [references, setReferences] = useState("");
  const [faculty, setFaculty] = useState("");
  const [field, setField] = useState("");
  const [subSpeciality, setSpeciality] = useState("");
  const [projects, setProjects] = useState("");
  const [eActivities, setEActivities] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [openProfilePopup, setOpenProfilePopup] = useState(false);
  const [openPersonalPopup, setOpenPersonalPopup] = useState(false);
  const [openAcademicPopup, setOpenAcademicPopup] = useState(false);

  const [openExtraPopup, setOpenExtraPopup] = useState(false);




  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleEdit() {
    setDisabled(false);
  }

  useEffect(() => {
    // This function will be called whenever any of the input fields change
    handleSave().then(() => {});
  }, [file, firstName, middleName, lastName, indexNumber]);


  async function handleSave() {
    try {
      const updatedUser = {
        profilePhoto: file,
        firstName,
        middleName,
        lastName,
        indexNumber,
        DOB,
        gender,
        userId: user._id,
        token: user.token, // Include the user token in the updatedUser object
      };

      const url = URL + "/api/users/";
      await axios.put(url, updatedUser);

      // Update the user token in localStorage
      const updatedUserLocal = { ...user, token: user.token }; // Include the updated token
      localStorage.setItem('user', JSON.stringify(updatedUserLocal));

      console.log("User StudentProfile successfully updated");
      //alert("User StudentProfile successfully updated");
    } catch (error) {
      console.error(error);
    }
  }





  useEffect(() => {
    if (user._id) {
      fetchUserData().then(() => {});
    }
  }, [user._id]);

  const fetchUserData = async () => {
    try {
      const userId = user._id;
      const url = URL +`/api/users/${userId}`;
      const response = await axios.get(url);
      const userData = response.data.user;
      setUser(userData);
      console.log(userData);
      setData(response.data.data);
      setFile(userData.profilePhoto);
      setFName(userData.firstName);
      setMName(userData.middleName);
      setLName(userData.lastName);
      setIndex(userData.indexNumber);
      setDOB(userData.DOB);
      setDOG(userData.DOG);
      setGender(userData.gender);
      setPNumber1(userData.phoneNumber1);
      setReferences(userData.references);
      setFaculty(userData.faculty);
      setField(userData.field);
      setSpeciality(userData.subSpeciality);
      setProjects(userData.projects);
      setEActivities(userData.EActivities);
      setProfileImage(userData.profileImage);
    } catch (error) {
      console.error(error);
    }
  };


  const handleData = (data) => {
    setFile(data);
  };


  return (
    <div className="container progress-div"
      style={{ marginTop: "1px", padding: "50px" }}
    >
      <form action="/student-home">
        <h4 className="sub-headings">Personal info: </h4>
        <div className="flex-container1">
          <div className="container1-flex-item1 text-center" style={{ display: "flex", flexDirection: "column" }}>
            <img className="profile-photo" src={file} alt="Profile Photo" />
            <label className="label-title">Profile Photo
            <Button onClick={() => setOpenProfilePopup(true)}>
                {" "}
                <EditIcon style={{ color: "#808080", marginRight: "8px" }} />
              </Button>
              {openProfilePopup && (
                <Popup
                  title="Edit Profile Photo"
                  openPopup={openProfilePopup}
                  setOpenPopup={setOpenProfilePopup}>
                  <ProfileImage sendData={handleData} />
                </Popup>
              )}
              </label>
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
                <div className="input-filed-s">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFName(e.target.value);
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
                <div className="input-filed-s">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name"
                      value={middleName}
                      onChange={(e) => {
                        setMName(e.target.value);
                      }}
                    disabled={disabled}
                  ></input>
                </div>
                <div className="text-center">
                    <label className="hint-title" >Middle Name</label>
                </div>
              </div>
              <div className="sub-flex-item2">
                <div className="input-filed-s">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLName(e.target.value);
                      }}
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
                  <label className="label-title" >
                  Index Number
                  <span className="asterisk-mark">*</span>
                </label>
              </div>
              <div className="sub-flex-item2">
                <div className="input-filed-s">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Index Number"
                      value={indexNumber}
                      onChange={(e) => {
                        setIndex(e.target.value);
                      }}
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
                <div className="input-filed-s">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DOB"
                      value={DOB}
                      onChange={(e) => {
                        setDOB(e.target.value);
                      }}
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
                <div className="input-filed-s">
                  <select
                    className="form-select"
                    name="gender"
                    id="gender"
                    disabled={disabled}
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
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
                <div className="input-filed-s">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number 1"
                      value={phoneNumber1}
                      onChange={(e) => {
                        setPNumber1(e.target.value);
                      }}
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
                <div className="input-filed-s">
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
                <div className="input-filed-s">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="References"
                      value={references}
                      onChange={(e) => {
                        setReferences(e.target.value);
                      }}
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
        <button
        type="button"
        className="btn btn-primary"
        onClick={()=>setOpenPersonalPopup(true)}
        style={{ marginBottom: "10px", marginLeft: "5%" }}
      >
        Edit
      </button>
      {openPersonalPopup && (
        <Popup
          title="Edit Personal Info"
          openPopup={openPersonalPopup}
          setOpenPopup={setOpenPersonalPopup}
        >
          <PersonalInfo />
        </Popup>

                  )}

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
                      value={faculty}
                      onChange={(e) => {
                        setFaculty(e.target.value);
                      }}
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
                      value={DOG}
                      onChange={(e) => {
                        setDOG(e.target.value);
                      }}
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
                      value={field}
                      onChange={(e) => {
                        setField(e.target.value);
                      }}
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
                      value={subSpeciality}
                      onChange={(e) => {
                        setSpeciality(e.target.value);
                      }}
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
                      value={projects}
                      onChange={(e) => {
                        setProjects(e.target.value);
                      }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
          <button
        type="button"
        className="btn btn-primary"
        onClick={()=>setOpenAcademicPopup(true)}
        style={{ marginBottom: "10px", marginLeft: "5%" }}
      >
        Edit
      </button>
      {openAcademicPopup && (
        <Popup
          title="Edit Personal Info"
          openPopup={openAcademicPopup}
          setOpenPopup={setOpenAcademicPopup}
        >
          <AcademicDetails />
        </Popup>

                  )}

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
                      value={eActivities}
                      onChange={(e) => {
                        setEActivities(e.target.value);
                      }}
                  ></textarea>
                </div>
                </div>
                {/* <div>
            {disabled ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEdit}
                    >
                Edit
              </button>
            ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSave}
                    >
                Save
              </button>
            )}
                </div> */}
          </div>
        </div>

</div>
          <button
        type="button"
        className="btn btn-primary"
        onClick={()=>setOpenExtraPopup(true)}
        style={{ marginBottom: "10px", marginLeft: "5%" }}
      >
        Edit
      </button>

      {openExtraPopup && (
        <Popup
          title="Edit Personal Info"
          openPopup={openExtraPopup}
          setOpenPopup={setOpenExtraPopup}
        >
          <ExtraC_popup/>
        </Popup>

                  )}

    </form>
    </div>

  );
};
