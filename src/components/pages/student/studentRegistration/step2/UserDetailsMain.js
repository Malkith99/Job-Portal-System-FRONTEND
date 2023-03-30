import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/Footer";
import MainHeader from "../../../../mainHeader/MainHeader";
import UserDetails from "./userDetails/UserDetails";
import "./UserDetailsMain.css";

function UserDetailsMain({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/student-register">Student Registration</Link>
      <Link to="/student-register">Step 1</Link>
      <Link to="/student-register-final">Step 2</Link>
    </>
  );
  return (
    <>
      <div>
        <MainHeader
          content={content}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
        <UserDetails />
        <Footer />
      </div>
    </>
  );
}

export default UserDetailsMain;
