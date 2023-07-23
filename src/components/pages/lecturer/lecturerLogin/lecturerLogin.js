import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import axios from "axios";
import { URL } from "../../../../env";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import loginImage from "../../../../../src/images/lecturer_login.png";
import Box from "@mui/material/Box";
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
      const url = URL + "/api/auth";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);

      localStorage.setItem("token", res.data);
      localStorage.setItem("user", JSON.stringify(res.user));

      // Create admin token if the user is an admin
      if (res.user.email === "admin@gmail.com") {
        localStorage.setItem("adminToken", res.data);
        console.log("Admin has been Log In");
      }

      //check if user has carted
      const user = JSON.parse(localStorage.getItem("user"));
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
      <MainHeader
        content={
          loggedIn ? (
            <>
              <Link to="/lecture-home">
                Welcome, {user.firstName} {user.lastName}!
              </Link>
            </>
          ) : (
            <Link to="/lecture-login">Lecture Login</Link>
          )
        }
      ></MainHeader>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            marginTop: "-200px",
            marginBottom: "-250px",
          }}
        >
          <CardContent>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={5}>
              <img
                  src={loginImage}
                  alt="Login"
                  className="l-photo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />   
                 </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    //  marginLeft: "10px",
                  }}
                >
                  Log into your Account
                </Typography>
                <div
                  className="card-body"
                  // style={{ marginTop: "10px", width: "70%", margin: "0 auto" }}
                >
        
              <form className="loginbox-content" onSubmit={handleSubmit}>
              <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    margin="normal"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                
                <TextField
                    htmlFor="password"
                   
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                    fullWidth
                      margin="normal"
                    required
                  />
               
                {error && <div className="login_error_msg">{error}</div>}
                {msg && <div className="login_success_msg">{msg}</div>}
                <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 16,
                        // marginBottom:20,
                      }}
                      >
                      <Button variant="contained" color="primary" type="submit">
                      LOGIN
                    </Button>
                       </div>

                <div className="mb-3 form-check" style={{ marginLeft: "22px" }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>

                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember username
                  </label>
                </div>
                </form>
                </div>
                <div style={{ marginTop: "7px", textAlign: "center" }}>
                  <Link to="/lecturer-signup">
                    Don't have an account? Click here to sign up.
                  </Link>
                </div>
                </Grid>
                </Grid>
                </CardContent>
                </Box>
            </div>
          <div>
      <Footer />
    </div>
    </div>
  );
}

export default CompanyLogin;
