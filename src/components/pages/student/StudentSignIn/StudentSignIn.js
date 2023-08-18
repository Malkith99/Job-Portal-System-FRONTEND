import React, { useState,useEffect } from "react";
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
import loginImage from "../../../../../src/images/im6.jpg";
import Box from "@mui/material/Box";
function StudentSignIn() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      alert("Please fill all fields");
      return;
    }
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
                window.location = "/grp13/adminHome";
            }else{
                        //check if user has carted
                const user = JSON.parse(localStorage.getItem('user'));
                console.log(user.firstName);
                console.log(data);
                console.log("User has been Log In");
                console.log(`User ${data._id} has been login`);
                window.location = "/grp13/student-home";
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
    <>
    <div className="page-container" >
      <MainHeader
        content={
          loggedIn ? (
            <>
              <Link to="/student-login">Student Login</Link>
              <Link to="/student-home">
                Welcome, {user.firstName} {user.lastName}!
              </Link>
            </>
          ) : (
            <Link to="/student-login">Student Login</Link>
          )
        }
      ></MainHeader>

      <div className="container"  style={{padding:"10px"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            marginTop: "-200px",
            marginBottom: "-250px",
            "@media screen and (max-width: 1865px)": {
              height: "95vh", // Adjust the responsive marginBottom value
            },
            "@media screen and (max-width: 1479px)": {
              height: "90vh", // Adjust the responsive marginBottom value
            },
            "@media screen and (max-width: 278px)": {
              height: "90vh", // Adjust the responsive marginBottom value
            },
            "@media screen and (max-width: 1400px)": {
              height: "86vh", // Adjust the responsive marginBottom value
            },
          }}
        >
          {/* <Card sx={{ maxWidth: 1000 ,height: "500px" , marginTop: "2px", marginBottom: "5px"}}> */}
          <CardContent>
            <Grid container spacing={2} direction="row" alignItems="center">
            {showImageSection && (
              <Grid item xs={5}>
                {/* <div
                  style={{ width: "100%", padding: "0px", margin: "0 auto" }}
                > */}
                  <img
                    src={loginImage}
                    alt="Login"
                    className="l-photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      marginTop:"100px"
                    }}
                  />
                {/* </div> */}
              </Grid>
            )}
              <Grid item xs={showImageSection ? 6:12}>
              <div className="log-in"
                    style={{ textAlign: "center"}}
                  >
                    Log In
                  </div>
                <div
                  className="card-body"
                 // style={{ marginTop: "10px", width: "70%", margin: "0 auto" }}
                >
                  <form className="loginbox-content" onSubmit={handleSubmit}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                      required
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
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
                    <div
                    className="mb-3 form-check"
                    style={{ marginLeft: "48px" ,textAlign:"left" }}
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

                    
                  </form>
                </div>
                <div style={{ paddingLeft:"48px",marginTop: "7px", textAlign: "center",alignItems:"center"}}>
                    <Link to="/student-signup">
                      Don't you have an account? click here to sign up.
                    </Link>
                  </div>
              </Grid>
            </Grid>
          </CardContent>
          {/* </Card> */}
        </Box>
      </div>
    </div>
    <div>
    <Footer />
    </div>
      </> 
  );
}

export default StudentSignIn;