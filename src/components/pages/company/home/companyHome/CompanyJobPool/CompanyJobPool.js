import React from 'react'
import MainHeader from '../../../../../mainHeader/mainHeader'
import Footer from '../../../../../footer/footer'
import VacancySection from '../VavancySection/VacancySection'
import { Link } from "react-router-dom";

export default function CompanyJobPool  ({ isLogedIn, onLogout }){
  
    const content = (
        <>
          <Link to="/company-home">Company Home</Link>
        </>
      );
  return (
    <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout} />
        <div className='container'>
            <h2 className="cmp-headings loginN" style={{marginBottom:'2rem'}}>Post a Job now</h2>
        </div>
        <VacancySection disabled={true} data={null}/>
        <Footer/>
    </div>
  )
}
