import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
import StudentRegistrationBasic from "./studentRegistrationBasic/studentRegistrationBasic";


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
