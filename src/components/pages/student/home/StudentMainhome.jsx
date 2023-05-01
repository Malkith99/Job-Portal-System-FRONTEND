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
{/*        
          <Grid Container>

 
 {/* <Feeds/>
</Grid>
<Grid item xs={6}>
  <Feeds/>
</Grid>
<Grid item xs={6}> 
<Grid item xs={6}> 
  <Feeds/>
</Grid>
<Grid item xs={6}> 
  <Feeds/>
</Grid>
<Grid item xs={6}> 
  <Feeds/>
</Grid>    </Grid>  */}
{/* <Box sx={{ width: '25%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><Feeds/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Feeds/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Feeds/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Feeds/></Item>
        </Grid>
      </Grid>
    </Box> */}



     <Feeds/>
    
      </div>
      <Footer />
    </div> 
  );
}

export default StudentMainhome;
