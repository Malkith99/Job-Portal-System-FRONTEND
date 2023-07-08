import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../../footer/footer";
import MainHeader from "../../../../mainHeader/mainHeader";
// import CompanyHome from "./companyHome/CompanyHome";
import VacancySection from "./VavancySection/VacancySection";
import '../companyHome/CompanyHomePage.css'
function VacancyPage({ isLogedIn, onLogout }) {
  const content = (
    <>
      <Link to="/company-Homepage">Company Home</Link>
      <Link to="/company-profile">Profile</Link>
    </>
  );
  return (
    <div className="page-container">
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className="container mt-5">
        <div>
        <h2 style={{fontFamily:"gorgia" ,fontSmooth:"10",fontWeight:"10px",fontWeight:"10"}}> Vacancy Details :</h2>
      <VacancySection/>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default VacancyPage;