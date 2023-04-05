import React, {useState} from "react";
import "./CompanyRegister.css";

function CompanyRegister() {

  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      className="container"
      style={{ marginTop: "75px", marginBottom: "50px" }}
    >
      <div>
        <form action="/company/home">
          <div className="flex-container1">
            <div className="container1-flex-item">
              
            <div
              className="container1-flex-item1 "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img className="profile-photo-2" src={file} alt="Profile Photo" />
              <label for="profilePhoto"className="">
                <span  className="asterisk-mark">*</span> Profile Photo</label>
              <div className="file-in">
                <input
                  type="file"
                  class=" form-control"
                  style={{}}
                  onChange={handleChange}
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
                  // required
                ></input>
              </div>
              <div className="input-filed input-filed-cls">
                <label for="inputPassword" className="">
                  <span className="asterisk-mark">*</span>Enter a Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Enter a Password"
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
                  // required
                ></input>
              </div>
              <div className="input-filed input-filed-cls">
                <label for="confirmPassword" className="">
                  <span className="asterisk-mark">*</span>Confirm the Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirm the Password"
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
                  // required
                  style={{ width: "50%" }}
                  min="0"
                ></input>
                <input
                  type="number"
                  className="form-control"
                  id="salaryRange salaryRangeMax"
                  placeholder="Max"
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
                  // required
                ></input>
              </div>
            </div>
          </div>
          <div className="">
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
}
export default CompanyRegister;
