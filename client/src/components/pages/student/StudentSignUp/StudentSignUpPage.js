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

                      <>
                          <Link to="/student-signUp">Student Signup</Link>
                          <Link>Welcome !</Link>
                      </>

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
