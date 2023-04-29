import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="loginbox">
      <div className="container">
        <div className="row">
          {/*column1*/}
          <div className="col">
            <p className="loginN">Log In :</p>
            <div className="inputbox">
              <form className="loginbox-content">
                <div className="mb-3">
                  <label for="Username" className="form-label">
                    <b>User Name</b>
                  </label>
                  <input
                    type="UserName"
                    className="form-control"
                    id="Username"
                    aria-describedby="UserNameHelp"
                    placeholder="Enter Username"
                  ></input>
                  <div id="UserNameHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter the Password"
                  ></input>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Remember username
                  </label>
                </div>
                <button type="Log In" className="btn btn-primary">
                  LOG IN
                </button>
              </form>
            </div>
          </div>

          {/*column2*/}
          <div className="col">
            <p className="loginN">Register :</p>
            <div className="inputbox">
              <div className="loginbox-content">
                <div className="mb-3">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/student-register"
                  >
                    <button type="Submit" className="form-control student-button text-white">
                      Register as a Student
                    </button>
                  </Link>
                  <div id="UserNameHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <Link style={{ textDecoration: "none" }} to="/lecturer">
                    <button type="Submit" className="form-control student-button text-white">
                      Register as a Lecturer
                    </button>
                  </Link>
                </div>
                <div className="mb-3">
                  <Link style={{ textDecoration: "none" }} to="/company">
                    <button
                      type="Submit"
                      className=" form-control student-button text-white"
                    >
                      Register as a Company
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
