import * as React from "react";

import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import { Profile } from "./profile";
import Sidebar from "../../../sideBar/sideBar";
import { Link } from "react-router-dom";


export default function MyApplications({ isLogedIn, onLogout }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // };


  const content = (
    <>
      <Link to="/student/home">Student Home</Link>
      <Link to="/student/MyApplications"> My Applications</Link>
      
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
          <Profile disabled={true} data ={null}/>
          <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
        </div> <Footer />
    </>
  );
}
