import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import LecturerHome from "./lecturerHome/LecturerHome";

function LectureMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company/home">Lecturer Home</Link>
    </>
  );
  return (
    <div>
      <div>
        <MainHeader
          content={content}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
        <LecturerHome />
        <Footer />
      </div>
    </div>
  );
}

export default LectureMainHome;
