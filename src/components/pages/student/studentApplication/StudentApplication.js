import React from "react";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import VacancySection from "../../company/home/companyHome/VacancySection";

const StudentApplication = ({ isLogedIn, onLogout }) => {
    const content = (
        <>
          
        </>
      );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <VacancySection disabled={true} data={null}/>
      <Footer />
    </div>
  );
};

export default StudentApplication;
