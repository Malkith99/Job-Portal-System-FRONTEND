import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
// import LecturerRegister from '../lectureRegistration/lectureRegister/LecturerRegister';
import "./LecturerProfile.css";
import axios from "axios";

export const LecturerProfile = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [contactNumber, setContactNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [other, setOther] = useState("");

  useEffect(() => {
    if (user._id) {
      fetchUserData().then(r => {});
    }
  }, [user._id]);


  async function fetchUserData() {
    try {
      const userId = user._id;
      const url = `http://localhost:4000/api/users/${userId}`;
      const response = await axios.get(url);
      const userData = response.data.user;
      setUser(userData);
      console.log(userData);
//userData
      setFile(userData.profilePhoto);
      setContactNumber(userData.contactNumber);
      setEmail(userData.email);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setPosition(userData.position);
      setOther(userData.other);
    } catch (error) {
      console.error(error);
    }
  }



















  async function handleSave() {
    setDisabled(true);
    try {
      const updatedUser = {
        profilePhoto: file,
        contactNumber,
        firstName,
        lastName,
        userId: user._id,
      };

      const url = "http://localhost:4000/api/users/";
      await axios.put(url, updatedUser);

      console.log("User StudentProfile successfully updated");
      alert("User StudentProfile successfully updated");
    } catch (error) {
      console.error(error);
    }
  }
  function handleEdit() {
    setDisabled(false);
  }






  function handleChange(e) {
    const selectedFile = e.target.files[0];

    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onload = function (event) {
      const base64String = event.target.result;
      setFile(base64String); // Set the base64 string as the file data in the state
    };
    reader.readAsDataURL(selectedFile);
  }



  function handleChangeContactNumber(e) {
    const value = e.target.value;
    setContactNumber(value);
  }

  function handleChangeFirstName(e) {
    const value = e.target.value;
    setFirstName(value);
  }



  function handleChangeLastName(e) {
    const value = e.target.value;
    setLastName(value);
  }

  function handleChangeEmail(e) {
    const value = e.target.value;
    setEmail(value);
  }
  function handleChangePosition(e) {
    const value = e.target.value;
    setPosition(value);
  }
  function handleChangeOther(e) {
    const value = e.target.value;
    setOther(value);
  }




  return (
    <div
      className="container"
      style={{ marginTop: "1px", marginBottom: "50px" }}
    >
      
      <div>
      <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
        Profile Information :
      </h1>
        <form>
          <div className="flex-container1">
            <div className="container1-flex-item">
              <div
                className="container1-flex-item1 "
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img className="profile-photo-2" src={`data:image/jpeg;base64/${file}`} alt="Profile Photo" />
                <label form="profilePhoto" className="">
                  <span className="asterisk-mark">*</span> Profile Photo
                </label>
                <div className="file-in">
                  <input type="file" className="form-control"
                         style={{}}
                         onChange={handleChange}
                         disabled={disabled} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-container1">
            <div className="container1-flex-item">
              <label form="firstName" className="">
                <span className="asterisk-mark">*</span>First Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  disabled={disabled}
                  value={firstName}
                  onChange={handleChangeFirstName}
                  required
                ></input>
              </div>
              <label form="universityEmail" className="">
                <span className="asterisk-mark">*</span>University Email Address
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="universityEmail"
                  placeholder="University  Email Address"
                  disabled={disabled}
                  value={email}
                  onChange={handleChangeEmail}
                  required
                ></input>
              </div>
            
            </div>
            <div className="container1-flex-item">
              <label form="middleName" className="">
                <span className="asterisk-mark">*</span>Middle Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="tel"
                  className="form-control"
                  id="middleName"
                  placeholder="Last Name"
                  disabled={disabled}
                  value={lastName}
                  onChange={handleChangeLastName}
                  required
                ></input>
              </div>
              <label for="contactNumber" className="">
                <span className="asterisk-mark">*</span>Contact Number
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number"
                  disabled={disabled}
                  value={contactNumber}
                  onChange={handleChangeContactNumber}
                  required
                ></input>
              </div>
              
            </div>
            <div className="container1-flex-item">
              <label for="position" className="">
                <span className="asterisk-mark">*</span>Position
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  placeholder="Position"
                  disabled={disabled}
                  value={position}
                  onChange={handleChangePosition}
                  required
                ></input>
              </div>
              <label for="other" className="">
                <span className="asterisk-mark">*</span>Other
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="other"
                  placeholder="Other"
                  disabled={disabled}
                  value={other}
                  onChange={handleChangeOther}
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="">
            <div className="input-filed input-filed-cls">
            {disabled ? (
              <button type="button btn-primary" className="btn btn-primary" onClick={handleEdit}>
                Edit
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            )}
            </div>
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
}
