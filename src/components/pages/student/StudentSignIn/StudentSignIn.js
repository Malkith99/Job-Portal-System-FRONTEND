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
import { Modal} from 'react-bootstrap';
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";

// Import your desired login image
import loginImage from "../../../../../src/images/im2.jpg";

  export default function StudentSignIn({ isLogedIn, onLogout }) {
    const content = (
      <>
        <Link to="/student/home">Student Home</Link>
        <Link to="/student/profile/"> Profile</Link>
        
      </>
    
    );
    const [loggedIn] = useState(!!localStorage.getItem("token"));
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));


    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

  const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!data.email || !data.password) {
        alert("Please fill all fields");
        return;
      }
      try {
        const url = "http://localhost:4000/api/auth";
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
  
    // const newStudent = {
    //         email,
    //         password,
    //     };
    //    axios.post("http://localhost:1234/student/login-student",newStudent ).then(res=>{
    //     //console.log(res.data.data);
    //     if(res.data.status==="ok"){
    //       //const token=res.data.token;
    //       const token=res.data.data;
    //       window.localStorage.setItem("token",token);
    //       //console.log(token);
      
    //       window.location.href = '/student-home';
    //      // console.log(token);
    //       /* setTimeout(() => {
    //         setShow(true);
    //         alert("Successfully Logged In");
    //       }, 1000); */
    //     }else{
    //       window.alert(res.data.error);
    //     }
    //     //console.log(res.data);
    //    // alert("Successfully Logged In");
    //    // setAlertMessage(res.data.message);
    //     //alert(res.data.message);
    //    }).catch(error=>console.error('Error: ',error));


    //    setEmail("");
    //    setPassword("");
    };

  
    return (
      <>
      <div>
      <MainHeader content=
                            {loggedIn ? (
                                <>
                                    <Link to="/student-login">Student Login</Link>
                                    <Link to="/student-home">Welcome, {user.firstName} {user.lastName}!</Link>
                                </>
                            ) : (
                                <Link to="/student-login">Student Login</Link>
                            )}>
            </MainHeader>
      </div>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",marginTop:"-80px" , marginBottom: "-120px" }}>
          <Card sx={{ maxWidth: 1000 ,height: "500px" , marginTop: "2px", marginBottom: "5px"}}>
                <CardContent>
              <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item xs={6}>
                  <img src={loginImage} alt="Login" className="l-photo"  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" component="h2" style={{ fontWeight: "bold", textAlign: "center" }}>
                    Log into your Account
                  </Typography>
                  <form onSubmit={handleSubmit}>
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
                      {error && <div className="login_error_msg">{error}</div>}
                                {msg && <div className="login_success_msg">{msg}</div>}
                                <div className="mb-3 form-check" style={{ marginLeft: "22px" }}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Remember username
                                    </label>
                                </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                      <Button variant="contained" color="primary" type="submit">
                        Sign In
                </Button>
                
            </div>
                  </form>
                <div style={{textAlign:"center",marginTop:"10px"}}>
                  <Link to="/student-register" >Don't you have an account? click here to sign up.</Link>
                </div>
            </Grid>
          </Grid>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div>
        <Footer />
      </div>
      </>
    );
  }