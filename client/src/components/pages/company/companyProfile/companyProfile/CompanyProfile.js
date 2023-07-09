import React, { useState,useEffect } from "react";
import "./CompanyProfile.css";
import axios from 'axios'; 
import MainHeader from "../../../../mainHeader/mainHeader";
import Footer from "../../../../footer/footer";
import { Link } from "react-router-dom";

export default function CompanyProfile({isLogedIn, onLogout }) {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [disabled, setDisabled] = useState(true);
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const content = (
    <>
      <Link to="/company-HomePage">Company Home</Link>
      <Link to="/company-profile">Profile</Link>
    
    </>
  );

  useEffect(() => {
    if (user._id) {
      fetchUserData().then(r => {});
    }
  }, [user._id]);

  async function fetchUserData() {
    try {
      const userId = user._id;
      const url = `http://localhost:4000/users/${userId}`;
      const response = await axios.get(url);
      const userData = response.data.user;
      setUser(userData);
      console.log(userData);
//userData
      setFile(userData.profilePhoto);
      setContactNumber(userData.contactNumber);
      setCompanyName(userData.firstName);
      setLocation(userData.location);
      setWebsite(userData.website);
    } catch (error) {
      console.error(error);
    }
  }
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleEdit() {
    setDisabled(false);
  }

  async function handleSave() {
    setDisabled(true);
    try {
      const updatedUser = {
        profilePhoto: file,
        contactNumber,
        companyName,
        location,
        website,
        userId: user._id,
      };

      const url = "http://localhost:4000/users/";
      await axios.put(url, updatedUser);

      console.log("User profile successfully updated");
      alert("User profile successfully updated");
    } catch (error) {
      console.error(error);
    }
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

  function handleChangeCompanyName(e) {
    const value = e.target.value;
    setCompanyName(value);
  }

  function handleChangeLocation(e) {
    const value = e.target.value;
    setLocation(value);
  }

  function handleChangeWebsite(e) {
    const value = e.target.value;
    setWebsite(value);
  }

  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
      <div
      className="container"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <div>
      <h1 className="cmp-headings sign" style={{ marginBottom: "2rem" }}>
        Profile Information :
      </h1>
        <form>
          <div className="flex-container1">
            <div className="container1-flex-item">
              <div
                className="container1-flex-item1 "
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img
                  className="profile-photo-2"
                  src={file}
                  alt="Profile Photo"
                />
                <label for="profilePhoto" className="">
                  <span className="asterisk-mark">*</span> Profile Photo
                </label>
                <div className="file-in">
                  <input type="file" className="form-control" style={{}} onChange={handleChange} disabled={disabled} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container1">
            <div className="container1-flex-item">
              <label for="companyName" className="">
                <span className="asterisk-mark">*</span>Company Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                  disabled={disabled}
                  value={companyName}
                  onChange={handleChangeCompanyName}
                  required
                  // required
                ></input>
              </div>
              {/* <label for="positionDestination" className="">
                <span className="asterisk-mark">*</span>Position/Destination
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="positionDestination"
                  placeholder="Position/Destination"
                  disabled={disabled}
                  // required
                ></input>
              </div> */}
               <label for="salaryRange" className="">
                <span className="asterisk-mark">*</span>Salary Range
              </label>
              <div
                className="input-filed input-filed-cls"
                style={{ display: "flex", flex: "row", columnGap: "20px" }}
              >
                <input
                  type="number"
                  className="form-control"
                  id="salaryRange salaryRangeMin"
                  placeholder="Min"
                  disabled={disabled}
                  // required
                  style={{ width: "50%" }}
                  min="0"
                ></input>
                <input
                  type="number"
                  className="form-control"
                  id="salaryRange salaryRangeMax"
                  placeholder="Max"
                  disabled={disabled}
                  // required
                  style={{ width: "50%" }}
                  min="0"
                ></input>
              </div>
              
            </div>
            <div className="container1-flex-item">
              <label for="contactInfo" className="">
                <span className="asterisk-mark">*</span>Contact Number
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="tel"
                  className="form-control"
                    id="contactNumber"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={handleChangeContactNumber}
                  disabled={disabled}
                  // required
                ></input>
              </div>
              <label for="location" className="">
                <span className="asterisk-mark">*</span>Location
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Location"
                    value={location}
                    onChange={handleChangeLocation}
                  disabled={disabled}
                  // required
                ></input>
              </div>
              
            </div>
            <div className="container1-flex-item">
              <label for="companyWebsite" className="">
                <span className="asterisk-mark">*</span>Company Website
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="companyWebsite"
                  placeholder="Company Website"
                  disabled={disabled}
                  value={website}
                    onChange={handleChangeWebsite}
                  
                  // required
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
    <Footer/>
    </div>
  );
}

