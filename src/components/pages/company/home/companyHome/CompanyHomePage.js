import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
// import CompanyHome from "./companyHome/CompanyHome";
import img_company from "../../../../../images/strip_company.jpg";
import stripImageC from "../../../../../images/strip_company.jpg";
import cv_image from "../../../../../../src/images/im5.jpg";
// import { Button } from "react-scroll";
// import Button from "@mui/material";
import "./CompanyHomePage.css"
import { Card } from "@mui/material";
import Button from "@mui/material/Button";
function CompanyHomePage({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-home">Company Home</Link>
      <Link to="/company-profile">Profile</Link>
    
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div className="container">
          {/* ////////////////////////////////  company home page start ////////////////////////////////////////// */}
          <div  style={{display:"flex",flexDirection:"row",marginLeft:"5%",marginRight:"5%"}}>
            <div style={{flexBasis:"50%",marginTop:"5%"}}>
              <h1
                className="section_1-title text-style"
                style={{fontSize:"40px"}}>
                Hire the <br />Right person for your Company!
                </h1>
                <p className="para-style"
                  style={{fontFamily:"Georgia",marginTop:"5px"}}>
                No matter the skills, experience level, or qualifications you're
                looking for, <br />
                We connect you with the perfect candidates. Simplify your hiring
                process and build a talented team with us.
                </p>
                <div className="button-container">
                <Link to="/vacancy-page">
                  <button type="button" className="btn btn-primary btn-lg">
                    Post a Job
                  </button>
                </Link>
              </div>
            </div>
            
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <img
                    src={stripImageC}
                    className="image"
                    alt="Strip"
                    style={{
                      textAlign:"right",
                      // marginTop: "-120px",
                      // marginRight: "-50px",
                      }}/>
            </div>
            
          </div>
        <h4 style={{ fontFamily: "Georgia", marginTop: "5%",marginLeft:"5%"}}>
          WHY WE ARE UNIQUE?
        </h4>
        <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginRight: "20px",
          }}
        >
          <div class="custom-card-container">
            <Card>
              <div class="custom-card">
                <h3 class="custom-card-heading">Discover your perfect match</h3>
                <span class="custom-card-description">
                  We automatically group applicants who meet your requirements
                  to the top of your dashboard so you can easily view your
                  shortlist.
                </span>
              </div>
            </Card>
            <Card>
              <div class="custom-card">
                <h3 class="custom-card-heading">
                  Seek for recommended candidate{" "}
                </h3>
                <span class="custom-card-description">
                  You have oppotunity to apply for recomendation from University
                  lecturer about the candidate
                </span>
              </div>
            </Card>
            <Card>
              <div class="custom-card">
                <h3 class="custom-card-heading">
                  Reach Qualified Candidate directly from universities.
                </h3>
                <span class="custom-card-description">
                  We provide you the fresh graduates who has optimum
                  qualifiacations matched for you.
                </span>
              </div>
            </Card>
            <Card>
              <div class="custom-card">
                <h3 class="custom-card-heading">Reach Fast and Easily</h3>
                <span class="custom-card-description">
                  Platform unique for the university to reach candidates easily
                  and super fast.
                </span>
              </div>
            </Card>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            src={cv_image}
            className="image2"
            alt="Strip"
            style={{ marginRight: "20px", marginLeft: "50px", padding: "20px" }}
          />
          <div className="block">
            <div className="box">
              <div className="word-text">
                Collect Your Application from Here!
              </div>
            </div>
            <div className="button-box">
              <Link to="/Response-vac">
                <Button>
                  <span className="button-text">Click Here</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
        </div>
      <Footer />
    </div>
  );
}

export default CompanyHomePage;
