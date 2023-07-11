import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import axios from "axios";
import {URL} from "../../../../env";

function CompanyLogin() {
  const [loggedIn] = useState(!!localStorage.getItem("token"));
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));


  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = URL +"/api/auth";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);

      localStorage.setItem("token", res.data);
      localStorage.setItem('user', JSON.stringify(res.user));

      // Create admin token if the user is an admin
      if (res.user.email === "admin@gmail.com") {
        localStorage.setItem("adminToken", res.data);
        console.log("Admin has been Log In");
      }

      //check if user has carted
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user.firstName);
      console.log(data);
      console.log("User has been Log In");
      console.log(`User ${data._id} has been login`);
      window.location = "/";
    } catch (error) {
      if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
  );




  return (
      <div className="page-container">
        <MainHeader content=
                        {loggedIn ? (
                            <>

                              <Link to="/lecture-home">Welcome, {user.firstName} {user.lastName}!</Link>
                            </>
                        ) : (
                            <Link to="/lecture-login">Lecture Login</Link>
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
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label" style={{ fontSize: "20px" }}>
                      <b>Password:</b>
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                    />
                  </div>
                  {error && <div className="login_error_msg">{error}</div>}
                  {msg && <div className="login_success_msg">{msg}</div>}

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
                    <Link to="/lecturer-signup">Don't have an account? Click here to sign up.</Link>
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
