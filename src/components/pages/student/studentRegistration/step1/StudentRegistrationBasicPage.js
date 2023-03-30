import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/Footer";
import MainHeader from "../../../../mainHeader/MainHeader";
import StudentRegistrationBasic from "./studentRegistrationBasic/StudentRegistrationBasic";

export default function StudentRegistrationBasicPage({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/student-register">Student Registration</Link>
      <Link to="/student-register">Step 1</Link>
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
