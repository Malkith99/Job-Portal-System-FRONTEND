import React, { useState, useEffect } from "react";
import MainHeader from "../../../../mainHeader/mainHeader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as ScrollLink, Element } from "react-scroll";
import "./LecturerHome.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function LecturerHome() {
  const navigate=useNavigate();
  const referneces=JSON.parse(localStorage.getItem("jbresponses") || "{}");
  let findStudentByID=(studentId)=>{
    try {
      const jbusers = JSON.parse(localStorage.getItem("jbusers"));
      console.log(studentId);
      // Display student name
      const student = jbusers.find((student) => student._id === studentId);
  
      if (student) {
        // If a student is found with the given studentId, you can access its data
        console.log("Student Name:", student.firstName, student.lastName);
        return student; // Return the student data
      } else {
        console.log("Student not found");
        return null; // Return null if the Student is not found
      }
    } catch (error) {
      console.error("Error retrieving jbusers from local storage:", error.message);
      return null; // Return null in case of an error
    }
  };
  
//   useEffect(() => {
//     console.log(user);
//     // Fetch job vacancies
//     axios.get(rUrl)
//         .then(response => {
//             setJobReferences(response.data);
//         })
//         .catch(error => {
//             console.log("Failed to fetch required Reference");
//             console.error('Failed to fetch required Reference :', error);
//         });

//     // Fetch responses
//     // axios.get(rUrl)
//     //     .then(response => {
//     //         setResponses(response.data);
//     //     })
//     //     .catch(error => {
//     //         console.error('Failed to fetch responses:', error);
//     //     });
// }, []);
  // const [jobapplications] = useState([
  //   {
  //     id: 1,
  //     title: "Job Application 1:",
  //     text: "Job Application 1 ",
  //   },
  //   {
  //     id: 2,
  //     title: "Job Application 2:",
  //     text: "Job Application 2 ",
  //   },
  //   {
  //     id: 3,
  //     title: "Job Application 3:",
  //     text: "Job Application 3 ",
  //   },
  //   {
  //     id: 4,
  //     title: "Job Application 4:",
  //     text: "Job Application 4 ",
  //   },
  //   {
  //     id: 5,
  //     title: "Job Application 5:",
  //     text: "Job Application 5 ",
  //   },
  //   {
  //     id: 6,
  //     title: "Job Application 6:",
  //     text: "Job Application 6 ",
  //   },
  //   {
  //     id: 7,
  //     title: "Job Application 7:",
  //     text: "Job Application 7 ",
  //   },
    
  // ]);
  const Alert = () =>{
    Swal.fire('Approved', 'Succesfully', 
    'success')
  }

  return (
       
    <div className="add-jobs container">
      <h1 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Job Applications :</h1>
      <div>
        <div>
          <section className="res-sec">
            <div className="container">
              <div className="jobapplications responses">
                {referneces.map((response) => (
                   response.vacancy.map((vacancy)=>(
                     vacancy.responses.map((responseItem,i)=>{
                      const student=findStudentByID(responseItem.studentId);
                  return(
                    <div key={i} className="jobapplication">
                    <p className="job-pool-card-para">
                      {student.firstName} {student.lastName}</p>
                      <p className="job-pool-card-para">
                      {student._id}</p>
                    <div className="button-div">
                      <button
                        className="btn btn-primary butdet"
                        onClick={()=>{
                          navigate(`/student-application-for-lecturer/${student._id}`);
                        }}
                        style={{ background: "#2B547E", border: "none", marginRight: "25px", marginLeft:"-1px" }}
                      >
                        See the Application
                      </button>
                      <button
                        onClick={Alert}
                        className="btn btn-primary accept butdet"
                        style={{ background: "rgb(69, 117, 85)", marginRight: "25px" , border:"none"}}
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                  );

                    })
                   ))
                ))}
              </div>
            </div>
          </section>
        </div>
        <p></p>
      </div>
    </div>
  )
}

export default LecturerHome