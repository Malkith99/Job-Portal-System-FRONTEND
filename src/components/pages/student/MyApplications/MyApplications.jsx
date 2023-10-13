import * as React from "react";

import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import Datatable from "./DataTableMyApplication";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import StudentHeader from "../StudentHeader/Studentheader";



export default function ApplicationStatus({ isLogedIn, onLogout }) {
    const content = (
        <>
            <Link to="/student-home">Student Home</Link>
            <Link to="/student-profile"> Profile</Link>

        </>

    );

    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);


    }
    return (
        <>


            <MainHeader
                content={content}
                isLogedIn={isLogedIn}
                onLogout={onLogout}
            />

            <div style={{ display: "flex", height: "500px" }}>
                {/* <Sidebar isLogedIn={isLogedIn} onLogout={onLogout} /> */}
                <div style={{ borderBottomWidth: 10 }} />
                <Datatable searchQuery={searchQuery} />
                <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
            </div> <Footer />

        </>


    );
}
