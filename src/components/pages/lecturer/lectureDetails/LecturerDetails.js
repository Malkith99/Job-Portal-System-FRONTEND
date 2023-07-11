import React from "react";
import MainHeader from "../../../mainHeader/mainHeader";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import { LecturerProfile } from "./LecturerProfile";

function LecturerDetails({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/lecturer-home">Home</Link>
      <Link to="/lecturer-details">Profile Details</Link>
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
