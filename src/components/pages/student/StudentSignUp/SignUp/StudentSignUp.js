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
import axios from "axios";


import loginImage from "../../../../../images/im2.jpg";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function StudentSignup() {
    const [data, setData] = useState({
        email: "",
        password: "",
        role: "student",
    });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     console.log("email", email);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     console.log("password", password);
//   };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    console.log("confirmPassword", confirmPassword);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
};
  const handleSubmit = (event) => {    // function that execute when pressing submit button"
    event.preventDefault();

    if (!data.email || !data.password || !confirmPassword) {
      alert("Please fill all fields");
      //toast.error("Please fill in all fields");
      return;
    }

    if (data.password !== confirmPassword) {
      alert("Passwords do not match");
      //toast.error("Passwords do not match");
      return;
    }

    // Add your registration logic here
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:4000/api/users";
            const response = await axios.post(url, data);
            setMsg(response.data.message);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };
 
//     const newStudent={
//       email,
//       password,
//   }
//  axios.post("http://localhost:1234/student/register",newStudent ).then(res=>{
//   if(res.data.error =="User Exists"){
//     alert("You have already Registered.Please Sign In");
//     window.location.href = '/student-signIn';
//   }else{
//     console.log(res.data);
    
//     const token=res.data.data;
//     window.localStorage.setItem("token",token);

//     window.location.href = '/student-home';
//     alert("Student Succefully Registered");
//   }
//  }).catch(error=>console.error('Error: ',error));

 

 //toast.success("Successfully registered!");

 setConfirmPassword("");      
  };

  return (
    <>

    <div className="container">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",marginTop:"-150px" , marginBottom: "-200px" }}>
        {/* <Card sx={{ maxWidth: 1000 ,height: "500px" , marginTop: "2px", marginBottom: "5px"}}> */}
              <CardContent>
            <Grid container spacing={2} direction="row" alignItems="center">
              <Grid item xs={6}>
                <img src={loginImage} alt="Login" className="l-photo"  style={{ width: "80%", height: "100%", objectFit: "cover" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" component="h2" style={{ fontWeight: "bold", textAlign: "center" }}>
                  Create your Account !
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  type="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  fullWidth
                  margin="normal"
                />
                                <TextField
                  label="Last Name"
                  variant="outlined"
                  type="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  fullWidth
                  margin="normal"
                />
                  <TextField
                  label="Role"
                  variant="outlined"
                  type="Student"
                  //onChange={handleChange}
                  value={data.role}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                  value={data.password}
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
                     {error && <div className="signup_error_msg">{error}</div>}
                             {msg && <div className="signup_success_msg">{msg}</div>}
                              <div className="mb-3 form-check" style={{ marginLeft: "22px" }}>
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                  <label className="form-check-label" htmlFor="exampleCheck1">
                                      Remember username
                                  </label>
                              </div>

                  <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                  <Button variant="contained" color="primary" type="submit">
                                      Sign Up
                                  </Button>
              
          </div>
                </form>
              <div style={{textAlign:"center",marginTop:"10px"}}>
                <Link to="/student-signIn" >Do you have an account? click here to sign in.</Link>
              </div>
          </Grid>
        </Grid>
          </CardContent>
        {/* </Card> */}
      </Box>
    </div>
    </>
  );
}