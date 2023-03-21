import React from "react";
import "./Companyregister.css";


function Companyregister() {
  return (

    <div className="container" style={{ marginTop: "75px", marginBottom: "50px" }}>
      {/* <h3 className="headings-cls">Company Registration</h3> */}
      <div>
        <form>
          <div className="flex-container1">
            <div className="container1-flex-item">
              <label for="companyName" className=""><span className="asterisk-mark">*</span>Company Name</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="companyName" placeholder="Company Name" required></input>
              </div>
              <label for="positionDestination" className=""><span className="asterisk-mark">*</span>Position/Destination</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="positionDestination" placeholder="Position/Destination" required></input>
              </div>
            </div>
            <div className="container1-flex-item">
              <label for="contactInfo" className=""><span className="asterisk-mark">*</span>Contact Info</label>
              <div className="input-filed input-filed-cls">
                <input type="tel" className="form-control" id="contactInfo" placeholder="Contact Info" required></input>
              </div>
              <label for="location" className=""><span className="asterisk-mark">*</span>Location</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="location" placeholder="Location" required></input>
              </div>
            </div>
            <div className="container1-flex-item">
              <label for="companyWebsite" className=""><span className="asterisk-mark">*</span>Company Website</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="companyWebsite" placeholder="Company Website" required></input>
              </div>
              <label for="salaryRange" className=""><span className="asterisk-mark">*</span>Salary Range</label>
              <div className="input-filed input-filed-cls" style={{ display: "flex", flex: "row", columnGap: "20px" }}>
                <input type="number" className="form-control" id="salaryRange salaryRangeMin" placeholder="Min" required style={{ width: "50%" }} min="0"></input>
                <input type="number" className="form-control" id="salaryRange salaryRangeMax" placeholder="Max" required style={{ width: "50%" }} min="0"></input>
              </div>
            </div>
          </div>
          <div className="flex-container2">
            <div className="container2-flex-item1">
              <label for="jobDescription" className=""><span className="asterisk-mark">*</span>Job Description</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="jobDescription" placeholder="Job Description" required></input>
              </div>
            </div>
            <div className="container2-flex-item2">
              <label for="other" className=""><span className="asterisk-mark">*</span>Other</label>
              <div className="input-filed input-filed-cls">
                <input type="text" className="form-control" id="other" placeholder="Other" required></input>
              </div>
            </div>
          </div>
          <div className="">
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
      <p ></p>
    </div>


  )
}
export default Companyregister;