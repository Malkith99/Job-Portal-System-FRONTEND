import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import MainHeader from "../mainHeader/mainHeader";
import "./SignInSignUp.css";

function SignInSignUp({ isLogedIn, onLogout }) {
  const [showLecturerPassword, setShowLecturerPassword] = useState(false);
  const [showCompanyPassword, setShowCompanyPassword] = useState(false);
  const [lecturerPassword, setLecturerPassword] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message
  const [msg, setMsg] = useState(""); // State to store success message
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const content = (
      <>
        <Link to="/">Home</Link>
      </>
  );

  const handleCompanyLinkClick = () => {
    setShowCompanyPassword(true);
    setShowLecturerPassword(false);

    if (companyPassword === "1234") {
      setMsg("Company password is correct!\nYou can setup or access your account now"); // Set success message
      setError(""); // Clear the error message
      setShowPopup(true); // Show the popup
      window.location.href = "/company-signup";
    } else {
      setError("Company password is incorrect!"); // Set error message
      setMsg(""); // Clear the success message
      setShowPopup(true); // Show the popup
      console.log("Incorrect password for company");
    }
  };

  const handleLecturerLinkClick = () => {
    setShowLecturerPassword(true);
    setShowCompanyPassword(false);

    if (lecturerPassword === "1234") {
      setMsg("Lecturer password is correct!\nYou can setup or access your account now");
      // Set success message
      setError(""); // Clear the error message
      setShowPopup(true); // Show the popup
      window.location.href = "/lecturer-signUp";
    } else {
      setError("Lecturer password is incorrect!"); // Set error message
      setMsg(""); // Clear the success message
      setShowPopup(true); // Show the popup
      console.log("Incorrect password for lecturer");
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
    setError(""); // Clear the error message
    setMsg(""); // Clear the success message
  };

  return (
      <div className="s-page-container">
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div className="s-container">
          <div className="d-flex flex-lg-row flex-column">
            <div className="home-left-div p-4 w-100">
              <h1 className="main-head">About</h1>
              <p className="text-left">
                The University of Ruhuna Faculty of Engineering Job Bank is a website that connects students,
                alumni,
                and faculty with job opportunities in the engineering field. The website provides a searchable database of jobs,
                the ability to create a profile and upload a resume, the ability to receive job alerts,
                and the ability to network with other engineers.
                The University of Ruhuna Faculty of Engineering Job Bank is a valuable resource for anyone looking for a job in engineering.
              </p>
            </div>
            <div className="home-right-div p-4 w-100 d-flex flex-column">
              <h1 className="main-head">Are you?</h1>

              <Link
                  to="/student-signUp"
                  type="button"
                  className="form-control text-white student-button btn btn-primary m-2 mb-4"
              >
                A Student
              </Link>
//pw=1234
              <button
                  type="button"
                  className="form-control text-white student-button btn btn-primary m-2 mb-4"
                  onClick={handleLecturerLinkClick}
              >
                A Lecturer
              </button>
              {showLecturerPassword && (
                  <>
                    <input
                        type="password"
                        placeholder="Enter lecturer password"
                        value={lecturerPassword}
                        onChange={(e) => setLecturerPassword(e.target.value)}
                        className="form-control m-2"
                    />
                  </>
              )}

              <button
                  type="button"
                  className="form-control text-white student-button btn btn-primary m-2"
                  onClick={handleCompanyLinkClick}
              >
                A Company
              </button>
              {showCompanyPassword && (
                  <>
                    <input
                        type="password"
                        placeholder="Enter company password"
                        value={companyPassword}
                        onChange={(e) => setCompanyPassword(e.target.value)}
                        className="form-control m-2"
                    />
                  </>
              )}
            </div>
          </div>
        </div>
        {showPopup && (
            <div className="popup">
              <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
                {error && <div className="login_error_msg">{error}</div>}
                {msg && <div className="login_success_msg">{msg}</div>}
              </div>
            </div>
        )}
        <Footer />
      </div>
  );
}

export default SignInSignUp;
