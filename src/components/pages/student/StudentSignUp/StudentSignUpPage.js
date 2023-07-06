import React ,{useState}from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import StudentSignUp from "./SignUp/StudentSignUp";


export default function StudentSignUpPage({ isLogedIn, onLogout }) {

    const [loggedIn] = useState(!!localStorage.getItem("token"));
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));


  return (
    <div>
      <div className="page-container">
          <MainHeader
              content={
                  loggedIn ? (
                      <>
                          <Link to="/company-signup">Company Signup</Link>
                          <Link to="/company-home">Welcome, {user.firstName} {user.lastName}!</Link>
                      </>
                  ) : (
                      <Link to="/company-login">Student Signup</Link>
                  )
              }
          />
        <div className="content-wrap"></div>
        <div>
          <StudentSignUp/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
