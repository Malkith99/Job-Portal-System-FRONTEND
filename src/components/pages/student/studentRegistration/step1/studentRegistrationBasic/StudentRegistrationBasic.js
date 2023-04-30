import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function StudentRegistrationBasic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Add your registration logic here

    toast.success("Successfully registered!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

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
                    onChange={handleEmailChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
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
                  {/* <Link to="/registerStudentUser"> */}
                  {/* <Button variant="contained" color="primary" type="submit">
                                        Register
                                    </Button> */}
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
              <Link to="/student-register-final">
                <Button variant="contained">
                  Next <ArrowForwardIosIcon />
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default StudentRegistrationBasic;
