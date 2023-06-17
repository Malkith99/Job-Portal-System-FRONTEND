import React from "react";
import MainHeader from "../../../mainHeader/MainHeader";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import { CompanyProfile } from "./CompanyProfile";

function CompanyDetails({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-details">Profile Details</Link>
    </>
  );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />

      <CompanyProfile/>

      <Footer/>
    </div>
  );
}

export default CompanyDetails;
