import React from "react";
import MainHeader from "../../../mainHeader/MainHeader";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Footer from "../../../footer/Footer";
//import Sidebar from "../../../sideBar/sideBar";
import Feeds from "./studentHome/Feeds";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
function StudentMainhome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/student/profile/"> Profile</Link>
      <Link to="/student/MyApplications">My Applications</Link>
    </>
  );


  return (
     <div>
     <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
       <div>
     <Feeds/>
    
      </div>
      <Footer />
    </div> 
  );
}

export default StudentMainhome;
