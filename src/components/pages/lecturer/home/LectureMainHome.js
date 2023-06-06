import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import LecturerHome from "./lecturerHome/LecturerHome";

function LectureMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Home</Link>
      <Link to="/lecturer">Profile</Link>
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
