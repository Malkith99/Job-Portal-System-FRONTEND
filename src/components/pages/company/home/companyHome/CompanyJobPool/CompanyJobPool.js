import React from 'react'
import MainHeader from '../../../../../mainHeader/MainHeader'
import Footer from '../../../../../footer/Footer'
import VacancySection from '../VavancySection/VacancySection'

export const CompanyJobPool = ({ isLogedIn, onLogout }) => {
    const content = (
        <>
          
        </>
      );
  return (
    <div>
        <MainHeader/>
        <div className='container'>
            <h1 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Company Job Vacancy :</h1>
        </div>
        <VacancySection disabled={true} data={null}/>
        <Footer/>
    </div>
  )
}
