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


  
  export default function StudentSignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {   // function that execute when pressing submit button"
      event.preventDefault();
  
      if (!email || !password) {
       // toast.error("Please fill in all fields");
        alert("Please fill all fields");
        return;
      }
  
      // Add your registration logic here
  
        const newStudent={
            email,
            password,
        }
        console.log(newStudent);
       axios.post("http://localhost:1234/student/login-student",newStudent ).then(()=>{
        //alert("Student Log In")
       }).catch((err)=>{
        alert(err)
       });
  
       toast.success("Successfully Logged In");
       setEmail("");
       setPassword("");
    } ;
  
  
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} align="center">
            <Grid item xs={12}>
              <Card
                sx={{
                  maxWidth: "50%",
                  mt: 5,
                  alignContent: "center",
                  justifyItems: "flex-end",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: "bold" }}
                    color="Black"
                    gutterBottom
                  >
                    Step 1 : Registration
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={(e)=>{
                            setPassword(e.target.value);
                      }}
                      fullWidth
                      margin="normal"
                    />
                    
                    {/* <Link to="/registerStudentUser"> */}
                    { <Button variant="contained" color="primary" type="submit">
                                          Sign In
                                      </Button>}
                    {/* </Link> */}
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              align="right"
              mr={"25%"}
              sx={{ alignItems: "flex-end" }}
            >
            <div className="student">
              <Link to="/student-register">
                <Button variant="contained">
                  Sign Up {/*<ArrowForwardIosIcon />*/}
                </Button>
              </Link>
            </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }  
