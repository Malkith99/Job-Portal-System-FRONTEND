import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
import { Card } from "@mui/material";
import "../companyHome/ResponsesVac.css";
import { BorderColor } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import StreetviewOutlinedIcon from "@mui/icons-material/StreetviewOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
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
      title: "Job Vacancy 1",
      text: "Job Vacancy 1 ",
    },
    {
      title: "Job Vacancy 2",
      text: "Job Vacancy 2 ",
    },
    {
      title: "Job Vacancy 3",
      text: "Job Vacancy 3 ",
    },
    {
      title: "Job Vacancy 4",
      text: "Job Vacancy 4 ",
    },
    {
      title: "Job Vacancy 5",
      text: "Job Vacancy 5 ",
    },
  ]);

  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div>
        <div>
          <section className="res-sec">
            <div className="container">
              <h4
                style={{
                  fontFamily: "Georgia",
                  marginTop: "2%",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Posted Applications
              </h4>
              <div className="jobpoolm responses">
                <div class="container">
                  <div class="row">
                    <div>
                      <div class="card_nw">
                      {jobpoolm.map((response, i) => (
  <div key={i}>
    <div
      class="card-horizontal"
      style={{
        backgroundColor: "D9ECE4",
        marginTop: "10px",
        position: "relative",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        display: "flex",
        padding:"20px"
      }}
    >
      {/* <div style={{ flex: "0 0 250px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ fontSize: "72px", fontWeight: "bold" , justifyContent: "center"}}>
          7 {/* Replace this with your desired digit */}
        {/* </div>
        Number of Applications
      </div> */} 
      <div style={{ flex: "1" }}>
      <h4
            className="container2-flex-item1 job-pool-card-title"
            style={{ fontSize: "20px" }}
          >
            {response.title}
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
      <CalendarMonthOutlinedIcon style={{ marginRight: "5px" }} />
      <small className="text-muted">
        Date: {response.date}
      </small>
    </div>
    <div className="vacancy-count" style={{ display: "flex", alignItems: "center" }}>
      <FilePresentOutlinedIcon style={{ marginRight: "5px" }} />
      <span>Number of Applications: {response.vacancies}</span>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <BusinessOutlinedIcon style={{ marginRight: "5px" }} />
      <span>Location: {response.location}</span>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <PersonPinOutlinedIcon style={{ marginRight: "5px" }} />
      <span>Available Vacancies: {response.availableVacancies}</span>
    </div>
        <div
                                  className="button-div"
                                  style={{
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",
                                    margin: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end", // Align buttons vertically
                                  }}
                                >
                                  <button
                                    className="btn btn-primary butdet"
                                    onClick={() => {
                                      navigate("/company-job-pool");
                                    }}
                                    style={{
                                      background: "#2B547E",
                                      border: "none",
                                      marginRight: "5px",
                                      marginBottom: "2px",
                                      width: "180px "
                                    }}
                                  >
                                    Edit
                                   < BorderColorOutlinedIcon/>
                                  </button>

                                  <button
                                    className="btn btn-primary butdet"
                                    onClick={() => {
                                      navigate("/all-student-responces");
                                    }}
                                    style={{
                                      background: "#2B547E",
                                      marginRight: "5px",
                                      width: "180px "
                                    }}
                                  >
                                    View Applications
                                    <StreetviewOutlinedIcon/>
                                  </button>
                                  <button
                                    className="btn btn-primary reject butdet"
                                    style={{
                                      //color: "darkred",
                                    //  marginRight: "5px",
                                      marginRight: "5px",
                                    //  background: "white",
                                     // borderRadius: "0",
                                      background: "#2B547E",
                                    marginTop:"2px",
                                     width: "180px "
                                    }}
                                  >
                                    Delete
                                    <DeleteOutlinedIcon style={{ marginLeft: "5px" }} />
                                  </button>
                               
       
        </div>
      </div>
    </div>

    <div class="card-footer">
      <small class="text-muted">Posted on 10/07/2023</small>
    </div>
  </div>
))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
