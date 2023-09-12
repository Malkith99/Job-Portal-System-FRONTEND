import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CompanyProfile.css";
import {URL} from "../../../../../env";

function CompanyRegister() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (user._id) {
      fetchUserData().then(r => {});
    }
  }, [user._id]);

  async function fetchUserData() {
    try {
      const userId = user._id;
      const url = URL+`/api/users/${userId}`;
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

      const url = URL +"/api/users/";
      await axios.put(url, updatedUser);

      console.log("User StudentProfile successfully updated");
      alert("User StudentProfile successfully updated");
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
      <div className="container" style={{ marginTop: "1px", marginBottom: "50px" }}>
        <div>
          <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
            Profile Information:
          </h1>
          <form>
            <div className="flex-container1">
              <div className="container1-flex-item">
                <div className="container1-flex-item1" style={{ display: "flex", flexDirection: "column" }}>
                  <img className="profile-photo-2" src={`data:image/jpeg;base64/${file}`} alt="Profile Photo" />


                  <label htmlFor="profilePhoto" className="">
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
                <label htmlFor="companyName" className="">
                  <span className="asterisk-mark">*</span>Company Name
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                      type="text"
                      className={`form-control `}
                      id="companyName"
                      placeholder="Company Name"
                      disabled={disabled}
                      value={companyName}
                      onChange={handleChangeCompanyName}
                      required
                  />
                </div>
                <label htmlFor="location" className="">
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
                  />
                </div>
              </div>
              <div className="container1-flex-item">
                <label htmlFor="contactInfo" className="">
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
                  />
                </div>

              </div>
              <div className="container1-flex-item">
                <label htmlFor="companyWebsite" className="">
                  <span className="asterisk-mark">*</span>Company Website
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                      type="text"
                      className="form-control"
                      id="companyWebsite"
                      placeholder="Company Website"
                      value={website}
                      onChange={handleChangeWebsite}
                      disabled={disabled}
                  />
                </div>
              </div>
            </div>
            <div className="input-filed input-filed-cls">
              {disabled ? (
                  <button type="button" className="btn btn-primary" onClick={handleEdit}>
                    Edit
                  </button>
              ) : (
                  <button type="button" className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
              )}
            </div>
          </form>
        </div>
        <p></p>
      </div>
  );
}

export default CompanyRegister;
