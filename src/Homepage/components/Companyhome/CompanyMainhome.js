import React from 'react'
import Footer from '../../../components/footer'
import Companytop from '../../../companyregistration/CompanyTop'
import Title from '../../../components/title'

import Companyhome from '../Companyhome/Companyhome'
import CompanyHomeNav from './CompanyHomeNav'

function CompanyMainhome() {
  return (
    <div>
      <Companytop/>
      <Title/>
      <CompanyHomeNav/>
      <Companyhome/>
      <Footer/>
      </div>
  )
}

export default CompanyMainhome