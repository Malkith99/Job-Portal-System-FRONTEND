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


  export default function StudentSignIn({ isLogedIn, onLogout }) {
    const content = (
      <>
        <Link to="/student/home">Student Home</Link>
        <Link to="/student/profile/"> Profile</Link>
        
      </>
    
    );
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);


    const handleSubmit = (event) => {   // function that execute when pressing submit button"
      event.preventDefault();
  
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }
  
      // Add your registration logic here
  
        const newStudent={
            email,
            password,
        }
       axios.post("http://localhost:1234/student/login-student",newStudent ).then(res=>{
        //console.log(res.data.data);
        if(res.data.status==="ok"){
          //const token=res.data.token;
          const token=res.data.data;
          window.localStorage.setItem("token",token);
          //console.log(token);
      
          window.location.href = '/student-home';
         // console.log(token);
          /* setTimeout(() => {
            setShow(true);
            alert("Successfully Logged In");
          }, 1000); */
        }else{
          window.alert(res.data.error);
        }
        //console.log(res.data);
       // alert("Successfully Logged In");
       // setAlertMessage(res.data.message);
        //alert(res.data.message);
       }).catch(error=>console.error('Error: ',error));


       setEmail("");
       setPassword("");
    } 
/*     <Modal show={show} onHide={() => setShow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Login Successful</Modal.Title>
  </Modal.Header>
  <Modal.Footer>
    <Button variant="primary" onClick={() => setShow(false)}>
      OK
    </Button>
  </Modal.Footer>
</Modal> */

  
    return (
      <>
      <div>
        <MainHeader content={content}
          isLogedIn={isLogedIn}
          onLogout={onLogout}/>
      </div>
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
                    Log to your Account
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
                    <div>
                    <Button variant="contained" color="primary" type="submit"> Sign In</Button>
                      {/* {alertMessage && 
                                 <div className="alert">{alertMessage}</div>
                      } */}
                    </div>
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
                  Sign Up 
                </Button>
              </Link>
            </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
      <Footer/>
      </div>
      </>
    );
  }  
