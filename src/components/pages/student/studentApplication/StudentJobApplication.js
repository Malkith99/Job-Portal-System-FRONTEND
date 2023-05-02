import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import StudentApplication from "./StudentApplication";


export default function StudentJobApplication({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/student/home">Home</Link>
      <Link to="/student/profile">Profile</Link>
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
          <StudentApplication disabled={true} data={null}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
