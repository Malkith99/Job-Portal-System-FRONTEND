import React, {useState} from "react";
export default function JobDetails(props) {
    function handleSave(event){};
return(
    <div className="flex-container1">
              <div className="container1-flex-item">
                <label for="jobtitle" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Title
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    placeholder="Job Title"
                    // required
                    //   value={"HandJob"}
                    
                  ></input>
                </div>

                <label for="Workplace-Type" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Workplace Type
                </label>
                <div
                  className="input-filed input-filed-cls"
                  style={{ flexDirection: "row" }}
                >
                  <select
                    className="form-select"
                    name="WorkplaceType"
                    id="background"
                  
                  >
                    <option selected disabled>
                      Select the Workplace Type
                    </option>
                    <option value="1">On-site</option>
                    <option value="2">Hybrid</option>
                    <option value="3">Online</option>
                  </select>
                </div>
                <label for="Location" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Location
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="tel"
                    className="form-control"
                    id="Location"
                    placeholder="Job Location"
                    // required
                   
                  ></input>
                </div>

                {/* </div>
              <label for="background" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Background
              </label>
              <div
                className="input-filed input-filed-cls"
                style={{ flexDirection: "row" }}
              >
                <select
                  className="form-select"
                  name="background"
                  id="background"
                  disabled={props.disabled && disabled}
                >
                  <option selected disabled>
                    Select the requiring Background
                  </option>
                  <option value="Background1">Electrical Engineer</option>
                  <option value="Background2">Civil Engineer</option>
                  <option value="Background3">Software Engineer</option>
                  <option value="Background4">Accounting</option>
                  <option value="Background4">Doctor</option>
                </select>
              </div> */}
                {/* <label for="flyer" className="">
                    <span className="asterisk-mark">*</span>Flyer
                  </label>
                  <div className="input-filed input-filed-cls">
                    <input
                      type="file"
                      className=" form-control"
                      onChange={handleChange}
                      disabled={props.disabled && disabled}
                    />
                  </div> */}
              </div>
              <div className="container1-flex-item">
                <label for="Job-Type" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Type
                </label>
                <div
                  className="input-filed input-filed-cls"
                  style={{ flexDirection: "row" }}
                >
                  <select
                    className="form-select"
                    name="JobType"
                    id="background"
                 
                  >
                    <option selected disabled>
                      Job Type
                    </option>
                    <option value="1">Full-time</option>
                    <option value="2">Part-Time</option>
                    <option value="3">Internship</option>
                    <option value="4">Temporary</option>
                    <option value="5">Volunteer</option>
                    <option value="6">Other</option>
                  </select>
                </div>
                <label for="salaryRange" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Salary Range
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
                <label for="Near-Town" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Nearest Town
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="Near-Town"
                    placeholder="Nearest Town"
                    // required
         
                  ></input>
                </div>
                {/* <label for="levelOfEducation" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Level of Education
              </label>
              <div className="input-filed input-filed-cls">
                <select
                  className="form-select"
                  name="levelOfEducation"
                  id="levelOfEducation"
                  disabled={props.disabled && disabled}
                >
                  <option selected disabled>
                    Requiring Level of Education
                  </option>
                  <option value="Background1">Associate Degree</option>
                  <option value="Background2">Bachelor</option>
                  <option value="Background3">High School</option>
                  <option value="Background4">Masters</option>
                  <option value="Background4">Other Tertiary Education</option>
                </select>
              </div> */}
              </div>

              <div className="container1-flex-item">
                <label for="companyEmail" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Company Email
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="text"
                    className="form-control"
                    id="companyEmail"
                    placeholder="Company Email"
          
                    // required
                  ></input>
                </div>
                <label for="ContactNumber" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Contact Number{" "}
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="tel"
                    className="form-control"
                    id="ContactNumber"
                    placeholder=" Contact Number"
               
                    // required
                  ></input>
                </div>
                <label for="dueDate" className="">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Due Date
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Due Date"
            
                    // required
                  ></input>
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}></div>
        <button type="Submit" class="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
          
)
            }