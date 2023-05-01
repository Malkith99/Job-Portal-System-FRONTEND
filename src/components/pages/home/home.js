import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import MainHeader from "../../mainHeader/MainHeader";
import "./home.css";

function Home({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Home</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className="container">
        <div className="d-flex flex-lg-row flex-column">
          <div className="home-left-div p-4 w-100 ">
            <h1 className="main-head">About</h1>
            <p className="text-left">
            The Job Portal System website for the University of Ruhuna Career Guidance Unit is a comprehensive online platform designed to help students and recent graduates find employment opportunities that match their skills and interests. This website is a powerful tool that connects job seekers with potential employers in a seamless and efficient manner. The website features an easy-to-use interface that allows users to create a profile, upload their resume and cover letter, and search for jobs based on their preferences. The platform also provides a job matching service that suggests job openings based on the user's profile and qualifications. This feature helps users save time by eliminating the need to sift through numerous job postings that may not be a good fit.
            Employers can also use the Job Portal System website to post job openings and search for potential candidates. The platform enables them to filter job seekers based on their qualifications, experience, and other criteria to ensure that they find the right fit for their organization. The Career Guidance Unit at the University of Ruhuna is committed to providing students and recent graduates with the resources and support they need to succeed in their careers. The Job Portal System website is just one of the many tools and services that the unit provides to help students and recent graduates achieve their career goals.

            </p>
            
          </div>
          <div className="home-right-div p-4 w-100 d-flex flex-column">
            <h1 className="main-head">Are you?</h1>
            <Link to="/student-login" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Student
            </Link>
            <Link to="/lecturer-login" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Lecturer
            </Link>
            <Link to="/company-login" type="button" className="form-control text-white student-button btn btn-primary m-2">
              A Company
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
