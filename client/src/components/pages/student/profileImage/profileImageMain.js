import * as React from "react";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import  ProfileImage from "./profileImage";
import { Link } from "react-router-dom";


export default function StudentProfileImage({ isLogedIn, onLogout }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const content = (
    <>
      <Link to="/student-home">Student Home</Link>
      <Link to="/student-applications">My Applications</Link>
      
    </>

  );
  return (
    <>
     
        <MainHeader
          content={content}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
       
      <div style={{ display: "flex"}}>
        
          <div style={{ borderBottomWidth: 10 }} />
          <ProfileImage/>
          <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
        </div> 
        <Footer />
   
    </>
  );
}