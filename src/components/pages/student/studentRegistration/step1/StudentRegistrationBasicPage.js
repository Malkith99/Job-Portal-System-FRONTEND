import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/Footer";
import MainHeader from "../../../../MainHeader/MainHeader";
import StudentRegistrationBasic from "./studentRegistrationBasic/StudentRegistrationBasic";

export default function StudentRegistrationBasicPage({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/student-register">Creating Account</Link>
      
    </>
  );
  return (
    <div>
      <div className="page-container">
        <MainHeader
          content={content}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
        <div className="content-wrap"></div>
        <div>
          <StudentRegistrationBasic />
        </div>
        <Footer />
      </div>
    </div>
  );
}
