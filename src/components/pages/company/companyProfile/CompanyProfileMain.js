import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/footer";
import MainHeader from "../../../mainHeader/mainHeader";
import CompanyRegister from "./companyProfile/CompanyProfile";
import "./CompanyProfileMain.css";

function CompanyRegisterMain({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-home">Company Home</Link>
     {/*  <Link to="/company">Profile</Link> */}
    </>
  );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <CompanyRegister />
      <Footer />
    </div>
  );
}
export default CompanyRegisterMain;
