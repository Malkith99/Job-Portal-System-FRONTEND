import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const StudentApplication = (props) => {


  const { id } = useParams();

  const paramsParts = id.split("&");
  const extractedId = paramsParts[0];
  const extractedStudentId = paramsParts[1] || ""; // In case studentid is not present
  const extractedCompanyId = paramsParts[2] || ""; // Extracting companyId from the id

// Now you have access to the 'student' and 'responseItem' objects
  const storedData = JSON.parse(localStorage.getItem("jbusers"));
  const student = storedData.find(user => user._id === extractedStudentId);
console.log(student);
  const [refree, setRefree] = useState(student ? student.refree : "");
  const [rfName, setRFName] = useState("");
  const [rlName, setRLName] = useState("");


  useEffect(() => {
    // This effect will run whenever the 'refree' state changes
    const selectedRefree = storedData.find(user => user._id === refree);
    if (selectedRefree) {
      setRFName(selectedRefree.firstName);
      setRLName(selectedRefree.lastName);
    } else {
      setRFName(""); // Reset if user not found
      setRLName("");
    }
  }, [refree, storedData]);



  return (
    <div className="container">

      <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
        Student Application :
      </h1>
      <form>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <div
              className="container1-flex-item1 "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <img className="profile-photo-2" src={`data:image/jpeg;base64/${student.profilePhoto}`} alt="Profile Photo" />
              <label form="profilePhoto" className="">
                <span className="asterisk-mark">
                 
                </span>{" "}
                Profile Photo
              </label>
              <div className="file-in">
                <input
                  type="file"
                  className=" form-control"
                  style={{}}

                  disabled={props.disabled}

                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                
              </span>
              Full Name
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"

                disabled={props.disabled}
                value={student.firstName}

                // required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
               
              </span>
              Last Name
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Name with Initials"
                value={student.lastName}
               disabled={props.disabled}
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
               
              </span>
              Date of Birth
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                value={student.DOB}
                disabled={props.disabled}
                required
              ></input>
            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
                
              </span>
              Gender
            </label>
            <div className="input-filed input-filed-cls">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Age"
                  value={student.gender}
                  disabled={props.disabled}
                  required
              ></input>


            </div>
          </div>

          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
               
              </span>
              Contact Number
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Contact Number"
                value={student.contactNumber}
                disabled={props.disabled}
                required
              ></input>
            </div>
          </div>
        </div>

        <div className="flex-container1">
          <div className="container1-flex-item">
            <label for="jobPosition" className="">
              <span className="asterisk-mark">
               
              </span>
              Email
            </label>
            <div className="input-filed input-filed-cls">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={student.email}
                disabled={props.disabled}
                required
              ></input>
            </div>
          </div>




        </div>



        <div className="flex-container1">
          <div
            className="container1-flex-item"
            style={{ paddingBottom: "30px" }}
          >
            <label className="">
              <span className="asterisk-mark">
              
              </span>
              Reference
            </label>

            <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={rfName +" "+ rlName}
                disabled={props.disabled}
            ></input>
          </div>
          <div className="container1-flex-item"></div>
        </div>
        <Link to="/student/home">
          <div>
            {/*
            <div className="input-filed input-filed-cls">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            */}
          </div>
        </Link>

      </form>

    </div>
  );
};

  export default StudentApplication;
