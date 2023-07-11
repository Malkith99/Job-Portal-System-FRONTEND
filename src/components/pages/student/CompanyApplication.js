import React, { Component } from 'react'
import MainHeader from '../../mainHeader/mainHeader'
import Footer from '../../footer/footer'
import CompanyProfile from '../company/companyProfile/companyRegister/CompanyRegister'
import { Button } from 'react-bootstrap'
import { Label } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import DetailsCompany from './DetailsCompany'

export default function CompanyApplication({isLogedIn, onLogout}){
  const content = (
    <>
      <Link to="/student-home">Home</Link>
      <Link to="/student-profile">Profile</Link>
    </>
  );
    return (
      <div>
        <MainHeader content={content} isLogedIn={isLogedIn} onLogout={onLogout}/>
        <div className='container'>
            <p className='sign'>Company Details:</p>
            <div>
                <div>
                    <DetailsCompany/>
                </div>
                <div>
                    <Link to='/student-application-for-student'>
                        <Button className='btn btn-primary'>
                            See the Application
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }

