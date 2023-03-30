import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import LecturerRegister from "./lectureRegister/LecturerRegister";
import MainHeader from "../../../mainHeader/MainHeader";
import "./LecturerRegisterMain.css";

function LecturerRegisterMain({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/lecturer">Lecturer Registration</Link>
    </>
  );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <LecturerRegister />
      <Footer />
    </div>
  );
}
export default LecturerRegisterMain;
