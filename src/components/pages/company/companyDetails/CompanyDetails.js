import React from "react";
import MainHeader from "../../../mainHeader/MainHeader";
import { Link } from "react-router-dom";

function CompanyDetails({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-details">Profile Details</Link>
    </>
  );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <h1>CompanyDetails</h1>
    </div>
  );
}

export default CompanyDetails;
