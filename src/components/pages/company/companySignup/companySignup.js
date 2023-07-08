import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MainHeader from "../../../mainHeader/mainHeader";
import Footer from "../../../footer/footer";
import axios from "axios";
import loginImage from "../../../../../src/images/im7.jpg";
import { red } from "@mui/material/colors";

styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CompanySignup() {

  const content = (
    <>
      <Link to="/">Home</Link>
      <Link to="/company-signup">Company Signup</Link>
      {/* <Link to="/company-signin">Sign In</Link> */}
    </>
    
  );
 // const [loggedIn] = useState(!!localStorage.getItem("token")); // The double exclamation marks are used to convert the value retrieved from localStorage into a boolean value.
  //const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));//JSON.parse is a function that converts a JSON-formatted string into a JavaScript object.
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "company",
});

const [error, setError] = useState("");
const [msg, setMsg] = useState("");

const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
};

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email", email);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("password", password);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    console.log("confirmPassword", confirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.email || !data.password || !confirmPassword) {
     // toast.error("Please fill in all fields");
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      //toast.error("Passwords do not match");
      return;
    }

    // Add your registration logic here

    try {
      const url = "http://localhost:4000/users";
      const res = await axios.post(url, data);
      if(res.data.message =="User with given email already exists!"){
        setMsg(res.data.message);
        alert("You have already Registered.Please Sign In");
        //window.location.href = '/company-signIn';
      }
  } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          setError(error.response.data.message);
      }
  }
//  axios.post("http://localhost:1234/company/register",data ).then(res=>{
//   if(res.data.error =="User Exists"){
//     alert("You have already Registered.Please Sign In");
//     window.location.href = '/company-signIn';
//   }else{
//     console.log(res.data);
    
//     const token=res.data.data;
//     window.localStorage.setItem("token",token);

//     window.location.href = '/company-HomePage';
//     alert("Company Succefully Registered");
//   }
//  }).catch(error=>console.error('Error: ',error));

    setConfirmPassword("");
    setData("");
  };

  return (
    <>
    <div>
    <MainHeader/>
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
                <Grid item xs={6}>
                  <img
                    src={loginImage}
                    alt="Login"
                    className="l-photo"
                    style={{
                      width: "95%",
                      height: "98%",
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
                  value={data.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  fullWidth
                  margin="normal"
                />
                <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: 16,
                        }}
                      >
                <Link to="/company-HomePage">
                   <Button variant="contained" color="primary" type="submit">
                                      Sign Up
                                  </Button>
                </Link>
                </div>
              </form>
              </div>
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
              </Grid>
              </Grid>
            </CardContent>
    </Box>
    </div>
    <Footer />
  
  </div>
  </>
  );
}


