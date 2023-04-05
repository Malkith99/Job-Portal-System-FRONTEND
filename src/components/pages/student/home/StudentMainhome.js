import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import StudentHome from "./studentHome/StudentHome";

function StudentMainhome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Student Home</Link>
    </>
  );
  return (
    <div>
      <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}
        />
        <StudentHome/>
        <Footer/>
      </div>
    </div>

  );
}

export default StudentMainhome;
