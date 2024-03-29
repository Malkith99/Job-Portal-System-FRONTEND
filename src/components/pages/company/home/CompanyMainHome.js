import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import CompanyHomePage from "./companyHome/CompanyHomePage";

function CompanyMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-home">Company Home</Link>
      <Link to="/company-profile">Profile</Link>
      <Link to="/company-HomePage">new-Company-Home</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div>
        <CompanyHomePage />
        
      </div>
      <Footer />
    </div>
  );
}

export default CompanyMainHome;
