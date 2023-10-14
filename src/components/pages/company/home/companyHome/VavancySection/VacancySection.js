import React, { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./VacancySection.css";
import {URL} from "../../../../../../env";
import {toast} from "react-toastify";


function handleSave() {

}

const VacancySection = (props) => {
  const [vacancy, setvacancy] = useState({});
  const { vacancyId } = useParams();
  const user = JSON.parse(localStorage.getItem('user')); //company
  const jobVUrl = URL +`/api/vacancies/${user._id}/${vacancyId}`; //company Id +VacancyId
  
  useEffect(() => {
    setFile("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg");
    // Fetch job vacancies
    axios.get(jobVUrl)
        .then(response => {
            setvacancy(response.data);
            if (!response.data.flyer) {
              setFile("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg");
            } else {
              setFile(response.data.flyer);
            }
            setJobPosition(response.data.jobPosition || '');
            setContactNumber(response.data.contactNumber || '');
            setBackground(response.data.background || '');
            setSalary(response.data.salary || '');
            setLevelOfEducation(response.data.levelOfEducation|| '');
            setCompanyEmail(response.data.companyEmail||'');
            setCompanyLocation(response.data.companyLocation|| '');
            setDueDate(response.data.dueDate || '');
            setJobDescription(response.data.jobDescription|| '');
            setJobType(response.data.jobType || '');
            setJobWorkType(response.data.jobWorkType || '');

        })
        .catch(error => {
            console.log("Failed to fetch job vacancy");
            console.error('Failed to fetch job vacancy:', error);
        });
        
}, [jobVUrl]);

  const [file, setFile] = useState("");
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
    if (!jobPosition || !contactNumber ||!jobWorkType|| !jobType || !background || !companyName || !salary  || !levelOfEducation || !companyEmail || !companyLocation || !dueDate  || !jobDescription) {
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
      formData.append('JobType', jobType);
      formData.append('jobWorkType', jobWorkType);



      console.log(formData.get('userId'));
      const url = URL +"/api/vacancies";
      await axios.post(url, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );
      window.location.href = 'grp13/Response-vac';
      toast.success("job successfully posted");
    } catch (error) {
      console.log("Fail to post job");
      console.error('Failed to post the job:', error);
      // Handle error, e.g., show an error message
    }
  }

  const [jobPosition, setJobPosition] = useState('');
  const [contactNumber, setContactNumber] = useState(user.contactNumber||'');
  const [background, setBackground] = useState('');
  const [companyName, setCompanyName] = useState(`${user.firstName || ' '}${user.middleName || ' '}${user.lastName || ' '}`);
  const [salary, setSalary] = useState('');
  const [levelOfEducation, setLevelOfEducation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyLocation, setCompanyLocation] = useState(vacancy.companyLocation||'');
  const [dueDate, setDueDate] = useState(vacancy.dueDate||'');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState(vacancy.jobType||'');
  const [jobWorkType, setJobWorkType] = useState(vacancy.jobWorkType||'');


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

  function handleChangeLevejobType(e) {
    setJobType(e.target.value);
  }
  function handleChangejobWorkType(e) {
    setJobWorkType(e.target.value);
  }







  //   console.log(props.data[0].jobPosition)
  return (
      <div>

        <div className="container">
          <form>
            <div className="flex-container1">
              <div
                  className="container1-flex-item"
                  style={{ display: "flex", flexDirection: "column" }}
              >
                <img className="profile-photo-3" src={file} alt="Profile Photo" />

                <label form="flyer" className="">
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
                <label form="jobPosition" className="">
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
                      value={jobPosition}
                      onChange={handleChangeJobPosition}
                      disabled={props.disabled && disabled}
                  />
                </div>

                <label form="contactNumber" className="">
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
                      value={contactNumber}
                      onChange={handleChangeContactNumber}
                      disabled={props.disabled && disabled}
                  />
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
                      value={background}
                      onChange={handleChangeBackground}
                      disabled={props.disabled && disabled}
                  >
                    <option value="" selected disabled>
                      Select the requiring Background
                    </option>
                    <option value="Electrical Engineer">Electrical Engineer</option>
                    <option value="Civil Engineer">Civil Engineer</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </div>

                <label for="background" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                  Work Place Type
                </label>
                <div className="input-filed input-filed-cls">
                  <select
                      className="form-select"
                      name="jobWorkType"
                      id="jobWorkType"
                      value={jobWorkType}
                      onChange={handleChangejobWorkType}
                      disabled={props.disabled && disabled}
                  >
                    <option value=""  selected disabled>
                      Work Place Type
                    </option>
                    <option value="Online">Online</option>
                    <option value="Onsite">Onsite</option>
                    <option value="High School">Hybrid</option>
                  </select>
                </div>

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
                      value={companyName}
                      onChange={handleChangeCompanyName}
                      disabled={props.disabled && disabled}
                  />
                </div>
                <label for="salaryRange" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                  Monthly Salary
                </label>
                <div
                    className="input-filed input-filed-cls"
                    style={{ display: "flex", flex: "row", columnGap: "20px" }}
                >
                  <input
                      type="number"
                      className="form-control"
                      id="salary"
                      placeholder="Salary"
                      // style={{ width: "50%" }}
                      min="0"
                      value={salary}
                      onChange={handleChangeSalary}
                      disabled={props.disabled && disabled}
                  />
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
                      value={levelOfEducation}
                      onChange={handleChangeLevelOfEducation}
                      disabled={props.disabled && disabled}
                  >
                    <option value=""  selected disabled>
                      Requiring Level of Education
                    </option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="High School">High School</option>
                    <option value="Masters">Masters</option>
                    <option value="Other Tertiary Education">Other Tertiary Education</option>
                  </select>
                </div>

                <label for="background" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                  Job Type
                </label>                 
                <div className="input-filed input-filed-cls">
                  <select
                      className="form-select"
                      name="jobType"
                      id="jobType"
                      value={jobType}
                      onChange={handleChangeLevejobType}
                      disabled={props.disabled && disabled}
                  >
                    <option value=""  selected disabled>
                      Job Type
                    </option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Volunteer">Volunteer</option>
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
                      value={companyEmail}
                      onChange={handleChangeCompanyEmail}
                      disabled={props.disabled && disabled}
                  />
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
                      value={companyLocation}
                      onChange={handleChangeCompanyLocation}
                      disabled={props.disabled && disabled}
                  />
                </div>
                <label for="dueDate" className="">
                <span className="asterisk-mark">
                  <span className={`${props.disabled && "d-none"}`}>* </span>
                </span>
                  Due Date
                </label>
                <div className="input-filed input-filed-cls">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Due Date"
                      value={dueDate}
                      onChange={handleChangeDueDate}
                      disabled={props.disabled && disabled}
                  />
                </div>
              </div>
            </div>

            <div className="flex-container1">
              <div className="container1-flex-item">

                <label form="jobDescription" className="">
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
                    value={jobDescription}
                    onChange={handleChangeJobDescription}
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
                <button type="submit" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault(); // Prevent the default form submission behavior
                  handleSubmit().then(() => {});
                }}>
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
