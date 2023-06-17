import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import axios from "axios";

function CompanyLogin() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("User has been logged out");
    setLoggedIn(false);
    setUser(null);
    window.location = "/";
  };



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);


  const handleSubmit = (event) => {   // function that execute when pressing submit button"
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Add your registration logic here

    const newCompany={
      email,
      password,
    }
    axios.post("http://localhost:4000/company/login-company",newCompany ).then(res=>{
      //console.log(res.data.data);
      if(res.data.status==="ok"){
        const token=res.data.token;
        //const token=res.data.data;
        localStorage.setItem("token", res.data);
        localStorage.setItem('user', JSON.stringify(res.user));


        console.log(token);
        console.log("hali");
        window.location.href = '/company-home';
        // console.log(token);
        /* setTimeout(() => {
          setShow(true);
          alert("Successfully Logged In");
        }, 1000); */
      }else{
        window.alert(res.data.error);
      }
      //console.log(res.data);
      // alert("Successfully Logged In");
      // setAlertMessage(res.data.message);
      //alert(res.data.message);
    }).catch(error=>console.error('Error: ',error));


    setEmail("");
    setPassword("");
  }

  return (
      <div className="page-container">
        <MainHeader content=
                        {loggedIn ? (
                            <>
                              <Link to="/company-login">Company Login</Link>
                              <Link to="/company-home">Welcome, {user.firstName} {user.lastName}!</Link>
                            </>
                        ) : (
                            <Link to="/company-login">Company Login</Link>
                        )}>
        </MainHeader>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card-header text-center loginN">Login</div>
              <div className="card-body">
                <form className="loginbox-content" onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">
                      <b style={{ fontSize: "20px" }}>Email:</b>
                    </label>
                    <input
                        className="form-control"
                        id="username"
                        aria-describedby="UserNameHelp"
                        type="email"
                        value={email}
                        onChange={(e)=>{
                          setEmail(e.target.value);
                        }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label" style={{ fontSize: "20px" }}>
                      <b>Password:</b>
                    </label>
                    <input
                        className="form-control"
                        id="password"

                        type="password"
                        value={password}
                        onChange={(e)=>{
                          setPassword(e.target.value);
                        }}
                    />
                  </div>
                  <div className="mb-3 form-check" style={{ marginLeft: "22px" }}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember username
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <div style={{ marginTop: "7px" }}>
                    <Link to="/company-signup">Don't have an account? Click here to sign up.</Link>
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

export default CompanyLogin;
