import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import axios from "axios";

export default function CompanyLogin() {
  const [loggedIn] = useState(!!localStorage.getItem("token")); // The double exclamation marks are used to convert the value retrieved from localStorage into a boolean value.
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}")); //JSON.parse is a function that converts a JSON-formatted string into a JavaScript object.

  const content = (
    <>
      {/* <Link to="/">Home</Link> */}
      <Link to="/">Home</Link>
      <Link to="/company-login">Company Login</Link>
      {/* <Link to="/company-home">Company Home</Link> */}
    </>
    
  );

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/auth";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);

      localStorage.setItem("token", res.data);
      localStorage.setItem('user', JSON.stringify(res.user));
      //convert the res.user object into a JSON-formatted string.


      // Create admin token if the user is an admin
      if (res.user.email === "admin@gmail.com") {
        localStorage.setItem("adminToken", res.data);
        console.log("Admin has been Log In");
      }

      //check if user has carted
      // const user = JSON.parse(localStorage.getItem('user'));
      console.log(user.firstName);
      console.log(data);
      console.log("User has been Log In");
      console.log(`User ${data._id} has been login`);
      window.location = "/company-home";
      window.location.href = '/company-home';
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
                              <Link to="/company-login">Company Login</Link>
                              {/* <Link to="/company-home">Welcome {user.firstName} {user.lastName}!</Link> */}
                            </>
                        ) : (
                            <Link to="/company-login">Company Login</Link>
                        )}>
        </MainHeader>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
          
              <div className="card-header text-center sign">Login</div>
              <div className="card-body">
                <form className="loginbox-content" onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label for="Username" className="form-label"><b style={{fontSize:"20px"}}>Username:</b></label>
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
                  <label for="password" className="form-label" style={{fontSize:"20px"}}>
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
                
                  <div style={{alignItems:"center", justifyContent:"center",display:"flex"}}>
                  <button
                    type="Log In"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                  </div>
                  <div style={{marginTop:"7px",textAlign:"center"}}>
                    <Link to="/company-signup">Don't you have an account? click here to sign up.</Link>
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


