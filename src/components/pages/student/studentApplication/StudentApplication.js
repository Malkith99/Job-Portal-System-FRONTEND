import React from "react";
import Footer from "../../../footer/Footer";
import MainHeader from "../../../mainHeader/MainHeader";
import StudentApplication from "../../company/home/companyHome/VavancySection/VacancySection";

const VacancySection = ({ isLogedIn, onLogout }) => {
    const content = (
        <>
          
        </>
      );
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
      <div className='container'>
        <h1 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Job Application :</h1>
      </div>
      
      <StudentApplication disabled={true} data={null}/>  
      {/* meka danata link kre.oka apita wens krnn wenwa student kenk job ekakata apply kraddi fill krna fprm ekata */}
      <Footer />
    </div>
  );
};

export default VacancySection;
