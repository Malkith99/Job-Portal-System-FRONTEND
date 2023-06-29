import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import CompanyHome from "./companyHome/CompanyHome";
import CompanyHomePage from "./companyHome/CompanyHomePage";
function CompanyMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-home">Company Home</Link>
      <Link to="/company-profile">Profile</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div>
        <CompanyHome />
        <Link to="/company-HomePage">Home</Link>
      </div>
      <Footer />
    </div>
  );
}

export default CompanyMainHome;
