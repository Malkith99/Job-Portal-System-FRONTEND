import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import MainHeader from "../mainHeader/mainHeader";
import "./home.css";
import Carousel from "../carousel/carousel";
import AvailableCompanies from "../availableCompanies/availableCompanies";

function Home({ isLogedIn, onLogout }) {
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
    const [loggedIn] = useState(!!localStorage.getItem("token"));

    const content = (
        <>
            {loggedIn ? (
                user.role === "company" ? (
                    <div>
                        <Link to="/company-profile">Profile</Link>
                        <Link to="/company-HomePage">Company Home</Link>
                    </div>
                ) : user.role === "student" ? (
                    <div>
                        <Link to="/student-profile">Profile</Link>
                        <Link to="/student-home">Student Home</Link>
                    </div>
                ) : user.role === "lecturer" ? (
                    <div>
                        <Link to="/lecturer-profile">User Profile</Link>
                        <Link to="/lecturer-home">Lecturer Home</Link>
                    </div>
                ) : user.role === "admin" ? (
                    <div>
                        <Link to="/adminHome">Admin Home</Link>
                    </div>
                ) : null
            ) : (
                <div className="Main-page-moving-letters">
                    WELCOME TO UOR JOB PORTAL SYSTEM
                </div>
            )}
        </>
    );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />

      <div className="container">
        <h2
          style={{
            fontWeight: 700,
            color: "navy",
          }}
          className="text-center"
        >
          University of Ruhuna - Matara
        </h2>
        <Carousel />


      </div>

        <div className="container-middle">
            <h1>Welcome! to University of Ruhuna JOB Bank</h1>
            <p>Find your dream job today!</p>
            {loggedIn ? (
                <p>Hi {user.firstName} {user.lastName}</p>
            ) : (

      <div className="container mt-2">
        <div className="d-flex flex-lg-row flex-column">
          <div className="home-left-div p-4 w-100 ">
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

              to="/student-signIn"

              type="button"
              className="form-control text-white student-button btn btn-primary m-2 mb-4"
            >
              A Student
            </Link>
            <Link
              to="lecturer-login"
              type="button"
              className="form-control text-white student-button btn btn-primary m-2 mb-4"
            >
              A Lecturer / Refree
            </Link>
            <Link
              to="company-login"
              type="button"
              className="form-control text-white student-button btn btn-primary m-2 mb-4"
            >
              A Company
            </Link>

          </div>
        </div>
      </div>
        )}
    </div>
        {/*
        <div className="container-middle">
        <h1>Welcome! to University of Ruhuna JOB Bank</h1>
        <p>Find your dream job today!</p>
        {loggedIn ? (
            <p>Hi {user.firstName} {user.lastName}</p>
        ) : (
            <button className="jobsearchbutton">
                <Link to="/all-sign-in">Search Jobs</Link>
            </button>
        )}

        </div>
*/}
      <div className="container">
          <AvailableCompanies/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
