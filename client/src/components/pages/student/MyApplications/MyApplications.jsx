import * as React from "react";

import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import Datatable from "./DataTable";
// import Sidebar from "../../../sideBar/sideBar";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import StudentHeader from "../StudentHeader/Studentheader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyApplications({ isLogedIn, onLogout }) {
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

    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12}>
    //       <Item>
    //       <strong>
    //      <MainHeader
    //        content={"My Applications"}
    //        isLogedIn={isLogedIn}
    //        onLogout={onLogout}
    //    />
    //   </strong>
    //       </Item>
    //     </Grid>

    //     <Grid item xs={12}>
    //       <Item>
    //         <div style={{ borderBottomWidth: 10 }} />
    //         <Datatable searchQuery={searchQuery} />
    //         <div style={{ borderLeftWidth: 10, borderTop: 2000 }} />

    //         <Footer />
    //       </Item>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
