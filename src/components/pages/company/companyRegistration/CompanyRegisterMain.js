import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import CompanyRegister from "./companyRegister/CompanyRegister";
import "./CompanyRegisterMain.css";

function CompanyRegisterMain({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company">Company Registration</Link>
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
