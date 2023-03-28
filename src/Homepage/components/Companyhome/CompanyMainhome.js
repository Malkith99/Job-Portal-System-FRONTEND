import React from 'react'
import Footer from '../../../components/footer'
import Companytop from '../../../companyregistration/CompanyTop'
import Title from '../../../components/title'
import MainHeader from '../../../components/MainHeader/MainHeader'
import {Link} from 'react-router-dom'
import Companyhome from '../Companyhome/Companyhome'
import CompanyHomeNav from './CompanyHomeNav'

function CompanyMainhome({isLogedIn, onLogout}) {
  const content = <><Link to="/company/home">Company Home</Link></>;
  return (
    <div>
      <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
      <Companyhome/>
      <Footer/>
      </div>
  )
}

export default CompanyMainhome