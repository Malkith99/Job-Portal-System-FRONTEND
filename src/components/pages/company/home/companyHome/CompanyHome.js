import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import "./CompanyHome.css";
import VacancySection from "./VavancySection/VacancySection";

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

function CompanyHome() {
  const navigate = useNavigate();

  const [jobpoolm] = useState([
    {
      title: "Job Vacancy 1:",
      text: "Job Vacancy 1 ",
    },
    {
      title: "Job Vacancy 2:",
      text: "Job Vacancy 2 ",
    },
    {
      title: "Job Vacancy 3:",
      text: "Job Vacancy 3 ",
    },
    {
      title: "Job Vacancy 4:",
      text: "Job Vacancy 4 ",
    },
    {
      title: "Job Vacancy 5:",
      text: "Job Vacancy 5 ",
    },
  ]);

  const [responses] = useState([
    {
      title: "Response 1:",
      text: "Name of the Applicant 1 ,aslo can add the cv of the each applicant",
    },
    {
      title: "Response 2:",
      text: "Name of the Applicant 2 ,aslo can add the cv of the each applicant",
    },
    {
      title: "Response 3:",
      text: "Name of the Applicant 3 ,aslo can add the cv of the each applicant",
    },
    {
      title: "Response 4:",
      text: "Name of the Applicant 4 ,aslo can add the cv of the each applicant",
    },
    {
      title: "Response 5:",
      text: "Name of the Applicant 5 ,aslo can add the cv of the each applicant",
    },
    // {
    //   title: "Response 6:",
    //   text: "Name of the Applicant 5 ,aslo can add the cv of the each applicant",
    // },
  ]);

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
      <div className="container">
        <div className="row btn-row">
          {/*column1*/}
          <div className="col scroll-btn-col">
            <div>
              <ScrollLink to="vacancySection" smooth={true} duration={500}>
                <button
                  type="Submit"
                  className="scroll-btn text-white"
                  style={{
                    backgroundColor: "rgb(38, 56, 95)",
                    fontSize: "40px",
                    border: "none",
                  }}
                >
                  Post a Job
                </button>
              </ScrollLink>
            </div>
          </div>
          {/*column2*/}
          <div className="col scroll-btn-col">
            <div>
              <ScrollLink to="responsesSection" smooth={true} duration={500}>
                <button
                  type="Submit"
                  className="scroll-btn text-white"
                  style={{
                    backgroundColor: "#2B547E",
                    fontSize: "40px",
                    border: "none",
                  }}
                >
                  Responses
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
        My Job Pool Section :
      </h1>
      <div>
        <div>
          <section className="res-sec">
            <div className="container">
              <div className="jobpoolm responses">
                {jobpoolm.map((response, i) => (
                  <div key={i} className="response">
                    <h3
                      className="container2-flex-item1 job-pool-card-title"
                      style={{ fontSize: "20px" }}
                    >
                      {response.title}
                    </h3>
                    <p className="job-pool-card-para">{response.text}</p>
                    <div className="button-div">
                      <button
                        className="btn btn-primary butdet"
                        onClick={() => {
                          navigate("/company-job-pool");
                        }}
                        style={{
                          background: "#2B547E",
                          border: "none",
                          marginRight: "25px",
                          marginLeft: "-1px",
                        }}
                      >
                        See the Details
                      </button>
                      <button
                        className="btn btn-primary accept butdet"
                        onClick={() => {
                          navigate("/update-company-job");
                        }}
                        style={{
                          background: "rgb(69, 117, 85)",
                          marginRight: "25px",
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-primary reject butdet"
                        style={{
                          background: "rgb(128, 57, 57)",
                          marginRight: "5px",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <p></p>
      </div>

      <Element name="vacancySection">
        <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
          Vacancy Section :
        </h1>
        <VacancySection disabled={false} data={null} />
      </Element>

      <Element name="responsesSection">
        <h1 className="cmp-headings loginN" style={{ marginBottom: "2rem" }}>
          Responses Section :
        </h1>
        <div className="">
          <div>
            <section className="res-sec">
              <div className="container">
                <div className="responses">
                  {responses.map((response, i) => (
                    <div key={i} className="response responses-sec-response">
                      <h3
                        className="container2-flex-item1"
                        style={{ fontSize: "20px" }}
                      >
                        {response.title}
                      </h3>
                      <p className="">{response.text}</p>
                      <div
                        className="container"
                        style={{ alignItems: "center" }}
                      >
                        <button
                          className="btn btn-primary butdet"
                          onClick={() => {
                            navigate("/student-application-for-company");
                          }}
                          style={{ background: "#2B547E", marginLeft: "-12px" }}
                        >
                          See the Details
                        </button>
                        {/* <button className='btn btn-primary accept' style={{background:" rgb(48, 112, 80"}} >Accept</button>
                                            <button className='btn btn-primary reject' style={{background:"red"}}>Reject</button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <p></p>
        </div>
      </Element>
      {showScrollButton && <ScrollToTopButton />}
    </div>
  );
}

export default CompanyHome;
