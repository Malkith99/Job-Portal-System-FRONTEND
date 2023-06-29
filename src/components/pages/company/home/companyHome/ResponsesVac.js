import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
export default function ResponseVac({ isLogedIn, onLogout }) {
    const content = (
      <>
        {/* <Link to="/company-home">Company Home</Link>
        <Link to="/company-profile">Profile</Link> */}
      </>
    );
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
    

return(
<div >
<MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
<div >
<div>
<section className="res-sec">
            <div className="container">
           < h4 style={{ fontFamily: "Georgia", marginTop: "2%", padding:"10px" , fontWeight:"bold",color:"darkblue"}}>
       Posted Applications
      </h4>
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
                          marginRight: "5px",
                          marginLeft: "1px",
                        }}
                      >
                        View 
                      </button>
                      
                      <button
                          className="btn btn-primary butdet"
                          onClick={() => {
                            navigate("/all-student-responces");
                          }}
                          style={{ background: "#2B547E", marginLeft: "5px" }}
                        >
                          View Applications
                        </button>
                        <button
                        className="btn btn-primary reject butdet"
                        style={{
                          background: "rgb(128, 57, 57)",
                          marginRight: "5px",
                          marginLeft:"5px"
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
</div>
<Footer />

    </div>
);
}