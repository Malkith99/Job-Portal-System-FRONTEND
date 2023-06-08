import React from 'react'
import MainHeader from '../../../../../MainHeader/MainHeader'
import Footer from '../../../../../footer/Footer'
import VacancySection from '../VavancySection/VacancySection'
import { Link } from "react-router-dom";

export const CompanyJobPool = ({ isLogedIn, onLogout }) => {
  
    const content = (
        <>
          <Link to="/company/home">Company Home</Link>
        </>
      );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div className='container'>
            <h1 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Company Job Vacancy :</h1>
        </div>
        <VacancySection disabled={true} data={null}/>
        <Footer/>
    </div>
  )
}
