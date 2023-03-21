import React from "react";


function Lecturerregister()
{
    return(
      <div className="container" style={{ marginTop: "75px", marginBottom: "50px" }}>
        {/* <h3 className="headings-cls">Company Registration</h3> */}
        <div>
          <form action="/lecture/home">
            <div className="flex-container1">
              <div className="container1-flex-item">
                <label for="firstName" className=""><span className="asterisk-mark">*</span>First Name</label>
                <div className="input-filed input-filed-cls">
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" required></input>
                </div>
                <label for="universityEmail" className=""><span className="asterisk-mark">*</span>University  Email Address</label>
                <div className="input-filed input-filed-cls">
                  <input type="text" className="form-control" id="universityEmail" placeholder="University  Email Address" required></input>
                </div>
                
              </div>
              <div className="container1-flex-item">
                <label for="middleName" className=""><span className="asterisk-mark">*</span>Middle Name</label>
                <div className="input-filed input-filed-cls">
                  <input type="tel" className="form-control" id="middleName" placeholder="Middle Name" required></input>
                </div>
                <label for="contactNumber" className=""><span className="asterisk-mark">*</span>Contact Number</label>
                <div className="input-filed input-filed-cls">
                  <input type="text" className="form-control" id="contactNumber" placeholder="Contact Number" required></input>
                </div>
              </div>
              <div className="container1-flex-item">
              <label for="position" className=""><span className="asterisk-mark">*</span>Position</label>
                <div className="input-filed input-filed-cls">
                  <input type="text" className="form-control" id="position" placeholder="Position" required></input>
                </div>
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
export default Lecturerregister;