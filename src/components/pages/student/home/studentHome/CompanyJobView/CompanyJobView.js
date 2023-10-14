import React from 'react'
import MainHeader from '../../../../../mainHeader/mainHeader'
import Footer from '../../../../../footer/footer'
import VacancySection from '../VavancySection/VacancySection'
import { Link } from "react-router-dom";

export default function CompanyJobPool  ({ isLogedIn, onLogout }){
  
    const content = (
        <>
          <Link to="/student-home">Student Home</Link>
        </>
      );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div className='container'>
            <h1 className="cmp-headings loginN" style={{}}>Company Job Vacancy :</h1>
        </div>
        <VacancySection disabled={true} data={null}/>
        <Footer/>
    </div>
  )
}
