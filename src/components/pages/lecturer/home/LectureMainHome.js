import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import LecturerHome from "./lecturerHome/LecturerHome";

function LectureMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/lecturer-home">Home</Link>
      <Link to="/lecture-profile">Profile</Link>
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
