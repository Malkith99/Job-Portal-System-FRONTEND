import React from "react";
import MainHeader from "../../../MainHeader/MainHeader";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import { LecturerProfile } from "./LecturerProfile";

function LecturerDetails({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/lecturer-details">Lecture Profile Details</Link>
    </>
  );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />

      <LecturerProfile/>

      <Footer/>
    </div>
  );
}

export default LecturerDetails;
