import React from 'react'
import MainHeader from '../../../../../mainHeader/mainHeader'
import Footer from '../../../../../footer/footer'
import VacancySection from '../VavancySection/VacancySection'
import { Link } from "react-router-dom";

export const UpdateJob = ({ isLogedIn, onLogout }) => {
    const content = (
        <>
          <Link to="/company/home">Company Home</Link>
        </>
      );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
        <div className='container'>
            <h1 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Company Job Vacancy :</h1>
        </div>
        <VacancySection disabled={false} data={null}/>
        <Footer/>
    </div>
  )
}