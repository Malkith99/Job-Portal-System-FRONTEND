import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";


function LecturerLogin({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/">Home</Link>
      <Link to="/lecturer-login">Company Login</Link>
    </>
    
  );

  const [formData, setFormData] = useState({ username: "", password: "" });

  const formHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          
              <div className="card-header text-center loginN">Login</div>
              <div className="card-body">
                <form className="loginbox-content">
                  <div className="form-group mb-3">
                    <label for="Username" className="form-label"><b style={{fontSize:"20px"}}>Username:</b></label>
                    <input
                      type="s-UserName"
                      className="form-control"
                      id="s-Username"
                      aria-describedby="UserNameHelp"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="form-group mb-3">
                  <label for="password" className="form-label" style={{fontSize:"20px"}}>
                    <b>Password:</b>
                  </label>
                    <input
                      type="s-password"
                      className="form-control"
                      id="s-password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={formHandler}
                    />
                  </div>
                  <div className="mb-3 form-check" style={{marginLeft:"22px"}}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Remember username
                  </label>
                </div>
                
                  <button
                    type="Log In"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                  <div style={{marginTop:"7px"}}>
                    <Link to="/lecturer">Don't you have an account? click here to sign up.</Link>
                  </div>
                </form>
              </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LecturerLogin;
