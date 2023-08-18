import React, { useState } from "react";
import axios from 'axios';
import "./VacancySection.css";
import {URL} from "../../../../../../env";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Popup from "../../../../../popup/popup";
import JobDetails from "./JobDetailPopup";
import FlyerPopup from "./flyerPopup";
import JobInfo from "./JobInfoPopup";
import EditIcon from "@mui/icons-material/Edit";
function handleSave() {

}

const VacancySection = (props) => {

  const user = JSON.parse(localStorage.getItem('user'));
  const [file, setFile] = useState(
      "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [disabled, setDisabled] = useState(true);
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

  async function handleSubmit() {
    //setDisabled(true);
    // Perform validation checks
    if (!jobPosition || !contactNumber || !background || !companyName || !salary  || !levelOfEducation || !companyEmail || !companyLocation || !dueDate  || !jobDescription) {
      console.log('Please fill in all the required fields.');
      alert('Please fill in all the required fields.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('flyer', file); // Assuming you have a variable `flyerFile` that contains the selected file

      // Add other form fields to the FormData
      formData.append('jobPosition', jobPosition);
      formData.append('contactNumber', contactNumber);
      formData.append('background', background);
      formData.append('companyName', companyName);
      formData.append('salary', salary);
      formData.append('levelOfEducation', levelOfEducation);
      formData.append('companyEmail', companyEmail);
      formData.append('companyLocation', companyLocation);
      formData.append('dueDate', dueDate);
      formData.append('jobDescription', jobDescription);
      formData.append('userId', user._id);

      console.log(formData.get('userId'));
      const url = URL +"/api/vacancies";
      await axios.post(url, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );
      window.location.href = 'grp13/company-home';
      toast.success("job successfully posted");
      Alert();
    } catch (error) {
      console.log("Fail to post job");
      console.error('Failed to post the job:', error);
      // Handle error, e.g., show an error message
    }
  }







  const [jobPosition, setJobPosition] = useState('');

  const [contactNumber, setContactNumber] = useState('');
  const [background, setBackground] = useState('');
  const [companyName, setCompanyName] = useState(`${user.firstName || ' '}${user.middleName || ' '}${user.lastName || ' '}`);

  const [salary, setSalary] = useState('');
  const [levelOfEducation, setLevelOfEducation] = useState('');
  const [companyEmail, setCompanyEmail] = useState(user.email||'');
  const [companyLocation, setCompanyLocation] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [jobDescription, setJobDescription] = useState('');



  function handleChangeJobPosition(e) {
    setJobPosition(e.target.value);
  }

  function handleChangeContactNumber(e) {
    setContactNumber(e.target.value);
  }

  function handleChangeBackground(e) {
    setBackground(e.target.value);
  }

  function handleChangeCompanyName(e) {
    setCompanyName(e.target.value);
  }


  function handleChangeSalary(e) {
    setSalary(e.target.value);
  }

  function handleChangeLevelOfEducation(e) {
    setLevelOfEducation(e.target.value);
  }

  function handleChangeCompanyEmail(e) {
    setCompanyEmail(e.target.value);
  }

  function handleChangeCompanyLocation(e) {
    setCompanyLocation(e.target.value);
  }

  function handleChangeDueDate(e) {
    setDueDate(e.target.value);
  }


  function handleChangeJobDescription(e) {
    setJobDescription(e.target.value);
  }

  const [openFlyerPopup, setOpenFlyerPopup] = useState(false);
  const handleFlyerPopup = (data1) => {
    setFile(data1);
  };

 const [openJobPopup, setOpenJobPopup] = useState(false);
  const handleJobDetailsInfo = (data2) => {
    setFile(data2);
  };
  const [openJobinfoPopup, setOpenJobInfoPopup] = useState(false);
  const handleJobInfo = (data3) => {
    setFile(data3);
  };


  const Alert = () =>{
    Swal.fire('Job', 'Posted',
        'success')
  }





  //   console.log(props.data[0].jobPosition)
 
    return (
      <div>
        <div className="container mt-3">
          <form>
            <div className="flex-container1">
              <div
                className="container1-flex-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "25px",
                }}
              >
                <img className="profile-photo-3"  src={file} alt="Flyer Image" />
                <label for="flyer" className="label-title">
                  <span className="asterisk-mark">
                    <span className={`${props.disabled && "d-none"}`}>* </span>
                  </span>
                  Job Vacancy Flyer
                  <Button onClick={() => setOpenFlyerPopup(true)}>
                    {" "}
                    <EditIcon style={{ color: "#808080", marginRight: "8px" }} />
                  </Button>
                  {openFlyerPopup && (
                    <Popup
                      title="Insert the new Flyer "
                      openPopup={openFlyerPopup}
                      setOpenPopup={setOpenFlyerPopup}
                    >
                      <FlyerPopup sendData={handleFlyerPopup} />
                    </Popup>
                  )}
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
            <h4 className="sub-headings">Job Details: </h4>
            <Card
              style={{ marginBottom: "25px", marginTop: "25px", padding: "25px" }}
            >
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
                      disabled={props.disabled && disabled}
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
                      disabled={props.disabled && disabled}
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
                      disabled={props.disabled && disabled}
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
                      disabled={props.disabled && disabled}
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
                      disabled={props.disabled && disabled}
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
                      disabled={props.disabled && disabled}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setOpenJobPopup(true)}
                style={{ marginBottom: "-10px", marginLeft: "auto" }}
              >
                Edit
              </button>
              {openJobPopup && (
                <Popup
                  title="Edit Job Details Info"
                  openPopup={openJobPopup}
                  setOpenPopup={setOpenJobPopup}
                >
                  <JobDetails sendData={handleJobDetailsInfo} />
                </Popup>
              )}
              {/* </div>
            </div> */}
            </Card>
            <h4 className="sub-headings">About the job </h4>
            <Card
              style={{ marginBottom: "25px", marginTop: "25px", padding: "25px" }}
            >
              <div className="flex-container1">
                {/* <div className="flex-container2"> */}
                <div className="container1-flex-item ">
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
                    {/* </div> */}
                  </div>
  
                  <label for="skills" className="">
                    <span className="asterisk-mark">
                      <span className={`${props.disabled && "d-none"}`}>* </span>
                    </span>
                    Skills and Experiences Required
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
                </div>
              </div>
              <button
              type="button"
              className="btn btn-primary"
              onClick={() => setOpenJobInfoPopup(true)}
              style={{ marginBottom: "-10px", marginLeft: "auto" }}
            >
              Edit
            </button>
            {openJobinfoPopup && (
              <Popup
                title="Edit Job Info"
                openPopup={openJobinfoPopup}
                setOpenPopup={setOpenJobInfoPopup}
              >
                <JobInfo sendData={handleJobInfo} />
              </Popup>
            )}
            </Card>
  
            <div className={`${props.disabled && "d-none"}`}>
              <div className="input-filed input-filed-cls">
                <button type="submit" className="btn btn-primary" onClick={Alert}>
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