import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { URL } from "../../../../../env";
import {toast} from "react-toastify";

styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

export default function StudentSignup() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "student",
    });

    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [emailError, setEmailError] = useState(""); // New state for email domain error

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validateEmailDomain = (email) => {
        const allowedDomains =
            ["ruh.ac.lk",
            "engug.ruh.ac.lk"];
        const domain = email.split("@")[1];
        return allowedDomains.includes(domain);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = validateEmailDomain(data.email);

        if (!isEmailValid) {
            setEmailError("Only University Email are allowed.");
        } else {
            setEmailError(""); // Clear the email error if it was previously shown
            try {
                const url = URL + "/api/users";
                const response = await axios.post(url, data);
                setMsg(response.data.message);
                window.location = "/grp13/student-home";
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message);
                }
            }
        }
    };

    const [isEmailValidated, setIsEmailValidated] = useState(false);

    const handleValidateEmail = () => {
        const isEmailValid = validateEmailDomain(data.email);
        setIsEmailValidated(isEmailValid);
        const message = isEmailValid ? "Email domain is valid!" : "Only University Email are allowed.";
        toast(message, { type: isEmailValid ? "success" : "error" });
    };

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} align="center">
                        <Grid item xs={12}>
                            <Card sx={{ maxWidth: "50%", mt: 5, alignContent: "center", justifyItems: "flex-end" }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="Black" gutterBottom>
                                        Create Your Account
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            type="text"
                                            label="First Name"
                                            name="firstName"
                                            onChange={handleChange}
                                            value={data.firstName}
                                            required
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            type="text"
                                            label="Last Name"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={data.lastName}
                                            required
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            type="text"
                                            label="Role"
                                            name="role"
                                            onChange={handleChange}
                                            value="Student"
                                            required
                                            fullWidth
                                            margin="normal"
                                            disabled
                                        />
                                        <Button variant="contained" color="primary" onClick={handleValidateEmail}>
                                            Validate Email
                                        </Button>
                                        {isEmailValidated ? (
                                            <CheckCircleOutlineIcon style={{ color: "green", marginLeft: "5px" }} />
                                        ) : (
                                            <CancelIcon style={{ color: "red", marginLeft: "5px" }} />
                                        )}
                                        <TextField
                                            type="email"
                                            label="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={data.email}
                                            required
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            type="password"
                                            label="Password"
                                            name="password"
                                            onChange={handleChange}
                                            value={data.password}
                                            required
                                            fullWidth
                                            margin="normal"
                                        />
                                        {emailError && <div className="signup_error_msg">{emailError}</div>}
                                        {error && <div className="signup_error_msg">{error}</div>}
                                        {msg && <div className="signup_success_msg">{msg}</div>}
                                        <Button variant="contained" color="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={2}>
                        <Grid item xs={12} align="right" mr={"25%"} sx={{ alignItems: "flex-end" }}>
                            <div className="student">
                                <div style={{ marginTop: "7px" }}>
                                    <Link to="/student-signIn">Do you have an account? Click here to sign in.</Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}
