import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import CompanyHome from "./companyHome/CompanyHome";

function CompanyMainHome({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company/home">Company Home</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div>
        <CompanyHome />
      </div>
      <Footer />
    </div>
  );
}

export default CompanyMainHome;
