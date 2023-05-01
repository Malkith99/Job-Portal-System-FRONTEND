import React, { useState } from "react";
import "./CompanyRegister.css";

function CompanyRegister() {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
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
    // Perform any save operations here
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
                <img
                  className="profile-photo-2"
                  src={file}
                  alt="Profile Photo"
                />
                <label for="profilePhoto" className="">
                  <span className="asterisk-mark">*</span> Profile Photo
                </label>
                <div className="file-in">
                  <input
                    type="file"
                    className=" form-control"
                    style={{}}
                    onChange={handleChange}
                    disabled={disabled}
                  />
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
                  // required
                ></input>
              </div>
              <label for="positionDestination" className="">
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
              </div>
              
            </div>
            <div className="container1-flex-item">
              <label for="contactInfo" className="">
                <span className="asterisk-mark">*</span>Contact Info
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="tel"
                  className="form-control"
                  id="contactInfo"
                  placeholder="Contact Info"
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
                  // required
                ></input>
              </div>
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
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item1">
              <label for="jobDescription" className="">
                <span className="asterisk-mark">*</span>Job Description
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobDescription"
                  placeholder="Job Description"
                  disabled={disabled}
                  // required
                ></input>
              </div>
            </div>
            <div className="container2-flex-item2">
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
  );
}
export default CompanyRegister;
