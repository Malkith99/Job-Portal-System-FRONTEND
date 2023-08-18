import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as ScrollLink, Element } from "react-scroll";
import "./LecturerHome.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import photo1 from "../../../../../images/ph.png";
function ScrollToTopButton() {
  
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      style={{
        position: "fixed",
        zIndex: "1",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        fontSize: "12px",
        borderRadius: "100%",
        backgroundColor: "#009FE5",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <ArrowUpwardIcon />
    </button>
  );
}

function LecturerHome() {

  const navigate = useNavigate()
  
  const [jobapplications] = useState([
    {
      id: 1,
      photo:(photo1),
      name: "Type the Name here",
      vacancy: "Job Vacancy ",
      company:"company name"
    },
    {
      id: 2,
      photo:(photo1),
      name: "Type the Name here",
      vacancy: "Job Vacancy ",
      company:"company name"
    },
    {
      id: 3,
      photo:(photo1),
      name: "Type the Name here",
      vacancy: "Job Vacancy ",
      company:"company name"
    },
    
  ]);


  // const [file, setFile] = useState(
  //   "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  // );

  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollButton(window.pageYOffset > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                {jobapplications.map((jobapplication, i) => (
                  <div key={i} className="jobapplication">
                    <div className="frame">
                      
                      <img
                        className="image-stu"
                        alt="Card Image"
                        src={jobapplication.photo}
                      />
                    </div>
                    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    <h3
                      className="container2-flex-item1 job-pool-card-title"
                      style={{ fontSize: "20px" }}
                    >
                      Name : {jobapplication.name}
                    </h3>
                    <h4 className=""
                      style={{ fontSize: "20px" }}>Company Name : {jobapplication.company}</h4>
                    <p className="job-pool-card-para"> Job Vacancy : {jobapplication.vacancy}</p>
                    </div>
                    <div className="button-div-l">
                      <button
                        className="btn btn-primary butdet"
                        onClick={()=>{
                          navigate(`/student-application-for-lecturer?id=${jobapplication.id}`);
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
                      
                      {/* <button
                        className="btn btn-primary reject butdet"
                        style={{ background: "rgb(128, 57, 57)", marginRight: "5px" }}
                      >
                        Reject
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <p></p>
      </div>
      {showScrollButton && <ScrollToTopButton />}
    </div>
  )
}

export default LecturerHome