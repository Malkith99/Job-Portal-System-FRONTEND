import React, { useState, useEffect } from "react";
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
import {URL} from "../../../../env";
import '../companyProfile/CompanyProfileMain.css'
function CompanySignIn() {
    const [loggedIn] = useState(!!localStorage.getItem("token"));
    const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));
    const [showImageSection, setShowImageSection] = useState(true); // Add this state variable

    // Use useEffect to handle window resize and update the state
    useEffect(() => {
      const handleResize = () => {
        setShowImageSection(window.innerWidth >= 850); // Show image section if window width is greater than or equal to 412px
      };
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
      handleResize(); // Call it initially to set the initial state
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    

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
                window.location = "/grp13/adminHome";
            }else{
              
            //check if user has carted
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user.firstName);
            console.log(data);
            console.log("User has been Log In");
            console.log(`User ${data._id} has been login`);
            window.location = "/grp13/company-HomePage";
            }

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
              {/* <Link to="/company-HomePage">Welcome {user.firstName} {user.lastName}!</Link> */}
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
            height: "88vh",
            marginTop: "-200px",
            marginBottom: "-250px",
            "@media screen and (max-width: 1865px)": {
              height: "90vh", // Adjust the responsive marginBottom value
            },
            "@media screen and (max-width: 1478px)": {
              height: "105vh", // Adjust the responsive marginBottom value
            },
            "@media screen and (max-width: 278px)": {
              height: "110vh", // Adjust the responsive marginBottom value
            },
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
                {showImageSection && (
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
                  )}
                <Grid item xs={showImageSection ? 6:12}>
                  <div className="log-in"
                    style={{ textAlign: "center"}}
                  >
                    Log In
                  </div>
                  <div className="card-body">
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
                        label="Password"
                        variant="outlined"
                         type="password"
                        fullWidth
                        margin="normal"
                       name="password"
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
                    style={{ marginLeft: "48px",textAlign:"left" }}
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

                  <div style={{ paddingLeft:"48px",marginTop: "7px", textAlign: "center",alignItems:"center" }}>
                    <Link to="/company-signup">
                      Don't you have an account? click here to signup.
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
export default CompanySignIn;