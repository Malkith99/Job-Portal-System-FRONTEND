import * as React from "react";

import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import Datatable from "./DataTable";
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
          content={"My Applications"}
          isLogedIn={isLogedIn}
          onLogout={onLogout}
        />
      </strong>
      <div style={{ display: "flex", height: "500px" }}>
        <Sidebar isLogedIn={isLogedIn} onLogout={onLogout} />
          <div style={{ borderBottomWidth: 10 }} />
          <Datatable searchQuery={searchQuery} />
          <div style={{ borderLeftWidth: 10,borderTop:2000 }} />
        </div> <Footer />
   
    </>
  );
}
