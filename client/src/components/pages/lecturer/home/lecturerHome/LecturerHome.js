import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link as ScrollLink, Element } from "react-scroll";
import "./LecturerHome.css";
import { useNavigate } from "react-router-dom";

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
      title: "Job Application 1:",
      text: "Job Application 1 ",
    },
    {
      id: 2,
      title: "Job Application 2:",
      text: "Job Application 2 ",
    },
    {
      id: 3,
      title: "Job Application 3:",
      text: "Job Application 3 ",
    },
    {
      id: 4,
      title: "Job Application 4:",
      text: "Job Application 4 ",
    },
    {
      id: 5,
      title: "Job Application 5:",
      text: "Job Application 5 ",
    },
    {
      id: 6,
      title: "Job Application 6:",
      text: "Job Application 6 ",
    },
    {
      id: 7,
      title: "Job Application 7:",
      text: "Job Application 7 ",
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
                    <h3
                      className="container2-flex-item1 job-pool-card-title"
                      style={{ fontSize: "20px" }}
                    >
                      {jobapplication.title}
                    </h3>
                    <p className="job-pool-card-para">{jobapplication.text}</p>
                    <div className="button-div">
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
                        className="btn btn-primary accept butdet"
                        style={{ background: "rgb(69, 117, 85)", marginRight: "25px" }}
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