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
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }
  
    const newStudent = {
            email,
            password,
        };
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
    };
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                      margin="normal"
                    />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                      <Button variant="contained" color="primary" type="submit">
                        Sign In
                </Button>
                
            </div>
                  </form>
                <div style={{textAlign:"center",marginTop:"10px"}}>
                  <Link to="/student-signUp" >Don't you have an account? click here to sign up.</Link>
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
