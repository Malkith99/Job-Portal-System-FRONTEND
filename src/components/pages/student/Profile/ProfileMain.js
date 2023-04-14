import * as React from "react";

import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import { Profile } from "./profile";
import Sidebar from "../../../sideBar/sideBar";



export default function MyApplications({ isLogedIn, onLogout }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <strong>
        <MainHeader
          content={"My Profile"}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
      </strong>
      <div style={{ display: "flex"}}>
        <Sidebar isLogedIn={isLogedIn} onLogout={onLogout} />
          <div style={{ borderBottomWidth: 10 }} />
          <Profile/>
          <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
        </div> <Footer />
   
    </>
  );
}
