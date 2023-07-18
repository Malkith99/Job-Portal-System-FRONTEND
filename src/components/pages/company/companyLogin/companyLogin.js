import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import loginImage from "../../../../images/im1.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
      localStorage.setItem("user", JSON.stringify(res.user));
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
      window.location.href = "/company-home";
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
    <div className="page-container" >
      <MainHeader
        content={
          loggedIn ? (
            <>
              <Link to="/company-login">Company Login</Link>
              {/* <Link to="/company-home">Welcome {user.firstName} {user.lastName}!</Link> */}
            </>
          ) : (
            <Link to="/company-login">Company Login</Link>
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
          {/* <Card
            sx={{
              maxWidth: 1000,
              height: "500px",
              marginTop: "2px",
              marginBottom: "5px",
            }}
          > */}
            <CardContent>
              <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item xs={6}>
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
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    Log into your Account
                  </Typography>
                  <div className="card-body">
                    <form className="loginbox-content" onSubmit={handleSubmit}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        value={data.email}
                        required
                      />
                      <TextField
                        label="Password"
                        variant="outlined"
                         type="password"
                         name="password"
                        fullWidth
                        margin="normal"
                       
                        onChange={handleChange}
                        value={data.password}
                        required
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: 16,
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          LOGIn
                        </Button>
                      </div>
                    </form>
                  </div>
                  {error && <div className="login_error_msg">{error}</div>}
                  {msg && <div className="login_success_msg">{msg}</div>}
                  <div
                    className="mb-3 form-check"
                    style={{ marginLeft: "22px" }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    ></input>
                    <label className="form-check-label" for="exampleCheck1">
                      Remember username
                    </label>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <Link to="/company-signup">
                      Don't you have an account? click here to sign up.
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          {/* </Card> */}
        </Box>
      </div>
      <Footer />
    </div>
  );
}
