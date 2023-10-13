import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VacancySection.css";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {URL} from "../../../../../../env";
const VacancySection = () => {
  const [file, setFile] = useState("");
  const [vacancy, setVacancy] = useState(null);
  const[companyName,setCompanyName]=useState("");
  const[jobPosition,setJobPostion]=useState("");
  const [company, setCompany] = useState(null);

  const { vacancyId } = useParams();
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
  const [jbuser] = useState(JSON.parse(localStorage.getItem("jbusers") || "{}"));
console.log(jbuser);

  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    // Fetch the vacancy data
    const fetchVacancy = async () => {
      try {
        const response = await axios.get(URL + `/api/studentVacancies/${vacancyId}`);
        setVacancy(response.data.vacancy);
        setCompanyId(response.data.userId); // Set the companyId from the response
        setFile(response.data.vacancy.flyer);
        setCompanyName(response.data.vacancy.companyName);
        setJobPostion(response.data.vacancy.jobPosition);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVacancy().then(r => {});
  }, [vacancyId]);



// Find the user with userId equal to companyId
  const userWithMatchingId = jbuser.find(user => user._id === companyId);

// Log the user if found
  if (userWithMatchingId) {
    console.log("User with matching userId:", userWithMatchingId);
  } else {
    console.log("User not found with companyId:", companyId);
  }





  const [alertMessage, setAlertMessage] = useState('');
  const showAlert = (message) => {
    setAlertMessage(message);
    alert(message);
  };
  const handleApply = async (e) => {

    e.preventDefault();

    try {
      const newResponse = {
        companyId: companyId,
        vacancyId: vacancy._id,
        studentId: user._id,
        responseDate: Date.now(),
        comment: 'Applied for the vacancy',
      };
      const newApplication = {
        companyId: companyId,
        vacancyId: vacancy._id,
        studentId: user._id,
        companyName: companyName,
        jobPosition: jobPosition,
        responseDate: Date.now(),
        comment: 'Applied for the vacancy',
      };

      const url = URL+'/api/responses';
      const aUrl=URL+'/api/applications';
      const response = await axios.post(url, newResponse);
      const application =await axios.post(aUrl,newApplication);
   
      // call the application model by passing the data
      console.log('Response saved:', response.data);
      console.log("application"   +  application);
      window.location = "/grp13/student-home";

      // Display a success toast message
      toast.success('Application submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      showAlert('Application submitted successfully!');

      // Add any additional logic or feedback to the user
    } catch (error) {
      console.error(error);

      if (
          error.response &&
          error.response.data.error === 'Student has already applied for this vacancy'
      ) {
        showAlert('You have already applied for this vacancy.');
        window.location = "/grp13/student-home";
        // Display a toast with the error message
        toast.error('You have already applied for this vacancy.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        showAlert('Failed to submit application. Please try again later.');
        // Display a generic error message
        toast.error('Failed to submit application. Please try again later.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
  };











  const disabled = true; // Set the disabled state

  return (
      <div>
        <div className="container">
          <h2 style={{ fontFamily: "Georgia", fontWeight: "bold" }}>
            Vacancy Details
          </h2>
          {vacancy && (
              <form>
                <div className="flex-container1">
                  <div className="container1-flex-item">
                    <img className="profile-photo-3" src={file} alt="Profile Photo" />

                    <label htmlFor="flyer">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>

                    </label>

                  </div>
                </div>
                <div className="flex-container2">
                <div className="container2-flex-item-sub-item1">
                    <label htmlFor="companyName">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Company Name
                    </label>
                    <div className="input-filed input-filed-cls">
                      <input
                          type="text"
                          className="form-control"
                          id="companyName"
                          placeholder="Company Name"
                          value={userWithMatchingId.firstName +"  " +userWithMatchingId.lastName ||""}
                          disabled={disabled}
                      />
                    </div>
                </div>
                  <div className="container2-flex-item-sub-item1">
                    <label htmlFor="jobPosition">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Job Position
                    </label>
                    <div className="input-filed input-filed-cls">
                      <input
                          type="text"
                          className="form-control"
                          id="jobPosition"
                          placeholder="Job Position"
                          value={vacancy.jobPosition}
                          disabled={disabled}
                      />
                    </div>
                  </div>
                  <div className="container2-flex-item-sub-item1">
                    <label htmlFor="contactNumber">
                      <span className="asterisk-mark">
                      <span className={`${disabled && "d-none"}`}>* </span>
                      </span>
                      Contact Number
                    </label>
                    <div className="input-filed input-filed-cls">
                      <input
                          type="tel"
                          className="form-control"
                          id="contactNumber"
                          placeholder="Contact Number"
                          value={userWithMatchingId.contactNumber||""}
                          disabled={disabled}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="flex-container2"> */}
                  {/* <div className="container1-flex-item"> */}
                    {/* Other form fields */}
                  {/* </div> */}
                {/* </div> */}
                <div className="flex-container2">
                <div className="container2-flex-item-sub-item1">
                    <label htmlFor="background">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Background
                    </label>
                    <div className="input-filed input-filed-cls" style={{ flexDirection: "row" }}>
                      <input
                          className="form-select"
                          name="background"
                          id="background"
                          disabled={disabled}
                          value={vacancy.background}
                      />
                    </div>
                  </div>

                  <div className="container2-flex-item-sub-item1">
                      <label htmlFor="salaryRange">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Salary
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
                          value={vacancy.salary||""}
                          disabled={disabled}
                      />

                    </div>
                    </div>
                    <div className="container2-flex-item-sub-item1"></div>
                </div>

                <div className="flex-container2">
                <div className="container2-flex-item-sub-item1">
                    <label htmlFor="companyEmail">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Company Email
                    </label>
                    <div className="input-filed input-filed-cls">
                      <input
                          type="text"
                          className="form-control"
                          id="companyEmail"
                          placeholder="Company Email"
                          value={userWithMatchingId.email||""}
                          disabled={disabled}
                      />
                    </div>
                  </div>

                  <div className="container2-flex-item-sub-item1">
                      <label htmlFor="companyLocation">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Company Location
                    </label>
                    <div className="input-filed input-filed-cls">
                      <input
                          type="text"
                          className="form-control"
                          id="companyLocation"
                          placeholder="Company Location"
                          value={userWithMatchingId.location||""}
                          disabled={disabled}
                      />
                    </div>
                  </div>
                    <div className="container2-flex-item-sub-item1">
                          <label htmlFor="dueDate">
                    <span className="asterisk-mark">
                      <span className={`${disabled && "d-none"}`}>* </span>
                    </span>
                        Due Date
                      </label>
                      <div className="input-filed input-filed-cls">
                        <input
                            type="text"
                            className="form-control"
                            id="dueDate"
                            placeholder="Due Date"
                            value={vacancy.dueDate||""}
                            disabled={disabled}
                        />
                      </div>
                    </div>
                    <div className="container2-flex-item-sub-item1">
                    <label htmlFor="levelOfEducation">
                    <span className="asterisk-mark">
                      <span className={`${disabled && "d-none"}`}>* </span>
                    </span>
                        Level of Education
                      </label>
                      <div className="input-filed input-filed-cls">
                        <input
                            className="form-select"
                            name="levelOfEducation"
                            id="levelOfEducation"
                            disabled={disabled}
                            value={vacancy.levelOfEducation||""}
                        >

                        </input>
                      </div>
                  </div>
                </div>

                <div className="flex-container2">
                  <div className="container2-flex-item-sub-item1">
                    <label htmlFor="skills">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Work Type
                    </label>
                    <div className="input-filed input-filed-cls">
                  <textarea
                      className="form-control"
                      // style={{ height: "80px" }}
                      id="Work Type"
                      placeholder="Work Type"
                      value={vacancy.jobWorkType||""}
                      disabled={disabled}
                  ></textarea>
                    </div>
                  </div>
                  <div className="container2-flex-item-sub-item1">
                    
                  </div>
                </div>

                <div className="flex-container2">
                  <div className="container2-flex-item-sub-item1">
                    <label htmlFor="jobDescription">
                  <span className="asterisk-mark">
                    <span className={`${disabled && "d-none"}`}>* </span>
                  </span>
                      Job Description
                    </label>
                    <div className="input-filed input-filed-cls">
                  <textarea
                      className="form-control"
                      style={{ height: "100px",width:"75%" }}
                      id="jobDescription"
                      placeholder="Job Description"
                      disabled={disabled}
                      value={vacancy.jobDescription||""}
                  ></textarea>
                    </div>
                  </div>
                </div>

                {alertMessage && (
                    <div className="alert">
                      {alertMessage}
                      <button onClick={() => setAlertMessage('')}>&times;</button>
                    </div>
                )}



                {vacancy && user && (
                    <form>
                      {/* Existing code... */}
                      {/* Job apply button */}
                      <div className="flex-container1">
                        <div className="container1-flex-item">
                          <button
                              className="btn btn-primary"

                              onClick={handleApply}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </form>
                )}



              </form>
          )}
        </div>
        <p></p>
      </div>
  );
};

export default VacancySection;
