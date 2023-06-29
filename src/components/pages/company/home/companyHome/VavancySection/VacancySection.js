import React, { useState } from "react";
import "./VacancySection.css";
const VacancySection = (props) => {
  const [file, setFile] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [disabled, setDisabled] = useState(true);
  function handleEdit() {
    setDisabled(false);
  }

  function handleSave() {
    setDisabled(true);
    // Perform any save operations here
  }
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  //   console.log(props.data[0].jobPosition)
  return (
    <div>
      <div className="container">
        <h2 style={{fontFamily:"gorgia" ,fontSmooth:"10",fontWeight:"10px"}}> Vacancy Details</h2>
        <form>
          <div className="flex-container1">
            <div
              className="container1-flex-item"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img className="profile-photo-3" src={file} alt="Profile Photo" />

              <label for="flyer" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Flyer
              </label>
              <div className="file-in">
                <input
                  type="file"
                  className=" form-control"
                  onChange={handleChange}
                  disabled={props.disabled && disabled}
                />
              </div>
            </div>
          </div>
          <div className="flex-container1">
            <div className="container1-flex-item">
              <label for="jobPosition" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Job Position
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="jobPosition"
                  placeholder="Job Position"
                  // required
                  //   value={"HandJob"}
                  disabled={props.disabled && disabled}
                ></input>
              </div>

              <label for="contactNumber" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Contact Number
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="tel"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number"
                  // required
                 disabled={props.disabled && disabled}
                ></input>
              </div>

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
              </div>
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
              <label for="companyName" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Company Name
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                  
                  disabled={props.disabled && disabled}
                  // required
                ></input>
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
                  disabled={props.disabled && disabled}
                ></input>
                <input
                  type="number"
                  className="form-control"
                  id="salaryRange salaryRangeMax"
                  placeholder="Max"
                  // required
                  style={{ width: "50%" }}
                  min="0"
                  disabled={props.disabled && disabled}
                ></input>
              </div>

              <label for="levelOfEducation" className="">
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
              </div>
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
                  disabled={props.disabled && disabled}
                  // required
                ></input>
              </div>
              <label for="companyLocation" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Company Location
              </label>
              <div className="input-filed input-filed-cls">
                <input
                  type="text"
                  className="form-control"
                  id="companyLocation"
                  placeholder="Company Location"
                  disabled={props.disabled && disabled}
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
                  disabled={props.disabled && disabled}
                  // required
                ></input>
              </div>
            </div>
          </div>

          <div className="flex-container2">
            <div className="container1-flex-item ">
              <label for="skills" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Skills
              </label>
              <div className="input-filed input-filed-cls">
                <textarea
                  type="text"
                  className="form-control"
                  style={{ height: "80px" }}
                  id="skills"
                  placeholder="Skills"
                  disabled={props.disabled && disabled}
                  // required
                ></textarea>
              </div>

              <label for="jobDescription" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                Job Description
              </label>
              <div className="input-filed input-filed-cls">
                <textarea
                  type="text"
                  className="form-control"
                  style={{ height: "100px" }}
                  id="jobDescription"
                  placeholder="Job Description"
                  disabled={props.disabled && disabled}
                  // required
                ></textarea>
              </div>
            </div>
          </div>
          <div className={`${!props.disabled && "d-none"}`}>
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
          <div className={`${props.disabled && "d-none"}`}>
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary">
                Post the Job
              </button>
            </div>
            
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
};

export default VacancySection;
